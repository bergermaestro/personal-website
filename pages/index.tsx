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

function Home({posts, mainPage, projects}) {
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
        <div className="px-14 lg:px-6 lg:max-w-5xl mx-auto">
          <Hero mainHeading={mainPage.data.attributes.mainHeading} heroSummary={mainPage.data.attributes.heroSummary}/>

          <Spacer/>

          <ProjectSection posts={projects} sectionInfo={mainPage.data.attributes.Section} sectionNumber="0" />

          <SectionDivider direction={0}/>

          <BlogSection posts={posts} sectionInfo={mainPage.data.attributes.Section} sectionNumber="1"/>

          <SectionDivider direction={1}/>

          <GallerySection sectionInfo={mainPage.data.attributes.Section} sectionNumber="2"/>

          <Spacer/>
        </div>
        <Footer/>
      </div>
  )
}

export default Home

export async function getStaticProps() {
  // get posts from the API
  // TODO: store this in an environment variable

  // const resPosts = await fetch('http://localhost:1337/api/posts');
  // const resMainPage = await fetch('http://localhost:1337/api/main-page');

  const [resPosts, resMainPage, resProjects] = await Promise.all([
    fetch('http://localhost:1337/api/posts?populate=*'), 
    fetch('http://localhost:1337/api/main-page?populate=*'),
    fetch('http://localhost:1337/api/projects?populate=*'), 
  ]);

  // const posts = await resPosts.json();
  // const mainPage = await resMainPage.json();
  const [posts, mainPage, projects] = await Promise.all([
    resPosts.json(), 
    resMainPage.json(),
    resProjects.json()
  ]);

  return {
    props: { 
      posts, 
      mainPage,
      projects},
  };
}

