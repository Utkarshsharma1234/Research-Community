import ResearchCommunity from "./ResearchCommunity";
import KnowledgeDrive from "./KnowledgeDrive";
import ResearchInterns from "./ReasearchInterns";
import Explore from "@/components/RightBar/Explore";
import styles from "@/styles/components/RightBar/RightSide.module.css";

export default function RightSide() {
  return (
    <>
      <div>
        <ResearchCommunity />
      </div>
      
      <div style={{ paddingLeft: 54, paddingRight : 54 }}>
        <div className={styles.mainExplore}>
          <Explore />
        </div>

        <div className={styles.mainKnowledgeDrive}>
          <KnowledgeDrive />
        </div>

        <div className={styles.mainResearchInterns}>
          <ResearchInterns />
        </div>
      </div>
    </>
  );
}
