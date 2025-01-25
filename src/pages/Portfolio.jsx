import image1 from '../assets/CoolCademyImage.jpg';
import image2 from '../assets/employeeTrackerDB-SQL.png';
import image3 from '../assets/ReadMeImage.png';
import image4 from '../assets/vehicleBuilderImage.webp';
import image5 from '../assets/Weather-Forecast-API-Image.jpeg';

const projects = [
    {
        id: 1,
        title: "Alphabet Learning App",
        description: "The Alphabet Learning App is an interactive, educational tool designed to help users learn the alphabet. The app allows users to input letters, dynamically generates flashcards with images and text, and saves progress using local storage. It also includes background music, a modal interface, and a Play-Again feature for restarting the learning session.",
        image: image1, 
        github: "https://mspickles1014.github.io/CoolCademy/",
    },
    {
        id: 2,
        title: "Employee Tracker",
        description: "Employee Tracker is a command-line application built to streamline the management of a company's employee database. Developed with Node.js, Inquirer.js, and MySQL, this tool enables users to efficiently add, view, update, and organize employee records, roles, and departments. The project highlights advanced backend development skills, including expertise in database management, SQL queries, and modular code structure. It provides a practical and effective solution for simplifying HR and administrative processes.",
        image: image2, // Imported image
        github: "https://github.com/MsPickles1014/Challenge-10",
    },
    {
        id: 3,
        title: "Professional README Generator",
        description: "The README Generator is a powerful Command Line Interface (CLI) tool.designed to streamline the creation of professional and structured README.md files for your projects. By providing simple prompts, developers can create a polished README that includes licensing, installation instructions, usage guidelines, and more. This easy-to-use tool creates a README file by using a command-line application to generate one; enabling the project creator to devote more time to working on the project",
        image: image3, // Imported image
        github: "https://github.com/MsPickles1014/challenge-5",
    },
    {
        id: 4,
        title: "Vehicle Builder",
        description: "This project is a Command Line Interface (CLI) application for managing a fleet of vehicles. It allows users to create different types of vehicles (Cars, Trucks, and Motorbikes), interact with them, and perform various actions.",
        image: image4, // Imported image
        github: "https://github.com/MsPickles1014/Challenge-6",
    },
    {
        id: 5,
        title: "Weather Tracker",
        description: "Weather Tracker is a dynamic web application that provides real-time weather information for user-specified locations. Using the OpenWeather API, the app displays current conditions, a 5-day forecast, and key metrics like temperature, humidity, and wind speed. Built with JavaScript, HTML, and CSS, the project showcases skills in API integration, responsive design, and user interaction. Its intuitive interface makes it a valuable tool for planning and staying informed about weather conditions.",
        image: image5, // Imported image
        github: "https://github.com/MsPickles1014/Weather-Dashboard",
    },
];
const Portfolio = () => {
    return (
        <section 
        id="portfolio" 
        className="p-8 bg-portfolio-bg bg-cover bg-center text-gray-900">

            <h1 className="text-3xl font-bold mb-6 text-center">Welcome to My Project Page</h1>
            <h2 className="text-2xl font-bold mb-4">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white shadow-lg p-4 rounded">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className={`w-full h-48 object-cover rounded mb-4 ${
                                project.id === 2 ? 'object-[50%_20%]' : 'object-center'
                            }`}
                        />
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <p>{project.description}</p>
                        <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;