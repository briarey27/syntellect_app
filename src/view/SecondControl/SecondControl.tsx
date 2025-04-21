import { observer } from "mobx-react-lite";
import { InputWithButtons } from "../../components/InputWithButtons";
import { secondControlViewModel } from "./SecondControlViewModel";

export const SecondControl = observer(() => {
    return (
        <InputWithButtons
            value={secondControlViewModel.input.value}
            onChange={secondControlViewModel.input.setValue}
            leftButtons={secondControlViewModel.leftButtons.buttons}
            rightButtons={secondControlViewModel.rightButtons.buttons}
        />
    );
});
