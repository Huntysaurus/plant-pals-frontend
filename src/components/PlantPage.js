import React from "react";
import PlantCard from "./PlantCard";

function PlantPage({ users }) {

    return (
        <>
            <h2>
                <button>sort by difficulty</button>
                <button>sort alphabetically</button>
                <button>only show dead</button>
                <button>sort by flowering</button>   
            </h2>
            
            <div>
                {users.map((user) => {
                    return (
                        <ul key={user.id}>
                            <PlantCard name={user.name}/>
                        </ul>
                    )
                })}
            </div>
        </>
    )

}

export default PlantPage