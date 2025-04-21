import { InputModel } from "../../viewModels/InputModel";
import { ButtonModel } from "../../viewModels/ButtonModel";
import { ButtonsGroupModel } from "../../viewModels/ButtonModel";
import { InputWithButtonsControlModel } from "../../viewModels/InputWithButtonsControlModel";

const input = new InputModel();

const left = new ButtonsGroupModel([
    new ButtonModel("Is Number", () => {
        if (input.value.length && !isNaN(Number(input.value))) {
            alert(input.value);
        }
    }),
]);

const right = new ButtonsGroupModel([
    new ButtonModel("Show alert", () => {
        if (input.value.length) {
            alert(input.value);
        }
    }),
]);

export const secondControlViewModel = new InputWithButtonsControlModel({
    input,
    leftButtons: left,
    rightButtons: right,
});
