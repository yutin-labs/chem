import type { QuestionAnswer } from '../question/questions-data';
import type { Rule, Answer } from './rules-data';

import { PREDICTION_IDS } from './rules-data';

export default class RuleCalculator {
  rule: Rule;

  constructor(rule: Rule) {
    this.rule = rule;
  }

  get answers(): Answer[] {
    return this.rule.answers;
  }

  get irritantgas(): number {
    return this.rule[PREDICTION_IDS.IRRITANTGAS];
  }

  get solvent(): number {
    return this.rule[PREDICTION_IDS.SOLVENT];
  }

  get pesticide(): number {
    return this.rule[PREDICTION_IDS.PESTICIDE];
  }

  get knockdown(): number {
    return this.rule[PREDICTION_IDS.KNOCKDOWN];
  }

  get opioid(): number {
    return this.rule[PREDICTION_IDS.OPIOID];
  }

  get anticholinergic(): number {
    return this.rule[PREDICTION_IDS.ANTICHOLINERGIC];
  }

  get convulsant(): number {
    return this.rule[PREDICTION_IDS.CONVULSANT];
  }

  get others(): number {
    return this.rule[PREDICTION_IDS.OTHERS];
  }

  get multiplier() {
    const myArray = [
      this.rule[PREDICTION_IDS.IRRITANTGAS],
      this.rule[PREDICTION_IDS.SOLVENT],
      this.rule[PREDICTION_IDS.PESTICIDE],
      this.rule[PREDICTION_IDS.KNOCKDOWN],
      this.rule[PREDICTION_IDS.OPIOID],
      this.rule[PREDICTION_IDS.ANTICHOLINERGIC],
      this.rule[PREDICTION_IDS.CONVULSANT],
    ];
    const maxCL = Math.max(
      this.rule[PREDICTION_IDS.IRRITANTGAS],
      this.rule[PREDICTION_IDS.SOLVENT],
      this.rule[PREDICTION_IDS.PESTICIDE],
      this.rule[PREDICTION_IDS.KNOCKDOWN],
      this.rule[PREDICTION_IDS.OPIOID],
      this.rule[PREDICTION_IDS.ANTICHOLINERGIC],
      this.rule[PREDICTION_IDS.CONVULSANT]
    );

    let max2nd = 0;

    myArray.sort(function compare(a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
    myArray.reverse();

    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i] < maxCL) {
        max2nd = myArray[i];
        break;
      }
    }

    return (maxCL - max2nd) / 10;
  }

  get multiplierSectorX() {
    const other = this.rule[PREDICTION_IDS.OTHERS];
    if (other < 15) {
      return 8;
    } else if (other > 15 && other <= 20) {
      return 7.5;
    } else if (other > 20 && other <= 30) {
      return 6;
    } else if (other > 30 && other <= 40) {
      return 4;
    } else if (other > 40 && other < 50) {
      return 2.5;
    } else {
      return 1;
    }
  }

  test(answers: QuestionAnswer): boolean {
    for (const { question, answer } of this.rule.answers) {
      if (answers[question] !== answer) {
        return false;
      }
    }
    return true;
  }

  contains(answers: Answer[]): boolean {
    return answers.every((inputAnswer) =>
      this.rule.answers.some(
        (ruleAnswer) =>
          ruleAnswer.question === inputAnswer.question &&
          ruleAnswer.answer === inputAnswer.answer
      )
    );
  }
}
