import { QUESTION_IDS, ANSWER_IDS } from "./questions-data";

export default {
  [QUESTION_IDS.STATE_OF_ALERTNESS]: {
    current_answers: [
      {
        answers: [ANSWER_IDS.UNCONSCIOUS],
        constraint: [],
        nextQuestion: QUESTION_IDS.SUDDEN_ONSET_UNCONSCIOUSNESS,
      },
      {
        answers: [ANSWER_IDS.SLOW, ANSWER_IDS.NORMAL, ANSWER_IDS.FAST],
        constraint: [],
        nextQuestion: QUESTION_IDS.SYNCOPE,
      },
    ],
  },
  [QUESTION_IDS.SUDDEN_ONSET_UNCONSCIOUSNESS]: {
    current_answers: [
      {
        answers: null,
        constraint: [
          {
            question: QUESTION_IDS.STATE_OF_ALERTNESS,
            answers: [ANSWER_IDS.UNCONSCIOUS],
          },
        ],
        nextQuestion: QUESTION_IDS.SEIZURE,
      },
    ],
  },
  [QUESTION_IDS.SYNCOPE]: {
    current_answers: [
      {
        answers: null,
        constraint: null,
        nextQuestion: QUESTION_IDS.SEIZURE,
      },
    ],
  },
  [QUESTION_IDS.SEIZURE]: {
    current_answers: [
      {
        answers: null,
        constraint: null,
        nextQuestion: QUESTION_IDS.PUPIL,
      },
    ],
  },
  [QUESTION_IDS.PUPIL]: {
    current_answers: [
      {
        answers: null,
        constraint: null,
        nextQuestion: QUESTION_IDS.SWEATY,
      },
    ],
  },
  [QUESTION_IDS.SWEATY]: {
    current_answers: [
      {
        answers: null,
        constraint: null,
        nextQuestion: QUESTION_IDS.MUCOUS_MEMBRANE,
      },
    ],
  },
  [QUESTION_IDS.MUCOUS_MEMBRANE]: {
    current_answers: [
      {
        answers: null,
        constraint: null,
        nextQuestion: QUESTION_IDS.HEART_RATE,
      },
    ],
  },
  [QUESTION_IDS.HEART_RATE]: {
    current_answers: [
      {
        answers: null,
        constraint: null,
        nextQuestion: QUESTION_IDS.LOW_BLOOD_PRESSURE,
      },
    ],
  },
  [QUESTION_IDS.LOW_BLOOD_PRESSURE]: {
    current_answers: [
      {
        answers: null,
        constraint: [
          {
            question: QUESTION_IDS.STATE_OF_ALERTNESS,
            answers: [ANSWER_IDS.SLOW, ANSWER_IDS.NORMAL, ANSWER_IDS.FAST],
          },
        ],
        nextQuestion: QUESTION_IDS.BURNING_THROAT_NOSE,
      },
      {
        answers: null,
        constraint: [
          {
            question: QUESTION_IDS.STATE_OF_ALERTNESS,
            answers: [ANSWER_IDS.UNCONSCIOUS],
          },
        ],
        nextQuestion: QUESTION_IDS.WHEEZING,
      },
    ],
  },
  [QUESTION_IDS.BURNING_THROAT_NOSE]: {
    current_answers: [
      {
        answers: null,
        constraint: null,
        nextQuestion: QUESTION_IDS.WHEEZING,
      },
    ],
  },
  [QUESTION_IDS.WHEEZING]: {
    current_answers: [
      {
        answers: [ANSWER_IDS.NO, ANSWER_IDS.CANT_ASSESS],
        constraint: [
          {
            question: QUESTION_IDS.STATE_OF_ALERTNESS,
            answers: [ANSWER_IDS.SLOW, ANSWER_IDS.NORMAL, ANSWER_IDS.FAST],
          },
        ],
        nextQuestion: QUESTION_IDS.SHORTNESS_OF_BREATH,
      },
      {
        answers: [ANSWER_IDS.YES],
        constraint: [
          {
            question: QUESTION_IDS.STATE_OF_ALERTNESS,
            answers: [ANSWER_IDS.SLOW, ANSWER_IDS.NORMAL, ANSWER_IDS.FAST],
          },
        ],
        nextQuestion: QUESTION_IDS.HYPOVENTILATION,
      },
      {
        answers: null,
        constraint: [
          {
            question: QUESTION_IDS.STATE_OF_ALERTNESS,
            answers: [ANSWER_IDS.UNCONSCIOUS],
          },
        ],
        nextQuestion: QUESTION_IDS.HYPOVENTILATION,
      },
    ],
  },
  [QUESTION_IDS.SHORTNESS_OF_BREATH]: {
    current_answers: [
      {
        answers: null,
        constraint: null,
        nextQuestion: QUESTION_IDS.HYPOVENTILATION,
      },
    ],
  },
  [QUESTION_IDS.HYPOVENTILATION]: {
    current_answers: [
      {
        answers: null,
        constraint: null,
        nextQuestion: QUESTION_IDS.WET_LUNGS_RALES,
      },
    ],
  },
  [QUESTION_IDS.WET_LUNGS_RALES]: {
    current_answers: [
      {
        answers: null,
        constraint: [
          {
            question: QUESTION_IDS.STATE_OF_ALERTNESS,
            answers: [ANSWER_IDS.SLOW, ANSWER_IDS.NORMAL, ANSWER_IDS.FAST],
          },
        ],
        nextQuestion: QUESTION_IDS.BURNING_CHEST_PAIN,
      },
      {
        answers: null,
        constraint: [
          {
            question: QUESTION_IDS.STATE_OF_ALERTNESS,
            answers: [ANSWER_IDS.UNCONSCIOUS],
          },
        ],
        nextQuestion: QUESTION_IDS.EYE_IRRITATION,
      },
    ],
  },
  [QUESTION_IDS.BURNING_CHEST_PAIN]: {
    current_answers: [
      {
        answers: null,
        constraint: null,
        nextQuestion: QUESTION_IDS.IRRITATED_OR_BURNING_SKIN,
      },
    ],
  },
  [QUESTION_IDS.IRRITATED_OR_BURNING_SKIN]: {
    current_answers: [
      {
        answers: null,
        constraint: null,
        nextQuestion: QUESTION_IDS.EYE_IRRITATION,
      },
    ],
  },
  [QUESTION_IDS.EYE_IRRITATION]: {
    current_answers: [
      {
        answers: null,
        constraint: [
          {
            question: QUESTION_IDS.STATE_OF_ALERTNESS,
            answers: [ANSWER_IDS.SLOW, ANSWER_IDS.NORMAL, ANSWER_IDS.FAST],
          },
        ],
        nextQuestion: QUESTION_IDS.DIZZINESS_LIGHTHEADEDNESS,
      },
      {
        answers: null,
        constraint: [
          {
            question: QUESTION_IDS.STATE_OF_ALERTNESS,
            answers: [ANSWER_IDS.UNCONSCIOUS],
          },
        ],
        nextQuestion: null,
      },
    ],
  },
  [QUESTION_IDS.DIZZINESS_LIGHTHEADEDNESS]: {
    current_answers: [
      {
        answers: null,
        constraint: null,
        nextQuestion: null,
      },
    ],
  },
};
