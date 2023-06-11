import { FC } from "react";
import * as yup from "yup";
import { useForm, FormProvider } from "react-hook-form";
import { useAppSelector } from "../../../store/hook/hook";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { getCreateUserData } from "../../../store/data/selector";
import { createUserReceived } from "../../../store/data/data";
import { stepIncrease } from "../../../store/step/step";
import { sexOptions } from "../../../constants/sexOptions";
import { personalInfoSchema } from "../../../constants/schema/personalnfoSchema";
import ButtonSubmit from "../../common/buttons/buttonSubmit/ButtonSubmit";
import ButtonBack from "../../common/buttons/buttonBack/ButtonBack";
import TextFormInput from "../../common/inputs/textFormInput.tsx/TextFormInput";
import SelectInput from "../../common/inputs/select/SelectInput";
import style from "./personalInfoPage.module.scss";

export type FormData = yup.InferType<typeof personalInfoSchema>;

const PersonalInfoPage:FC = () => {
    const createUserData = useAppSelector(getCreateUserData);
    const dispatch = useDispatch();
    const methods = useForm<FormData>({
        defaultValues: {
            nickname: createUserData.nickname,
            name: createUserData.name,
            sername: createUserData.sername,
            sex: createUserData.sex
        },
        resolver: yupResolver(personalInfoSchema)
    });
    const { handleSubmit, formState: { errors } } = methods;

    const onSubmit = (data: FormData): void => {
        dispatch(createUserReceived(data));
        dispatch(stepIncrease());
    };

    return (
        <FormProvider {...methods}>
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                    <TextFormInput
                        id="field-nickname"
                        name="Nickname"
                        nameInput="nickname"
                        placeHolder="Placeholder"
                        errorMessage={errors.nickname?.message || ""}
                    />
                    <TextFormInput 
                        id="field-name"
                        name="Name"
                        nameInput="name"
                        placeHolder="Placeholder"
                        errorMessage={errors.name?.message || ""}
                    />
                    <TextFormInput 
                        id="field-sername"
                        name="Sername"
                        nameInput="sername"
                        placeHolder="Placeholder"
                        errorMessage={errors.sername?.message || ""}
                    />
                    <div className={`${style.form_item} ${style.select}`}>
                        <p>Sex</p>
                        <SelectInput
                            id="field-sex"
                            name="sex"
                            placeHolder="Не выбрано"
                            options={sexOptions}
                        />
                        <p className={style.error}>{errors.sex?.label?.message || ""}</p>
                    </div>
                    <div className={style.buttons_group}>
                        <ButtonBack id="button-back">
                            Назад
                        </ButtonBack>
                        <ButtonSubmit id="button-next">
                            Далее
                        </ButtonSubmit>
                    </div>
            </form>
        </FormProvider>
    );
};
 
export default PersonalInfoPage;