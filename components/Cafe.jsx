import React from "react";

const Cafe = () => {
    const cafePlaces = [
        { name: "Conçu", link: "https://maps.app.goo.gl/EyRyHEJnoHB7XLKH6" },
        { name: "Araku", link: "https://maps.app.goo.gl/3KsZfwwfWMEWnZPDA" },
        { name: "Travellers Bungalow", link: "https://maps.app.goo.gl/DrcWKoatui3hpU8k8" },
        { name: "The Fatty Bao", link: "https://maps.app.goo.gl/ZJTkJcCdi5iwHp8C8" },
        { name: "Lazy Suzy", link: "https://maps.app.goo.gl/NWhX4JrBZoCL3FyR8" },
        { name: "Cafe Graze", link: "https://maps.app.goo.gl/YPBeyhy5gZgZjneMA" },
        { name: "Paper & Pie", link: "https://www.google.com/maps/search/paper+%26+pie/@12.9733098,77.6454823,13z/data=!3m1!4b1?authuser=0&entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" },
        { name: "Subko Cafe", link: "https://maps.app.goo.gl/6PrhaqSQapbdPX4Q8" },
    ]

    return (
        <div className="container">
            <div className="containerHeader">
                <b>🍔 Cafe</b>
            </div>
            <ul>
                {cafePlaces.map((place, index) => (
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

export default Cafe;   