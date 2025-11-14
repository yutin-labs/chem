import { useState, useEffect } from 'react';
import type { QuestionAnswer } from '../question/questions-data';
import rules, { PREDICTION_IDS } from './rules-data';
import RuleCalculator from './rule';

interface SyndromePredictionProps {
  answers: QuestionAnswer;
}

const predictions = {
  [PREDICTION_IDS.IRRITANTGAS]: {
    en: 'Irritant Gas Syndrome',
    zh: '刺激性氣體症候群',
  },
  [PREDICTION_IDS.SOLVENT]: {
    en: 'Solvents, Anesthetics, or Sedatives Syndrome',
    zh: '溶劑、麻醉劑或鎮靜劑症候群',
  },
  [PREDICTION_IDS.PESTICIDE]: {
    en: 'Pesticide Syndrome / Cholinergic / Nerve Agent Toxidrome',
    zh: '農藥症候群',
  },
  [PREDICTION_IDS.KNOCKDOWN]: {
    en: 'Knockdown Syndrome',
    zh: '擊倒症候群',
  },
  [PREDICTION_IDS.OPIOID]: {
    en: 'Opioid Syndrome',
    zh: '類鴉片症候群',
  },
  [PREDICTION_IDS.ANTICHOLINERGIC]: {
    en: 'Anticholinergic Syndrome',
    zh: '抗膽鹼症候群',
  },
  [PREDICTION_IDS.CONVULSANT]: {
    en: 'Convulsant Syndrome',
    zh: '抽搐症候群',
  },
};

const rulesSet = new Set<RuleCalculator>();
rules.forEach((rule) => {
  rulesSet.add(new RuleCalculator(rule));
});

function getPrediction(answers: QuestionAnswer) {
  let clKnockdown = 0.1;
  let clsectorxKnockdown = 0;
  let mutiplierKnockdown = 0;
  let averageKnockdown = 0;
  let countKnockdown = 0;

  let clPesticide = 0.1;
  let clsectorxPesticide = 0;
  let mutiplierPesticide = 0;
  let averagePesticide = 0;
  let countPesticide = 0;

  let clSolvent = 0.1;
  let clsectorxSolvent = 0;
  let mutiplierSolvent = 0;
  let averageSolvent = 0;
  let countSolvent = 0;

  let clIrritantgas = 0.1;
  let clsectorxIrritantgas = 0;
  let mutiplierIrritantgas = 0;
  let averageIrritantgas = 0;
  let countIrritantgas = 0;

  let clOpioid = 0.1;
  let clsectorxOpioid = 0;
  let mutiplierOpioid = 0;
  let averageOpioid = 0;
  let countOpioid = 0;

  let clAnticholinergic = 0.1;
  let clsectorxAnticholinergic = 0;
  let mutiplierAnticholinergic = 0;
  let averageAnticholinergic = 0;
  let countAnticholinergic = 0;

  let clConvulsant = 0.1;
  let clsectorxConvulsant = 0;
  let mutiplierConvulsant = 0;
  let averageConvulsant = 0;
  let countConvulsant = 0;

  let multiplierAllsectorX = 0;

  const matchedSet = new Set<RuleCalculator>();

  rulesSet.forEach((rule) => {
    if (rule.test(answers) === true) {
      for (const matchedRule of matchedSet) {
        if (matchedRule.contains(rule.answers)) return;
        if (rule.contains(matchedRule.answers)) {
          matchedSet.delete(matchedRule);
        }
      }
      matchedSet.add(rule);
    }
  });

  matchedSet.forEach((rule) => {
    if (rule.knockdown > 0) {
      clKnockdown += (rule.knockdown / 10) * rule.multiplier;
      clsectorxKnockdown += (rule.knockdown / 10) * rule.multiplierSectorX;
      mutiplierKnockdown += rule.multiplier;
      averageKnockdown += rule.knockdown;
      countKnockdown += 1;
    }
    if (rule.pesticide > 0) {
      clPesticide += (rule.pesticide / 10) * rule.multiplier;
      clsectorxPesticide += (rule.pesticide / 10) * rule.multiplierSectorX;
      mutiplierPesticide += rule.multiplier;
      averagePesticide += rule.pesticide;
      countPesticide += 1;
    }
    if (rule.solvent > 0) {
      clSolvent += (rule.solvent / 10) * rule.multiplier;
      clsectorxSolvent += (rule.solvent / 10) * rule.multiplierSectorX;
      mutiplierSolvent += rule.multiplier;
      averageSolvent += rule.solvent;
      countSolvent += 1;
    }
    if (rule.irritantgas > 0) {
      clIrritantgas += (rule.irritantgas / 10) * rule.multiplier;
      clsectorxIrritantgas += (rule.irritantgas / 10) * rule.multiplierSectorX;
      mutiplierIrritantgas += rule.multiplier;
      averageIrritantgas += rule.irritantgas;
      countIrritantgas += 1;
    }
    if (rule.opioid > 0) {
      clOpioid += (rule.opioid / 10) * rule.multiplier;
      clsectorxOpioid += (rule.opioid / 10) * rule.multiplierSectorX;
      mutiplierOpioid += rule.multiplier;
      averageOpioid += rule.opioid;
      countOpioid += 1;
    }
    if (rule.anticholinergic > 0) {
      clAnticholinergic += (rule.anticholinergic / 10) * rule.multiplier;
      clsectorxAnticholinergic +=
        (rule.anticholinergic / 10) * rule.multiplierSectorX;
      mutiplierAnticholinergic += rule.multiplier;
      averageAnticholinergic += rule.anticholinergic;
      countAnticholinergic += 1;
    }
    if (rule.convulsant > 0) {
      clConvulsant += (rule.convulsant / 10) * rule.multiplier;
      clsectorxConvulsant += (rule.convulsant / 10) * rule.multiplierSectorX;
      mutiplierConvulsant += rule.multiplier;
      averageConvulsant += rule.convulsant;
      countConvulsant += 1;
    }
    multiplierAllsectorX += rule.multiplierSectorX;
  });

  const results = {
    [PREDICTION_IDS.KNOCKDOWN]:
      (clKnockdown / mutiplierKnockdown +
        clsectorxKnockdown / multiplierAllsectorX) /
        2 || 0,
    [PREDICTION_IDS.PESTICIDE]:
      (clPesticide / mutiplierPesticide +
        clsectorxPesticide / multiplierAllsectorX) /
        2 || 0,
    [PREDICTION_IDS.SOLVENT]:
      (clSolvent / mutiplierSolvent + clsectorxSolvent / multiplierAllsectorX) /
        2 || 0,
    [PREDICTION_IDS.IRRITANTGAS]:
      (clIrritantgas / mutiplierIrritantgas +
        clsectorxIrritantgas / multiplierAllsectorX) /
        2 || 0,
    [PREDICTION_IDS.OPIOID]:
      (clOpioid / mutiplierOpioid + clsectorxOpioid / multiplierAllsectorX) /
        2 || 0,
    [PREDICTION_IDS.ANTICHOLINERGIC]:
      (clAnticholinergic / mutiplierAnticholinergic +
        clsectorxAnticholinergic / multiplierAllsectorX) /
        2 || 0,
    [PREDICTION_IDS.CONVULSANT]:
      (clConvulsant / mutiplierConvulsant +
        clsectorxConvulsant / multiplierAllsectorX) /
        2 || 0,
  };

  return Object.entries(predictions)
    .map(([key, text]) => {
      const percentage = results?.[key as keyof typeof predictions] ?? 0;
      return { key, text, percentage };
    })
    .sort((a, b) => b.percentage - a.percentage);
}

