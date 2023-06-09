import { FC } from "react";
import styles from "./modalWindow.module.scss";

type Props = {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
    children: React.ReactNode
};

const Modal: FC<Props> = ({ active, setActive, children }) => {
    return (
        <div
            className={
                active 
                    ? 
                        `${styles.modal} ${styles.modal_active}`
                    : 
                        styles.modal
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