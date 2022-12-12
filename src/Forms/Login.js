import React,{ useState} from 'react'
function Login() {
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const[error,setError]=useState(false);
    const formHandler=(event)=>
    {
        event.preventDefault();
        if(userName.length==0 && password.length==0)
        {
            setError(true);
        }
        if(userName && password)
        {
            const loginobj={
            name:userName,
            pwd:password
        }
        console.log(loginobj);
        alert(JSON.stringify(loginobj));
    }
    }
    return (
    <div>
    <h3>Login Page</h3>
    <form onSubmit={formHandler}>
    
    Username : <input type="text" value={userName} placeholder="UserName" onChange={(e)=>setUserName(e.target.value)}/><br></br><pre></pre>
    <div>
    {error && userName.length == 0 ?
        <label style={{color:'red'}}>
        userName is required</label> :""}<br></br>
         </div>
    Password :<input type="password" value={password} placeholder="password" onChange={(e)=>setPassword(e.target.value)}/><br></br><pre></pre>
    <button type="submit">Login</button>
    </form>
    </div>
  )
}

export default Login