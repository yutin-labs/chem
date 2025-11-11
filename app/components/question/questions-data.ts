export const QTYPE_STATE = 'STATE';
export const QTYPE_EYE = 'EYE';
export const QTYPE_UPPER_AIRWAY = 'UPPER AIRWAY';
export const QTYPE_RESPIRATORY = 'RESPIRATORY';
export const QTYPE_NEURO = 'NEUROLOGICAL';
export const QTYPE_CARDIO = 'CARDIO';
export const QTYPE_NEUROSYM = 'NEURO SYMPTOM';
export const QTYPE_SKIN = 'SKIN';
export const QTYPE_GASTRO = 'GASTRO';

export const SIGN = 0;
export const SYMPTOM = 1;
export const SIGN_UNCONSCIOUS = 2;

export type QuestionType =
  | typeof QTYPE_STATE
  | typeof QTYPE_EYE
  | typeof QTYPE_UPPER_AIRWAY
  | typeof QTYPE_RESPIRATORY
  | typeof QTYPE_NEURO
  | typeof QTYPE_CARDIO
  | typeof QTYPE_NEUROSYM
  | typeof QTYPE_SKIN
  | typeof QTYPE_GASTRO;

export type SignSymptom =
  | typeof SIGN
  | typeof SYMPTOM
  | typeof SIGN_UNCONSCIOUS;

export enum QUESTION_IDS {
  STATE_OF_ALERTNESS = 'STATE_OF_ALERTNESS',
  BURNING_THROAT_NOSE = 'BURNING_THROAT_NOSE',
  WHEEZING = 'WHEEZING',
  SHORTNESS_OF_BREATH = 'SHORTNESS_OF_BREATH',
  WET_LUNGS_RALES = 'WET_LUNGS_RALES',
  HYPOVENTILATION = 'HYPOVENTILATION',
  SWEATY = 'SWEATY',
  BURNING_CHEST_PAIN = 'BURNING_CHEST_PAIN',
  IRRITATED_OR_BURNING_SKIN = 'IRRITATED_OR_BURNING_SKIN',
  PUPIL = 'PUPIL',
  SEIZURE = 'SEIZURE',
  HEART_RATE = 'HEART_RATE',
  LOW_BLOOD_PRESSURE = 'LOW_BLOOD_PRESSURE',
  SUDDEN_ONSET_UNCONSCIOUSNESS = 'SUDDEN_ONSET_UNCONSCIOUSNESS',
  EYE_IRRITATION = 'EYE_IRRITATION',
  MUCOUS_MEMBRANE = 'MUCOUS_MEMBRANE',
  SYNCOPE = 'SYNCOPE',
  DIZZINESS_LIGHTHEADEDNESS = 'DIZZINESS_LIGHTHEADEDNESS',
}

export enum ANSWER_IDS {
  CANT_ASSESS = "無法評估 (Can't Assess)",
  YES = '是 (Yes)',
  NO = '否 (No)',
  PINPOINT = '針尖狀 (Pinpoint)',
  NORMAL = '正常 (Normal)',
  DILATED = '放大 (Dilated)',
  BRADYCARDIA = '心搏過緩 (Bradycardia)',
  TACHYCARDIA = '心搏過速 (Tachycardia)',
  SLUDGE = 'SLUDGE症候群 (SLUDGE)',
  MOIST_OR_NORMAL = '濕潤或正常 (Moist or Normal)',
  DRY_ORAL_CAVITY = '口腔乾燥 (Dry Oral Cavity)',
  UNCONSCIOUS = '無意識 (Unconscious)',
  SLOW = '緩慢 (Slow)',
  FAST = '躁動 (Fast)',
}

export type QuestionAnswer = Record<QUESTION_IDS, ANSWER_IDS | null>;

export interface Question {
  id: QUESTION_IDS;
  question: string;
  type: QuestionType;
  sign_symptom: SignSymptom;
  description: string;
  answer: ANSWER_IDS[];
}

