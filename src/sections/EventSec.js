import React from 'react';
import EventCard from '../components/EventCard'
import {EventsList} from '../assets/Events_data';
import styles from './EventSec.module.css'; 
import Title from "../components/Title";

function EventSec() {
  return (
    <div className='Homescrolled' style={{position:"relative", zIndex:"-1"}}>
    <div className={styles.Container} style={{position:"relative", zIndex:"0"}}>
      <Title color={"Events"} noncolor={""} />
      {/* <h4 style={{color:"white"}}>
      "Bringing Imagination to Life - Our Tech Team's Journey"</h4> */}
      <div className={styles.CardContainer}>
        {EventsList.map(item=>{
          return(
            <EventCard
            name={item.name}
            imgSrc= {item.imgUrl}
            des= {item.des}
            date={item.date}
            time={item.time}
            venue= {item.venue}
            />
          )
        })}
      </div>
    </div>
    </div>
  );
}

export default EventSec;

