import { useState } from 'react';
import {
  type QuestionAnswer,
  QUESTION_IDS,
  ANSWER_IDS,
} from './questions-data';
import questions from './questions-data';
import decision from './decision';

interface QuestionProps {
  value: QuestionAnswer;
  onChange: (answer: QuestionAnswer) => void;
}

export default function Question({ value, onChange }: QuestionProps) {
  const [ready, setReady] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<QUESTION_IDS | null>(
    QUESTION_IDS.STATE_OF_ALERTNESS
  );
  const handleChange = (id: QUESTION_IDS, answer: ANSWER_IDS) => {
    onChange({
      ...value,
      [id]: answer,
    });
    const decisionTarget = decision[id];
    if (decisionTarget) {
      for (const answerOption of decisionTarget.current_answers) {
        if (
          answerOption.answers !== null &&
          answerOption.answers.includes(answer) === false
        ) {
          continue;
        }
        if (answerOption.constraint !== null) {
          for (const constraint of answerOption.constraint) {
            const userAnswer = value[constraint.question];
            if (
              userAnswer === null ||
              constraint.answers.includes(userAnswer) === false
            ) {
              continue;
            }
          }
        }
        setCurrentQuestion(answerOption.nextQuestion);
        return;
      }
    }
  };

  const handleRestart = () => {
    onChange({
      [QUESTION_IDS.STATE_OF_ALERTNESS]: null,
      [QUESTION_IDS.BURNING_THROAT_NOSE]: null,
      [QUESTION_IDS.WHEEZING]: null,
      [QUESTION_IDS.SHORTNESS_OF_BREATH]: null,
      [QUESTION_IDS.WET_LUNGS_RALES]: null,
      [QUESTION_IDS.HYPOVENTILATION]: null,
      [QUESTION_IDS.SWEATY]: null,
      [QUESTION_IDS.BURNING_CHEST_PAIN]: null,
      [QUESTION_IDS.IRRITATED_OR_BURNING_SKIN]: null,
      [QUESTION_IDS.PUPIL]: null,
      [QUESTION_IDS.SEIZURE]: null,
      [QUESTION_IDS.HEART_RATE]: null,
      [QUESTION_IDS.LOW_BLOOD_PRESSURE]: null,
      [QUESTION_IDS.SUDDEN_ONSET_UNCONSCIOUSNESS]: null,
      [QUESTION_IDS.EYE_IRRITATION]: null,
      [QUESTION_IDS.MUCOUS_MEMBRANE]: null,
      [QUESTION_IDS.SYNCOPE]: null,
      [QUESTION_IDS.DIZZINESS_LIGHTHEADEDNESS]: null,
    });
    setCurrentQuestion(QUESTION_IDS.STATE_OF_ALERTNESS);
    setReady(false);
  };

  const totalQuestions = Object.keys(value).length;
  const answeredQuestions =
    currentQuestion === null
      ? totalQuestions
      : Object.values(value).filter((answer) => answer !== null).length;
  const progress = (answeredQuestions / totalQuestions) * 100;

  if (ready === false) {
    return (
      <div className="rounded-xl border border-gray-300 bg-white p-5">
        <div className="space-y-4 text-gray-700">
          <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-4">
            <p className="m-0 font-semibold text-yellow-800 mb-2">
              ⚠️ 重要提醒
            </p>
            <ul className="m-0 pl-5 space-y-2">
              <li>本工具的設計假定主要的暴露途徑為吸入。</li>
              <li>本工具聚焦於重症個案。</li>
              <li>
                本工具未涵蓋所有可能的化學中毒症候群。暴露於其他化學物質、藥物或毒素的患者，可能不符合目前所包含的任何一種症候群。
              </li>
              <li>
                結果需謹慎解讀，因為其他化學物質、藥物、毒素，或其他醫療狀況也可能模仿這些症候群。
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            className="cursor-pointer rounded-md bg-amber-600 px-6 py-3 text-base font-medium text-white transition-all duration-200 hover:bg-amber-600 active:translate-y-px"
            onClick={() => setReady(true)}
          >
            我已閱讀並同意
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-gray-300 bg-white p-5">
      <div className="pb-3">
        <h2 className="m-0 text-xl font-bold text-amber-900">Question</h2>
      </div>
      <div className="mb-5">
        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full bg-amber-500 transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="mt-1 text-right text-xs text-gray-600">
          {answeredQuestions} / {totalQuestions}
        </div>
      </div>
      <div>
        {questions.map((item) => (
          <div
            key={item.id}
            className={`mb-6 flex flex-col gap-4 ${currentQuestion === item.id ? '' : 'hidden'}`}
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-2xl font-bold text-white">
                  ?
                </span>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="m-0 mb-2 text-lg font-medium text-gray-800">
                  {item.question}
                </h3>
                {item.description && (
                  <p className="m-0 text-sm text-gray-600">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {item.answer.map((option) => (
                <button
                  key={option}
                  className="cursor-pointer rounded-md border-2 border-gray-500 bg-gray-100 px-5 py-2.5 text-base text-gray-800 transition-all duration-200 hover:border-gray-600 hover:bg-gray-300 active:translate-y-px"
                  onClick={() => handleChange(item.id, option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <button
          className="cursor-pointer rounded-md border-2 border-gray-600 bg-white px-5 py-2 text-[0.95rem] text-gray-800 transition-all duration-200 hover:border-gray-800 hover:bg-gray-100 active:translate-y-px"
          onClick={handleRestart}
        >
          Restart
        </button>
      </div>
    </div>
  );
}
