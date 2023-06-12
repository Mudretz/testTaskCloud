import { FC } from "react";
import TextInput from "../textInput/TextInput";
import style from "./textFormInput.module.scss";

type Props = {
    id: string,
    name: string,
    nameInput: string,
    placeholder?: string,
    errorMessage: string,
    underText?: string
};

const TextFormInput: FC<Props> = ({ id, name, nameInput, placeholder, errorMessage, underText = "Tip" }) => {

    return (
        <div className={style.form_item}>
            <p>{name}</p>
            <TextInput
                id={id}
                name={nameInput}
                placeholder={placeholder}
            />
            {errorMessage
                ?
                    <p className={style.error}>
                        {errorMessage}
                    </p>
                :
                    <p className={style.under_text}>
                        {underText}
                    </p>
            }
        </div>
    );
};
 
export default TextFormInput;