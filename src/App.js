import { useEffect, useRef, useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import useFetch from './services/usefetchhook';
import Meaning from './comps/meaning';
import Loading from './comps/loading';

function App() {
  const [ word , setWord ] = useState(null);
  const [ err , setError ] = useState(null);
  const [ str , setStr ] = useState('');
  var [data,isLoading] = useFetch(word);
  const inptRef = useRef(null);
  useEffect(()=>{
    inptRef.current.focus();
    document.title="Dictionary"
  },[])
  function handleClick(){
    if(document.getElementById('inpt').value!==''){
      setError(null)
      setWord(str)
    }
    else{
      setError('please enter a word')
    }
  }
  return (
    <div className='body'>
      <h1>Dictionary</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="enter a word"
          id='inpt'
          onKeyUp={(e)=>{
            setStr(e.target.value)
            setError(null)
          }}
          ref={inptRef}
        />
        <span
          className="input-group-text btn btn-warning"
          id="basic-addon2"
          onClick={handleClick}
        >
          Search
        </span>
      </div>
      <span className='err'>
        {
          err && err
        }
      </span>
      {
        isLoading && <Loading/>
      }
      {
        !isLoading && <Meaning data={data} />
      }
    </div>
  );
}

export default App;