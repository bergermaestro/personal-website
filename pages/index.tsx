import type { NextPage } from 'next'
import Head from 'next/head'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import BlogSection from '../components/BlogSection'
import ProjectSection from '../components/ProjectSection'
import Footer from '../components/Footer'
import Image from 'next/image'
import HeroImage from '../public/images/hero-image.png'
import Spacer from '../components/Spacer'
import GallerySection from '../components/GallerySection'
import SectionDivider from '../components/SectionDivider'

function Home({posts, mainPage, projects, images}: {posts:any, mainPage:any, projects:any, images:any}) {
  // function Home({mainPage} : {mainPage:any}) {
// const Home: NextPage = ( {posts} : {posts:any}) => {

  // console.log(posts.data);
  //console.log(mainPage.data.attributes.mainHeading);
  



  return (
      <div className="bg-default-400 text-white font-poppins">

        <Head>
        <title>Matthew Berger</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Nav/>
        <div className="px-6 md:px-14 lg:px-6 lg:max-w-5xl mx-auto">
          <Hero mainHeading={mainPage.data.attributes.mainHeading} heroSummary={mainPage.data.attributes.heroSummary}/>

          <Spacer/>

          <ProjectSection posts={projects} sectionInfo={mainPage.data.attributes.Section} sectionNumber="0" />

          <SectionDivider direction={0}/>

          <BlogSection posts={posts} sectionInfo={mainPage.data.attributes.Section} sectionNumber="1"/>

          <SectionDivider direction={1}/>

          <GallerySection posts={images} sectionInfo={mainPage.data.attributes.Section} sectionNumber="2"/>

          <Spacer/>
        </div>
        <Footer/>
      </div>
  )
}

export default Home

export async function getStaticProps() {
  // get posts from the API

  //console.log(process.env.NEXT_PUBLIC_HOST)
 // console.log(process.env.HOST)

  // const resPosts = await fetch('http://localhost:1337/api/posts');
  // const resMainPage = await fetch('http://localhost:1337/api/main-page');
  // const qs = require('qs');
  // const query = qs.stringify({
  //   populate: {
  //     photo: {
  //       populate: ['Image'],
  //     }
  //   } 
  // }, {
  //   encodeValuesOnly: true,
  // });

  const qs = require('qs');
  const query = qs.stringify({
    populate: {
      photo: {
        populate: {
          Image: {
            populate: '*',
          }
        }
      }
    } 
  }, {
    encodeValuesOnly: true,
  });

  console.log(query)


  const [resPosts, resMainPage, resProjects, resImages] = await Promise.all([
    // fetch('http://localhost:1337/api/posts?populate=*'), 
    fetch(`${process.env.HOST}/api/posts?populate=*`), 
    fetch(`${process.env.HOST}/api/main-page?populate=*`),
    // fetch(`${process.env.HOST}/api/projects?populate=*`), 
    fetch(`${process.env.HOST}/api/projects?populate=*`), 
    fetch(`${process.env.HOST}/api/galleries?${query}`), 
  ]);

  // const posts = await resPosts.json();
  // const mainPage = await resMainPage.json();
  const [posts, mainPage, projects, images] = await Promise.all([
    resPosts.json(), 
    resMainPage.json(),
    resProjects.json(),
    resImages.json(), 
  ]);

  return {
    props: { 
      posts, 
      mainPage,
      projects,
      images},
  };
}





