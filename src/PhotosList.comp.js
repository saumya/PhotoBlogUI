//
import React, { useEffect, useState } from 'react'
import { getApplicationData } from './Utils'

function PhotosList(props){
    
    const [allData, setAllData] = useState([])
    /*
    const getDataFromServer = ()=>{
        const url_photos = 'minstagram_uploads/data.json';
        fetch( url_photos, { method: 'GET' } )
        .then(result => {
            result.json()
            .then(resultData=>{
                //console.log(resultData.length)
                console.log( allData )
                props.onGotData()
                setAllData(resultData)
            })
            .catch(error=>console.log('ERROR:',error))
        });
    }
    */
    useEffect(()=>{
        console.log('PhotosList : 1');
        const onData = data=>{ 
            console.log('onData', data) 
            props.onGotData()
            setAllData(data)
        }
        const photosData = getApplicationData(onData);
        //console.log( 'photosData', photosData );
        //if(photosData.length>0){
        //props.onGotData()
        //}
    },[]);
    //
    return(
        <React.Fragment>
            <div className="subtitle"> List of Data </div>
            {
                allData.map( (item, index)=>(
                    <div key={index}> {index}-{item.file} </div>
                ))
            }
        </React.Fragment>
    )
}




export default PhotosList