import React from "react";
import { useState } from "react";

function UserForm({ onCreateUser }) {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:9292/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                username: username,
                password: password
            }),
        })
        .then((r)=> r.json())
        .then((newUser) => onCreateUser(newUser))
    }

    return (
        <>
            <h2>No Account? Create one!</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        placeholder='enter your name'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                </label>
                <br></br>
                <label>
                    Username:
                    <input
                        placeholder='create your username'
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                </label>
                <br></br>
                <label>
                    Password:
                    <input
                        placeholder='create a password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </label>
                <br></br>
            
                <button type="submit">Create Account!</button>
            </form>
        </>
    )
}

export default UserForm