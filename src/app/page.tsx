import Image from "next/image";
import Home from "@pages/home/page";
import About from "@pages/about/page";
import Classes from "./classes/page";
import Contact from "./contact/page";
import Pricing from "./pricing/page";
import Schedule from "./schedule/page";

export default function App() {
    return (
        <div>
            <Home />
            {/* <About />
            <Classes />
            <Contact />
            <Pricing />
            <Schedule /> */}
        </div>
    );
}
