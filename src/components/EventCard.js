import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import styles from "./EventCard.module.css";
import { Link } from "react-router-dom";

function EventCard(props) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 12,
        speed: 300,
        glare: true,
        "max-glare": 0.2,
      });
    }
    return () => {
      if (cardRef.current) {
        cardRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <>
        <Link style={{textDecoration:"none"}} to={props.link}>
      <div ref={cardRef} className={styles.card}>
        <img src={props.imgSrc} className={styles.cardImage} alt="..." />
        <div className={styles.cardBody}>
          <div className={styles.cardTitle}><div>{props.name}</div></div>
          <div className={styles.cardText}><div>{props.des}</div></div>
          <div>
            <div>Date</div>
            <div>{props.date}</div>
          </div>
          <div>
            <div>Time</div>
            <div>{props.time}</div>
          </div>
          <div>
            <div>Venue</div>
            <div>{props.venue}</div>
          </div>
          <div>
            <div>Deadline</div>
            <div>{props.deadline}</div>
          </div>
        </div>
      </div>
      </Link>
    </>
  );
}
export default EventCard;