export default function Prediction({ answers }: SyndromePredictionProps) {
  const results = getPrediction(answers);

  return (
    <div className="rounded-xl border border-gray-300 bg-gray-700 p-5">
      <div>
        <h2 className="m-0 mb-5 border-b border-gray-300 pb-2.5 text-xl font-bold text-white-900">
          Syndrome Prediction
        </h2>
      </div>
      <div className="mb-5 flex flex-col gap-3">
        {results.map(({ key, text, percentage }) => {
          const isProbable = percentage >= 5;
          const isUncertain = percentage < 5;

          return (
            <div key={key} className="flex flex-col gap-1">
              <div className="cursor-pointer text-sm text-purple-300 hover:text-purple-500 flex items-end gap-2">
                <div>↓</div>
                <div>
                  <div className="text-lg leading-4">{text.zh}</div>
                  <div>{`(${text.en})`}</div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="relative h-3 overflow-hidden rounded border border-gray-300 bg-gray-600">
                  {isUncertain && (
                    <div
                      className="h-full bg-gray-300 transition-all duration-300 ease-in-out"
                      style={{ width: `${percentage * 10}%` }}
                    ></div>
                  )}
                  {isProbable && (
                    <div
                      className="h-full bg-blue-300 transition-all duration-300 ease-in-out"
                      style={{ width: `${percentage * 10}%` }}
                    ></div>
                  )}
                </div>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>0</span>
                  <span>{percentage.toFixed(1)}</span>
                  <span>10</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-5 rounded-md bg-gray-600 p-3">
        <div className="flex items-center gap-2">
          <span className="h-5 w-[30px] rounded border border-gray-300 bg-gray-300"></span>
          <span>Uncertain</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-5 w-[30px] rounded border border-gray-300 bg-blue-300"></span>
          <span>Probable</span>
        </div>
      </div>
    </div>
  );
}
