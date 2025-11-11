import { useState, useEffect } from 'react';
import type { QuestionAnswer } from '../question/questions-data';
import rules, { PREDICTION_IDS } from './rules-data';

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

const formalRules = [...rules].sort(
  (a, b) => b.answers.length - a.answers.length
);

export default function Prediction({ answers }: SyndromePredictionProps) {
  const prediction = formalRules.find((rule) => {
    return rule.answers.every((condition) => {
      const userAnswer = answers[condition.question];
      return userAnswer !== null && condition.answer === userAnswer;
    });
  });

  const reports = Object.entries(predictions)
    .map(([key, text]) => {
      const id = key as PREDICTION_IDS;
      const percentage = prediction?.[id] ?? 0;
      return { id, text, percentage };
    })
    .sort((a, b) => b.percentage - a.percentage);

  return (
    <div className="rounded-xl border border-gray-300 bg-gray-700 p-5">
      <div>
        <h2 className="m-0 mb-5 border-b border-gray-300 pb-2.5 text-xl font-bold text-white-900">
          Syndrome Prediction
        </h2>
      </div>
      <div className="mb-5 flex flex-col gap-3">
        {reports.map(({ id, text, percentage }) => {
          if (id === PREDICTION_IDS.OTHERS) return null;

          const isProbable = percentage >= 50;
          const isUncertain = percentage < 50;

          return (
            <div key={id} className="flex flex-col gap-1">
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
                      style={{ width: `${percentage}%` }}
                    ></div>
                  )}
                  {isProbable && (
                    <div
                      className="h-full bg-blue-300 transition-all duration-300 ease-in-out"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  )}
                </div>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>0</span>
                  <span>{(percentage / 10).toFixed(1)}</span>
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
