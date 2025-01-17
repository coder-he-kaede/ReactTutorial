import {React,useState} from 'react'

function Spread() {
    const [formData, setformData] = useState({
        name:"",
        email:"",
        password:""
    })

    const handlechange = (e)=>{
    //   console.log(e.target.name);
    const {name,value} = e.target;
    // console.log(name);
    setformData((prevdata)=>
        ({
            ...prevdata, //old data
            [name]:value,   // input name="email" : "aman@gmaill.com"
        })
    )
    
    }

    const handlesubmit = ()=>{
         alert(`formsubmit: \n${JSON.stringify(formData,null,2)}`);    
    }
    return (
        <form action="">
            <label >Name</label>
            <input type="text" name='name' value={formData.name} onChange={handlechange}/>
            <br />
            <label htmlFor="">Email</label>
            <input type="email" name='email' value={formData.email} onChange={handlechange}/>
            <br />
            <label htmlFor="">Password</label>
            <input type="password" name='password' value={formData.password} onChange={handlechange}/>

            <input type="submit" value="Submit" onClick={handlesubmit} />
        </form>
    )
}

export default Spread
