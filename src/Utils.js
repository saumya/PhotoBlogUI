// 
// Utils.js
//

export const getApplicationData = (onData)=>{
    console.log('getApplicationData')
    const url_photos = 'minstagram_uploads/data.json'
    fetch( url_photos, { method: 'GET' } )
    .then(result => {
        result.json()
        .then( resultData=>{
            //console.log( resultData )
            onData(resultData)
            //return resultData
        })
        .catch(error=>console.log('ERROR:',error))
    })
}