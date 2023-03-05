import DisplayCard from "@/components/RightBar/RightSideCard"
import styles from '@/styles/components/RightBar/ReasearchInterns.module.css'

export default function ResearchInterns(){
    return(
        <div className={styles.ResearchInterns}>
            <div>
                <p className={styles.KnowledgeDriveHeading + " h2 f-600"}>Research Interns</p>
            </div>

            <div className={styles.DisplayCard}>
                <DisplayCard description="hello how are you i am fine thank you how about you." imageLink={"/images/Rectangle-14.svg"}/>
            </div>
        </div>
    )
}