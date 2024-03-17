import React from 'react'
import mobile from '../assets/mobileR.png'

const About = () => {
  return (
    <div className='pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16'>
          
          
      <div class="py-16 mb-6 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16 relative bg-black/40 max-w-[1300px] mx-auto rounded-xl" >   
        <div class =" p-7 mx-auto">
          <div>
              <h2 class="text-3xl font-bold leading-tight gray-primary-color sm:text-4xl lg:text-5xl">Hello, I am <span className='italic'>Tarun Kumar Ravva</span></h2>
              <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-400 md:mt-8">
                ● Motivated and skilled frontend engineer around 2 years (1.10months) of experience in developing robust applications using React.js.
                ● Proficient in HTML5, CSS3, and JavaScript.
                ● Extensive experience with frontend frameworks like React.js.
                ● Strong understanding of responsive web design and mobile-first development.
                ● Familiarity with state management libraries like Redux.
                ● Familiarity with Bootstrap's grid system, components, and utilities for building flexible and scalable layouts.
                ● Excellent problem-solving and analytical skills.
                ● Passionate about learning and staying updated with emerging frontend technologies.
              </p>
          </div>
            <img class=" flex md:absolute mx-auto bottom-[2%] right-[10%] w-[240px] md:w-[400px] h-auto" src={mobile} alt=""/> 
        </div>
      </div>
         
         
          <div class="bg-black/40 max-w-[1300px] mx-auto rounded-xl overflow-hidden " > 
          <div class="px-6 py-10">
            <div class="mx-auto max-w-5xl text-center">
              <h2 class="block w-full gray-primary-color text-3xl sm:text-4xl">Optimize your website </h2>
              <p class="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-grey-400"> Redesign your website </p>
            </div>



          <div class =" mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14  sm:grid-cols-2 lg:grid-cols-3">
             
             
              <div class="rounded xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow ">
              <h3 class="text-xl italic text-grey-200"> Customizable</h3> 
              <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">Tailor Your landing pages 
              look 
              and feel , from the color scheme to the font size , to the design of the page.  
              </p>
              </div>

           
              <div class="rounded xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow ">
              <h3 class="text-xl italic text-grey-200"> Fast Performance</h3> 
              <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">Tailor Your landing pages 
              look 
              and feel , from the color scheme to the font size , to the design of the page. </p>
              </div>

           
              <div class="rounded xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow ">
              <h3 class="text-xl italic text-grey-200"> Fully Featured</h3> 
              <p class="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">Tailor Your landing pages 
              look 
              and feel , from the color scheme to the font size , to the design of the page. </p>
              </div>

          </div>

          </div>
          </div>
          </div>
          
          
         
  )
}

export default About
