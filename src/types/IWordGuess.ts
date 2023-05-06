import LetterFrameState from "../enums/LetterFrameState"

export default interface IWordGuess {
    guess: string
    correctness: Array<LetterFrameState>
}