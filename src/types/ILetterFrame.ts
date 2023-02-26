import LetterFrameState from "../enums/LetterFrameState"

interface ILetterFrame {
    content : string,
    state : LetterFrameState,
    disable : boolean
}

export default ILetterFrame