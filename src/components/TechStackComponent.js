import React from 'react'

export default function TechStackComponent(props) {
        var techStackList = props.techStackList.map((tech) => {
        return (
        <span className="tech-stack-container">
            {tech}
        </span>
        )
    });

    return (
        <>
           {techStackList} 
        </>
    )
}

