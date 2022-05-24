import React, { useState } from "react";

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(e){
        console.log('hello')
        e.preventDefault()
        fetch("http://localhost:9292/users")
        .then((r) => r.json())
        .then(users => {
            const found = users.find(user => {
            (user.password === password && user.username === username)
            })

            found ? console.log('found') : console.log('missing')
            })
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
                <br></br>
                <button type="submit">login</button>
            </form>
        </>
    )
}

export default Login