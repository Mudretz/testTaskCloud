import { FC } from "react";
import style from "./maskPhoneInput.module.scss";
import { Controller, useFormContext } from "react-hook-form";
import MaskedInput from "react-text-mask";

type Props = {
    name: string,
    defaultValue: string
};

const MaskPhoneInput: FC<Props> = ({ name, defaultValue }) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            defaultValue={defaultValue}
            name={name}
            render={({
                field: { onChange, value}
            }) => (
                <MaskedInput
                    mask={["+", "7", " ", '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                    placeholder={"+7 999 999-99-99"}
                    guide={false}
                    value={value}
                    onChange={onChange}
                    className={style.input}
                />
            )}
        />
    );
};
 
export default MaskPhoneInput;