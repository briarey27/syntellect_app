import { InputModel } from "../../viewModels/InputModel";
import { DropDownSelectControlModel } from "../../viewModels/DropdownInputControlModel";
import { CountryInfo, getCountryByName } from "../../api/apiService";

const actionSelectItem = (country: CountryInfo) => {
    return country.name;
};

const fetchItemsData = async (value: string) => {
    return await getCountryByName(value);
};
export const modelMax3 = new DropDownSelectControlModel<CountryInfo>({
    input: new InputModel(),
    fetchItemsData,
    actionSelectItem,
    maxItems: 3,
});

export const modelMax10 = new DropDownSelectControlModel<CountryInfo>({
    input: new InputModel(),
    fetchItemsData,
    actionSelectItem,
    maxItems: 10,
});
