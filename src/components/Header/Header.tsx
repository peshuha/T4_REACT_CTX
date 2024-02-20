import styles from "./Header.module.css"
import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../App.tsx";

export default function Header() {

    const pages = [
        {name: "Home", url: "/"}
    ]

    const ctxUsr = useContext(UserContext)
    if(!ctxUsr || !ctxUsr.IsAuth()){
        pages.push({name: "Sign", url: "/auth"})
    }
    else {
        pages.push(
            {name: "Board", url: "/board"}
            , {name: "?..", url: "/"}
        )
    }

    return <div className={styles.container}>
        {
            pages.map((el, idx) => {
                return <Link key={idx} to={el.url} >{el.name}

                </Link>
            })
        }
        {
            ctxUsr?.IsAuth() &&  <div>Hello, {ctxUsr.UserName()}</div>
        }
    </div>
}