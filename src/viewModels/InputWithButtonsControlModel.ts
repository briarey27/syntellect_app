import { ButtonsGroupModel } from "./ButtonModel";
import { InputModel } from "./InputModel";

interface IParams {
    input?: InputModel;
    leftButtons?: ButtonsGroupModel;
    rightButtons?: ButtonsGroupModel;
}

export class InputWithButtonsControlModel {
    input: InputModel;
    leftButtons: ButtonsGroupModel;
    rightButtons: ButtonsGroupModel;

    constructor({ input, leftButtons, rightButtons }: IParams) {
        this.input = input ?? new InputModel();
        this.leftButtons = leftButtons ?? new ButtonsGroupModel();
        this.rightButtons = rightButtons ?? new ButtonsGroupModel();
    }
}
