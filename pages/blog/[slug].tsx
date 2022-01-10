import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import ReactMarkdown from "react-markdown"
import Spacer from "../../components/Spacer"

const Post = ({post}:any) => {

    // console.log(post.title)
    return (
        <div className="text-white font-poppins">
            <Nav/>
            <div className="max-w-5xl mx-auto">
            <h1 className='text-5xl font-crete-round mb-6 leading-[1.2]'>{post.title}</h1>
            <h2>{post.date}</h2>
            <article className="prose prose-invert prose-cyan">
            <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>
            </div>
            <Spacer/>
            <Footer/>
        </div>
    )
}

export default Post


//tell next.js how many pages there are

export async function getStaticPaths() {
  // get posts from the API
  // TODO: store this in an environment variable

  const res = await fetch(`http://localhost:1337/api/posts?populate=*`);
  const posts = await res.json();

//   const [resPosts] = await Promise.all([
//     fetch('http://localhost:1337/api/posts?populate=*'), 
//   ]);

//   const [posts] = await Promise.all([
//     resPosts.json(), 
//   ]);

  const paths = posts.data.map((post:any) => ({
    params: { slug: post.attributes.Slug },
  }));

//   console.log("PATHS:")
//   console.log(paths)

  return {
    paths,
    fallback: false,
  };
}

// for each individual page: get the data for that page

export async function getStaticProps({ params } : {params:any}) {
    const {slug} = params;

    console.log("SLUG:")  
    console.log(slug)

    // const res = await fetch(`http://localhost:1337/posts?Slug=${slug}`);
    const res = await fetch(`http://localhost:1337/api/posts?filters[slug][$eq]=${slug}`);

    // console.log("RES:")
    // console.log(res)

    const {data} = await res.json();

    // console.log("DATA:")
    // console.log(data)

    const post = data[0].attributes;

    console.log("POST:")
    console.log(post)

    return {
        props: { post },
    }
} 