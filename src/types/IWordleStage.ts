import IStage from "./IStage";

export default interface IWordleStage {
    currentIndex: number,
    currentGuesses: Array<string>[5],
    currentCorrectness : Array<string>[5],
    stageValue: Array<IStage>
}
