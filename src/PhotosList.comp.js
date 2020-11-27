//
import React, { useEffect, useState } from 'react'

import { getApplicationData } from './Utils'
import PhotoComp from './Photo.comp'


function PhotosList(props){
    
    const [allData, setAllData] = useState([])
    
    useEffect(()=>{
        //console.log('PhotosList : 1');
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
            {
                allData.map( (item, index)=>(
                    <PhotoComp key={index} imgPath={item.file} />
                ))
            }
        </React.Fragment>
    )
}




export default PhotosList