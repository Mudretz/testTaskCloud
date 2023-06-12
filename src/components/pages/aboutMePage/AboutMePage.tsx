import { FC, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "../../../store/hook/hook";
import { aboutMeReceived, clearStateData } from "../../../store/data/data";
import { aboutMeSchema, maxStringCount} from "../../../constants/schema/aboutMePageSchema";
import { usePostDataMutation } from "../../../services/apiReduxQuery";
import { getAboutMeData } from "../../../store/data/selector";
import { stepDecrease } from "../../../store/step/step";
import Button from "../../common/button/Button";
import ModalSuccess from "../../ui/modalSuccess/ModalSuccess";
import ModalError from "../../ui/modalError/ModalError";
import style from "./aboutMePage.module.scss";

type FormData = yup.InferType<typeof aboutMeSchema>;

const AboutMePage: FC = () => {
    const [active, setActive] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [stringCount, setStringCount] = useState(0);
    const [ postData, { isSuccess, isError } ] = usePostDataMutation();
    const aboutMeData = useAppSelector(getAboutMeData);
    const dispatch = useAppDispatch();
    const { register, handleSubmit } = useForm<FormData>({
        resolver: yupResolver(aboutMeSchema),
        defaultValues: {
            about: aboutMeData
        }
    });

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const inputText = e.target.value;
        setStringCount(inputText.length);
    };

    const onSubmit = async (data: FormData) => {
        dispatch(aboutMeReceived(data.about));
        try {
            const result = await postData({}).unwrap();
            if (result.status === "success") {
                dispatch(clearStateData());
                setMessage(result.message);
                setActive(true);
            }
        } catch (error) {
            setActive(true);
        };
    };

    const handleClick = () => {
        dispatch(stepDecrease());
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.form_item}>
                    <p>
                        {isSuccess && active
                            ? 
                                "О себе" 
                            : 
                                "About"
                        }
                    </p>
                    <textarea
                        className={style.text_area}
                        {...register("about")}
                        onChange={handleTextAreaChange}
                    >         
                    </textarea>
                    <p>{stringCount}/{maxStringCount}</p>
                </div>
                <div className={style.buttons_group}>
                    <Button
                        id="button-back"
                        onClick={handleClick}
                        theme={"secondary"}
                    >
                        Назад
                    </Button>
                    <Button
                        id="button-next"
                        theme="primary"
                    >
                        Отправить
                    </Button>
                </div>
            </form>
            {isSuccess &&
                <ModalSuccess active={active} setActive={setActive} message={message}/>
            }
            {isError &&
                <ModalError active={active} setActive={setActive}/>
            }
        </div>
    );
};
 
export default AboutMePage;