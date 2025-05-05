import React, { useState, useEffect } from 'react'
import { blogs } from '../components/blogPosts/blogs'
import { Link } from 'react-router-dom'
import statsStore from '../stores/statsStore';

function Blog() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [disabledFilters, setDisabledFilters] = useState([]);
  const { trackBlogView, fetchPopularBlogs, popularBlogs } = statsStore();

  useEffect(() => {
    fetchPopularBlogs();
  }, []);

  const trackClick = (blog) => {
    console.log("blog: ", blog);
    trackBlogView(blog.path);
};

  const allTags = [...new Set(blogs.flatMap(blog => blog.tags))];
  
  useEffect(() => {
    const sortedBlogs = [...blogs].sort((a, b) => {
      const aViews = popularBlogs.find(pb => pb.path === a.path)?.viewCount || 0;
      const bViews = popularBlogs.find(pb => pb.path === b.path)?.viewCount || 0;
      return bViews - aViews; 
    });

    if (selectedFilters.length === 0) {
      setFilteredBlogs(sortedBlogs);
      setDisabledFilters([]);
    } else {
      const newFilteredBlogs = sortedBlogs.filter(blog => 
        selectedFilters.every(filter => blog.tags.includes(filter))
      );
      setFilteredBlogs(newFilteredBlogs);
      const newDisabledFilters = allTags.filter(tag => {
        if (selectedFilters.includes(tag)) return false;
        
        const wouldHaveResults = newFilteredBlogs.some(blog => 
          blog.tags.includes(tag)
        );
        
        return !wouldHaveResults;
      });
      setDisabledFilters(newDisabledFilters);
    }
  }, [selectedFilters, popularBlogs]);
  
  const toggleFilter = (tag) => {
    if (selectedFilters.includes(tag)) {
      setSelectedFilters(selectedFilters.filter(filter => filter !== tag));
    } else {
      setSelectedFilters([...selectedFilters, tag]);
    }
  };
  
  return (
    <div className="w-11/12 sm:w-5/6 mx-auto">
      <h2 className="text-4xl md:text-6xl text-center mb-10 mt-10 text-[#e2a3b7]">Our blogs</h2>  
      <div className="mb-5 text-center w-3/4 mx-auto">
        <p className="text-2xl mb-2">
          Welcome to the MixSkincare Blog, your space for honest reviews, natural beauty tips, 
          and real skin talk.
        </p>
        <p className="text-lg">
          From DIY skincare recipes and ingredient spotlights to product reviews and everyday glow-up 
          hacks, this blog covers it all. Whether you're just starting your skincare journey or you're 
          deep into your routine, there's something here for everyone.
        </p>
        <p className="text-lg">
          Looking for something specific? Use the filters to browse by topic, whether you're into 
          natural remedies, product reviews, or skincare tips for your unique skin type.
        </p>
      </div>    
      <div className="mb-10 w-1/2 mx-auto">
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => !disabledFilters.includes(tag) && toggleFilter(tag)}
              className={`rounded-full px-3 p-1 text-sm ${
                selectedFilters.includes(tag)
                  ? 'bg-[#e2a3b7] text-white font-semibold'
                  : disabledFilters.includes(tag)
                  ? 'bg-[#e5e7ebaa] text-[#d1d5dbdd] cursor-not-allowed'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              disabled={disabledFilters.includes(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="w-full justify-center flex mt-4">
          {selectedFilters.length > 0 && (
            <button
              onClick={() => setSelectedFilters([])}
              className="mt-2 flex justify-end font-semibold mr-0 p-1 border rounded-md border-[#e2a3b7] text-[#e2a3b7] hover:bg-[#e2a3b7] hover:text-white"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>      
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 gap-y-20 mb-20">
        {filteredBlogs.map((blog, index) => (
          <Link 
            to={blog.path} 
            key={index}
            onClick={() => trackClick(blog)}
          >
            <div className="w-40 sm:w-60 h-80 p-2 bg-gray-100 rounded-md mx-auto flex flex-col shadow-md">
              <div>
                <img src={blog.img} className="rounded-md" alt={blog.title} />
                <p className="text-xl text-center mb-4 mt-2">{blog.title}</p>
              </div>
              <div className="flex flex-wrap flex-row gap-2 justify-center mt-auto">
                {blog.tags.map((tag, tagIndex) => (
                  <p 
                    key={tagIndex}
                    className={`rounded-full p-1 text-sm ${
                      selectedFilters.includes(tag) 
                        ? 'bg-[#FFDFE9]' 
                        : 'bg-white'
                    }`}
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