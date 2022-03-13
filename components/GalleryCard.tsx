import Image from 'next/image'
import PlaceholderImage from '../public/images/placeholder-image.png'

const GalleryCard = ({images}:any) => {
    return (
        <div className='bg-white text-default-400 rounded-lg shadow-lg grid grid-cols-3 grid-rows-3 gap-2 p-2 lg:gap-3 lg:p-3 aspect-square'>

                {/* {console.log(images.data)} */}
                {/* loop over the images and show them */}
                {/* {posts && posts.data.slice(0,2).map((post) => (
                // <div key={post.id}>
                //   <h2>{post.attributes.title}</h2>
                // </div>
                <div key={post.id} >
                    <BlogCard title={post.attributes.title} summary={post.attributes.summary} image={post.attributes.image} slug={post.attributes.Slug}/>
                    <div className='h-6'/>
                </div>

                ))} */}
                {/* <Image src={PlaceholderImage} objectFit='cover' className='rounded-md hover:-scale-[-0.25rem] duration-300 motion-reduce:transition-none motion-reduce:transform-none'/>
                <Image src={PlaceholderImage} objectFit='cover' className='rounded-md hover:-scale-[-0.25rem] duration-300 motion-reduce:transition-none motion-reduce:transform-none'/>
                <Image src={PlaceholderImage} objectFit='cover' className='rounded-md hover:-scale-[-0.25rem] duration-300 motion-reduce:transition-none motion-reduce:transform-none'/>
                <Image src={PlaceholderImage} objectFit='cover' className='rounded-md hover:-scale-[-0.25rem] duration-300 motion-reduce:transition-none motion-reduce:transform-none'/>
                <Image src={PlaceholderImage} objectFit='cover' className='rounded-md hover:-scale-[-0.25rem] duration-300 motion-reduce:transition-none motion-reduce:transform-none'/>
                <Image src={PlaceholderImage} objectFit='cover' className='rounded-md hover:-scale-[-0.25rem] duration-300 motion-reduce:transition-none motion-reduce:transform-none'/>
                <Image src={PlaceholderImage} objectFit='cover' className='rounded-md hover:-scale-[-0.25rem] duration-300 motion-reduce:transition-none motion-reduce:transform-none'/>
                <Image src={PlaceholderImage} objectFit='cover' className='rounded-md hover:-scale-[-0.25rem] duration-300 motion-reduce:transition-none motion-reduce:transform-none'/>
                <Image src={PlaceholderImage} objectFit='cover' className='rounded-md hover:-scale-[-0.25rem] duration-300 motion-reduce:transition-none motion-reduce:transform-none'/>     */}

                
             {/* loop over the posts and show them */}
            {images && images.data.slice(0,9).map((image:any) => (
                <Image key={image.id} src={image.attributes.photo.Image.data.attributes.url} width={image.attributes.photo.Image.data.attributes.width} height={image.attributes.photo.Image.data.attributes.height} objectFit='cover' className='rounded-md hover:-scale-[-0.25rem] duration-300 motion-reduce:transition-none motion-reduce:transform-none'/>
            ))}      
        </div>
    )
}

export default GalleryCard

// export async function getStaticProps() {
//     // get posts from the API
  
//     // const resPosts = await fetch('http://localhost:1337/api/posts');
//     // const resMainPage = await fetch('http://localhost:1337/api/main-page');
//     const qs = require('qs');
//     const query = qs.stringify({
//       populate: {
//         photo: {
//           populate: ['Image'],
//         }
//       } 
//     }, {
//       encodeValuesOnly: true,
//     });

  
//     const [resImages] = await Promise.all([
//       fetch(`${process.env.HOST}/api/galleries?${query}`), 
//     ]);
  
//     // const posts = await resPosts.json();
//     // const mainPage = await resMainPage.json();
//     const [images] = await Promise.all([
//       resImages.json(), 
//     ]);

//     console.log(images);
   
//     return {
//       props: { 
//         images
//     },
//     };
//   }
  
