import backgroundImage from '../assets/yellow flower field.jpg';
import portraitImage from '../assets/nDeaneProfilePic.jpg';

const About = () => {
    return (
        <main
            id="about"
            className="p-8 bg-cover bg-center text-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <section className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                {/* Portrait Photo */}
                <img
                    src={portraitImage}
                    alt="Noela Deane Portrait"
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg object-cover"
                />

            {/* Bio Section */}
            <div>
                <h2 className="text-4xl text-white font-bold text-shadow mb-4">
                    About Me</h2>

                <p className="text-2xl mb-6 text-white text-shadow">
                    I graduated with a Bachelors degree in Computer Science and established a firm foundation in the educational sector.
                    I am a former Executive Director of Education embarking on an exciting journey into software development.
                    My transition from education leadership to technology represents my commitment to lifelong learning and embracing new challenges.
                </p>

                <p className="text-2xl mb-6 text-white text-shadow">
                    <strong className="block text-xl text-yellow-300">
                        I specialize in:
                    </strong>

                    <ul className="list-inside list-disc text-yellow-300 mt-3">
                        <li>Front-end and full-stack web development</li>
                        <li>CSS, HTML, JavaScript, Web APIs, Typescript, Servers and APIs, SQL, NoSQL, Full-Stack React, MERN, Authentication, Python</li>
                        <li>Creating efficient, user-friendly applications</li>
                        <li>Building responsive and intuitive user interfaces</li>
                    </ul>
                </p>

                <p className="text-2xl mb-6 text-white">
                    <strong className="block text-xl text-yellow-300">
                        What Sets Me Apart:
                    </strong>

                    <ul className="list-inside list-disc text-yellow-300 mt-3">
                        <li>Unique background that brings a fresh perspective to software development</li>
                        <li>Detail-oriented approach combined with a growth mindset</li>
                        <li>Strong foundation in problem-solving and analytical thinking</li>
                        <li>Natural ability to break down complex concepts, developed through years of teaching</li>
                        <li>Expertise in facilitating collaborative environments that foster innovation</li>
                    </ul>
                </p>
                <p className="text-2xl mb-6 text-white">
                    <strong className="block text-xl text-yellow-300">Current Journey:</strong>
                    <ul className="list-inside list-disc text-yellow-300 mt-3">
                        <li>I am actively expanding my technical toolkit</li>
                        <li>Developing practical applications using modern frameworks</li>
                        <li>Building a portfolio of meaningful projects</li>
                        <li>Focusing on creating innovative solutions that enhance user experiences</li>
                        <li>Contributing to projects that make a positive impact in the tech industry</li>
                    </ul>
                </p>


                <p className="text-2xl mb-6 text-white">
                    <strong className="block text-xl text-yellow-300">
                        Let us connect and explore how my unique blend of educational leadership and technical skills can contribute to your next project!
                    </strong>
                </p>        
              </div>

            </section>
        </main>

    );
};

export default About;
