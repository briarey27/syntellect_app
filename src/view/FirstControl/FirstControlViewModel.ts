import { InputModel } from "../../viewModels/InputModel";
import { ButtonModel } from "../../viewModels/ButtonModel";
import { ButtonsGroupModel } from "../../viewModels/ButtonModel";
import { InputWithButtonsControlModel } from "../../viewModels/InputWithButtonsControlModel";

const input = new InputModel();

const right = new ButtonsGroupModel([
    new ButtonModel("Clear", () => input.setValue("")),
    new ButtonModel("Hello world!", () => input.setValue("Hello world!")),
]);

export const firstControlViewModel = new InputWithButtonsControlModel({
    input,
    rightButtons: right,
});
