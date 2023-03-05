import React from 'react';
import style from '@/styles/notification.module.css';

export default function notification(){
    return(
        <div className={style.notilayout}>
            <div className={style.notitop}>
                <p className={style.notificationLabel}>Notifications</p>
            </div>
            <div className={style.noticont}>
                <p>no notification for now!</p>
            </div>
        </div>
    )
}