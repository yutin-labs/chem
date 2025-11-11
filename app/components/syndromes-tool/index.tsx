import { useState } from 'react';
import Prediction from '../prediction';
import { type QuestionAnswer, QUESTION_IDS } from '../question/questions-data';
import Question from '../question';

export function SyndromesTool() {
  const [answers, setAnswers] = useState<QuestionAnswer>({
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

  return (
    <div className="mx-auto max-w-2xl flex flex-col gap-2 mt-4 mb-5">
      <Question onChange={setAnswers} value={answers} />
      <Prediction answers={answers} />
    </div>
  );
}
