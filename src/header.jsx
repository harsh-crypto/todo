import React, { useState } from "react";
import "./header.scss";
function Header(){
    const [err,setErr]=useState("");
    return(
        <>
        <div className="container-head">
        <div>Logo</div>
        <ul>
            <li onMouseMove={()=>setErr("Not working")} onMouseLeave = {()=>setErr("")}>
                About
            </li>
            <li onMouseMove={()=>setErr("Not working")} onMouseLeave = {()=>setErr("")}>
                Settings
                
            </li>
        </ul>
        <span className="warning"> {err} </span>
        </div>
        
        </>
    )
}

export default Header;