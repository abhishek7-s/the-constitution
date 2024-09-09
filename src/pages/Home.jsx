import React from 'react'

function Home() {
  return (
<>

    <div className='w-full bg-cover bg-center bg-[url("D:\Projects_AS\the-constitution\src\assets\banner.png")]'>
      <div className='h-screen flex justify-center items-center backdrop-blur-[3px]'>
        <div>
          <h1 className='font-extrabold text-8xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-800 from-sky-900 '>Indian Constitution</h1>
          <h3 className='flex justify-center text-2xl font-semibold '>Your Path to Constitutional Confidence Starts Here</h3>
        </div>
      </div>
    </div>

    <main className="">
        {/* <section className=" h-[50%] flex justify-center">
            <div className="">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Why is the Constitution Important?</h2>
                <div className="">
                <h3>It protects the fundamental rights of individuals.</h3>
                <h3>It defines how the government works.</h3>
                <h3>It ensures justice and fairness in society.</h3>
                </div>
            </div>
            
            
        </section> */}

    



<section className="h-[60vh] bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center items-center p-6">
  <div className="bg-white w-full shadow-2xl rounded-xl p-10 max-w-5xl transform hover:scale-105 transition-transform duration-500">
    <h2 className="text-5xl font-bold text-gray-900 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-700 ">
      Why is the Constitution Important?
    </h2>
    <div className="space-y-6 text-lg">
      {/* Feature 1 */}
      <div className="flex items-center space-x-4 group">
        <span className="text-blue-600 text-3xl group-hover:animate-bounce">🛡️</span>
        <h3 className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
          It protects the fundamental rights of individuals.
        </h3>
      </div>
      
      {/* Feature 2 */}
      <div className="flex items-center space-x-4 group">
        <span className="text-blue-600 text-3xl group-hover:animate-bounce">🏛️</span>
        <h3 className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
          It defines how the government works.
        </h3>
      </div>
      
      {/* Feature 3 */}
      <div className="flex items-center space-x-4 group">
        <span className="text-blue-600 text-3xl group-hover:animate-bounce">⚖️</span>
        <h3 className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
          It ensures justice and fairness in society.
        </h3>
      </div>
    </div>
  </div>
</section>










<section className="h-[70vh] bg-gradient-to-r from-indigo-500 to-blue-600 flex justify-center items-center p-6">
  <div className="max-w-6xl bg-white shadow-2xl rounded-xl p-10 transform hover:scale-105 transition-transform duration-500">
    <h2 className="text-5xl font-bold text-gray-900 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-700">
      Exciting Upcoming Features
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Feature 1: Easy Explanation */}
      <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 group">
        <span className="text-indigo-600 text-6xl mb-4 group-hover:animate-spin">📘</span>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
          Easy Explanation
        </h3>
        <p className="text-gray-600 text-center">
          Understand complex legal concepts in simple and clear language.
        </p>
      </div>

      {/* Feature 2: Multilingual Support */}
      <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 group">
        <span className="text-indigo-600 text-6xl mb-4 group-hover:animate-spin">🌍</span>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
          Multilingual Support
        </h3>
        <p className="text-gray-600 text-center">
          Access content in multiple languages to cater to diverse users.
        </p>
      </div>

      {/* Feature 3: Chatbot Assistance */}
      <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 group">
        <span className="text-indigo-600 text-6xl mb-4 group-hover:animate-spin">🤖</span>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
          Chatbot Assistance
        </h3>
        <p className="text-gray-600 text-center">
          Get instant help with your queries using our AI-powered chatbot.
        </p>
      </div>
    </div>
  </div>
</section>

    </main>



    <footer className="bg-gradient-to-r from-blue-500 to-indigo-600 py-10 text-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      
      {/* Column 1: About */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white">About Us</h3>
        <p className="text-gray-200">
          We simplify the Constitution to make it accessible for everyone. Our mission is to provide easy-to-understand content with the latest features and legal explanations.
        </p>
      </div>

      {/* Column 2: Quick Links */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#home" className="text-gray-200 hover:text-gray-300 transition-colors duration-300">Home</a></li>
          <li><a href="#features" className="text-gray-200 hover:text-gray-300 transition-colors duration-300">Features</a></li>
          <li><a href="#about" className="text-gray-200 hover:text-gray-300 transition-colors duration-300">About</a></li>
          <li><a href="#contact" className="text-gray-200 hover:text-gray-300 transition-colors duration-300">Contact</a></li>
        </ul>
      </div>

      {/* Column 3: Stay Connected */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white">Stay Connected</h3>
        <p className="text-gray-200">Follow us on social media for the latest updates.</p>
        <div className="flex justify-center md:justify-start space-x-6">
          <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.991H8.896v-2.887h1.541V9.5c0-1.5.866-2.345 2.191-2.345.634 0 1.296.113 1.296.113v1.42h-.73c-.72 0-.945.451-.945.912v1.087h1.705l-.273 2.887h-1.432V22C18.343 21.128 22 16.991 22 12 22 6.477 17.523 2 12 2z" />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.633 7.997c.013.176.013.351.013.527 0 5.365-4.084 11.552-11.552 11.552-2.29 0-4.415-.668-6.202-1.81.317.038.625.05.952.05 1.897 0 3.646-.643 5.04-1.726-1.773-.038-3.272-1.203-3.792-2.812.246.038.483.063.737.063.353 0 .717-.05 1.048-.137-1.853-.372-3.248-2.012-3.248-3.973v-.05c.54.302 1.166.484 1.832.508a3.953 3.953 0 01-1.76-3.29c0-.732.194-1.404.54-1.988 1.974 2.435 4.924 4.02 8.255 4.188-.062-.293-.101-.598-.101-.916 0-2.204 1.794-3.997 3.997-3.997 1.153 0 2.195.487 2.926 1.263a7.82 7.82 0 002.532-.964 4.023 4.023 0 01-1.755 2.212 7.923 7.923 0 002.266-.621c-.566.884-1.285 1.653-2.105 2.27z" />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c6.633 0 12 5.368 12 12 0 6.632-5.367 12-12 12-6.633 0-12-5.368-12-12 0-6.632 5.367-12 12-12zm0 1.689a10.311 10.311 0 100 20.622 10.311 10.311 0 000-20.622zm0 2.438c1.16 0 2.103.942 2.103 2.103S13.16 8.497 12 8.497s-2.103-.943-2.103-2.103S10.84 6.29 12 6.29zm0 10.5a4.773 4.773 0 014.773 4.773H7.227a4.773 4.773 0 014.773-4.773z" />
            </svg>
          </a>
        </div>
      </div>

    </div>
    <div className="mt-8 text-center text-gray-200">
      © 2024 Constitution Simplified. All Rights Reserved.
    </div>
  </div>
</footer>


</>





    // ---------------------------------
    // <div className="min-h-screen bg-gray-100">
    //   <header className="bg-blue-600 text-white p-6 shadow-md">
    //     <h1 className="text-3xl font-bold text-center">
    //       Simplified Constitution
    //     </h1>
    //     <p className="text-center mt-2">
    //       Understand your rights and responsibilities in the easiest way!
    //     </p>
    //   </header>

    //   <main className="p-8">
    //     <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
    //       <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
    //       <p className="text-gray-600">
    //         The constitution is a set of rules that tells how a country is governed. It outlines the rights and responsibilities of citizens, the structure of the government, and the laws of the land.
    //       </p>
    //     </section>

    //     <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
    //       <h2 className="text-2xl font-bold text-gray-800 mb-4">Why is the Constitution Important?</h2>
    //       <ul className="list-disc list-inside text-gray-600">
    //         <li>It protects the fundamental rights of individuals.</li>
    //         <li>It defines how the government works.</li>
    //         <li>It ensures justice and fairness in society.</li>
    //       </ul>
    //     </section>

    //     <section className="bg-white rounded-lg shadow-lg p-6">
    //       <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Fundamental Rights</h2>
    //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //         <div className="p-4 border border-gray-200 rounded-lg">
    //           <h3 className="text-xl font-semibold text-blue-600 mb-2">Right to Freedom</h3>
    //           <p className="text-gray-600">
    //             You have the freedom to express yourself, practice any religion, and live anywhere in the country.
    //           </p>
    //         </div>
    //         <div className="p-4 border border-gray-200 rounded-lg">
    //           <h3 className="text-xl font-semibold text-blue-600 mb-2">Right to Equality</h3>
    //           <p className="text-gray-600">
    //             Everyone is equal before the law, and no one should be discriminated against.
    //           </p>
    //         </div>
    //         {/* Add more rights in similar cards */}
    //       </div>
    //     </section>
    //   </main>

    //   <footer className="bg-blue-600 text-white p-6 text-center">
    //     <p>&copy; 2024 Simplified Constitution</p>
    //   </footer>
    // </div>
  )
}

export default Home
