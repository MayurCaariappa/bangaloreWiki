import React from "react";

const Date = () => {
    const datePlaces = [
        { name: "Cubbon Park", link: "https://maps.app.goo.gl/nGvN8mcRQbBfinNG6" },
        { name: "MAP Conservation Centre", link: "https://maps.app.goo.gl/3RGDk2vHhMHtL7Qz5" },
        { name: "Karnataka Chitrakala Parishath", link: "https://maps.app.goo.gl/QEHQuTzSWAo7ZrLr6" },
        { name: "Sunset Cinema Club", link: "https://www.google.com/maps/search/Sunset+Cinema+Club/@12.8876165,76.878078,9z?authuser=0&entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" },
        { name: "Church Street", link: "https://maps.app.goo.gl/hLSr7bcfcZUpjrbSA" },
        { name: "Amoeba", link: "https://www.google.com/maps/search/Amoeba/@12.9744545,77.566534,13z/data=!3m1!4b1?authuser=0&entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" },
    ]

    return (
        <div className="container">
            <div className="containernavbar">
                <b>🥨 Date</b>
            </div>
            <ul>
                {datePlaces.map((place, index) => (
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

export default Date;