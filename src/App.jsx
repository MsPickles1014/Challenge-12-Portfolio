import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import GlobalBackground from "./assets/flower2.jpg";

function App() {
    return (
        <main className >
            <div 
            style={{
                backgroundImage: `url(${GlobalBackground})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}
        >
            <Navbar />
            <main className="flex-grow text-6xl">
                <Outlet />
            </main>
            <Footer />
        </div>
            </main>
    );
}

export default App;

