import React from "react";
import Users from "./User"

function PlantCard({ name }) {

    console.log(name)

    return (
        <>
            <p>{name}</p>
            <button>delete</button>
        </>
    )

}


export default PlantCard