import * as yup from "yup";

export const schemaPersonalInfo = yup.object({
    nickname: 
        yup
            .string()
            .trim()
            .required("Поле обязательно для заполнения")
            .matches(
                /^[a-zA-Z0-9а-яА-Я]*$/,
                "Специальные символы не допустимы"
            )
            .max(30, "Максимальное колиство букв не более 30"),
    name:
        yup
            .string()
            .trim()
            .required("Поле обязательно для заполнения")
            .matches(/^[a-zA-Zа-яА-Я]*$/, "Допустимы только буквы")
            .max(50, "Максимальное колиство букв не более 30"),
    sername:
        yup
            .string()
            .trim()
            .required("Поле обязательно для заполнения")
            .matches(/^[a-zA-Zа-яА-Я]*$/, "Допустимы только буквы")
            .max(50, "Максимальное колиство букв не более 30"),
    sex: yup.object({
        value: yup.string().required("Выберите пол"),
        label: yup.string().required("Выберите пол"),
    }),
}).required();

