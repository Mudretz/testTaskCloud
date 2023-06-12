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
                {data.map((item, index) => (
                    <label key={item}>
                        <input
                            id={`field-checkbox-group-option-${index + 1}`}
                            type="checkbox" value={item}
                            className={style.input}
                            {...register(nameInput)}
                        />
                        {item}
                    </label>
                ))}
            </div>
            <p className={style.error}>{errorMessage}</p>
        </div>
    );
};
 
export default Checkbox;