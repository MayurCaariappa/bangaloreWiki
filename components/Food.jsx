import React from "react";

const Food = () => {
    const foodPlaces = [
        { name: "CTR", link: "https://maps.app.goo.gl/hRktQfxnC7X47r4N9" },
        { name: "Airlines", link: "https://maps.app.goo.gl/9fjZUdWU8nbwnzCw8" },
        { name: "Milano Ice Cream", link: "https://www.google.com/maps/search/Milano+Ice+Cream/@12.9791251,77.6007818,13z/data=!3m1!4b1?authuser=0&entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" },
        { name: "", link: "" },
        { name: "", link: "" },
    ]

    return (
        <div className="container">
            <div className="containerHeader">
                <b>🥘 Food</b>
            </div>
            <ul>
                {foodPlaces.map((place, index) => (
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

export default Food;