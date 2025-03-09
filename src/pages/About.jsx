import React from 'react'

function About() {
  return (
    <div className="w-11/12 mx-auto mt-12 mb-20">
      <div className="w-3/4 mx-auto justify-center">
        <h2 className="text-center text-4xl min-[500px]:text-5xl md:text-6xl mb-4 min-[500px]:mb-10 text-[#E2A3B7]">The Story Behind MIX Skincare</h2>
        <div className="space-y-5 w-full text-xl mb-24">
          <p>What started as a personal quest to build the perfect skincare routine has evolved into an ambitious project with a clear vision. Like many others, I found myself overwhelmed by the complexity of skincare - understanding skin types, considering environmental factors, and most importantly, ensuring product compatibility. The challenge wasn't just in choosing products; it was in understanding how they worked together.</p>
          <p>The turning point came when I realized how time-consuming and difficult it was to manually cross-reference ingredient lists between products. This tedious process of checking each ingredient's compatibility with others seemed unnecessarily complex in our digital age. There had to be a better way.</p>
          <p>As a student of Python development with a focus on AI, and a background in Frontend development; I saw an opportunity to merge my technical expertise with this practical need. This led to the development of MIX Skincare as my thesis project, where the current platform serves as the foundation for something even bigger.</p>
          <p>The platform is currently in its early stages, utilizing a limited dataset of AI-generated dummy data. t this stage, the products lack complete ingredient lists, and the rules for incompatibilities and active ingredients have also been AI-generated. While the platform is fully functional, the results are not yet 100% factually accurate. This is a temporary solution to establish core functionality.</p>
          <p>To ensure accuracy, I have ongoing plans to collaborate with a licensed esthetician to validate ingredient information. Additionally, I plan to collect real product data with complete ingredient lists. Once this data is compiled, I will generate a high-quality dataset that accurately reflects ingredient compatibility. This dataset will enable me to automate the product filtering process, laying the groundwork for a more reliable and scalable solution. And in addition to training a machine learning model to automate this process, I have several other planned features, some of which are already in development.</p>
          <p>With the skincare market booming, largely driven by social media influence, there's an increasing risk of products being used incorrectly due to lack of proper information. This is why I'm building MIX Skincare to be more than just a compatibility checker, it's meant to be a comprehensive platform that helps users of all ages use their skincare products safely and effectively.</p>
          <p>This project represents the beginning of a bridge between the complex world of skincare ingredients and everyday users who want to take the best care of their skin. By making this information accessible and easy to understandđ, I aim to help everyone build safer, more effective skincare routines.</p>
        </div>

        <h2 className="text-center text-4xl min-[500px]:text-5xl md:text-6xl mb-4 min-[500px]:mb-10 text-[#E2A3B7]">Techniques Used in MIX Skincare</h2>
        <div className="space-y-7 w-full text-xl mb-24">
          <div>
            <p className="text-2xl mb-2"><strong>Frontend Technologies:</strong></p>
            <ul>
              <li><strong>React & Tailwind CSS</strong> – Used for building a dynamic and responsive user interface.</li>
              <li><strong>Zustand</strong> – Chosen for efficient state management, ensuring smooth handling of user selections, product comparisons, and saved routines.</li>
            </ul>
          </div>
          <div>
            <p className="text-2xl mb-2"><strong>Backend Technologies:</strong></p>
            <ul>
              <li><strong>FastAPI (Python)</strong> – Enables efficient request handling with asynchronous capabilities.</li>
              <li><strong>PostgreSQL</strong> – Stores product and ingredient data, designed for scalability.</li>
              <li><strong>AI-Generated Data</strong> – Currently used for ingredient compatibility analysis, with plans for real-world data integration.</li>
            </ul>
          </div>
          <div>
            <p className="text-2xl mb-2"><strong>How Compare Products works:</strong></p>
            <ul>
            <ul>
            <li>- Users select two skincare products to compare their ingredient compatibility. Once the AI model has been trained for ingredient analysis, users will be able to input multiple products.</li>
            <li>- The backend fetches both products and their associated ingredient lists from the database</li>
            <li>- A compatibility check is performed by cross-referencing ingredients against a table of known <storng>incompatible ingredient pairs</storng> stored in the database.A compatibility check is performed by cross-referencing ingredients against a table of known <strong>incompatible ingredient pairs</strong> stored in the database.</li>
            <li>- If an incompatibility is found (e.g., combining AHAs with retinoids), a warning is generated.</li>
            <li>- Additionally, the system identifies <strong>active ingredients</strong> in each product. Once factual ingredient data is integrated, it will also provide information on usage, skin type compatibility, and recommended routines.</li>
            <li>- The final output includes product names, a list of flagged ingredient conflicts, active ingredient warnings, and an overall compatibility status.</li>
          </ul>
            </ul>
          </div>
          <div>
            <p className="text-2xl mb-2"><strong>How Dupe Search: works:</strong></p>
            <ul>
            <li>- Users can search for similar products to a given skincare item.</li>
            <li>- The backend retrieves all products within the same category as the selected product.</li>
            <li>- Each product’s ingredient list is compared against the original product using <strong>ingredient ID matching</strong>.</li>
            <li>- The algorithm compares the ingredients in both products and gives a similarity score. The score is higher when more ingredients match and lower if there are missing or extra ingredients.</li>
            <li>- Products are ranked based on this similarity score, and the most similar ones are returned as potential dupes.</li>
            <li>- The output includes product details, total ingredient count, shared ingredients, and unique ingredients for better comparison.</li>
            </ul>
          </div>
        </div>

        <h2 className="text-center text-4xl min-[500px]:text-5xl md:text-6xl mb-4 min-[500px]:mb-10 text-[#E2A3B7]">Struggles along the way</h2>
        <div className="space-y-5 w-full text-xl mb-24">
          <p>One of the biggest challenges has been obtaining reliable data. There were no available APIs or databases that provided all the necessary product details, making it difficult to build a complete database. Additionally, finding a high-quality dataset to train a machine learning model has been a struggle—there were no existing datasets specifically designed for this type of ingredient compatibility analysis.</p>
          <p>Web scraping was considered as a potential solution to gather product data, but it comes with legal and ethical concerns. It’s crucial to ensure compliance with website policies to avoid violating terms of service or misusing proprietary information.</p>
          <p>Another major challenge has been ensuring the accuracy of the information. While I could research ingredients and compatibility online, there was no guarantee that all sources were factually correct. Since I don’t have a background in skincare, verifying the information will required extra effort to ensure the platform provides trustworthy recommendations.</p>
        </div>

        <h2 className="text-center text-4xl min-[500px]:text-5xl md:text-6xl mb-4 min-[500px]:mb-10 text-[#E2A3B7]">Key Takeaways from the Project</h2>
        <div className="space-y-5 w-full text-xl mb-24">
          <p>One of the biggest lessons I’ve learned from this project is the importance of proper planning before starting development. Initially, this was meant to be just a thesis project, so I didn’t spend much time thinking about scalability. For example, I kept all state management in a single file instead of structuring it for long-term maintainability, because at the time, I only planned to implement one main feature. As the project grew, I realized how much easier development would have been if I had planned for scalability from the start. It’s always better to structure things properly early on rather than refactoring later. It’s much simpler to build things the right way from the beginning rather than having to go back and refactor different parts later. Even if a project never becomes public, it’s still worth doing things properly from the start.</p>
          <p>Another key lesson I’ve learned is patience. I was so focused on meeting my self-imposed deadlines that I sometimes rushed through important steps. But good things take time—especially when developing a platform that provides skincare advice, where inaccurate information could potentially harm someone’s skin barrier. This experience has taught me the importance of taking things step by step, doing proper research, and ensuring accuracy over speed.</p>
        </div>
      </div>
    </div>
  )
}

export default About