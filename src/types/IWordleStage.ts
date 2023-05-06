import IWordGuess from "./IWordGuess";

export default interface IWordleStage {
    currentIndex: number,
    currentStage : IWordGuess
    stageValue: Array<IWordGuess>
}
