import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.pixelstalk.net/wp-content/uploads/images6/4K-Travel-Wallpaper-HD-Free-download.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Travel With us</h1>
                        <p className="mb-5">Explore the world in <br /> any direction</p>
                        <button className="btn btn-outline btn-primary m-4">Ways to travel </button>
                        <button className="btn btn-outline btn-primary">Explore more  </button>
                        <button className="btn btn-outline btn-primary"><Link to='/login'>hi</Link>  </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;