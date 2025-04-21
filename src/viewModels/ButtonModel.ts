export class ButtonModel {
    label: string;
    onClick: () => void;

    constructor(label: string, onClick: ()=> void) {
        this.label = label;
        this.onClick = onClick;
    }
}

export class ButtonsGroupModel {
    buttons: ButtonModel[];

    constructor(buttons: ButtonModel[] = []) {
        this.buttons = buttons;
    }
}

