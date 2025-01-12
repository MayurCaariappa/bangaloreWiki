import React from "react";

const Party = () => {
    const partPlaces = [
        { name: "Bob's Bar", link: "https://www.google.com/maps/search/bob's+bar/@12.9672811,77.5979484,13z/data=!3m1!4b1?authuser=0&entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" },
        { name: "TOIT", link: "https://www.google.com/maps/search/Toit/@12.9792988,77.5993455,13z/data=!3m1!4b1?authuser=0&entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" },
        { name: "", link: "" },
    ]

    return (
        <div className="container">
            <div className="containernavbar">
                <b>🎉 Party</b>
            </div>
            <ul>
                {partPlaces.map((place, index) => (
                    <li key={index} className="item">
                        <a
                            href={place.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link"
                        >
                            {place.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Party;