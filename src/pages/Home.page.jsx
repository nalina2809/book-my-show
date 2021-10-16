import React from "react";

import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import Premier from "../components/Premier/Premier.component";

const HomePage = () => {
    return (
    <> 
    <div className ="container mx-auto px-4">
        <h1 className ="text-xl font-bold text-gray-800 my-3">
            The Best Of Entertainment
        </h1>
    <EntertainmentCardSlider />
    </div>

    <div className="bg-gray-800 py-16">
        <div className="hidden items-center justify-between md:flex"> </div>
        <div>
       <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
       alt = "Premier"
       />
        </div>
    </div>
    </>
    );
};

export default HomePage;