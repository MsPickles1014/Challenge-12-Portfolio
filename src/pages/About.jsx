
import portraitImage from '../assets/NoelaPic2.jpg';

const About = () => {
    return (
        <main>

            <section>
                {/* Portrait Photo */}
                <img
                    src={portraitImage}
                    alt="Noela Deane Portrait"
                    style={{ width: '8rem', height: '10rem' }}
                    className="radius "
                />

                {/* Bio Section */}
                <div>
                    <h1>About Me</h1>
                    <p className="text-lg">
                        I graduated with a Bachelors degree in Computer Science and established a firm foundation in the educational sector.
                        I am a former Executive Director of Education embarking on an exciting journey into software development.
                        My transition from education leadership to technology represents my commitment to lifelong learning and embracing new challenges.
                    </p>

                    <p>
                        <h3> I specialize in: </h3>
                    </p>
                    <ul>
                        <li>Front-end and full-stack web development</li>
                        <li>
                            CSS, HTML, JavaScript, Web APIs, Typescript, Servers and APIs, SQL, NoSQL, Full-Stack React, MERN, Authentication, Python
                        </li>
                        <li>Creating efficient, user-friendly applications</li>
                        <li>Building responsive and intuitive user interfaces</li>
                    </ul>

                    <p>
                        <h3> What Sets Me Apart:</h3>
                    </p>
                    <ul>
                        <li>Unique background that brings a fresh perspective to software development</li>
                        <li>Detail-oriented approach combined with a growth mindset</li>
                        <li>Strong foundation in problem-solving and analytical thinking</li>
                        <li>Natural ability to break down complex concepts, developed through years of teaching</li>
                        <li>Expertise in facilitating collaborative environments that foster innovation</li>
                    </ul>

                    <p>
                        <h3> Current Journey:</h3>
                    </p>
                    <ul >
                        <li>I am actively expanding my technical toolkit</li>
                        <li>Developing practical applications using modern frameworks</li>
                        <li>Building a portfolio of meaningful projects</li>
                        <li>Focusing on creating innovative solutions that enhance user experiences</li>
                        <li>Contributing to projects that make a positive impact in the tech industry</li>
                    </ul>

                    <p>
                        <h3> Let's connect, explore how my unique talents, and see how I can contribute to your next project!</h3>

                    </p>

                </div>
            </section>
        </main>
    );
};

export default About;
