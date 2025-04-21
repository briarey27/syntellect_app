import { CountryInfo } from "../../../api/apiService";

interface IProps {
    country: CountryInfo;
    onSelect: () => void;
}
export const CountryItem = ({ country, onSelect }: IProps) => {
    const { fullName, name, flag } = country;

    return (
        <div onClick={onSelect} className={"country_item"}>
            <span className={"country_item__name"}>{name}</span>
            <span>|</span>
            <span className={"country_item__fullname"}>{fullName}</span>
            <div className={"flag_wrapper"}>
                <img className={"flag"} src={flag} alt={`flag ${name}`} />
            </div>
        </div>
    );
};
