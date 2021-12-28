import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Spacer from "../components/Spacer"

const About = () => {
    return (
        <div className="bg-default-400 text-white font-poppins">
            <Nav/>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-crete-round">About Matthew</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet modi enim odio delectus nemo, officiis 
                    accusamus quam porro eaque deleniti at! Dolorum quibusdam 
                    amet odio officia vero culpa cupiditate expedita!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet modi enim odio delectus nemo, officiis 
                accusamus quam porro eaque deleniti at! Dolorum quibusdam 
                amet odio officia vero culpa cupiditate expedita!</p>
                <Spacer/>
            </div>
            <Footer/>
        </div>
    )
}

export default About
