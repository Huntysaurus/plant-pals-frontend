import React from "react";

function PlantCard({ plantName, plantImage, plantDescription, onDeletePlant, id}) {

    function handleDeleteClick(){
        fetch(`http://localhost:9292/plants/${id}`, {
            method: "DELETE",
        })
        onDeletePlant(id)
    }

    return (
        <>
            <h3>{plantName}</h3>
            <img src={plantImage}/>
            <p>{plantDescription}</p>
            <button onClick={handleDeleteClick}>delete plant</button>
            <button>update</button>
        </>
    )

}


export default PlantCard