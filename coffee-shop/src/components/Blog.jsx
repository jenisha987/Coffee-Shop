import React from 'react'
import blog_img1 from  "../assets/images/blog.webp";
import blog_img2 from  "../assets/images/blog1.webp";
import blog_img3 from  "../assets/images/blog2.webp";

const Blog = () => {

    const blogs = [
        {
            id: 1,
            title: "coffee at its best",
            img: blog_img1,
            desc: "An experience I didn’t realize was needed. A bite of the pastry, a sip of the coffee, there’s no harmony between the two. This is why food pairing is important. This is where Blacksmith Coffee Roastery comes in and answers the problem I didn’t know needed solving. Three pairings — each coffee brewed differently and paired with a dessert that does not overshadow each other.", 
        },
        {
            id: 2,
            title: "coffee at its best",
            img: blog_img2,
            desc: "An experience I didn’t realize was needed. A bite of the pastry, a sip of the coffee, there’s no harmony between the two. This is why food pairing is important. This is where Blacksmith Coffee Roastery comes in and answers the problem I didn’t know needed solving. Three pairings — each coffee brewed differently and paired with a dessert that does not overshadow each other.", 
        },
        {
            id: 3,
            title: "coffee at its best",
            img: blog_img3,
            desc: "An experience I didn’t realize was needed. A bite of the pastry, a sip of the coffee, there’s no harmony between the two. This is why food pairing is important. This is where Blacksmith Coffee Roastery comes in and answers the problem I didn’t know needed solving. Three pairings — each coffee brewed differently and paired with a dessert that does not overshadow each other.", 
        },        
    ]

    const displayedBlogs = blogs.slice(0,2);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      };

  return (
    <div className='home-blog'>
        <p className='home-blog-p'>our blogs</p>
        <div className='home-blog-list'>
            {
                blogs.map(blog => (
                    <div id={blog.id} className='blog-item'>
                        <img src={blog.img} alt="blog" className='home-blog-img' />
                        <p>news</p>
                        <p>{blog.title}</p>
                        <p>{blog.desc.length > 100 ? blog.desc.slice(0, 80) + '...' : blog.desc}</p>
                    </div>
                ))
            }
        </div>
        <div className='home-blog-list-resp'>
            {
                displayedBlogs.map(blog => (
                    <div id={blog.id} className='blog-item'>
                        <img src={blog.img} alt="blog" className='home-blog-img' />
                        <p>news</p>
                        <p>{blog.title}</p>
                        <p>{blog.desc.length > 100 ? blog.desc.slice(0, 80) + '...' : blog.desc}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Blog