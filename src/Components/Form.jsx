import {React,useState} from 'react'


function Form() {
    // const [text, settext] = useState("")
    // const [email, setemail] = useState("")
    // const handleChange = (e)=>{
    //     settext(e.target.value);
    // }
    // const ehandleChange = (e)=>{
    //     setemail(e.target.value);
    // }

    const [isLoggedin, setisLoggedin] = useState(false);
    const [isAdmin, setisAdmin] = useState(false);
    // const [text, settext] = useState("admin")
    const handlelogin = ()=>{
            setisLoggedin(true)
    }

    const togglebetweenlogintoadmin= ()=>{
      
        //    setisAdmin((prev)=>!prev)
           !isAdmin?setisAdmin(true):setisAdmin(false)
        //    !isAdmin?settext("User"):settext("admin")

    }

    const handlogout = ()=>{
            setisLoggedin(false)
    }
  return (
    // ternatory operation conditon 
    <div>
      <h1>Dashboard</h1>
      {!isLoggedin ? (
      <div>
        <h2>Welcome as a Guest</h2>
        <p>Please login to access more data</p>
        <button onClick={handlelogin}>Login</button>
      </div>
      ):(
      <div>
        <h2>Welcome, {isAdmin?"Admin":"User"}</h2>
        <p>
            {
                isAdmin?"Now you are a Admin":"Please login as a Admin to access all the data"
            }
        </p>
        <button onClick={togglebetweenlogintoadmin}>switch to {isAdmin? "Admin":"User"}</button>
        <button onClick={handlogout}>logout</button>
      </div>
      )}
    </div>
  )
}

export default Form


// event handler 
{/* <form action="">
<div>
    <label htmlFor="">Name:</label>
    <input type="text" 
    value={text}
    onChange={handleChange}/>
</div>
<div>
    <label htmlFor="">Email:</label>
    <input type="email" 
    value={email}
    onChange={ehandleChange}/>
</div>
<button type='submit'>Submit</button>
</form> */}