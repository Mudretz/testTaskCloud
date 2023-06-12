import { FC } from "react";
import { useFormContext } from "react-hook-form";
import style from "./textInput.module.scss";

type Props = {
    name: string,
    placeholder?: string,
    id: string
};

const TextInput: FC<Props> = ({ id, name, placeholder="Placeholder" }) => {
    const { register } = useFormContext();
    return (
        <input
            id={id}
            className={style.input}
            type="text"
            placeholder={placeholder}
            {...register(name, {
                required: "Поле обязательно для заполнения"
            })}
        />
    );
};
 
export default TextInput;