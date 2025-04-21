import { ButtonModel } from "../../../viewModels/ButtonModel";

interface IProps {
    value: string;
    onChange: (val: string) => void;
    leftButtons?: ButtonModel[];
    rightButtons?: ButtonModel[];
    placeholder?: string;
}

export const InputWithButtons = ({
    value,
    onChange,
    leftButtons = [],
    rightButtons = [],
}: IProps) => {
    return (
        <div className={"input_wrapper"}>
            {leftButtons && (
                <div className={"button_block"}>
                    {leftButtons.map((btn, idx) => (
                        <button
                            className={"button_primary"}
                            key={`left-${idx}`}
                            onClick={btn.onClick}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>
            )}
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={"input_content"}
            />

            {rightButtons && (
                <div className={"button_block"}>
                    {rightButtons.map((btn, idx) => (
                        <button
                            className={"button_primary"}
                            key={`right-${idx}`}
                            onClick={btn.onClick}
                        >
                            {btn.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
