import React, { useEffect } from 'react'

function About() {
  
  useEffect(() => {  
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="w-11/12 mx-auto mt-12 mb-20">
      <div className="w-5/6 mx-auto justify-center text-center text">
        <h2 className="text-4xl min-[500px]:text-5xl md:text-6xl mb-4 min-[500px]:mb-10 text-[#E2A3B7]">The Story Behind MIX Skincare</h2>
        <div className="space-y-10 w-full text-xl">
          <p>What started as a personal quest to build the perfect skincare routine has evolved into an ambitious project with a clear vision. Like many others, I found myself overwhelmed by the complexity of skincare - understanding skin types, considering environmental factors, and most importantly, ensuring product compatibility. The challenge wasn't just in choosing products; it was in understanding how they worked together.</p>
          <p>The turning point came when I realized how time-consuming and difficult it was to manually cross-reference ingredient lists between products. This tedious process of checking each ingredient's compatibility with others seemed unnecessarily complex in our digital age. There had to be a better way.</p>
          <p>As a student of Python development with a focus on AI, I saw an opportunity to merge my technical expertise with this practical need. This led to the development of MIX Skincare as my thesis project, where the current platform serves as the foundation for something even bigger.</p>
          <p>The platform is currently in its first phase, focusing on building a comprehensive database of skincare products and their ingredients. This data collection phase is crucial as it will form the foundation for the next exciting step: developing a machine learning model that can analyze ingredient compatibility with high accuracy.</p>
          <p>The future vision for MIX Skincare includes training an ML model that can not only identify compatible ingredients but potentially explain the reasoning behind these compatibilities. This development is ongoing, and we're meticulously gathering the data needed to make this vision a reality.</p>
          <p>With the skincare market booming, largely driven by social media influence, there's an increasing risk of products being used incorrectly due to lack of proper information. This is why we're building MIX Skincare to be more than just a compatibility checker - it's meant to be a comprehensive platform that helps users of all ages use their skincare products safely and effectively.</p>
          <p>This project represents the beginning of a bridge between the complex world of skincare ingredients and everyday users who want to take the best care of their skin. By making this information accessible and easy to understand, we aim to help everyone build safer, more effective skincare routines.</p>
        </div>
      </div>
    </div>
  )
}

export default About