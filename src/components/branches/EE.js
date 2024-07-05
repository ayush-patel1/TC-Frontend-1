import React from 'react'
import Title from '../Title'
import pdf from "../../assets/problem_statements/EE.pdf"

const EE = () => {
	return (
		<div className="sidebar_left">
			<div className="single_title">
				<Title color="ELECTRICAL" />
				<br />
			</div>

			<div className="single_desc">
				<p>
					<h3>EE 01: Energy Harvesting IoT Devices: Unlocking Sustainable Power Sources</h3>
					Participants are tasked with designing and prototyping a simplified energy harvesting device for IoT applications. The focus should be on user-friendly approaches that make sustainable power sources more accessible.
				</p>
		
				<p>
					<h3>EE 02: IoT-based Transformer Health Monitoring: Enhancing Reliability and Efficiency</h3>
					Participants are tasked with designing and implementing an IoT-based transformer health monitoring system. The system should effectively monitor key parameters, such as oil temperature, pressure, and gas levels, in real-time.
				</p>
				
				<p>
					<h3>EE 03: Energy Consumption Forecasting for Smart Buildings: Optimizing Efficiency with AI-ML</h3>
					Participants are tasked with developing an AI-ML-based model for energy consumption forecasting in smart buildings. The model should utilize historical energy data, weather forecasts, occupancy patterns, and any other relevant parameters to predict future energy consumption accurately
				</p>
				
				<p>
					<h3>EE 04: AI-Driven Intelligent Electric Vehicle Charging Infrastructure: Enhancing Efficiency and User Experience</h3>
					Participants are challenged not only to create an AI-driven prototype for intelligent electric vehicle charging infrastructure but also to introduce unconventional and out-of-the-box features. In addition to optimizing schedules  based on real-time data like electricity prices, grid demand, and user preferences, consider innovative factors such as environmental conditions, user behaviors, or community engagement in your design.
				</p>
				
				<p>
					<h3>EE 05: AR-Driven Collaborative Electrical Design: Revolutionizing Team Collaboration</h3>
					Participants are tasked with developing an AR-driven prototype for collaborative electrical design. The prototype should go beyond conventional solutions by introducing innovative features that enhance the collaborative experience.
				</p>
				
				<p>
					<h3>EE 06: Smart Helmet Integrated Safety System for Electric Vehicles</h3>
					Participants are tasked with designing and prototyping a smart helmet integrated safety system  for  electric vehicle  riders, incorporating advanced safety features and technologies. The focus should be on developing a comprehensive safety solution that enhances rider protection while ensuring ease of use and reliability.
				</p>
				
				<p>
					<h3>EE 07: IoT-Based Soil Moisture Monitoring System for Precision Agriculture</h3>
					Participants  are tasked with designing and implementing an IoT-based soil moisture monitoring system suitable for precision agriculture applications. The system should consist of wireless soil moisture sensors, IoT connectivity modules, and a cloud-based platform for data collection, analysis, and visualization.
				</p>
				
				<p>
					<h3>EE 08: Integration of Supercapacitors for Rapid Energy Boost in Electric Vehicles</h3>
					Participants are tasked with designing and implementing a system that seamlessly integrates supercapacitors for rapid  energy boosts in electric vehicles. The focus is on developing efficient control algorithms, optimizing charge discharge cycles, and ensuring reliable coordination between the supercapacitors and batteries. 
				</p>
				
				<p>
					<h3>EE 09: Designing a Low-Cost Vehicle-to-Grid (V2G) Charger for Electric Vehicles</h3>
					Participants are tasked with designing and prototyping a low-cost V2G charger suitable for integration into existing EV charging infrastructure. The charger should support bidirectional power flow, adhere to  safety standards, and incorporate features for grid interaction and energy management.
				</p>
				
				<p>
					<h3>EE 10: Development of a Hazard Detection System for Smart Helmets in Electrical Work Environments</h3>
					Participants are tasked with designing and prototyping a hazard detection system for smart helmets tailored to electrical work environments. The system should incorporate appropriate sensors for detecting electrical hazards such as voltage presence, arc flashes, and gas leaks. It should provide real-time alerts to the wearer and potentially to supervisors or control centers.
				</p>
			</div>

			<div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "1rem 0rem", }}>
				<a href={pdf} style={{ textDecoration: "none" }}>
					<div className="goodbtn">DOWNLOAD PDF</div>
				</a>
			</div>
		</div>
	)
}

export default EE