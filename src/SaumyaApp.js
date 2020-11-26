//
//
//
import React, { useState } from 'react'
import BusyNotification from './BusyNotification.comp'
import PhotosList from './PhotosList.comp'

function SaumyaApp(){
    const [isBusy,setIsBusy] = useState(true)
    const onGotDataFromServer = ()=> setIsBusy(false)
    return(
        <div className="container">
            <div className="title">Photos</div>
            <div className="subtitle">The photo life</div>
            
            { isBusy ? <BusyNotification /> : null }
            <PhotosList onGotData={onGotDataFromServer} />          
        </div>
    )
}

export default SaumyaApp;