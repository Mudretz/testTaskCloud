import { FC } from "react";
import classNames from "classnames";
import style from "./button.module.scss";

type Props = {
    id: string,
    onClick?: () => void,
    children: string,
    theme: "primary" | "secondary"
};

const Button: FC<Props> = ({ id, onClick, children, theme }) => {

    return (
        <button
            type="submit"
            onClick={onClick}
            className={classNames({
                [style.primary] : theme === "primary",
                [style.secondary]: theme === "secondary"
            })}
            id={id}
        >
            {children}
        </button>
    );
}
 
export default Button;