import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { DropDown } from "../../components/DropDown";
import { CountryItem } from "../../components/CountryItem";
import { useDebounce } from "../../shared/hooks/useDebounce";
import { DropDownSelectControlModel } from "../../viewModels/DropdownInputControlModel";
import { CountryInfo } from "../../api/apiService";

interface IModel {
    model: DropDownSelectControlModel<CountryInfo>;
}

export const DropDownSelectControl = observer(({ model }: IModel) => {
    const { items, fetchData, selectItem, input, selected, isLoading } = model;

    const debouncedInput = useDebounce(input.value, 50);

    useEffect(() => {
        if (debouncedInput === selected?.name) {
            return;
        }
        fetchData(debouncedInput);
    }, [debouncedInput]);

    return (
        <DropDown
            value={input.value}
            onChange={input.setValue}
            isLoading={isLoading}
            items={
                input.value
                    ? items.map((country, index) => (
                        <CountryItem
                            onSelect={() => selectItem(country)}
                            key={country.fullName + index}
                            country={country}
                          />
                    ))
                    : []
            }
        />
    );
});
