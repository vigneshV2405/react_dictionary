import { useEffect, useState } from "react";

const useFetch = (word)=>{
    const [ data , setData ] = useState(null);
    const [ isLoading , setLoading ] = useState(false);
    useEffect(()=>{
        setLoading(true)
        const fetchData = async()=>{
            try{
                let res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
                let resp = await res.json();
                setTimeout(()=>{
                    setData(resp)
                    setLoading(false)
                },500)
            }
            catch(error){
                console.log(error)
            }
        }
        if(word){
            fetchData()
        }
        else{
            setLoading(false)
        }
    },[word])
    return [ data , isLoading ]
}

export default useFetch;