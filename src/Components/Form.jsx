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

    // const [isLoggedin, setisLoggedin] = useState(false);
    // const [isAdmin, setisAdmin] = useState(false);
    // const [text, settext] = useState("admin")
    // const handlelogin = ()=>{
    //         setisLoggedin(true)
    // }

    // const togglebetweenlogintoadmin= ()=>{
      
    //     //    setisAdmin((prev)=>!prev)
    //        !isAdmin?setisAdmin(true):setisAdmin(false)
    //     //    !isAdmin?settext("User"):settext("admin")

    // }

    // const handlogout = ()=>{
    //         setisLoggedin(false)
    // }

    // const products = [
    //   {
    //     id:1,name:"phone",price:"1000"
    //   },
    //   {
    //     id:2,name:"tablet",price:"2000"
    //   },
    //   {
    //     id:3,name:"desktop",price:"3000"
    //   },
    // ]

    const data = [
      "aman",
      "sourabh",
      "rahul",
      "harsh",
      "akash",
      "abhishek",
      "mohit",
      "vaibhav",
      "ansh",
      "chandu",
      "sibghatullah"
    ];

    const [visiblecount, setvisiblecount] = useState(3);
    const handleclick = ()=>{
        setvisiblecount((prev)=>prev + 3);
    }
  return (
    // ternatory operation conditon 
    // <div>
    //   <h1>Dashboard</h1>
    //   {!isLoggedin ? (
    //   <div>
    //     <h2>Welcome as a Guest</h2>
    //     <p>Please login to access more data</p>
    //     <button onClick={handlelogin}>Login</button>
    //   </div>
    //   ):(
    //   <div>
    //     <h2>Welcome, {isAdmin?"Admin":"User"}</h2>
    //     <p>
    //         {
    //             isAdmin?"Now you are a Admin":"Please login as a Admin to access all the data"
    //         }
    //     </p>
    //     <button onClick={togglebetweenlogintoadmin}>switch to {isAdmin? "Admin":"User"}</button>
    //     <button onClick={handlogout}>logout</button>
    //   </div>
    //   )}
    // </div>

    // <div>
    //   <h1>unique product key & map</h1>
    //   <ul>
    //     {products.map((product)=>
    //     <li key={product.id}>{product.name} - Price: {product.price}</li>
    //     )}
    //   </ul>
    // </div>

  <div>
    <h1>user list</h1>
    <ul>
      {data.slice(0,visiblecount).map((user,index)=>
      
        <li key={index}>{user}</li>
      
      )}
      {
        visiblecount<data.length &&(
      
<button onClick={handleclick}>Load more</button>

          
        )
      }
    </ul>
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