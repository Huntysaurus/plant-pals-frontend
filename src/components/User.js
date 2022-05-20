import userEvent from "@testing-library/user-event";
import React, { useEffect, useState} from "react";

function User({ people }) {

   const person = people.map(user => {
        return (
            <>
                <div key={user.username}>
                    <p>{user.name}</p>
                    <p>{user.username}</p>
                    <p>{user.password}</p>
                </div>
                <br></br>
            </>
        )
    })
    
    return (
        <>
            {person}
        </>
        )
}

export default User

