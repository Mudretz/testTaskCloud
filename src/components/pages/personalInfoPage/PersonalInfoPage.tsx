import { FC } from "react";
import * as yup from "yup";
import { useForm, FormProvider } from "react-hook-form";
import { useAppSelector } from "../../../store/hook/hook";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { getCreateUserData } from "../../../store/data/selector";
import { createUserReceved } from "../../../store/data/data";
import { stepIncrease } from "../../../store/step/step";
import { sexOptions } from "../../../constants/sexOptions";
import { schemaPersonalInfo } from "../../../constants/schema/personalnfoSchema";
import ButtonSubmit from "../../common/buttons/buttonSubmit/ButtonSubmit";
import ButtonBack from "../../common/buttons/buttonBack/buttonBack";
import TextFormInput from "../../common/inputs/textFormInput.tsx/TextFormInput";
import SelectInput from "../../common/inputs/select/SelectInput";
import style from "./personalInfoPage.module.scss";

export type FormData = yup.InferType<typeof schemaPersonalInfo>;

const PersonalInfoPage:FC = () => {
    const dispatch = useDispatch();
    const methods = useForm<FormData>({
        resolver: yupResolver(schemaPersonalInfo)
    });
    const { handleSubmit, formState: { errors } } = methods;
    const createUserData = useAppSelector(getCreateUserData);

    const onSubmit = (data: FormData): void => {
        dispatch(createUserReceved(data));
        dispatch(stepIncrease());
    };

    return (
        <FormProvider {...methods}>
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                    <TextFormInput
                        id="field-nickname"
                        name="Nickname"
                        nameInput="nickname"
                        defaultValue={createUserData.nickname}
                        placeHolder="Placeholder"
                        errorMessage={errors.nickname?.message || ""}
                    />
                    <TextFormInput 
                        id="field-name"
                        name="Name"
                        nameInput="name"
                        defaultValue={createUserData.name}
                        placeHolder="Placeholder"
                        errorMessage={errors.name?.message || ""}
                    />
                    <TextFormInput 
                        id="field-sername"
                        name="Sername"
                        nameInput="sername"
                        defaultValue={createUserData.sername}
                        placeHolder="Placeholder"
                        errorMessage={errors.sername?.message || ""}
                    />
                    <div className={`${style.form_item} ${style.select}`}>
                        <p>Sex</p>
                        <SelectInput
                            id="field-sex"
                            name="sex"
                            placeHolder="Не выбрано"
                            defaultValue={createUserData.sex}
                            options={sexOptions}
                        />
                        <p className={style.error}>{errors.sex?.message || ""}</p>
                    </div>
                    <div className={style.buttons_group}>
                        <ButtonBack
                            id="button-back"
                            text="Назад"
                        />
                        <ButtonSubmit
                            id="button-next"
                            text="Далее"
                        />
                    </div>
            </form>
        </FormProvider>
    );
};
 
export default PersonalInfoPage;