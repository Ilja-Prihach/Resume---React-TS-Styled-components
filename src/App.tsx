
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Projects} from "./layout/sections/projects/Projects.tsx";
import {Tehnologies} from "./layout/sections/tehnologies/Tehnologies.tsx";
import {Experience} from "./layout/sections/experience/Experience.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {MobileHeader} from "./layout/header/mobileMenu/HeaderMobile.tsx";


function App() {
    return (
        <div className="App">
            <Header/>
            <MobileHeader/>
            <Main/>
            <Projects />
            <Tehnologies/>
            <Experience/>
            <Footer/>
        </div>
    )
}

export default App
