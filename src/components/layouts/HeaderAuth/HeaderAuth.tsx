import { FC } from "react";
import style from "./headerAuth.module.scss";
import folderIcon from "../../../assets/folder.svg";

const HeaderAuth: FC = () => {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <p>ЖГ</p>
            </div>
            <div>
                <p className={style.name}>Жамсо Гунгаев</p>
                <div className={style.link_list}>
                    <div className={style.link_list_item}>
                        <img src={folderIcon} alt="иконка папки"/>
                        <a href="https://t.me/hearthsth" target="_blank" className={style.link}>Telegram</a>
                    </div>
                    <div className={style.link_list_item}>
                        <img src={folderIcon} alt="иконка папки"/>
                        <a href="https://github.com/Mudretz" target="_blank">GitHub</a>
                    </div>
                    <div className={style.link_list_item}>
                        <img src={folderIcon} alt="иконка папки"/>
                        <a href="https://drive.google.com/file/d/153dgWLtZdWHyFZxc0F5n6L7b98hP7u-O/view?usp=sharing" target="_blank">Resume</a>
                    </div>
                </div>
            </div>
        </header>
    );
};
 
export default HeaderAuth;