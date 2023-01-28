import React from "react";
import PlantCard from "./PlantCard";
import styles from "../appStyles.module.css";

function PlantPage({
    plants,
    onDeletePlant,
    onUpdatePlant,
    user
}) {

    
    return (
            <div className={styles.plant_page}>
                <ul>
                    {plants.map((plant) => {
                        return (
                            <PlantCard
                            user={user}
                            key={plant.id}
                            id={plant.id}
                            plantName={plant.name}
                            plantImage={plant.image}
                            plantDescription={plant.description}
                            plantLight={plant.light_preference}
                            plantCare={plant.care_difficulty}
                            plantAge={plant.age}
                            plantOwner={plant.user_id}
                            onDeletePlant={onDeletePlant}
                            onUpdatePlant={onUpdatePlant}
                            />
                        )
                    }
                    )}
                </ul>
            </div>
    )

}

export default PlantPage