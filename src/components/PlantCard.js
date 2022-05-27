import React from "react";
import { useState } from "react";
import EditPlant from "./EditPlant";

function PlantCard({ user,plantOwner, plantName, plantImage, plantDescription, plantLight, plantCare, plantAge, onDeletePlant, id}) {
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
            <div style={{marginLeft:"25%", marginRight:"auto", marginBottom:"1%"}}>
                <h2>{plantName}</h2>
                <img style={{width:"20rem"}} src={plantImage} alt={plantName}/>
                <h3>{plantDescription}</h3>
                <ul>
                <li>Light Preference: {plantLight}</li>
                <li>Care: {plantCare}</li>
                <li>Age: {plantAge}</li>
                </ul>

            </div>
            )}

            {plantOwner === user.id ? (
            <div style={{marginLeft:"25%", marginRight:"auto", marginBottom:"5%"}}>
                <button onClick={handleDeleteClick}>delete plant</button>
                <button onClick={handleUpdatePlant}>update</button>
            </div>) : ( null)
            }
        </>
    )

}


export default PlantCard