import styles from "@/styles/Sidebar.module.css";
import { motion } from "framer-motion";

function GroupButtonTemplate({
  text,
  link,
  currentActiveId,
  id,
  activeStyle,
  inactiveStyle,
  setMeActive,
  onClick,
}) {
  const amIActive = currentActiveId === id;
  return (
    <motion.div
      className={styles.linkButton}
      animate={amIActive ? activeStyle.button : inactiveStyle.button}
      onClick={() => {
        setMeActive && setMeActive(id);
        onClick && onClick();
      }}
      transition={{ duration: 0.9 }}
    >
      <motion.p
        href="{link}"
        animate={amIActive ? activeStyle.label : inactiveStyle.label}
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.p>
    </motion.div>
  );
}

export default function LinkButton({
  text,
  link,
  currentActiveId,
  id,
  setMeActive,
  onClick,
}) {
  const ActiveStyle = {
    button: { border: "1px solid var(--primary-color)", background : 'var(--primary-color)'},
    label: { color: "white" },
  };
  const InactiveStyle = { button: {border : "1px solid transparent", background : 'transparent'}, label: {} };
  return (
    <GroupButtonTemplate
      text={text}
      link={link}
      currentActiveId={currentActiveId}
      id={id}
      setMeActive={setMeActive}
      onClick={onClick}
      activeStyle={ActiveStyle}
      inactiveStyle={InactiveStyle}
    />
  );
}
