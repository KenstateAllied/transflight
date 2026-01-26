import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Home from "./pages/Home";
    

function App() {
    useEffect(() => {
        AOS.init({
            duration: 700,
            offset: 100,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, []);

    return (
        <>
            <div className="">
                <Home />
              
            </div>
        </>
    );
}

export default App;
