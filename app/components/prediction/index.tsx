import { useState, useEffect } from 'react';
import type { QuestionAnswer } from '../question/questions-data';
import rules, { PREDICTION_IDS } from './rules-data';

interface SyndromePredictionProps {
  answers: QuestionAnswer;
}

const predictionNames = {
  [PREDICTION_IDS.IRRITANTGAS]: '刺激性氣體症候群 (Irritant Gas Syndrome)',
  [PREDICTION_IDS.SOLVENT]:
    '溶劑、麻醉劑或鎮靜劑症候群 (Solvents, Anesthetics, or Sedatives Syndrome)',
  [PREDICTION_IDS.PESTICIDE]:
    '農藥症候群 (Pesticide Syndrome / Cholinergic / Nerve Agent Toxidrome)',
  [PREDICTION_IDS.KNOCKDOWN]: '擊倒症候群 (Knockdown Syndrome)',
  [PREDICTION_IDS.OPIOID]: '鴉片類藥物症候群 (Opioid Syndrome)',
  [PREDICTION_IDS.ANTICHOLINERGIC]: '抗膽鹼症候群 (Anticholinergic Syndrome)',
  [PREDICTION_IDS.CONVULSANT]: '抽搐劑症候群 (Convulsant Syndrome)',
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

  return (
    <div className="rounded-xl border-2 border-gray-300 bg-white p-5">
      <div>
        <h2 className="m-0 mb-5 border-b border-gray-300 pb-2.5 text-xl font-bold text-amber-900">
          Syndrome Prediction
        </h2>
      </div>
      <div className="mb-5 flex flex-col gap-5">
        {Object.entries(predictionNames).map(([key, text]) => {
          const percentage = prediction?.[key as PREDICTION_IDS] ?? 0;
          const isProbable = percentage >= 50;
          const isUncertain = percentage < 50;

          return (
            <div key={key} className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <a
                  href="#"
                  className="cursor-pointer text-[0.95rem] text-purple-700 underline hover:text-purple-900"
                >
                  {predictionNames[key as keyof typeof predictionNames]}
                </a>
                <span className="text-[0.9rem] text-purple-700">↓</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="relative h-[30px] overflow-hidden rounded border border-gray-300 bg-gray-300">
                  {isUncertain && (
                    <div
                      className="h-full bg-gray-500 transition-all duration-300 ease-in-out"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  )}
                  {isProbable && (
                    <div
                      className="h-full bg-blue-600 transition-all duration-300 ease-in-out"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  )}
                </div>
                <div className="flex justify-between text-[0.85rem] text-gray-600">
                  <span>0</span>
                  <span>{percentage / 10}</span>
                  <span>10</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-5 rounded-md bg-gray-100 p-2.5">
        <div className="flex items-center gap-2">
          <span className="h-5 w-[30px] rounded border border-gray-300 bg-gray-500"></span>
          <span>Uncertain</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-5 w-[30px] rounded border border-gray-300 bg-blue-600"></span>
          <span>Probable</span>
        </div>
      </div>
    </div>
  );
}
