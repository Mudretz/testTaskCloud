import { FC } from "react";
import style from "./buttonSubmit.module.scss";

type Props = {
    id: string,
    children: string
};

const ButtonSubmit: FC<Props> = ({ id, children }) => {
    return (
        <button
            type="submit"
            className={style.button}
            id={id}
        >
            {children}
        </button>
    );
}
 
export default ButtonSubmit;