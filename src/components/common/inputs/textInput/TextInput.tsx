import { FC } from "react";
import { useFormContext } from "react-hook-form";
import style from "./textInput.module.scss";

type Props = {
    name: string,
    defaultValue: string,
    placeHolder: string,
    id: string
};

const TextInput: FC<Props> = ({ id, name, defaultValue, placeHolder }) => {
    const { register } = useFormContext();
    return (
        <input
            id={id}
            className={style.input}
            type="text"
            placeholder={placeHolder}
            defaultValue={defaultValue}
            {...register(name, {
                required: "Поле обязательно для заполнения"
            })}
        />
    );
};
 
export default TextInput;