import React from "react";
import PlantCard from "./PlantCard";

function PlantPage({ users }) {

    return (
        <div>
            {users.map((user) => {
                return (
                    <ul key={user.id}>
                        <PlantCard name={user.name}/>
                    </ul>
                )
            })}
        </div>
    )

}

export default PlantPage