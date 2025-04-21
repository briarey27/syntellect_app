import { ReactNode } from "react";
import spinner from "../../../shared/assets/spinner.svg";
interface IProps {
    value: string;
    onChange: (val: string) => void;
    items?: ReactNode[];
    isLoading?: boolean;
}

export const DropDown = ({ value, onChange, items, isLoading }: IProps) => {
    return (
        <div className={"input_wrapper dropdown_wrapper"}>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={"input_content"}
            />
            {Boolean(items?.length) && (
                <div className={"dropdown_content"}>{items}</div>
            )}
            {isLoading && (
                <img className={"spinner"} src={spinner} alt={"spinner"} />
            )}
        </div>
    );
};
