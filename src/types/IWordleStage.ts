import IStage from "./IStage";

export default interface IWordleStage {
    currentIndex: number,
    currentStage : IStage
    stageValue: Array<IStage>
}
