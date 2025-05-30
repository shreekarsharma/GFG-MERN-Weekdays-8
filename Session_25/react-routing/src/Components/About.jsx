import React from "react";

const About = () => {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-xl px-4 md:px-8">
        <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
        
          
          <div class="md:col-span-2">
            <h2 class="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
              About us
            </h2>

            <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
              React Router DOM is a package that provides routing capabilities
              for React applications. It allows developers to define multiple
              routes in a single-page application (SPA) and handle navigation
              between them seamlessly. React Router DOM builds upon the core
              React Router library by adding support for the browser’s DOM
              (Document Object Model).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
