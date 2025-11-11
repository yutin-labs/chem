// 問題名稱映射（英文到中文）
export const questionNameMap: Record<string, string> = {
  "State of Alertness": "警覺狀態 (State of Alertness)",
  "Burning Throat/Nose": "喉嚨/鼻子灼熱 (Burning Throat/Nose)",
  Wheezing: "喘鳴 (Wheezing)",
  "Shortness of Breath": "呼吸短促 (Shortness of Breath)",
  "Wet lungs/Rales": "肺部濕囉音 (Wet lungs/Rales)",
  Hypoventilation: "換氣不足 (Hypoventilation)",
  Sweaty: "出汗 (Sweaty)",
  "Burning Chest Pain": "胸部灼痛 (Burning Chest Pain)",
  "Irritated or Burning Skin": "皮膚刺激或灼熱 (Irritated or Burning Skin)",
  Pupil: "瞳孔 (Pupil)",
  Seizure: "癲癇發作 (Seizure)",
  "Heart Rate": "心率 (Heart Rate)",
  "Low Blood Pressure": "低血壓 (Low Blood Pressure)",
  "Sudden Onset of Unconsciousness":
    "突然失去意識 (Sudden Onset of Unconsciousness)",
  "Eye Irritation": "眼睛刺激 (Eye Irritation)",
  "Mucous Membrane": "黏膜狀態 (Mucous Membrane)",
  Syncope: "暈厥 (Syncope)",
  "Dizziness/Lightheadedness": "頭暈/頭重腳輕 (Dizziness/Lightheadedness)",
};

// Rule 類別
export class Rule {
  id: number;
  questionList: string[];
  answers: string[];
  syndrome: string;
  CL_irritantgas: number;
  CL_solvent: number;
  CL_pesticide: number;
  CL_knockdown: number;
  CL_opioid: number;
  CL_anticholinergic: number;
  CL_convulsant: number;
  CL_others: number;

  constructor(ruleData: any) {
    this.id = ruleData.id;
    this.questionList = ruleData.answers.map((a: any) => a.question);
    this.answers = ruleData.answers.map((a: any) => a.answer);
    this.syndrome = ruleData.syndrome;
    this.CL_irritantgas = ruleData.irritantgas;
    this.CL_solvent = ruleData.solvent;
    this.CL_pesticide = ruleData.pesticide;
    this.CL_knockdown = ruleData.knockdown;
    this.CL_opioid = ruleData.opioid;
    this.CL_anticholinergic = ruleData.anticholinergic;
    this.CL_convulsant = ruleData.convulsant;
    this.CL_others = ruleData.others;
  }

  test(answerMap: Map<string, string>): boolean {
    let ruleFired = 0;
    const maxTestCount = this.questionList.length;

    for (let i = 0; i < this.questionList.length; i++) {
      const ans = answerMap.get(this.questionList[i]);
      if (ans === this.answers[i]) {
        ruleFired++;
        if (ruleFired === maxTestCount) {
          return true;
        }
      }
    }
    return false;
  }

  meanCLs(): number {
    return (
      (this.CL_irritantgas +
        this.CL_solvent +
        this.CL_pesticide +
        this.CL_knockdown +
        this.CL_opioid +
        this.CL_anticholinergic +
        this.CL_convulsant) /
      7
    );
  }

  max2ndMaxDiff(): number {
    const myArray = [
      this.CL_irritantgas,
      this.CL_solvent,
      this.CL_pesticide,
      this.CL_knockdown,
      this.CL_opioid,
      this.CL_anticholinergic,
      this.CL_convulsant,
    ];
    const maxCL = Math.max(...myArray);
    myArray.sort((a, b) => b - a);

    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i] < maxCL) {
        return maxCL - myArray[i];
      }
    }
    return 0;
  }

  multiplier(): number {
    return this.max2ndMaxDiff() / 10;
  }

  multiplierSectorX(): number {
    if (this.CL_others < 15) return 8;
    else if (this.CL_others <= 20) return 7.5;
    else if (this.CL_others <= 30) return 6;
    else if (this.CL_others <= 40) return 4;
    else if (this.CL_others < 50) return 2.5;
    else return 1;
  }
}
