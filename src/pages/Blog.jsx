import React from 'react'
import { blogs } from '../components/blogPages/blogs'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <div className="w-11/12 sm:w-5/6 mx-auto">
      <h2 className="text-4xl md:text-6xl text-center mb-20 mt-10">Our blogs</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-20">
        {blogs.map((blog, index) => (
          <Link to={blog.path} key={index}>
            <div className="w-40 sm:w-60 h-80 p-2 bg-gray-100 rounded-md mx-auto flex flex-col">
              <div>
                <img src={blog.img} className="rounded-md" />
                <p className="text-xl text-center mb-4 mt-2">{blog.title}</p>
              </div>
              <div className="flex flex-wrap flex-row gap-2 justify-center mt-auto">
                {blog.tags.map((tag, tagIndex) => (
                  <p 
                    key={tagIndex}
                    className="bg-white rounded-full p-1 text-sm"
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Blog