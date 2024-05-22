import React from 'react'
import AudioPlayer from './audioPlayer'

function Meaning(props) {
  return (
    <div className='container'>
        {
            props.data ?
            Array.isArray(props.data) ?
            <>
                <div className='meaning'>
                    <span className='word'>{props.data[0].word}</span>
                    <AudioPlayer src={props.data[0].phonetics[0].audio!==''?props.data[0].phonetics[0].audio:null} />
                    <hr/>
                    <div>
                        {
                            props.data[0].meanings.map((m,i)=>{
                                return (
                                    <div key={i+1} >
                                        <span>{i+1} . </span>
                                        <span>{m.partOfSpeech}</span><br/>
                                        <p className='means' >{m.definitions[0].definition}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
            :
            <h3>
                {props.data.message}
            </h3>
            :
            <h3>
                search for a word
            </h3>
        }
    </div>
  )
}

export default Meaning