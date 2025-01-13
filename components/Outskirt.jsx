import React from "react";

const Outskirt = () => {
    const outskirtPlaces = [
        { name: "Nandi Hills", link: "https://maps.app.goo.gl/nWXAxHVWhJSFe2L57" },
        { name: "Art Of Coorg - Drive in Cafe", link: "https://maps.app.goo.gl/hVNjPc7xU63qkFrFA" },
    ]

    return (
        <div className="container">
            <div className="containernavbar">
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