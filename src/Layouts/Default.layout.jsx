import React from "react";

import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";

const DefaultLayout = (Props) => {
    return (
        <>
         <Navbar />
         <HeroCarousal />
        {Props.children}
        
     </>
    );
};
 
export default DefaultLayout;
