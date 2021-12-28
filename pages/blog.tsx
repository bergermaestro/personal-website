import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Spacer from "../components/Spacer"
import Card from "../components/Card"

const Blog = () => {
    return (
        <div className="bg-default-400 text-white font-poppins">
            <Nav/>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-crete-round py-8">Blog</h1>
                <Card/>
                <div className="h-8"/>
                <Card/>
                <div className="h-8"/>
                <Card/>
                <Spacer/>
            </div>
            <Footer/>
        </div>
    )
}

export default Blog
