import styles from "./auth.module.css"
import Header from "../../components/Header/Header.tsx";
import {useContext, useEffect,} from "react";
import {UserContext} from "../../App.tsx";
import {useNavigate} from "react-router-dom";

export default function Auth() {

    const ctxUsr = useContext(UserContext)
    const navigate = useNavigate();

    useEffect(() => {

        if(!ctxUsr?.IsAuth()) {
            return
        }

        navigate("/board")
    }, [ctxUsr]
    )

    return <>
        <Header></Header>
        {
            !ctxUsr?.IsAuth() ? (
                // Запрос логина пароля
                <div>
                    <div className={styles.login}>Введите логин:
                        <input type="text"
                               value={ctxUsr?.UserName()}
                               onInput={(e) =>
                                   ctxUsr?.SetLogin(e.target.value)}
                        /></div>
                    <div className={styles.password}>Введите пароль:
                        <input type="password"
                               onInput={(e) =>
                                   ctxUsr?.SetPassword(e.target.value)}
                        /></div>
                    <button onClick={()=> ctxUsr?.Authorize()}>Login</button>
                </div>
            ) : (
                // Приветствие
                <div>
                    Добрый день, {ctxUsr?.UserName()}
                </div>
            )
        }
    </>
}
