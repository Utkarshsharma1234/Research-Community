import React from 'react';
import style from '@/styles/App.module.css';
import Sidebar from '@/components/Sidebar/Sidebar';
import RightSide from '@/components/RightBar/RightSide';
import Topbar from '@/components/Rightbar/Topbar';
import KnowledgeDrive from '@/components/RightBar/KnowledgeDrive';

function App() {
  return (
    <div className={style.layout}>
      <div className={style.sidebar}>
        <Sidebar />
      </div>
      <div className={style.contentArea}>
        <div className={style.topbar}><Topbar/></div>
        <div className={style.content}>
          <RightSide/>
        </div>
      </div>
    </div>
  )
}

export default App