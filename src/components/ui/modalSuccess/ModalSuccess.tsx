import { FC } from "react";
import successIcon from "../../../assets/success.svg";
import Modal from "../../common/modalWindow/ModalWindow";

import style from "./modalSucces.module.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../common/button/Button";

type Props = {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
    message: string
};

const ModalSuccess: FC<Props> = ({ active, setActive, message }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/testTaskCloud");
    };

    return (
        <Modal active={active} setActive={setActive}>
            <div className={style.container}>
                <p>{message}</p>
                <img src={successIcon} alt="успешно" />
                <div onClick={handleClick}>
                    <Button
                        id="button-to-main"
                        onClick={handleClick}
                        theme="primary"
                    >
                        На главную
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
 
export default ModalSuccess;