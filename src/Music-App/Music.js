import React, { useState, useEffect } from 'react'
import "./OneDayWeather.css"
import Loader from './Components/Loader'
import Itunes from "./Itunes"
const Music = ({ searchValue }) => {
    const [dataMusic,setDataMusic]=useState([]);
    const [loading,setLoading]=useState(false);
    useEffect(() => {
        getMusicData();
    }, [searchValue])

    const getMusicData = () => {
       setLoading(true);
        fetch(`https://itunes.apple.com/search?term=${searchValue}`)
    .then(response=>response.json())
    .then(dataa=>{
        setDataMusic([dataa]);
    
            })
            .catch(err => {
                setDataMusic(undefined);
            })
            .finally(()=>{
                setLoading(false);
            })
           
    }
    return (
        <div className="Content">
            <div className="weather-oneday">
                
                {dataMusic && dataMusic.map(dataa =>
                <Loader isLoading={loading}>
                    <div key={dataa.id}>

                        
                    <p>{dataa.results[0].artistName}</p>
                    <Itunes dataa={dataa}/>
                       

                    </div></Loader>
                    )
                    
                }
                
            </div>
           
           
           
        </div>
    )



}
export default Music;