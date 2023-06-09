import { FC } from "react";
import { useFormContext } from "react-hook-form";
import style from "./checkBox.module.scss";

type Props = {
    name: string,
    nameInput: string,
    data: number[],
    errorMessage: string
};

const Checkbox: FC<Props> = ({ name, nameInput, data, errorMessage }) => {
    const { register } = useFormContext();

    return (
        <div className={style.form_item}>
            <p>{name}</p>
            <div className={style.input_list}>
                {data.map((item) => (
                    <label key={item}>
                        <input type="checkbox" value={item} {...register(nameInput)} className={style.input}/>
                        {item}
                    </label>
                ))}
            </div>
            <p className={style.error}>{errorMessage}</p>
        </div>
    );
};
 
export default Checkbox;