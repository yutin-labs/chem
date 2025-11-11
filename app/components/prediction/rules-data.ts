import { QUESTION_IDS, ANSWER_IDS } from "../question/questions-data";

interface Answer {
  question: QUESTION_IDS;
  answer: ANSWER_IDS;
}

export enum PREDICTION_IDS {
  IRRITANTGAS = "irritantgas",
  SOLVENT = "solvent",
  PESTICIDE = "pesticide",
  KNOCKDOWN = "knockdown",
  OPIOID = "opioid",
  ANTICHOLINERGIC = "anticholinergic",
  CONVULSANT = "convulsant",
  OTHERS = "others",
}

interface Rule {
  id: number;
  answers: Answer[];
  [PREDICTION_IDS.IRRITANTGAS]: number;
  [PREDICTION_IDS.SOLVENT]: number;
  [PREDICTION_IDS.PESTICIDE]: number;
  [PREDICTION_IDS.KNOCKDOWN]: number;
  [PREDICTION_IDS.OPIOID]: number;
  [PREDICTION_IDS.ANTICHOLINERGIC]: number;
  [PREDICTION_IDS.CONVULSANT]: number;
  [PREDICTION_IDS.OTHERS]: number;
}

const rules: Rule[] = [
  {
    id: 1,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 15,
    [PREDICTION_IDS.SOLVENT]: 70,
    [PREDICTION_IDS.PESTICIDE]: 50,
    [PREDICTION_IDS.KNOCKDOWN]: 70,
    [PREDICTION_IDS.OPIOID]: 70,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 90,
    [PREDICTION_IDS.OTHERS]: 40,
  },

  {
    id: 101,
    answers: [
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.PINPOINT,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 15,
    [PREDICTION_IDS.PESTICIDE]: 90,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 90,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 1,
    [PREDICTION_IDS.CONVULSANT]: 5,
    [PREDICTION_IDS.OTHERS]: 10,
  },
  {
    id: 102,
    answers: [
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 10,
    [PREDICTION_IDS.PESTICIDE]: 75,
    [PREDICTION_IDS.KNOCKDOWN]: 50,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 60,
    [PREDICTION_IDS.CONVULSANT]: 95,
    [PREDICTION_IDS.OTHERS]: 30,
  },
  {
    id: 103,
    answers: [
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.SLUDGE,
      },
      {
        question: QUESTION_IDS.SWEATY,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 10,
    [PREDICTION_IDS.PESTICIDE]: 90,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 5,
    [PREDICTION_IDS.CONVULSANT]: 20,
    [PREDICTION_IDS.OTHERS]: 10,
  },

  {
    id: 104,
    answers: [
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.PINPOINT,
      },
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 10,
    [PREDICTION_IDS.PESTICIDE]: 90,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 90,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 20,
    [PREDICTION_IDS.OTHERS]: 10,
  },
  {
    id: 105,
    answers: [
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 20,
    [PREDICTION_IDS.PESTICIDE]: 70,
    [PREDICTION_IDS.KNOCKDOWN]: 60,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 60,
    [PREDICTION_IDS.CONVULSANT]: 95,
    [PREDICTION_IDS.OTHERS]: 30,
  },
  {
    id: 106,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.SLUDGE,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 10,
    [PREDICTION_IDS.PESTICIDE]: 95,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 15,
    [PREDICTION_IDS.OTHERS]: 10,
  },

  {
    id: 107,
    answers: [
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.PINPOINT,
      },
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 10,
    [PREDICTION_IDS.PESTICIDE]: 95,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 25,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 10,
    [PREDICTION_IDS.OTHERS]: 10,
  },
  {
    id: 108,
    answers: [
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.PINPOINT,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.SLUDGE,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 10,
    [PREDICTION_IDS.PESTICIDE]: 95,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 10,
    [PREDICTION_IDS.OTHERS]: 10,
  },

  {
    id: 109,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.SUDDEN_ONSET_UNCONSCIOUSNESS,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.PINPOINT,
      },
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.BRADYCARDIA,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 10,
    [PREDICTION_IDS.PESTICIDE]: 95,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 60,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 10,
    [PREDICTION_IDS.OTHERS]: 10,
  },

  {
    id: 110,
    answers: [
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.SLUDGE,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 30,
    [PREDICTION_IDS.SOLVENT]: 10,
    [PREDICTION_IDS.PESTICIDE]: 70,
    [PREDICTION_IDS.KNOCKDOWN]: 15,
    [PREDICTION_IDS.OPIOID]: 15,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 5,
    [PREDICTION_IDS.CONVULSANT]: 30,
    [PREDICTION_IDS.OTHERS]: 20,
  },

  //111, 112, 113 have the same values.
  {
    id: 111,
    answers: [
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.PINPOINT,
      },
      {
        question: QUESTION_IDS.SWEATY,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 25,
    [PREDICTION_IDS.SOLVENT]: 10,
    [PREDICTION_IDS.PESTICIDE]: 95,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 25,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 5,
    [PREDICTION_IDS.CONVULSANT]: 10,
    [PREDICTION_IDS.OTHERS]: 10,
  },
  {
    id: 112,
    answers: [
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.PINPOINT,
      },
      {
        question: QUESTION_IDS.WET_LUNGS_RALES,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 25,
    [PREDICTION_IDS.SOLVENT]: 10,
    [PREDICTION_IDS.PESTICIDE]: 95,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 25,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 5,
    [PREDICTION_IDS.CONVULSANT]: 10,
    [PREDICTION_IDS.OTHERS]: 10,
  },

  {
    id: 113,
    answers: [
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.PINPOINT,
      },
      {
        question: QUESTION_IDS.WHEEZING,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 25,
    [PREDICTION_IDS.SOLVENT]: 10,
    [PREDICTION_IDS.PESTICIDE]: 95,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 25,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 5,
    [PREDICTION_IDS.CONVULSANT]: 10,
    [PREDICTION_IDS.OTHERS]: 10,
  },
  //Irritant Gas Syndrome

  {
    id: 201,
    answers: [
      {
        question: QUESTION_IDS.EYE_IRRITATION,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 80,
    [PREDICTION_IDS.SOLVENT]: 40,
    [PREDICTION_IDS.PESTICIDE]: 60,
    [PREDICTION_IDS.KNOCKDOWN]: 30,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 20,
    [PREDICTION_IDS.OTHERS]: 50,
  },
  {
    id: 203,
    answers: [
      {
        question: QUESTION_IDS.BURNING_THROAT_NOSE,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 70,
    [PREDICTION_IDS.SOLVENT]: 10,
    [PREDICTION_IDS.PESTICIDE]: 30,
    [PREDICTION_IDS.KNOCKDOWN]: 30,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 10,
    [PREDICTION_IDS.OTHERS]: 50,
  },

  {
    id: 204,
    answers: [
      {
        question: QUESTION_IDS.BURNING_CHEST_PAIN,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 70,
    [PREDICTION_IDS.SOLVENT]: 10,
    [PREDICTION_IDS.PESTICIDE]: 20,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 10,
    [PREDICTION_IDS.OTHERS]: 30,
  },

  {
    id: 206,
    answers: [
      {
        question: QUESTION_IDS.WET_LUNGS_RALES,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 70,
    [PREDICTION_IDS.SOLVENT]: 20,
    [PREDICTION_IDS.PESTICIDE]: 70,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 30,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 30,
    [PREDICTION_IDS.CONVULSANT]: 15,
    [PREDICTION_IDS.OTHERS]: 30,
  },

  {
    id: 207,
    answers: [
      {
        question: QUESTION_IDS.IRRITATED_OR_BURNING_SKIN,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 60,
    [PREDICTION_IDS.SOLVENT]: 30,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 10,
    [PREDICTION_IDS.OTHERS]: 30,
  },
  {
    id: 208,
    answers: [
      {
        question: QUESTION_IDS.WHEEZING,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.EYE_IRRITATION,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 90,
    [PREDICTION_IDS.SOLVENT]: 40,
    [PREDICTION_IDS.PESTICIDE]: 70,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 10,
    [PREDICTION_IDS.OTHERS]: 30,
  },

  {
    id: 209,
    answers: [
      {
        question: QUESTION_IDS.WET_LUNGS_RALES,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.EYE_IRRITATION,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 90,
    [PREDICTION_IDS.SOLVENT]: 25,
    [PREDICTION_IDS.PESTICIDE]: 70,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 10,
    [PREDICTION_IDS.OTHERS]: 10,
  },

  {
    id: 210,
    answers: [
      {
        question: QUESTION_IDS.WET_LUNGS_RALES,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.EYE_IRRITATION,
        answer: ANSWER_IDS.YES,
      },

      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 95,
    [PREDICTION_IDS.SOLVENT]: 25,
    [PREDICTION_IDS.PESTICIDE]: 25,
    [PREDICTION_IDS.KNOCKDOWN]: 20,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 10,
    [PREDICTION_IDS.OTHERS]: 10,
  },

  {
    id: 211,
    answers: [
      {
        question: QUESTION_IDS.WHEEZING,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 70,
    [PREDICTION_IDS.SOLVENT]: 30,
    [PREDICTION_IDS.PESTICIDE]: 70,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 30,
    [PREDICTION_IDS.OTHERS]: 50,
  },
  {
    id: 212,
    answers: [
      {
        question: QUESTION_IDS.SHORTNESS_OF_BREATH,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 70,
    [PREDICTION_IDS.SOLVENT]: 35,
    [PREDICTION_IDS.PESTICIDE]: 50,
    [PREDICTION_IDS.KNOCKDOWN]: 50,
    [PREDICTION_IDS.OPIOID]: 30,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 40,
    [PREDICTION_IDS.OTHERS]: 50,
  },

  {
    id: 213,
    answers: [
      {
        question: QUESTION_IDS.WHEEZING,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.EYE_IRRITATION,
        answer: ANSWER_IDS.YES,
      },

      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 95,
    [PREDICTION_IDS.SOLVENT]: 25,
    [PREDICTION_IDS.PESTICIDE]: 25,
    [PREDICTION_IDS.KNOCKDOWN]: 20,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 10,
    [PREDICTION_IDS.OTHERS]: 30,
  },

  {
    id: 214,
    answers: [
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.TACHYCARDIA,
      },

      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },

      {
        question: QUESTION_IDS.EYE_IRRITATION,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 80,
    [PREDICTION_IDS.SOLVENT]: 60,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 70,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 30,
    [PREDICTION_IDS.CONVULSANT]: 30,
    [PREDICTION_IDS.OTHERS]: 30,
  },

  {
    id: 215,
    answers: [
      {
        question: QUESTION_IDS.BURNING_CHEST_PAIN,
        answer: ANSWER_IDS.YES,
      },

      {
        question: QUESTION_IDS.BURNING_THROAT_NOSE,
        answer: ANSWER_IDS.YES,
      },

      {
        question: QUESTION_IDS.EYE_IRRITATION,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 85,
    [PREDICTION_IDS.SOLVENT]: 30,
    [PREDICTION_IDS.PESTICIDE]: 30,
    [PREDICTION_IDS.KNOCKDOWN]: 20,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 20,
    [PREDICTION_IDS.OTHERS]: 30,
  },

  //Knockdown Syndrome Starts here
  {
    id: 301,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },

      {
        question: QUESTION_IDS.SUDDEN_ONSET_UNCONSCIOUSNESS,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 60,
    [PREDICTION_IDS.PESTICIDE]: 60,
    [PREDICTION_IDS.KNOCKDOWN]: 80,
    [PREDICTION_IDS.OPIOID]: 60,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 60,
    [PREDICTION_IDS.OTHERS]: 50,
  },

  {
    id: 302,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.SUDDEN_ONSET_UNCONSCIOUSNESS,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 40,
    [PREDICTION_IDS.PESTICIDE]: 30,
    [PREDICTION_IDS.KNOCKDOWN]: 80,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 5,
    [PREDICTION_IDS.CONVULSANT]: 50,
    [PREDICTION_IDS.OTHERS]: 50,
  },

  {
    id: 303,
    answers: [
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.BRADYCARDIA,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 50,
    [PREDICTION_IDS.SOLVENT]: 20,
    [PREDICTION_IDS.PESTICIDE]: 50,
    [PREDICTION_IDS.KNOCKDOWN]: 70,
    [PREDICTION_IDS.OPIOID]: 30,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 5,
    [PREDICTION_IDS.CONVULSANT]: 20,
    [PREDICTION_IDS.OTHERS]: 50,
  },
  {
    id: 304,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.SUDDEN_ONSET_UNCONSCIOUSNESS,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.BRADYCARDIA,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 50,
    [PREDICTION_IDS.PESTICIDE]: 60,
    [PREDICTION_IDS.KNOCKDOWN]: 70,
    [PREDICTION_IDS.OPIOID]: 55,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 60,

    [PREDICTION_IDS.OTHERS]: 10,
  },

  {
    id: 306,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 60,
    [PREDICTION_IDS.PESTICIDE]: 30,
    [PREDICTION_IDS.KNOCKDOWN]: 70,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 5,
    [PREDICTION_IDS.CONVULSANT]: 35,
    [PREDICTION_IDS.OTHERS]: 50,
  },

  {
    id: 307,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.SLOW,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 50,
    [PREDICTION_IDS.PESTICIDE]: 30,
    [PREDICTION_IDS.KNOCKDOWN]: 70,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 5,
    [PREDICTION_IDS.CONVULSANT]: 35,
    [PREDICTION_IDS.OTHERS]: 50,
  },
  {
    id: 308,
    answers: [
      {
        question: QUESTION_IDS.DIZZINESS_LIGHTHEADEDNESS,
        answer: ANSWER_IDS.YES,
      },

      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 50,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 50,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 35,
    [PREDICTION_IDS.OTHERS]: 20,
  },
  {
    id: 309,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.SLOW,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
      {
        question: QUESTION_IDS.LOW_BLOOD_PRESSURE,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 30,
    [PREDICTION_IDS.PESTICIDE]: 30,
    [PREDICTION_IDS.KNOCKDOWN]: 70,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 35,
    [PREDICTION_IDS.OTHERS]: 20,
  },

  {
    id: 310,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.SUDDEN_ONSET_UNCONSCIOUSNESS,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.BRADYCARDIA,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 40,
    [PREDICTION_IDS.PESTICIDE]: 30,
    [PREDICTION_IDS.KNOCKDOWN]: 90,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 5,
    [PREDICTION_IDS.CONVULSANT]: 35,
    [PREDICTION_IDS.OTHERS]: 10,
  },

  {
    id: 311,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.BRADYCARDIA,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 60,
    [PREDICTION_IDS.PESTICIDE]: 30,
    [PREDICTION_IDS.KNOCKDOWN]: 50,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 5,
    [PREDICTION_IDS.CONVULSANT]: 35,
    [PREDICTION_IDS.OTHERS]: 10,
  },
  {
    id: 312,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.SLOW,
      },
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.BRADYCARDIA,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 40,
    [PREDICTION_IDS.PESTICIDE]: 30,
    [PREDICTION_IDS.KNOCKDOWN]: 70,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 5,
    [PREDICTION_IDS.CONVULSANT]: 35,
    [PREDICTION_IDS.OTHERS]: 10,
  },
  {
    id: 313,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },

      {
        question: QUESTION_IDS.SUDDEN_ONSET_UNCONSCIOUSNESS,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 50,
    [PREDICTION_IDS.PESTICIDE]: 30,
    [PREDICTION_IDS.KNOCKDOWN]: 90,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 25,
    [PREDICTION_IDS.CONVULSANT]: 35,
    [PREDICTION_IDS.OTHERS]: 20,
  },

  {
    id: 314,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 50,
    [PREDICTION_IDS.PESTICIDE]: 30,
    [PREDICTION_IDS.KNOCKDOWN]: 80,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 25,
    [PREDICTION_IDS.CONVULSANT]: 35,
    [PREDICTION_IDS.OTHERS]: 30,
  },
  {
    id: 315,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.SLOW,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 50,
    [PREDICTION_IDS.PESTICIDE]: 30,
    [PREDICTION_IDS.KNOCKDOWN]: 50,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 5,
    [PREDICTION_IDS.CONVULSANT]: 35,
    [PREDICTION_IDS.OTHERS]: 50,
  },
  {
    id: 316,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.SLOW,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
      {
        question: QUESTION_IDS.LOW_BLOOD_PRESSURE,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 30,
    [PREDICTION_IDS.PESTICIDE]: 30,
    [PREDICTION_IDS.KNOCKDOWN]: 70,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 35,
    [PREDICTION_IDS.OTHERS]: 20,
  },
  {
    id: 317,
    answers: [
      {
        question: QUESTION_IDS.DIZZINESS_LIGHTHEADEDNESS,
        answer: ANSWER_IDS.YES,
      },

      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 50,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 50,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 25,
    [PREDICTION_IDS.CONVULSANT]: 35,
    [PREDICTION_IDS.OTHERS]: 20,
  },

  {
    id: 318,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.SUDDEN_ONSET_UNCONSCIOUSNESS,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.BRADYCARDIA,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
    ],

    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 40,
    [PREDICTION_IDS.PESTICIDE]: 30,
    [PREDICTION_IDS.KNOCKDOWN]: 90,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 5,
    [PREDICTION_IDS.CONVULSANT]: 35,
    [PREDICTION_IDS.OTHERS]: 10,
  },
  {
    id: 319,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.BRADYCARDIA,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 50,
    [PREDICTION_IDS.PESTICIDE]: 30,
    [PREDICTION_IDS.KNOCKDOWN]: 80,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 5,
    [PREDICTION_IDS.CONVULSANT]: 35,
    [PREDICTION_IDS.OTHERS]: 10,
  },
  {
    id: 320,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.SLOW,
      },
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.BRADYCARDIA,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 45,
    [PREDICTION_IDS.PESTICIDE]: 30,
    [PREDICTION_IDS.KNOCKDOWN]: 70,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 5,
    [PREDICTION_IDS.CONVULSANT]: 35,
    [PREDICTION_IDS.OTHERS]: 10,
  },
  {
    id: 321,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.SUDDEN_ONSET_UNCONSCIOUSNESS,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 25,
    [PREDICTION_IDS.PESTICIDE]: 30,
    [PREDICTION_IDS.KNOCKDOWN]: 50,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 25,
    [PREDICTION_IDS.CONVULSANT]: 75,
    [PREDICTION_IDS.OTHERS]: 20,
  },

  //SAS used to be called Acute Solvent syndrome

  {
    id: 401,
    answers: [
      {
        question: QUESTION_IDS.SYNCOPE,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.DIZZINESS_LIGHTHEADEDNESS,
        answer: ANSWER_IDS.YES,
      },

      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.MOIST_OR_NORMAL,
      },
      {
        question: QUESTION_IDS.LOW_BLOOD_PRESSURE,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 60,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 15,
    [PREDICTION_IDS.CONVULSANT]: 25,
    [PREDICTION_IDS.OTHERS]: 15,
  },
  {
    id: 402,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.SLOW,
      },

      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.MOIST_OR_NORMAL,
      },
      {
        question: QUESTION_IDS.LOW_BLOOD_PRESSURE,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 60,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 20,
    [PREDICTION_IDS.CONVULSANT]: 40,
    [PREDICTION_IDS.OTHERS]: 15,
  },
  {
    id: 403,
    answers: [
      {
        question: QUESTION_IDS.DIZZINESS_LIGHTHEADEDNESS,
        answer: ANSWER_IDS.YES,
      },

      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.MOIST_OR_NORMAL,
      },
      {
        question: QUESTION_IDS.LOW_BLOOD_PRESSURE,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 40,
    [PREDICTION_IDS.SOLVENT]: 60,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 15,
    [PREDICTION_IDS.CONVULSANT]: 25,
    [PREDICTION_IDS.OTHERS]: 15,
  },
  {
    id: 404,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.SLOW,
      },
      {
        question: QUESTION_IDS.WHEEZING,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 20,
    [PREDICTION_IDS.SOLVENT]: 50,
    [PREDICTION_IDS.PESTICIDE]: 70,
    [PREDICTION_IDS.KNOCKDOWN]: 35,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 25,
    [PREDICTION_IDS.OTHERS]: 50,
  },

  {
    id: 405,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.MOIST_OR_NORMAL,
      },
      {
        question: QUESTION_IDS.LOW_BLOOD_PRESSURE,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 60,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 30,
    [PREDICTION_IDS.CONVULSANT]: 25,
    [PREDICTION_IDS.OTHERS]: 30,
  },

  {
    id: 406,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.WHEEZING,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 20,
    [PREDICTION_IDS.SOLVENT]: 50,
    [PREDICTION_IDS.PESTICIDE]: 70,
    [PREDICTION_IDS.KNOCKDOWN]: 35,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 25,
    [PREDICTION_IDS.OTHERS]: 40,
  },

  {
    id: 407,
    answers: [
      {
        question: QUESTION_IDS.SYNCOPE,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.DIZZINESS_LIGHTHEADEDNESS,
        answer: ANSWER_IDS.YES,
      },

      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.MOIST_OR_NORMAL,
      },
      {
        question: QUESTION_IDS.LOW_BLOOD_PRESSURE,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 60,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 15,
    [PREDICTION_IDS.CONVULSANT]: 25,
    [PREDICTION_IDS.OTHERS]: 15,
  },
  {
    id: 408,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.SLOW,
      },

      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.MOIST_OR_NORMAL,
      },
      {
        question: QUESTION_IDS.LOW_BLOOD_PRESSURE,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 60,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 20,
    [PREDICTION_IDS.CONVULSANT]: 40,
    [PREDICTION_IDS.OTHERS]: 15,
  },

  {
    id: 409,
    answers: [
      {
        question: QUESTION_IDS.DIZZINESS_LIGHTHEADEDNESS,
        answer: ANSWER_IDS.YES,
      },

      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.MOIST_OR_NORMAL,
      },
      {
        question: QUESTION_IDS.LOW_BLOOD_PRESSURE,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 40,
    [PREDICTION_IDS.SOLVENT]: 60,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 15,
    [PREDICTION_IDS.CONVULSANT]: 25,
    [PREDICTION_IDS.OTHERS]: 15,
  },

  {
    id: 410,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.MOIST_OR_NORMAL,
      },
      {
        question: QUESTION_IDS.LOW_BLOOD_PRESSURE,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 60,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 30,
    [PREDICTION_IDS.CONVULSANT]: 25,
    [PREDICTION_IDS.OTHERS]: 30,
  },

  //////////////////////FIX SLUDGE ISSUE

  {
    id: 411,
    answers: [
      {
        question: QUESTION_IDS.SYNCOPE,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.DIZZINESS_LIGHTHEADEDNESS,
        answer: ANSWER_IDS.YES,
      },

      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.DRY_ORAL_CAVITY,
      },
      {
        question: QUESTION_IDS.LOW_BLOOD_PRESSURE,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 60,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 15,
    [PREDICTION_IDS.CONVULSANT]: 25,
    [PREDICTION_IDS.OTHERS]: 15,
  },
  {
    id: 412,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.SLOW,
      },

      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.DRY_ORAL_CAVITY,
      },
      {
        question: QUESTION_IDS.LOW_BLOOD_PRESSURE,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 60,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 20,
    [PREDICTION_IDS.CONVULSANT]: 40,
    [PREDICTION_IDS.OTHERS]: 15,
  },
  {
    id: 413,
    answers: [
      {
        question: QUESTION_IDS.DIZZINESS_LIGHTHEADEDNESS,
        answer: ANSWER_IDS.YES,
      },

      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.DRY_ORAL_CAVITY,
      },
      {
        question: QUESTION_IDS.LOW_BLOOD_PRESSURE,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 40,
    [PREDICTION_IDS.SOLVENT]: 60,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 15,
    [PREDICTION_IDS.CONVULSANT]: 25,
    [PREDICTION_IDS.OTHERS]: 15,
  },

  {
    id: 414,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.DRY_ORAL_CAVITY,
      },
      {
        question: QUESTION_IDS.LOW_BLOOD_PRESSURE,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 60,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 30,
    [PREDICTION_IDS.CONVULSANT]: 25,
    [PREDICTION_IDS.OTHERS]: 30,
  },

  {
    id: 415,
    answers: [
      {
        question: QUESTION_IDS.SYNCOPE,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.DIZZINESS_LIGHTHEADEDNESS,
        answer: ANSWER_IDS.YES,
      },

      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.DRY_ORAL_CAVITY,
      },
      {
        question: QUESTION_IDS.LOW_BLOOD_PRESSURE,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 60,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 15,
    [PREDICTION_IDS.CONVULSANT]: 25,
    [PREDICTION_IDS.OTHERS]: 15,
  },
  {
    id: 416,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.SLOW,
      },

      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.DRY_ORAL_CAVITY,
      },
      {
        question: QUESTION_IDS.LOW_BLOOD_PRESSURE,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 60,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 20,
    [PREDICTION_IDS.CONVULSANT]: 40,
    [PREDICTION_IDS.OTHERS]: 15,
  },

  {
    id: 417,
    answers: [
      {
        question: QUESTION_IDS.DIZZINESS_LIGHTHEADEDNESS,
        answer: ANSWER_IDS.YES,
      },

      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.DRY_ORAL_CAVITY,
      },
      {
        question: QUESTION_IDS.LOW_BLOOD_PRESSURE,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 40,
    [PREDICTION_IDS.SOLVENT]: 60,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 15,
    [PREDICTION_IDS.CONVULSANT]: 25,
    [PREDICTION_IDS.OTHERS]: 15,
  },

  {
    id: 418,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.DRY_ORAL_CAVITY,
      },
      {
        question: QUESTION_IDS.LOW_BLOOD_PRESSURE,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 60,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 30,
    [PREDICTION_IDS.CONVULSANT]: 25,
    [PREDICTION_IDS.OTHERS]: 30,
  },

  {
    id: 419,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.MOIST_OR_NORMAL,
      },
      {
        question: QUESTION_IDS.LOW_BLOOD_PRESSURE,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 50,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 70,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 30,
    [PREDICTION_IDS.CONVULSANT]: 25,
    [PREDICTION_IDS.OTHERS]: 30,
  },

  {
    id: 420,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.MOIST_OR_NORMAL,
      },
      {
        question: QUESTION_IDS.LOW_BLOOD_PRESSURE,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 50,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 70,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 30,
    [PREDICTION_IDS.CONVULSANT]: 25,
    [PREDICTION_IDS.OTHERS]: 30,
  },

  {
    id: 421,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.DRY_ORAL_CAVITY,
      },
      {
        question: QUESTION_IDS.LOW_BLOOD_PRESSURE,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 50,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 70,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 30,
    [PREDICTION_IDS.CONVULSANT]: 25,
    [PREDICTION_IDS.OTHERS]: 30,
  },

  {
    id: 422,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.DRY_ORAL_CAVITY,
      },
      {
        question: QUESTION_IDS.LOW_BLOOD_PRESSURE,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 50,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 70,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 30,
    [PREDICTION_IDS.CONVULSANT]: 25,
    [PREDICTION_IDS.OTHERS]: 30,
  },

  {
    id: 423,
    answers: [
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.MOIST_OR_NORMAL,
      },
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.TACHYCARDIA,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 35,
    [PREDICTION_IDS.SOLVENT]: 60,
    [PREDICTION_IDS.PESTICIDE]: 30,
    [PREDICTION_IDS.KNOCKDOWN]: 30,
    [PREDICTION_IDS.OPIOID]: 30,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 20,
    [PREDICTION_IDS.CONVULSANT]: 60,
    [PREDICTION_IDS.OTHERS]: 30,
  },
  ///////////////////////FIX SLUDGE ISSUE

  //Opioid
  {
    id: 501,
    answers: [
      {
        question: QUESTION_IDS.HYPOVENTILATION,
        answer: ANSWER_IDS.YES,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 15,
    [PREDICTION_IDS.SOLVENT]: 30,
    [PREDICTION_IDS.PESTICIDE]: 50,
    [PREDICTION_IDS.KNOCKDOWN]: 55,
    [PREDICTION_IDS.OPIOID]: 60,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 45,
    [PREDICTION_IDS.OTHERS]: 40,
  },

  {
    id: 502,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.SLOW,
      },
      {
        question: QUESTION_IDS.HYPOVENTILATION,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.PINPOINT,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 1,
    [PREDICTION_IDS.SOLVENT]: 25,
    [PREDICTION_IDS.PESTICIDE]: 75,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 90,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 20,
    [PREDICTION_IDS.OTHERS]: 10,
  },

  {
    id: 503,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.SLOW,
      },
      {
        question: QUESTION_IDS.HYPOVENTILATION,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.PINPOINT,
      },
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 1,
    [PREDICTION_IDS.SOLVENT]: 25,
    [PREDICTION_IDS.PESTICIDE]: 70,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 90,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 10,
    [PREDICTION_IDS.OTHERS]: 10,
  },

  {
    id: 504, //See 504,508,512,513 - All should be same values.
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.SLOW,
      },
      {
        question: QUESTION_IDS.HYPOVENTILATION,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.PINPOINT,
      },
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.NO,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.MOIST_OR_NORMAL,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 25,
    [PREDICTION_IDS.PESTICIDE]: 50,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 90,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 10,
    [PREDICTION_IDS.OTHERS]: 10,
  },

  {
    id: 505,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.SLOW,
      },
      {
        question: QUESTION_IDS.HYPOVENTILATION,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.PINPOINT,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.MOIST_OR_NORMAL,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 25,
    [PREDICTION_IDS.PESTICIDE]: 50,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 90,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 10,
    [PREDICTION_IDS.OTHERS]: 10,
  },

  {
    id: 506,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.HYPOVENTILATION,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.PINPOINT,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 1,
    [PREDICTION_IDS.SOLVENT]: 25,
    [PREDICTION_IDS.PESTICIDE]: 75,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 90,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 20,
    [PREDICTION_IDS.OTHERS]: 10,
  },
  {
    id: 507,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.HYPOVENTILATION,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.PINPOINT,
      },
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 1,
    [PREDICTION_IDS.SOLVENT]: 25,
    [PREDICTION_IDS.PESTICIDE]: 70,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 90,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 10,
    [PREDICTION_IDS.OTHERS]: 10,
  },

  {
    id: 508, //See 504,508,512,513 - All should be same values.
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.HYPOVENTILATION,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.PINPOINT,
      },
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.NO,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.MOIST_OR_NORMAL,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 25,
    [PREDICTION_IDS.PESTICIDE]: 50,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 90,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 10,
    [PREDICTION_IDS.OTHERS]: 10,
  },

  {
    id: 509,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.HYPOVENTILATION,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.PINPOINT,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.MOIST_OR_NORMAL,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 25,
    [PREDICTION_IDS.PESTICIDE]: 50,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 90,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 10,
    [PREDICTION_IDS.OTHERS]: 10,
  },

  {
    id: 510,
    answers: [
      {
        question: QUESTION_IDS.SWEATY,
        answer: ANSWER_IDS.NO,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.PINPOINT,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 30,
    [PREDICTION_IDS.PESTICIDE]: 25,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 90,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 5,
    [PREDICTION_IDS.OTHERS]: 20,
  },
  {
    id: 511,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.FAST,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 30,
    [PREDICTION_IDS.SOLVENT]: 20,
    [PREDICTION_IDS.PESTICIDE]: 60,
    [PREDICTION_IDS.KNOCKDOWN]: 50,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 80,
    [PREDICTION_IDS.CONVULSANT]: 80,
    [PREDICTION_IDS.OTHERS]: 50,
  },

  {
    id: 512, //See 504,508,512,513 - All should be same values.
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.SLOW,
      },
      {
        question: QUESTION_IDS.HYPOVENTILATION,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.PINPOINT,
      },
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.NO,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.DRY_ORAL_CAVITY,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 25,
    [PREDICTION_IDS.PESTICIDE]: 50,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 90,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 10,
    [PREDICTION_IDS.OTHERS]: 10,
  },

  {
    id: 513, //See 504,508,512,513 - All should be same values.
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.HYPOVENTILATION,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.PINPOINT,
      },
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.NO,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.DRY_ORAL_CAVITY,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 25,
    [PREDICTION_IDS.PESTICIDE]: 50,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 90,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 10,
    [PREDICTION_IDS.OTHERS]: 10,
  },

  {
    id: 514, //See 505,509,514,515 - All should be the same values.
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.SLOW,
      },
      {
        question: QUESTION_IDS.HYPOVENTILATION,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.PINPOINT,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.DRY_ORAL_CAVITY,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 25,
    [PREDICTION_IDS.PESTICIDE]: 50,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 90,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 10,
    [PREDICTION_IDS.OTHERS]: 10,
  },
  {
    id: 515,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.HYPOVENTILATION,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.PINPOINT,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.DRY_ORAL_CAVITY,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 25,
    [PREDICTION_IDS.PESTICIDE]: 50,
    [PREDICTION_IDS.KNOCKDOWN]: 10,
    [PREDICTION_IDS.OPIOID]: 90,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 10,
    [PREDICTION_IDS.CONVULSANT]: 10,
    [PREDICTION_IDS.OTHERS]: 10,
  },

  //anticholinergic
  {
    id: 601,
    answers: [
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.TACHYCARDIA,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 7,
    [PREDICTION_IDS.SOLVENT]: 30,
    [PREDICTION_IDS.PESTICIDE]: 30,
    [PREDICTION_IDS.KNOCKDOWN]: 50,
    [PREDICTION_IDS.OPIOID]: 20,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 80,
    [PREDICTION_IDS.CONVULSANT]: 50,
    [PREDICTION_IDS.OTHERS]: 50,
  },

  //anticholinergic

  {
    id: 603,
    answers: [
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 50,
    [PREDICTION_IDS.SOLVENT]: 60,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 60,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 80,
    [PREDICTION_IDS.CONVULSANT]: 80,
    [PREDICTION_IDS.OTHERS]: 50,
  },

  {
    id: 604,
    answers: [
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.TACHYCARDIA,
      },

      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 50,
    [PREDICTION_IDS.SOLVENT]: 50,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 50,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 60,
    [PREDICTION_IDS.CONVULSANT]: 60,
    [PREDICTION_IDS.OTHERS]: 35,
  },
  {
    id: 605,
    answers: [
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.TACHYCARDIA,
      },

      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },

      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.DRY_ORAL_CAVITY,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 20,
    [PREDICTION_IDS.SOLVENT]: 20,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 20,
    [PREDICTION_IDS.OPIOID]: 20,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 90,
    [PREDICTION_IDS.CONVULSANT]: 20,
    [PREDICTION_IDS.OTHERS]: 25,
  },

  {
    id: 606,
    answers: [
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.TACHYCARDIA,
      },

      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },

      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.DRY_ORAL_CAVITY,
      },
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.FAST,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 20,
    [PREDICTION_IDS.SOLVENT]: 20,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 20,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 95,
    [PREDICTION_IDS.CONVULSANT]: 30,
    [PREDICTION_IDS.OTHERS]: 25,
  },

  {
    id: 607,
    answers: [
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.FAST,
      },

      {
        question: QUESTION_IDS.SWEATY,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 20,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 30,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 80,
    [PREDICTION_IDS.CONVULSANT]: 30,
    [PREDICTION_IDS.OTHERS]: 40,
  },

  {
    id: 608,
    answers: [
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.TACHYCARDIA,
      },

      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },

      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.DRY_ORAL_CAVITY,
      },
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.FAST,
      },
      {
        question: QUESTION_IDS.SWEATY,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 20,
    [PREDICTION_IDS.SOLVENT]: 20,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 30,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 95,
    [PREDICTION_IDS.CONVULSANT]: 30,
    [PREDICTION_IDS.OTHERS]: 25,
  },

  {
    id: 609,
    answers: [
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.TACHYCARDIA,
      },

      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },

      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.FAST,
      },
      {
        question: QUESTION_IDS.SWEATY,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 20,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 30,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 95,
    [PREDICTION_IDS.CONVULSANT]: 30,
    [PREDICTION_IDS.OTHERS]: 25,
  },

  {
    id: 610,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.FAST,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 35,
    [PREDICTION_IDS.SOLVENT]: 30,
    [PREDICTION_IDS.PESTICIDE]: 20,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 60,
    [PREDICTION_IDS.CONVULSANT]: 60,
    [PREDICTION_IDS.OTHERS]: 50,
  },
  {
    id: 611,
    answers: [
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.TACHYCARDIA,
      },

      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },

      {
        question: QUESTION_IDS.SWEATY,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 20,
    [PREDICTION_IDS.SOLVENT]: 40,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 20,
    [PREDICTION_IDS.OPIOID]: 20,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 80,
    [PREDICTION_IDS.CONVULSANT]: 20,
    [PREDICTION_IDS.OTHERS]: 25,
  },
  {
    id: 612,
    answers: [
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.TACHYCARDIA,
      },

      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.FAST,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 30,
    [PREDICTION_IDS.SOLVENT]: 20,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 20,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 70,
    [PREDICTION_IDS.CONVULSANT]: 70,
    [PREDICTION_IDS.OTHERS]: 35,
  },

  {
    id: 613,
    answers: [
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.DRY_ORAL_CAVITY,
      },
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.FAST,
      },

      {
        question: QUESTION_IDS.SWEATY,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 20,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 30,
    [PREDICTION_IDS.OPIOID]: 10,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 90,
    [PREDICTION_IDS.CONVULSANT]: 30,
    [PREDICTION_IDS.OTHERS]: 25,
  },

  {
    id: 614,
    answers: [
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.DRY_ORAL_CAVITY,
      },
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.TACHYCARDIA,
      },

      {
        question: QUESTION_IDS.SWEATY,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 20,
    [PREDICTION_IDS.SOLVENT]: 20,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 20,
    [PREDICTION_IDS.OPIOID]: 20,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 90,
    [PREDICTION_IDS.CONVULSANT]: 20,
    [PREDICTION_IDS.OTHERS]: 25,
  },

  //Convulsant
  {
    id: 701,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.TACHYCARDIA,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.SLUDGE,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 40,
    [PREDICTION_IDS.PESTICIDE]: 20,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 20,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 20,
    [PREDICTION_IDS.CONVULSANT]: 95,
    [PREDICTION_IDS.OTHERS]: 20,
  },
  {
    id: 702,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.TACHYCARDIA,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.MOIST_OR_NORMAL,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 40,
    [PREDICTION_IDS.PESTICIDE]: 20,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 20,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 20,
    [PREDICTION_IDS.CONVULSANT]: 95,
    [PREDICTION_IDS.OTHERS]: 20,
  },
  {
    id: 703,
    answers: [
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.TACHYCARDIA,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.MOIST_OR_NORMAL,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 40,
    [PREDICTION_IDS.PESTICIDE]: 20,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 20,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 20,
    [PREDICTION_IDS.CONVULSANT]: 95,
    [PREDICTION_IDS.OTHERS]: 20,
  },
  {
    id: 704,
    answers: [
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.TACHYCARDIA,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.SLUDGE,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 40,
    [PREDICTION_IDS.PESTICIDE]: 20,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 20,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 20,
    [PREDICTION_IDS.CONVULSANT]: 95,
    [PREDICTION_IDS.OTHERS]: 20,
  },
  {
    id: 705,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.FAST,
      },
      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.TACHYCARDIA,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
      {
        question: QUESTION_IDS.WHEEZING,
        answer: ANSWER_IDS.NO,
      },
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 20,
    [PREDICTION_IDS.SOLVENT]: 30,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 50,
    [PREDICTION_IDS.OPIOID]: 20,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 50,
    [PREDICTION_IDS.CONVULSANT]: 55,
    [PREDICTION_IDS.OTHERS]: 50,
  },
  {
    id: 706,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.NO,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },

      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.TACHYCARDIA,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 60,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 50,
    [PREDICTION_IDS.OPIOID]: 20,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 20,
    [PREDICTION_IDS.CONVULSANT]: 50,
    [PREDICTION_IDS.OTHERS]: 50,
  },
  {
    id: 707,
    answers: [
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.MOIST_OR_NORMAL,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 30,
    [PREDICTION_IDS.PESTICIDE]: 30,
    [PREDICTION_IDS.KNOCKDOWN]: 30,
    [PREDICTION_IDS.OPIOID]: 20,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 20,
    [PREDICTION_IDS.CONVULSANT]: 85,
    [PREDICTION_IDS.OTHERS]: 35,
  },

  {
    id: 708,
    answers: [
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.MOIST_OR_NORMAL,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 30,
    [PREDICTION_IDS.PESTICIDE]: 30,
    [PREDICTION_IDS.KNOCKDOWN]: 30,
    [PREDICTION_IDS.OPIOID]: 20,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 20,
    [PREDICTION_IDS.CONVULSANT]: 85,
    [PREDICTION_IDS.OTHERS]: 35,
  },
  {
    id: 709,
    answers: [
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.NORMAL,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.SLUDGE,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 30,
    [PREDICTION_IDS.PESTICIDE]: 30,
    [PREDICTION_IDS.KNOCKDOWN]: 30,
    [PREDICTION_IDS.OPIOID]: 20,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 20,
    [PREDICTION_IDS.CONVULSANT]: 85,
    [PREDICTION_IDS.OTHERS]: 35,
  },

  {
    id: 710,
    answers: [
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.SLUDGE,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 30,
    [PREDICTION_IDS.PESTICIDE]: 30,
    [PREDICTION_IDS.KNOCKDOWN]: 30,
    [PREDICTION_IDS.OPIOID]: 20,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 20,
    [PREDICTION_IDS.CONVULSANT]: 85,
    [PREDICTION_IDS.OTHERS]: 35,
  },
  {
    id: 711,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },

      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.TACHYCARDIA,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.MOIST_OR_NORMAL,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 40,
    [PREDICTION_IDS.PESTICIDE]: 20,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 20,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 20,
    [PREDICTION_IDS.CONVULSANT]: 95,
    [PREDICTION_IDS.OTHERS]: 20,
  },
  {
    id: 712,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.UNCONSCIOUS,
      },
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },

      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.TACHYCARDIA,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.SLUDGE,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 40,
    [PREDICTION_IDS.PESTICIDE]: 20,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 20,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 20,
    [PREDICTION_IDS.CONVULSANT]: 95,
    [PREDICTION_IDS.OTHERS]: 20,
  },
  {
    id: 713,
    answers: [
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },

      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.TACHYCARDIA,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.MOIST_OR_NORMAL,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 40,
    [PREDICTION_IDS.PESTICIDE]: 20,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 20,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 20,
    [PREDICTION_IDS.CONVULSANT]: 95,
    [PREDICTION_IDS.OTHERS]: 20,
  },
  {
    id: 714,
    answers: [
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.YES,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },

      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.TACHYCARDIA,
      },
      {
        question: QUESTION_IDS.MUCOUS_MEMBRANE,
        answer: ANSWER_IDS.SLUDGE,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 10,
    [PREDICTION_IDS.SOLVENT]: 40,
    [PREDICTION_IDS.PESTICIDE]: 20,
    [PREDICTION_IDS.KNOCKDOWN]: 40,
    [PREDICTION_IDS.OPIOID]: 20,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 20,
    [PREDICTION_IDS.CONVULSANT]: 95,
    [PREDICTION_IDS.OTHERS]: 20,
  },
  {
    id: 715,
    answers: [
      {
        question: QUESTION_IDS.STATE_OF_ALERTNESS,
        answer: ANSWER_IDS.FAST,
      },
      {
        question: QUESTION_IDS.SEIZURE,
        answer: ANSWER_IDS.NO,
      },
      {
        question: QUESTION_IDS.PUPIL,
        answer: ANSWER_IDS.DILATED,
      },

      {
        question: QUESTION_IDS.HEART_RATE,
        answer: ANSWER_IDS.TACHYCARDIA,
      },
      {
        question: QUESTION_IDS.WHEEZING,
        answer: ANSWER_IDS.NO,
      },
    ],
    [PREDICTION_IDS.IRRITANTGAS]: 20,
    [PREDICTION_IDS.SOLVENT]: 30,
    [PREDICTION_IDS.PESTICIDE]: 10,
    [PREDICTION_IDS.KNOCKDOWN]: 50,
    [PREDICTION_IDS.OPIOID]: 20,
    [PREDICTION_IDS.ANTICHOLINERGIC]: 50,
    [PREDICTION_IDS.CONVULSANT]: 50,
    [PREDICTION_IDS.OTHERS]: 50,
  },
];

export default rules;
