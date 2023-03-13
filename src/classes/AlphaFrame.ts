import LetterFrameState from "../enums/LetterFrameState";
import ILetterFrame from "../types/ILetterFrame";

export default class AlplaFrame implements ILetterFrame{
    content: string;
    state: LetterFrameState;
    disable: boolean;
 
    constructor(){
        this.content = "";
        this.state = LetterFrameState.Wrong;
        this.disable = this.isDisabled(this.state);
    }

    isDisabled(state : LetterFrameState){
        return state == LetterFrameState.Wrong ? true : false;
    }
}