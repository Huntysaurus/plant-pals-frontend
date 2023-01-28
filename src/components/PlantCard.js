import React from "react";
import { useState } from "react";
import EditPlant from "./EditPlant";
import styles from "../appStyles.module.css";

function PlantCard({ user, plantOwner, plantName, plantImage, plantDescription, plantLight, plantCare, plantAge, onDeletePlant, id, onUpdatePlant}) {
    const [isEditing, setIsEditing] = useState(false)
    const [updateButton, setUpdateButton] = useState(false)


    function handleDeleteClick(){
        fetch(`http://localhost:9292/plants/${id}`, {
            method: "DELETE",
        })
        onDeletePlant(id)
    }

    function handleUpdatePlant(updatedPlant){
        console.log(updatedPlant)
        setIsEditing(false)
        setUpdateButton(false)
        onUpdatePlant(updatedPlant)
    }

    function handleUpdateClick() {
        setIsEditing((isEditing) => !isEditing)
        setUpdateButton((updateButton => !updateButton))
    }

    return (
        <div className={styles.plant_card}>
            {isEditing ? (
                <EditPlant
                plantImage={plantImage}
                plantName={plantName}
                plantAge={plantAge}
                plantDescription={plantDescription}
                id={id}
                onUpdatePlant={handleUpdatePlant}
                />
            ) : (
                <div>
                    <h2>{plantName}</h2>
                    <img className={styles.plant_image} src={plantImage} alt={plantName}/>
                    <h3 className={styles.plant_description} >{plantDescription}</h3>
                    <div className={styles.plant_traits}>
                        <ul>
                        <li>{plantLight}</li>
                        <li>{plantCare}</li>
                        <li>Age: {plantAge}</li>
                        </ul>
                    </div>
                </div>
                )}

                {plantOwner === user.id ? (
                <div className={styles.update_delete_div}>
                    <button className={styles.edit_plant_buttons} onClick={handleDeleteClick}>Delete Plant</button>
                    <button className={styles.edit_plant_buttons} onClick={handleUpdateClick}>{updateButton ? 'Cancel' : 'Update'}</button>
                </div>) : ( null)
            }
        </div>
    )

}


export default PlantCard