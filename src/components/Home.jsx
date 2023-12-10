import React, {useState, useEffect} from "react";
import FadeIn from 'react-fade-in';

function Home() {
    
    return (
        <div className="Home mt-10 w-max text">
            <FadeIn delay="200">
            <div className="flex-row w-fit mb-10 ">
                <div className="flex justify-start animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-black font-bold xxxs:text-1xl sm:text-3xl md:text-4xl lg:text-5xl">HELLO, I'M PEERANAT PATARAKITTISOPOL</div>
            </div>
            <div className="Home-content flex justify-start mb-10 ss:text-lg">
                <div>2nd year  software engineer student at KMITL. I enjoyed learning new things since when i was young especially in technologies. I mainly do the software works and also do some level of hardware</div>
            </div>
            <div className="">
                Contacts
            </div>
            </FadeIn>
        </div>
    );
}

export default Home;