//
import React, { useEffect, useState } from 'react'

function PhotosList(props){
    
    const [allData, setAllData] = useState([])
    const getDataFromServer = ()=>{
        //const url_photos = 'http://jsonplaceholder.typicode.com/posts';
        const url_photos = 'uploads/data.json';
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
    useEffect(()=>{
        console.log('PhotosList : 1');
        getDataFromServer();
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

export const add = (a,b) => {
    return a+b;
}
export const getDataFromServer = ()=>{
    const url_photos = 'uploads/data.json';
    fetch( url_photos, { method: 'GET' } )
    .then(result => {
        result.json()
        .then(resultData=>{
            //console.log(resultData.length)
            console.log( resultData )
            //props.onGotData()
            //setAllData(resultData)
            return resultData;
        })
        .catch(error=>console.log('ERROR:',error))
    });
}

export default PhotosList