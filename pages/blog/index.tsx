import Head from 'next/head'
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import Spacer from "../../components/Spacer"
import BlogCard from "../../components/BlogCard"

const Blog = ({posts}: {posts:any}) => {

    return (
        <div className="bg-default-400 text-white font-poppins">
            <Head>
                <title>Matthew Berger | Blog</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Nav/>
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-crete-round py-8">Blog</h1>
                {/* <BlogCard title="" summary="" image="" slug=""/>
                <div className="h-8"/>
                <BlogCard />
                <div className="h-8"/>
                <BlogCard/> */}


                {posts && posts.data.map((post:any) => (
                <div key={post.id} className="mb-12">
                  <BlogCard title={post.attributes.title} summary={post.attributes.summary} image={post.attributes.Image.data.attributes.url} slug={"blog/" + post.attributes.Slug}/>
                </div>

              ))}
                <Spacer/>
            </div>
            <Footer/>
        </div>
    )
}

export default Blog


export async function getStaticProps() {
    // get posts from the API
    // TODO: store this in an environment variable
  
    // const resPosts = await fetch('http://localhost:1337/api/posts');
    // const resMainPage = await fetch('http://localhost:1337/api/main-page');
  
    const [resPosts] = await Promise.all([
      fetch(`${process.env.HOST}/api/posts?populate=*`), 
    ]);
  
    // const posts = await resPosts.json();
    // const mainPage = await resMainPage.json();
    const [posts] = await Promise.all([
      resPosts.json(), 
    ]);
  
    return {
      props: { 
        posts
    },
    };
  }
  