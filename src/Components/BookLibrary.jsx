import React from 'react'
import { Link } from 'react-router-dom'
import hifi from ".././assets/BookLibrary HighFidelity.png"



const BookLibrary = () => {
  return (
    <div className='text-gray-300 mb-10'>
      <section aria-labelledby='BookLibrary-project-title' className="section-one text-gray-200">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bd564ebeb3a7d96492a4f65cb82528fd1a1f7084659475f84c335e2d5310261a?apiKey=cf78a5e822724851b7bba55553a58bb2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd564ebeb3a7d96492a4f65cb82528fd1a1f7084659475f84c335e2d5310261a?apiKey=cf78a5e822724851b7bba55553a58bb2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd564ebeb3a7d96492a4f65cb82528fd1a1f7084659475f84c335e2d5310261a?apiKey=cf78a5e822724851b7bba55553a58bb2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd564ebeb3a7d96492a4f65cb82528fd1a1f7084659475f84c335e2d5310261a?apiKey=cf78a5e822724851b7bba55553a58bb2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd564ebeb3a7d96492a4f65cb82528fd1a1f7084659475f84c335e2d5310261a?apiKey=cf78a5e822724851b7bba55553a58bb2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd564ebeb3a7d96492a4f65cb82528fd1a1f7084659475f84c335e2d5310261a?apiKey=cf78a5e822724851b7bba55553a58bb2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd564ebeb3a7d96492a4f65cb82528fd1a1f7084659475f84c335e2d5310261a?apiKey=cf78a5e822724851b7bba55553a58bb2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd564ebeb3a7d96492a4f65cb82528fd1a1f7084659475f84c335e2d5310261a?apiKey=cf78a5e822724851b7bba55553a58bb2&"
        className="max-w-full aspect-[3.7] w-[344px]"
      />
        <h1 id='BookLibrary-project-title' className="text-2xl text-nowrap text-center font-extrabold">ONLINE BOOK LIBRARY</h1>
      </section>

      <section aria-labelledby='BookLibrary-intro' className="section">
        <h1 id='BookLibrary-intro' className="section-h">INTRODUCTION</h1>

        <p className="section-p">
          This was a class Project For My UI/UX model While at Zuri . A module that tasked Every one to Design an online Library System that enabled people to borrow ,return and show case the books online , The project was made to test the ability of learners to check if we had understood concepts in class ranging from , color, design systems , iconography ,typography ,User journey, prototyping ,etc.
        </p>
      </section>

      <section aria-labelledby='BookLibrary-solution' className="section">
        <h1 id='BookLibrary-solution' className="section-h">Solution</h1>
        <article className="text-base capitalize">
          <p className='section-p'>
            A Web App  Was Designed .
          </p>
        </article>
      </section>

      <section aria-labelledby='BookLibrary-tech-used' className="section">
        <h1 id='BookLibrary-tech-used' className="section-h">TECHNOLOGIES USED</h1>
        <ul className='list-disc pl-8'>
          <li>Figma.</li>
        </ul>

      </section>

      <section aria-labelledby='BookLibrary-process' className="section">
        <h1 id='BookLibrary-process' className="section-h">Process</h1>

        <div className='flex flex-col gap-4'>
          <div className="flex flex-col px-2">
            <div className="subsection-h">
              Reserach
            </div>
            <div className="section-p">
              Had to make Research On How Libraries Work And Try and replicate the process Online , In a Simple Sample Application .
            </div>
          </div>

          <div className="flex flex-col self-stretch px-2">
            <div className="subsection-h">
              UI Design
            </div>

            <div className='px-4 flex flex-col gap-4'>

              <div>
                <h2 className="subsection-h">
                  &#x21e2; High Fidelity
                </h2>
                <div className="section-p">
                  This showed the Ready To Code Product , That Sowed How the Product Would Look Like
                  <Link target="_blank" className="flex py-4 whitespace-nowrap text-amber-900 hover:text-amber-700" to="https://www.figma.com/design/Xc8gvM4ojA30LWeMrmUUeZ/Mini-Project?node-id=2-925&t=fSVQ6pc8gFedfJe9-1">Link to Figma Design</Link>
                  <div className='flex justify-center items-center'>
                    <img src={hifi} alt="hifi" />
                  </div>
                </div>
              </div>


            </div>

          </div>

        </div>
      </section>

      <section aria-labelledby='BookLibrary-learnt' className="section">
        <h1 id='BookLibrary-learnt' className="section-h">What i learnt</h1>

        <ul className='list-disc pl-8'>
          <li>Presentation Skills.</li>
          <li>Research Skills.</li>
          <li>Creating Style Guides.</li>
          <li>Prototyping.</li>
        </ul>

      </section>
    </div>
  )
}

export default BookLibrary
