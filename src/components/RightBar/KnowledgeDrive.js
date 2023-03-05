import DisplayCard from "./RightSideCard"
import styles from '@/styles/components/RightBar/RightSideKnowledgeDrive.module.css'


export default function KnowledgeDrive(){
    return(
        <>  
        <div className={styles.KnowledgeDrive}>
            <div>
                <p className={styles.KnowledgeDriveHeading + " h2 + f-600"}>Knowlegde Drive</p>
            </div>

            <div>
                <p className={styles.KnowledgeDriveContent + " h3 f-600"}>Contents</p>
            </div>

            <div className={styles.DisplayCard}>
                <DisplayCard description="hello how are you i am fine thank you how about you." imageLink={"/images/Rectangle-10.svg"}/>
                <DisplayCard description="hello how are you i am fine thank you how about you." imageLink={"/images/Rectangle-10.svg"}/>
                <DisplayCard description="hello how are you i am fine thank you how about you." imageLink={"/images/Rectangle-10.svg"}/>
            </div>
        </div>

        </>
    )
}