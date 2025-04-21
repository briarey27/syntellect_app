import { InputModel } from "./InputModel";
import { makeAutoObservable, runInAction } from "mobx";

interface IDropDownParams<K> {
    input: InputModel;
    fetchItemsData: (query: string) => Promise<K[]>;
    actionSelectItem: (selected: K) => string;
    maxItems?: number;
}

export class DropDownSelectControlModel<T> {
    input: InputModel;
    items: T[] = [];
    isLoading: boolean = false;
    maxItems: number;
    fetchItemsData: (query: string) => Promise<T[]>;
    actionSelectItem: (selected: T) => string;
    selected: T | null = null;

    constructor({
        input,
        fetchItemsData,
        actionSelectItem,
        maxItems,
    }: IDropDownParams<T>) {
        this.input = input ?? new InputModel();
        this.fetchItemsData = fetchItemsData;
        this.actionSelectItem = actionSelectItem;
        this.maxItems = maxItems ?? 5;
        makeAutoObservable(this);
    }

    fetchData = async (query: string) => {
        if (!query) {
            this.items = [];
            return;
        }

        runInAction(() => {
            this.isLoading = true;
        });
        try {
            const result = await this.fetchItemsData(query);
            runInAction(() => {
                this.items = result.slice(0, this.maxItems);
            });
        } catch (error) {
            this.isLoading = false;
            this.items = [];
            console.error("fetch error", error);
        } finally {
            runInAction(() => {
                this.isLoading = false;
            });
        }
    };

    selectItem = (item: T) => {
        this.selected = item;
        this.input.setValue(this.actionSelectItem(item));
        this.items = [];
    };
}
