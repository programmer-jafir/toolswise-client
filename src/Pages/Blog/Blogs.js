import React from 'react';

const Blogs = () => {
    return (
        <div className=' ml-5 mr-5'>
            <div class="w-full md:w-2/3 mx-auto p-5 bg-white rounded-lg shadow">
  <div class="flex items-center justify-between">
    <div class="w-2/3">
      <h2 class="section-heading">
        Questions and Answer
      </h2>
    </div>

    <div class="relative w-1/3 flex justify-end items-center space-x-1">
      <div class="prev-item flex items-center justify-center w-7 h-7 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer">
        <svg class="w-auto h-3 fill-current text-primary-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"></path></svg>
      </div>
      <div class="next-item flex items-center justify-center w-7 h-7 rounded bg-gray-100 hover:bg-gray-200 cursor-pointer">
        <svg class="w-auto h-3 fill-current text-primary-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"></path></svg>
      </div>
    </div>
  </div>

  <div class="mt-8 space-y-8">
    <div>
      <div class="flex items-start">
        <div>
          <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-green-500 text-white font-medium text-sm">
              Q
          </span>
        </div>

        <p class="ml-4 md:ml-6">
        How will you improve the performance of a React Application?
        </p>
      </div>

      <div class="flex items-start mt-3">
        <div>
          <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-gray-200 text-gray-800 font-medium text-sm">
              A
          </span>
        </div>

        <p class="ml-4 md:ml-6 text-gray-800">
        To optimize React rendering, you need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components.
        </p>
      </div>

     
    </div>
    <div>
      <div class="flex items-start">
        <div>
          <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-green-500 text-white font-medium text-sm">
              Q
          </span>
        </div>

        <p class="ml-4 md:ml-6">
        What are the different ways to manage a state in a React application?
        </p>
      </div>

      <div class="flex items-start mt-3">
        <div>
          <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-gray-200 text-gray-800 font-medium text-sm">
              A
          </span>
        </div>

        <p class="ml-4 md:ml-6 text-gray-800">
        There are four different  ways to manage state in React app. There are the Local state, Global state, Server state and URL state.
React uses an observable object as the state that observes what changes are made to the state and helps the component behave accordingly. 
        </p>
      </div>

    </div>
    <div>
      <div class="flex items-start">
        <div>
          <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-green-500 text-white font-medium text-sm">
              Q
          </span>
        </div>

        <p class="ml-4 md:ml-6">
        How does prototypical inheritance work?
        </p>
      </div>

      <div class="flex items-start mt-3">
        <div>
          <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-gray-200 text-gray-800 font-medium text-sm">
              A
          </span>
        </div>

        <p class="ml-4 md:ml-6 text-gray-800">
        Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming.
        </p>
      </div>
      <br />
      <div class="flex items-start">
        <div>
          <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-green-500 text-white font-medium text-sm">
              Q
          </span>
        </div>

        <p class="ml-4 md:ml-6">
        Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
        </p>
      </div>
      
      <div class="flex items-start mt-3">
        <div>
          <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-gray-200 text-gray-800 font-medium text-sm">
              A
          </span>
        </div>

        <p class="ml-4 md:ml-6 text-gray-800">
        Because  when I use set that I do not change any value. On the otherhand  when I use useState then I change value so why I use useState.
        </p>
      </div>
      <br />
      <div class="flex items-start">
        <div>
          <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-green-500 text-white font-medium text-sm">
              Q
          </span>
        </div>

        <p class="ml-4 md:ml-6">
        What is a unit test? Why should write unit tests?
        </p>
      </div>

      <div class="flex items-start mt-3">
        <div>
          <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-gray-200 text-gray-800 font-medium text-sm">
              A
          </span>
        </div>

        <p class="ml-4 md:ml-6 text-gray-800">
        Unit test is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.
One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process.
        </p>
      </div>
        <br />
      <div class="flex items-start">
        <div>
          <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-green-500 text-white font-medium text-sm">
              Q
          </span>
        </div>

        <p class="ml-4 md:ml-6">
        You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
        </p>
      </div>
      <div class="flex items-start mt-3">
        <div>
          <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-gray-200 text-gray-800 font-medium text-sm">
              A
          </span>
        </div>

        <p class="ml-4 md:ml-6 text-gray-800">
        I have an array of products. Each product has a name, price, description, etc. I will you implement a search to find products by name filter.
        </p>
      </div>

    </div>
  </div>
</div>
        </div>
    );
};

export default Blogs;