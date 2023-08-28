import React, { useState, useEffect } from "react";
import videoBg from "../assets/videos/spaceship.webm";
import styles from './HomeHero.module.css';
import { Link } from "react-router-dom";

const HomeHero = () => {
	const [showContent, setShowContent] = useState(false);

	useEffect(() => {
		setShowContent(true);
	}, []);

	return (
		<div className={styles.heroContainer}>
			<video autoPlay muted loop className={styles.videoBg}>
				<source src={videoBg} type="video/webm" />
				Your browser does not support the video tag.
			</video>
			<div className={`${styles.heroContent} ${showContent && styles.show}`}>
				<h1><span>TEAM TECHNOCRACY</span></h1>
				<p>The Student Technical Committee of NIT Raipur</p>
				<Link to="/vigyaan"><button>VIGYAAN</button></Link>
			</div>
		</div>
	);
};

export default HomeHero;
