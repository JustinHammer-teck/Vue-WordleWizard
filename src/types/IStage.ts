import LetterFrameState from "../enums/LetterFrameState"

export default interface IStage{
    guesses: string
    correctness: Array<LetterFrameState>
}