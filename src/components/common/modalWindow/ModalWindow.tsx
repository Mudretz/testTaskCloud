import { FC, PropsWithChildren } from "react";
import classNames from "classnames";
import styles from "./modalWindow.module.scss";

type Props = {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
};

const Modal: FC<PropsWithChildren<Props>> = ({ active, setActive, children }) => {
    return (
        <div
            className={
                classNames(styles.modal,
                    { [styles.modal_active]: active })
                }
            onClick={() => setActive(false)}
        >
            <div
                className={styles.modal_content} 
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};
 
export default Modal;