import React from "react";

const Outskirt = () => {
    const outskirtPlaces = [
        { name: "", link: "" },
        { name: "", link: "" },
        { name: "", link: "" },
    ]

    return (
        <div className="container">
            <div className="containerHeader">
                <b>⛺ Outskirt</b>
            </div>
            <ul>
                {outskirtPlaces.map((place, index) => (
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

export default Outskirt;