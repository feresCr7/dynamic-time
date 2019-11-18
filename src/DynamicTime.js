import React from 'react'
function DynamicTime (props){
    const hours = Math.floor((props.ess / 3600000) % 24);
    const minutes = Math.floor((props.ess / 60000) % 60);
    const seconds = Math.floor((props.ess / 1000) % 60);
    <h1>
    {String(hours).padStart(2, "0")} : {String(minutes).padStart(2, "0")}{" "}
    : {String(seconds).padStart(2, "0")}
  </h1>
  






export default DynamicTime ;