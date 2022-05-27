import React from "react";
import { useState } from "react";
import EditPlant from "./EditPlant";

function PlantCard({ plantName, plantImage, plantDescription, onDeletePlant, id}) {
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
                <h3>{plantName}</h3>
                <img src={plantImage}/>
                <p>{plantDescription}</p>
                <button onClick={handleDeleteClick}>delete plant</button>
                <button onClick={handleUpdatePlant}>update</button>
            </>
        )}
        </>
    )

}


export default PlantCard