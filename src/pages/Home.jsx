import HeroSection from './HeroSection';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main>
            <div
        >
            {/* Hero Section */}
            <HeroSection />

            {/* Collaboration Section */}
            <section className="mt-12 py-16 bg-red-500 dark:bg-gray-900 text-center"
                >
                <h3>
                    <p>
                       You visualize it, I'll build it
                    <p></p>
                    </p>
                </h3>
                <p>
                    Have a project in mind or just want to connect? Feel free to reach out!
                </p>

                <Link 
                to="/contact"
                >

                    Contact Me
                </Link>
            </section>
        </div>
            
            </main>
    );
};

export default Home;
