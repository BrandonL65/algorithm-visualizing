import { observable } from "mobx";

export default class AlgoStore {
  @observable selectedAlgorithm: string = "";
}
