import style from "@/styles/components/RightBar/Topbar.module.css";
import RightSearchBox from "@/components/RightBar/Rightsearchbox.js";

export default function Topbar() {
    return (
        <div className={style.topbar}>
            <p className={style.tophead}>Explore</p>
            <div className={style.topsearch}><RightSearchBox /></div>
        </div>
    )
}