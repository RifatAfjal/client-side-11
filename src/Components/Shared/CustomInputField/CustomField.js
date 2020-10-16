import React from 'react';
import { useState } from 'react';

const CustomField = () => {
    const [id,setId] = useState('file');
    console.log(id.target );
    return (
        <>
            <input type="file" name="image" id={id}/>
        </>
    );
};

export default CustomField;