enum Sex {
    man = "Man",
    woman = "Woman"
};

export const sexOptions = Object.values(Sex).map(item => ({
    value: `field-sex-option-${item}`,
    label: item
}));