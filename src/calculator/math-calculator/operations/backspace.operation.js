export class BackspaceOperation {

    constructor() {
        this.name = 'backspace';
        this.symbol = '⌫';
        this.keyCodes = ['Backspace'];
    }

    operate(data) {

        if (data.isResult) {
            data.value = '0';
        }

        data.value = data.value.slice(0, -1);
        data.isResult = false;

        if (data.value.length === 0 || !isFinite(data.value)) {
            data.value = '0';
        }

        return data;
    }
}