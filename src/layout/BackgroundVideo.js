import React from 'react'
import bgVideo from '../assets/videos/Rainbow_Nebula.webm'
const BackgroundVideo = () => {
  return (
    <div className='Background_play'>
        <video className='Back_video'  height={900} autoPlay loop muted >
            <source src={bgVideo} type='video/mp4' ></source>
        </video>
    </div>
  )
}

export default BackgroundVideo;