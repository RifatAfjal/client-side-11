import React from 'react';

const SectionHeader = ({heading,highlightHeading,color}) => {
    return (
        <>
            <h3 className="text-center" style={{marginBottom:"50px",color:`${color}`}}>
                {heading}{" "}
                <span style={{color:"#7AB259"}}>{highlightHeading}</span>
            </h3>  
        </>
    );
};

export default SectionHeader;