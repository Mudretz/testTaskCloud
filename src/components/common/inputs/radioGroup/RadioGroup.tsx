import { FC } from "react";
import { useFormContext } from "react-hook-form";
import style from "./radioGroup.module.scss";

type Props = {
    name: string,
    nameInput: string,
    data: number[],
    errorMessage: string
};

const RadioGroup: FC<Props> = ({ name, nameInput, data, errorMessage }) => {
    const { register } = useFormContext();

    return (
        <div className={style.form_item}>
            <p>{name}</p>
            <div className={style.input_list}>
                {data.map((item, index) => (
                    <label key={item}>
                        <input
                            id={`field-radio-group-option-${index + 1}`}
                            type="radio"
                            value={item}
                            {...register(nameInput)}
                            className={style.input}
                        />
                        {item}
                    </label>
                ))}
            </div>
            <p className={style.error}>{errorMessage}</p>
        </div>
    );
};
 
export default RadioGroup;