import React from 'react';

const Banner = () => {
    const slide1 = "https://i.ibb.co/BrZhJwr/slide-1.jpg";
    const slide2 = "https://i.ibb.co/pQM1BPL/slide-2.jpg";
    const slide3 = "https://i.ibb.co/BfY1L1F/slide-3.jpg"
    const slide4 = "https://i.ibb.co/qN9nt4w/slide-4.jpg"
    const slide5 = "https://i.ibb.co/fGDZ1bq/slide-5.jpg"
    return (
        <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                ></button> <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                ></button>
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active relative float-left w-full">
                    <img
                        src={slide1}
                        className="block w-full"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Explore the World</h5>
                        <p>Discover your next great adventure, become an explorer to get started!</p>
                    </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img
                        src={slide2}
                        className="block w-full"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Explore the World</h5>
                        <p>Discover your next great adventure, become an explorer to get started!</p>
                    </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img
                        src={slide3}
                        className="block w-full"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Explore the World</h5>
                        <p>Discover your next great adventure, become an explorer to get started!</p>
                    </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img
                        src={slide4}
                        className="block w-full"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Explore the World</h5>
                        <p>Discover your next great adventure, become an explorer to get started!</p>
                    </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img
                        src={slide5}
                        className="block w-full"
                        alt="..."
                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Explore the World</h5>
                        <p>Discover your next great adventure, become an explorer to get started!</p>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;