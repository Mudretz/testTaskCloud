import { FC } from "react";
import style from "./buttonSubmit.module.scss";

type Props = {
    id: string,
    text: string
};

const ButtonSubmit: FC<Props> = ({ id, text }) => {
    return (
        <button
            type="submit"
            className={style.button}
            id={id}
        >
            {text}
        </button>
    );
}
 
export default ButtonSubmit;