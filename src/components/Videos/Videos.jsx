import React, { useRef } from 'react'
import './Videos.css'
import videoss from '../../assets/video.mp4'

const Videos = ({ playstate, setPlaystate }) => {

    const player = useRef(null)  //pour areter la video
    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlaystate(false)
        }
    }

    return (
        <div className={`videos ${playstate ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
            <video src={videoss} autoPlay muted controls></video>
        </div>
    )
}

export default Videos
