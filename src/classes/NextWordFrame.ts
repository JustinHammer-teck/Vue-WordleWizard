import LetterFrameState from "../enums/LetterFrameState";
import ILetterFrame from "../types/ILetterFrame";
import IWordFrame from "../types/IWordFrame";

class WordFrame implements IWordFrame {
    word: string;
    columns: number;

    constructor() {
        this.word = "";
        this.columns = 5;
      }
}