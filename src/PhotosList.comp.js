//
import React, { useEffect, useState } from 'react'

function PhotosList(props){
    
    const [allData, setAllData] = useState([])
    const getDataFromServer = ()=>{
        const url_photos = 'http://jsonplaceholder.typicode.com/posts';
        fetch( url_photos, { method: 'GET' } )
        .then(result => {
            result.json()
            .then(resultData=>{
                //console.log(resultData.length)
                //console.log( allData )
                props.onGotData()
                setAllData(resultData)
            })
            .catch(error=>console.log('ERROR:',error))
        });
    }
    useEffect(()=>{
        console.log('PhotosList : 1');
        getDataFromServer();
    },[]);
    //
    return(
        <React.Fragment>
            <div className="subtitle"> List of Data </div>
            {
                allData.map(item=>(
                    <div key={item.id}> {item.title} </div>
                ))
            }
        </React.Fragment>
    )
}

export default PhotosList