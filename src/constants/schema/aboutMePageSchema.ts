import * as yup from "yup";

export const maxStringCount = 200;
export const aboutMeSchema = yup.object().shape({
    about:
        yup
            .string()
            .required("Введите текст в поле")
            .max(maxStringCount, "Максимальное колиство символов не более 200")
});