enum Sex {
    man = "Man",
    woman = "Woman"
};

interface ISexOption {
    value: string;
    label: Sex;
};

export const sexOptions: ISexOption[] = Object.values(Sex).map(item => ({
    value: item.charAt(0).toLowerCase() + item.slice(1),
    label: item
}));