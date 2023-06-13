import { ISexOption } from "../store/data/type.data";

enum Sex {
    man = "Man",
    woman = "Woman"
};

export const sexOptions: ISexOption[] = Object.values(Sex).map(item => ({
    value: item,
    label: item
}));