enum Sex {
    man = "Man",
    woman = "Woman"
};

interface ISexOption {
    value: string;
    label: Sex;
};

export const sexOptions: ISexOption[] = Object.values(Sex).map(item => ({
    value: item,
    label: item
}));