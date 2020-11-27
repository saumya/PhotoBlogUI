//
import React from 'react'

const PhotoComp = (props)=>{
    return(
        <React.Fragment>
            <div>
                <img src={'minstagram_uploads/' + props.imgPath} width="100%" alt=""></img>
            </div>
        </React.Fragment>
    )
}

export default PhotoComp