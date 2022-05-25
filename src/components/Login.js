import React, { useState } from "react";

function Login({ onHandleLogin }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(e){
        e.preventDefault()
        fetch("http://localhost:9292/users")
        .then((r) => r.json())
        .then(users => {
            console.log(users)
            const foundUser = users.find((user) => {
                    return user.password === password && user.username === username
            })

            foundUser ? onHandleLogin(foundUser) : alert('user not found')
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