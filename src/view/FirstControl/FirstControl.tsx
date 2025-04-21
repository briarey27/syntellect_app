import { observer } from "mobx-react-lite";
import { InputWithButtons } from "../../components/InputWithButtons";
import { firstControlViewModel } from "./FirstControlViewModel";

export const FirstControl = observer(() => {
    return (
        <InputWithButtons
            value={firstControlViewModel.input.value}
            onChange={firstControlViewModel.input.setValue}
            leftButtons={firstControlViewModel.leftButtons.buttons}
            rightButtons={firstControlViewModel.rightButtons.buttons}
        />
    );
});
