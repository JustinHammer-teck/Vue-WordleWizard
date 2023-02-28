import LetterFrameState from "../enums/LetterFrameState";
import ILetterFrame from "../types/ILetterFrame";

class NextWordFrame implements ILetterFrame {
    content: string;
    state: LetterFrameState;
    disable: boolean;

    constructor() {
        this.content = '';
        this.state = LetterFrameState.Wrong;
        this.disable = false;
      }

}