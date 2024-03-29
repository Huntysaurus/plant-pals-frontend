import React from "react";
import { useState } from "react";
import styles from "../appStyles.module.css";

function UserForm({ onCreateUser, allUsers }) {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        const sameUser = allUsers.find((user) => {
            return user.username === username
        })
        if (sameUser) {
            alert('username already exists')
        } else {
            fetch("http://localhost:9292/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
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
    }

    return (
        <>
            <h2 className={styles.login_heading}>No Account? Create one!</h2>
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
