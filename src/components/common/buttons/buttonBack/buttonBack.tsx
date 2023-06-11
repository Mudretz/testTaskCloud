import { FC } from "react";
import { useNavigate } from "react-router-dom";
import style from "./buttonBack.module.scss";

type Props = {
    id: string,
    children: string
};

const ButtonBack: FC<Props> = ({ id, children }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className={style.button}
            id={id}
        >
            {children}
        </button>
    );
}
 
export default ButtonBack;