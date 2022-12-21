export class DataNumbersRequest {
    numbers: number[];
    order: string;

    constructor(numbers: number[], order: string) {
        this.numbers = numbers;
        this.order = order;
    }
}