"use client"
import { Carousel } from 'flowbite-react';

const bannerImg = [
    {img: "stats.svg", description: "Secure your payments with our state of the art escrow"},
    {img: "stats.svg", description: "Close your deals with confidence"},
];

const Banner = () => {
    return (
        <div className="h-screen bg-slate-950 justify-center flex items-center mx-auto"> 
            <Carousel className='w-full' pauseOnHover>
                {/* <img src={bannerImg[0].img} alt='stat' className='w-96 h-auto my-auto mx-auto' /> */}
            </Carousel>
        </div>
    );
};

export default Banner;