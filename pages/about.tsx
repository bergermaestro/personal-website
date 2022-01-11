import Head from "next/head"
import Nav from "../components/Nav"
import ReactMarkdown from "react-markdown"
import Footer from "../components/Footer"
import Spacer from "../components/Spacer"
import ResumeCard from "../components/ResumeCard"

const About = ({content}:any) => {

    console.log(content)

    return (
        <div className="bg-default-400 text-white font-poppins">
                    <Head>
        <title>Matthew Berger | About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

            <Nav/>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-crete-round">{content.data.attributes.title}</h1>
                <div className="h-8"></div>
                <ReactMarkdown className="prose prose-invert">{content.data.attributes.content}</ReactMarkdown>

                <ResumeCard/>

                <Spacer/>
            </div>
            <Footer/>
        </div>
    )
}

export default About




export async function getStaticProps() {
    // get posts from the API
  
    // const resPosts = await fetch('http://localhost:1337/api/posts');
    // const resMainPage = await fetch('http://localhost:1337/api/main-page');
  
    const [resContent] = await Promise.all([
      fetch(`${process.env.HOST}/api/about-page`), 
    ]);
  
    // const posts = await resPosts.json();
    // const mainPage = await resMainPage.json();
    const [content] = await Promise.all([
      resContent.json(), 
    ]);
  
    return {
      props: { 
        content
    },
    };
  }
  
