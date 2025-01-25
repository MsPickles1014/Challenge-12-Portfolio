const Footer = () => {
    return (
        <footer className="bg-gray-500 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 text-center">
            <div className="flex justify-center space-x-6">
                <a
                    href="https://github.com/MsPickles1014"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 dark:hover:text-blue-300"
                    aria-label="GitHub"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/noela-d-09516a1a6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 dark:hover:text-blue-300"
                    aria-label="LinkedIn"
                >
                    LinkedIn
                </a>
                <a
                    href="mailto:noela.deane@cune.org"
                    className="hover:text-blue-700 dark:hover:text-blue-300"
                    aria-label="Email"
                >
                    Email
                </a>
            </div>
            <p className="mt-4 text-sm">&copy; 2025 Noela Deane. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;















