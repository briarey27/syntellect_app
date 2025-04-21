import { makeAutoObservable } from "mobx";

export class InputModel {
    value: string = "";
    constructor() {
        makeAutoObservable(this);
    }
    setValue = (str: string) => (this.value = str);
}
