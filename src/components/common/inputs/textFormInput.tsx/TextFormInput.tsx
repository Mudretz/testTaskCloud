import { FC } from "react";
import TextInput from "../textInput/TextInput";
import style from "./textFormInput.module.scss";

type Props = {
    id: string,
    name: string,
    nameInput: string,
    defaultValue: string,
    placeHolder: string,
    errorMessage: string
};

const TextFormInput: FC<Props> = ({ id, name, nameInput, defaultValue, placeHolder, errorMessage }) => {

    return (
        <div className={style.form_item}>
            <p>{name}</p>
            <TextInput
                id={id}
                name={nameInput}
                defaultValue={defaultValue}
                placeHolder={placeHolder}
            />
            <p className={style.error}>
                {errorMessage}
            </p>
        </div>
    );
};
 
export default TextFormInput;