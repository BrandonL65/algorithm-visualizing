import { observable, action } from "mobx";

export default class AlgoStore {
  @observable selectedAlgorithm: string = "";
  @observable graphHeights: number[] = [];
  @observable delaySpeed: number = 100;
  @observable stopPressed: boolean = false;
  @observable loopIndex: number = 0;

  @action scrambleGraphHeights = () => {
    let newGraphHeights = this.graphHeights.slice();
    for (let i = 0; i < 60; i++) {
      newGraphHeights[i] = Math.floor(Math.random() * 500);
    }
    this.graphHeights = newGraphHeights;
  };

  @action bubbleSortArray = async () => {
    this.stopPressed = false;
    this.delaySpeed = 100;

    let newGraphHeights = this.graphHeights.slice();

    for (let i = 0; i < newGraphHeights.length; i++) {
      for (let j = 0; j < newGraphHeights.length; j++) {
        if (this.stopPressed) {
          return;
        }

        await delay(this.delaySpeed);
        let firstVal = newGraphHeights[j];
        let secondVal = newGraphHeights[j + 1];
        if (firstVal >= secondVal) {
          newGraphHeights[j + 1] = firstVal;
          newGraphHeights[j] = secondVal;
          this.graphHeights = newGraphHeights;
        }
      }
    }
  };

  @action slowDown = () => {
    this.delaySpeed = this.delaySpeed + 15;
  };
  @action speedUp = () => {
    if (this.delaySpeed > 2) {
      this.delaySpeed = this.delaySpeed - 15;
    }
  };
}

const delay = async (time: number) => {
  return new Promise((res) => {
    setTimeout(res, time);
  });
};
