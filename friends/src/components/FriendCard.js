import React from 'react';


const Friends = ({name, age, email}) => {

    return (
        <div>
            <h2>{name}</h2>
            <h3>{age}</h3>
            <h3>{email}</h3>
        </div>
    )
}

export default Friends
