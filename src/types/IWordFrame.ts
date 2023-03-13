import LetterFrameState from "../enums/LetterFrameState";

export default interface IWordFrame{
    guess : string;
    correctness :  Array<LetterFrameState>;
}