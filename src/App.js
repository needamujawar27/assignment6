import React, { useState } from "react";
import"./components/common.css"

function App() {
  const[fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [mobile,SetMobile]=useState("");
  const [email,setEmail]=useState("");
  const [city,setCity]=useState("");
  const [pin,setPin]=useState("");

  return (
    
    <div className="main">
      <div className="child">
        <input type="text" placeholder="Enter Your First Name" onChange={(e)=>setFname(e.target.value)}/>
        <input type="text" placeholder="Enter Your Last Name" onChange={(e)=>setLname(e.target.value)}/>
        <input type="number" placeholder="Enter Your Mobile Number" onChange={(e)=>SetMobile(e.target.value)}/>
        <input type="text" placeholder="Enter Your Email Id" onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" placeholder="Enter Your City" onChange={(e)=>setCity(e.target.value)}/>
        <input type="text" placeholder="Enter Your Pincode" onChange={(e)=>setPin(e.target.value)} />
      </div>
      <div className="personal">
       <h2>Personal Details</h2>
       <h4>FullNames-{fname}{lname}</h4>
       <h4>Mobile No-{mobile}</h4>
       <h4>Email Id-{email}</h4>
       <h4>City-{city}</h4>
       <h4>Pincode-{pin}</h4>
     </div>
      </div>
      

  );
}

export default App;
