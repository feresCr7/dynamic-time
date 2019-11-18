import React from 'react' ;



let ess= 5098500
const App=()=>{
    const hours = Math.floor((ess / 3600000) % 24);
    const minutes = Math.floor((ess / 60000) % 60);
    const seconds = Math.floor((ess / 1000) % 60);
    return(
        <h1 className='TimeFormat'>
    {String(hours).padStart(2, "0")} : {String(minutes).padStart(2, "0")}{" "}
    : {String(seconds).padStart(2, "0")}
  </h1>
  
    )
    
}
export default App ;
