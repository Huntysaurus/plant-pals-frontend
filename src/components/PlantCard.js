import React from "react";

function PlantCard({ plantName }) {

    console.log(plantName)

    return (
        <>
            <p>{plantName}</p>
            <button>delete</button>
            <button>update</button>
        </>
    )

}


export default PlantCard