import React from 'react';
import style from '@/styles/Sidebar.module.css';
import Notification from './Components/Notification';
import Header from './Components/Header';
import SearchBox from './Components/SearchBox';
import LinkButton from './Components/LinkButton';


export default function Sidebar() {

    const [currentActiveId, setCurrentActiveId] = React.useState(1);

    return (
        <div className={style.sidebody}>
            <div className={style.sidetop}>
                <Header/>
            </div>
            <div className={style.sidemid}>
                <Notification/>
            </div>
            <div className={style.sidebottom}>
                <SearchBox/>
                <LinkButton text={"Explore"} currentActiveId={currentActiveId} id={1} setMeActive={setCurrentActiveId}  />
                <LinkButton text={"Resume"} currentActiveId={currentActiveId} id={2} setMeActive={setCurrentActiveId} />
            </div>
        </div>
    )
}
