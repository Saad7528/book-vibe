import React from 'react';
import heroImg from "../../assets/hero_img.jpg"

const Banner = () => {
    return (
        <div className="hero bg-base-200 container mx-auto my-9 rounded-2xl min-h-[70vh]">
            <div className="hero-content w-full justify-between flex-col lg:flex-row-reverse">
                <img
                    src={heroImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up <br />your bookshelf!</h1>
                    
                    <button className="btn btn-success mt-8">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;