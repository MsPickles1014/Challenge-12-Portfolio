
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section
            className=""
             // Inline style for dynamic background
        >
            <h1 className=" sm:text-5xl font-bold mb-6"
                >
                Let's Work Together To Create Wonders
            </h1>
           
            <Link
                to="/Portfolio" 
                className="inline-block bg-blue-900 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105;"
               
            >
                View My Work
            </Link>
        </section>
    );
};


export default HeroSection;
