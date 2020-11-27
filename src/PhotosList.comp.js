//
import React, { useEffect, useState } from 'react'
import { getApplicationData } from './Utils'

function PhotosList(props){
    
    const [allData, setAllData] = useState([])
    
    useEffect(()=>{
        console.log('PhotosList : 1');
        const onData = data=>{ 
            console.log('onData', data) 
            props.onGotData()
            setAllData(data)
        }
        const photosData = getApplicationData(onData);
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