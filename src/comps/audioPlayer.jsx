import React, { useRef } from 'react'
import Speaker from '../icons/speaker'

function AudioPlayer(props) {
    const audioref = useRef(null)
    function handleClick(){
        if(document.getElementById('audio').src){
            audioref.current.play()
        }
    }
  return (
    <div onClick={handleClick} >
        <Speaker/>
        <audio ref={audioref}>
            <source src={props.src} id='audio' />
        </audio>
    </div>
  )
}

export default AudioPlayer