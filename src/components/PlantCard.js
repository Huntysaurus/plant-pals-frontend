import React from "react";
import { useState } from "react";
import EditPlant from "./EditPlant";

function PlantCard({ plantName, plantImage, plantDescription, plantLight, plantCare, plantAge, onDeletePlant, id}) {
    const [isEditing, setIsEditing] = useState(false)

    function handleDeleteClick(){
        fetch(`http://localhost:9292/plants/${id}`, {
            method: "DELETE",
        })
        onDeletePlant(id)
    }

    function handleUpdatePlant(){
        setIsEditing(true)
    }

    return (
        <>{isEditing ? (
            <EditPlant/>
        ) : (
            <>
                <h2>{plantName}</h2>
                <img src={plantImage}/>
                <h3>{plantDescription}</h3>
                <ul>
                <li>Light Preference: {plantLight}</li>
                <li>Care: {plantCare}</li>
                <li>Age: {plantAge}</li>
                </ul>
                <br></br>
                <button onClick={handleDeleteClick}>delete plant</button>
                <button onClick={handleUpdatePlant}>update</button>
            </>
        )}
        </>
    )

}


export default PlantCard