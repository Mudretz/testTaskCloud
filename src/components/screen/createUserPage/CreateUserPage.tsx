import { FC } from "react";
import { useAppSelector } from "../../../store/hook/hook";
import { getStep } from "../../../store/step/selector";
import Steper from "../../ui/steper/Steper";
import PersonalInfoPage from "../../pages/personalInfoPage/PersonalInfoPage";
import AdvantagesPage from "../../pages/advantagesPage/AdvantagesPage";
import AboutMePage from "../../pages/aboutMePage/AboutMePage";
import style from "./createUserPage.module.scss";

const CreateUserPage: FC = () => {
    const activeStep = useAppSelector(getStep);

    return (
        <main className={`${style.container} ${activeStep === 3 && style.about}`}>
            <Steper activeStep={activeStep}/>
            {activeStep === 1 &&
                <PersonalInfoPage />
            }
            {activeStep === 2 &&
                <AdvantagesPage />
            }
            {activeStep === 3 &&
                <AboutMePage />
            }
        </main>
    );
};
 
export default CreateUserPage;