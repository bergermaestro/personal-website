import Head from "next/head"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Spacer from "../components/Spacer"

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
                <p>{content.data.attributes.content}</p>

                <Spacer/>
            </div>
            <Footer/>
        </div>
    )
}

export default About




export async function getStaticProps() {
    // get posts from the API
    // TODO: store this in an environment variable
  
    // const resPosts = await fetch('http://localhost:1337/api/posts');
    // const resMainPage = await fetch('http://localhost:1337/api/main-page');
  
    const [resContent] = await Promise.all([
      fetch('http://localhost:1337/api/about-page'), 
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
  
