import { useContext } from "react";
import { GiFoodTruck } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import MessageContext from "../MessageContext";

const Banner = () => {
    const message = useContext(MessageContext)
    return (
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                    <div data-aos="zoom-in">
                        <img
                            className="max-w-[400px] h-[350px] w-full mx-auto object-cover"
                            src="../public/japan1.jpg"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-6 sm:pt-0">
                        <h1
                            data-aos="fade-up"
                            className="text-3xl sm:text-4xl font-bold"
                        >
                            Winter Sale Upto 50% Off
                        </h1>
                        <p
                            data-aos="fade-up"
                            className="text-sm text-gray-500 tracking-wide leading-6"
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Dolorum dignissimos, dolore iure nemo minus
                            aut sint molestias consequuntur! Dicta voluptate
                            sint laudantium porro voluptatibus mollitia, magni
                            voluptatem tempora non est.
                        </p>

                        <div className="flex flex-col gap-4  ">
                            <div
                                data-aos="fade-up"
                                className="flex items-center gap-4 "
                            >
                                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400 " />
                                <p>Quality Products</p>
                            </div>

                            <div
                                data-aos=" fade-up"
                                className="flex items-center gap-4  "
                            >
                                <IoFastFood
                                    data-aos="fade-up"
                                    className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"
                                />
                                <p data-aos="fade-up">Fast Delivery</p>
                            </div>
                            <div
                                data-aos=" fade-up"
                                className="flex items-center gap-4  "
                            >
                                <GiFoodTruck
                                    data-aos="fade-up"
                                    className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"
                                />
                                <p data-aos="fade-up"> Easy Payments Methods</p>
                            </div>
                            <div
                                data-aos=" fade-up"
                                className="flex items-center gap-4  "
                            >
                                <IoFastFood
                                    data-aos="fade-up"
                                    className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"
                                />
                                <p data-aos="fade-up">Get Offers</p>
                            </div>
                        </div>
                        <p   data-aos="fade-up">{message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
