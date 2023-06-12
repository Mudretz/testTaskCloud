import * as yup from "yup";

export const advantagesPageSchema = yup.object({
    advantages: yup.array().of(
        yup
            .object().shape({
                advantage: yup.string().required("Поле обязательно для заполнения").matches(/^[A-Za-z]+$/, "Допустимы только буквы"),
            }))
            .required("Поле обязательно для заполнения"),
    checkboxes: yup.array().required("Выберите один или несколько вариантов").min(1, "Выберите один или несколько вариантов"),
    radioOption: yup.string().required("Выберите один из вариантов")
});