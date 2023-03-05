import styles from "@/styles/components/RightBar/RightSideCard.module.css";

export function CardTemplate({ LeftComponent, RightComponent, size}) {
  const dimStyle = { height: size, width: size };

  return (
    <div className={styles.main_card}>
      <div className={styles.leftComponent} style={dimStyle}>
        {LeftComponent}
      </div>
      <div className={styles.content_area}>{RightComponent}</div>
    </div>
  );
}

export default function DisplayCard({
  heading = "Heading",
  description,
  imageLink,
  size
}) {
  const getClippedDescription = (description) => {
        let text = description.slice(0,26);
        return text;
  };

  const ImageComponent = (
    <div className={styles.card_imageDiv}>
      <img src={imageLink} alt="Image Card"/>
    </div>
  );

  const DetailsComponent = (
    <>
      <div className="">
        <p className={styles.card_heading}>{heading}</p>
      </div>

      <div>
        <p className={styles.card_content}>{getClippedDescription(description)}...</p>
      </div>
    </>
  );

  return (
    <CardTemplate
      LeftComponent={ImageComponent}
      RightComponent={DetailsComponent}
      size = {size}
    />
  );
}
