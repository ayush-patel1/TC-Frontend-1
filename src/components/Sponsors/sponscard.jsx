import React from "react";
import styles from "./spons_page.module.css";
import Card from "./sponsCardSec"

function SponsCards() {
    return (
        <div className={styles.container}>
            <div className={styles.TopCards}>
                <div className={styles.TCard1}></div>
                <div className={styles.TCard2}></div>
            </div>
            <div className={styles.MiddleCards}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className={styles.MiddleCards1}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className={styles.MiddleCards2}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className={styles.BottomCards}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
export default SponsCards;
