import LetterFrameState from "../enums/LetterFrameState";
import IWordFrame from "../types/IWordFrame";

class WordFrame implements IWordFrame {
    guess: string;
    correctness: Array<LetterFrameState>;

    constructor() {
        this.guess = "";
        this.correctness = [
          LetterFrameState.Wrong, 
          LetterFrameState.Wrong, 
          LetterFrameState.Wrong,
          LetterFrameState.Wrong,
          LetterFrameState.Wrong
        ];
      }

}