const questions: Question[] = [
  {
    id: QUESTION_IDS.STATE_OF_ALERTNESS,
    question: '警覺狀態 (State of Alertness)',
    type: QTYPE_STATE,
    sign_symptom: SIGN,
    description:
      '緩慢=意識改變，正常=清醒，躁動=焦慮或興奮 (Slow=Altered, Normal=Awake, Fast=Anxious or Excited)',
    answer: [
      ANSWER_IDS.UNCONSCIOUS,
      ANSWER_IDS.SLOW,
      ANSWER_IDS.NORMAL,
      ANSWER_IDS.FAST,
    ],
  },
  {
    id: QUESTION_IDS.BURNING_THROAT_NOSE,
    question: '喉嚨/鼻子灼熱 (Burning Throat/Nose)',
    type: QTYPE_UPPER_AIRWAY,
    sign_symptom: SYMPTOM,
    description: '',
    answer: [ANSWER_IDS.YES, ANSWER_IDS.NO, ANSWER_IDS.CANT_ASSESS],
  },
  {
    id: QUESTION_IDS.WHEEZING,
    question: '喘鳴 (Wheezing)',
    type: QTYPE_UPPER_AIRWAY,
    sign_symptom: SIGN,
    description: '',
    answer: [ANSWER_IDS.YES, ANSWER_IDS.NO, ANSWER_IDS.CANT_ASSESS],
  },
  {
    id: QUESTION_IDS.SHORTNESS_OF_BREATH,
    question: '呼吸短促 (Shortness of Breath)',
    type: QTYPE_UPPER_AIRWAY,
    sign_symptom: SYMPTOM,
    description: '',
    answer: [ANSWER_IDS.YES, ANSWER_IDS.NO, ANSWER_IDS.CANT_ASSESS],
  },
  {
    id: QUESTION_IDS.WET_LUNGS_RALES,
    question: '肺部濕囉音 (Wet lungs/Rales)',
    type: QTYPE_RESPIRATORY,
    sign_symptom: SIGN,
    description: '',
    answer: [ANSWER_IDS.YES, ANSWER_IDS.NO, ANSWER_IDS.CANT_ASSESS],
  },

  {
    id: QUESTION_IDS.HYPOVENTILATION,
    question: '換氣不足 (Hypoventilation)',
    type: QTYPE_RESPIRATORY,
    sign_symptom: SIGN,
    description: '',
    answer: [ANSWER_IDS.YES, ANSWER_IDS.NO, ANSWER_IDS.CANT_ASSESS],
  },
  {
    id: QUESTION_IDS.SWEATY,
    question: '出汗 (Sweaty)',
    type: QTYPE_SKIN,
    sign_symptom: SIGN,
    description: '',
    answer: [ANSWER_IDS.YES, ANSWER_IDS.NO, ANSWER_IDS.CANT_ASSESS],
  },
  {
    id: QUESTION_IDS.BURNING_CHEST_PAIN,
    question: '胸部灼痛 (Burning Chest Pain)',
    type: QTYPE_RESPIRATORY,
    sign_symptom: SYMPTOM,
    description: '',
    answer: [ANSWER_IDS.YES, ANSWER_IDS.NO, ANSWER_IDS.CANT_ASSESS],
  },
  {
    id: QUESTION_IDS.IRRITATED_OR_BURNING_SKIN,
    question: '皮膚刺激或灼熱 (Irritated or Burning Skin)',
    type: QTYPE_SKIN,
    sign_symptom: SYMPTOM,
    description:
      '對於無反應的個體，檢查皮膚是否有紅腫或其他刺激跡象 (For unresponsive individuals, examine skin for redness or other evidence of irritation.)',
    answer: [ANSWER_IDS.YES, ANSWER_IDS.NO, ANSWER_IDS.CANT_ASSESS],
  },

  {
    id: QUESTION_IDS.PUPIL,
    question: '瞳孔 (Pupil)',
    type: QTYPE_EYE,
    sign_symptom: SIGN,
    description: '',
    answer: [
      ANSWER_IDS.PINPOINT,
      ANSWER_IDS.NORMAL,
      ANSWER_IDS.DILATED,
      ANSWER_IDS.CANT_ASSESS,
    ],
  },
  {
    id: QUESTION_IDS.SEIZURE,
    question: '癲癇發作 (Seizure)',
    type: QTYPE_NEURO,
    sign_symptom: SIGN,
    description:
      '並非所有異常動作都是癲癇發作。如果報告有反覆或持續的癲癇活動，應考慮抽搐劑或農藥中毒症候群的可能性較高 (Not all abnormal movements are seizures. If recurrent or continuous seizure activity is reported, consider the convulsant or pesticide toxidrome as more likely.)',
    answer: [ANSWER_IDS.YES, ANSWER_IDS.NO, ANSWER_IDS.CANT_ASSESS],
  },
  {
    id: QUESTION_IDS.HEART_RATE,
    question: '心率 (Heart Rate)',
    type: QTYPE_CARDIO,
    sign_symptom: SIGN,
    description:
      '除了暴露因素外，幼兒的心率會因壓力和活動而有很大差異 (In addition to exposure, the heart rates of young children can vary greatly due to stress and activity.)',
    answer: [
      ANSWER_IDS.BRADYCARDIA,
      ANSWER_IDS.NORMAL,
      ANSWER_IDS.TACHYCARDIA,
      ANSWER_IDS.CANT_ASSESS,
    ],
  },
  {
    id: QUESTION_IDS.LOW_BLOOD_PRESSURE,
    question: '低血壓 (Low Blood Pressure)',
    type: QTYPE_CARDIO,
    sign_symptom: SIGN,
    description:
      '在缺乏設備或面對大量患者時，頸動脈、股動脈和橈動脈脈搏微弱或消失表示血壓逐漸降低 (In the absence of equipment or when faced with a large number of patients, a weak or absent carotid, femoral, and radial pulses would suggest progressively lower blood pressure.)',
    answer: [ANSWER_IDS.YES, ANSWER_IDS.NO, ANSWER_IDS.CANT_ASSESS],
  },

  {
    id: QUESTION_IDS.SUDDEN_ONSET_UNCONSCIOUSNESS,
    question: '突然失去意識 (Sudden Onset of Unconsciousness)',
    type: QTYPE_NEURO,
    sign_symptom: SIGN_UNCONSCIOUS,
    description: '',
    answer: [ANSWER_IDS.YES, ANSWER_IDS.NO, ANSWER_IDS.CANT_ASSESS],
  },
  {
    id: QUESTION_IDS.EYE_IRRITATION,
    question: '眼睛刺激 (Eye Irritation)',
    type: QTYPE_EYE,
    sign_symptom: SIGN,
    description:
      '眼睛受刺激的患者會出現流淚、疼痛或灼熱感 (A patient with eye irritation will exhibit tearing, pain or burning.)',
    answer: [ANSWER_IDS.YES, ANSWER_IDS.NO, ANSWER_IDS.CANT_ASSESS],
  },

  {
    id: QUESTION_IDS.MUCOUS_MEMBRANE,
    question: '黏膜狀態 (Mucous Membrane)',
    type: QTYPE_GASTRO,
    sign_symptom: SIGN,
    description:
      '對於SLUDGE症候群，雖然嘔吐和腹痛可能不具特異性，但要注意過度流口水、流淚和不自主失禁（尿液或糞便） (For SLUDGE, while vomiting and abdominal pain can be non-specific, look for excessive drooling, tearing, and involuntary incontinence – urine or stool.)',
    answer: [
      ANSWER_IDS.SLUDGE,
      ANSWER_IDS.MOIST_OR_NORMAL,
      ANSWER_IDS.DRY_ORAL_CAVITY,
      ANSWER_IDS.CANT_ASSESS,
    ],
  },
  {
    id: QUESTION_IDS.SYNCOPE,
    question: '暈厥 (Syncope)',
    type: QTYPE_NEURO,
    sign_symptom: SYMPTOM,
    description: '',
    answer: [ANSWER_IDS.YES, ANSWER_IDS.NO, ANSWER_IDS.CANT_ASSESS],
  },
  {
    id: QUESTION_IDS.DIZZINESS_LIGHTHEADEDNESS,
    question: '頭暈/頭重腳輕 (Dizziness/Lightheadedness)',
    type: QTYPE_NEUROSYM,
    sign_symptom: SYMPTOM,
    description: '',
    answer: [ANSWER_IDS.YES, ANSWER_IDS.NO, ANSWER_IDS.CANT_ASSESS],
  },
];

export default questions;
