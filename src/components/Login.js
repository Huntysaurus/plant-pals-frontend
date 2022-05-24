import React, { useState } from "react";

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(){

    }

    return (
        <>
            <form onSubmit={handleLogin}>
                <label>
                    username:
                    <input
                        placeholder="username here"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                </label>
                <br></br>
                <label>
                    password:
                    <input
                        placeholder="password here"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </label>
            </form>
            <button type='submit'>login</button>
        </>
    )
}

export default Login