import React from 'react'
import { Link } from 'react-router-dom'
import hifi from "../assets/OnlineMobileStoreHighFidelity.png"
import mockup from "../assets/OnlineMobileStoreMokeUp.png";



const OnlineMobileStore = () => {
  return (
    <div className='text-gray-300 mb-10'>
      <section aria-labelledby='OnlineMobileStore-project-title' className="section-one text-gray-200">
        <h1 id='OnlineMobileStore-project-title' className="text-2xl text-nowrap text-center font-extrabold">Online Mobile Store</h1>
      </section>

      <section aria-labelledby='OnlineMobileStore-intro' className="section">
        <h1 id='OnlineMobileStore-intro' className="section-h">INTRODUCTION</h1>

        <p className="section-p">
          The Goal Of a Design Application Is to Make  Life Simple ,with a User Friendly Interface that enabled users to Oder Everyday House Hold Items from the pam of their hand
        </p>
      </section>

      <section aria-labelledby='OnlineMobileStore-solution' className="section">
        <h1 id='OnlineMobileStore-solution' className="section-h">Solution</h1>
        <article className="text-base capitalize">
          <p className='section-p'>
            A Mobile App Was Designed.
          </p>
        </article>
      </section>

      <section aria-labelledby='OnlineMobileStore-tech-used' className="section">
        <h1 id='OnlineMobileStore-tech-used' className="section-h">TECHNOLOGIES USED</h1>
        <ul className='list-disc pl-8'>
          <li>Figma.</li>
        </ul>

      </section>

      <section aria-labelledby='OnlineMobileStore-process' className="section">
        <h1 id='OnlineMobileStore-process' className="section-h">Process</h1>

        <div className='flex flex-col gap-4'>
          <div className="flex flex-col px-2">
            <div className="subsection-h">
              Reserach
            </div>
            <div className="section-p">
              Had to make Research On How exiting platforms like jumia operated, Derive Inspiration From Sources like Figma.
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
                  <Link target="_blank" className="flex py-4 whitespace-nowrap text-amber-900 hover:text-amber-700" to="https://www.figma.com/design/DUbcBq5ppwWCy7PUbaw0iN/Online-Mobile-Store?node-id=0-1&t=ndYYJ8b69yDHBbHQ-1">Link to Figma Design</Link>
                  <div className='flex justify-center items-center'>
                    <img src={hifi} alt="hifi" />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="subsection-h">
                  &#x21e2; Mockups
                </h2>
                <div className="section-p">
                  That Sowed How the Product Would Look Like on a device

                  <div className='flex justify-center items-center'>
                    <img src={mockup} alt="Mockups" />
                  </div>
                </div>
              </div>

            </div>

          </div>
          
        </div>
      </section>

      <section aria-labelledby='OnlineMobileStore-learnt' className="section">
        <h1 id='OnlineMobileStore-learnt' className="section-h">What i learnt</h1>

        <ul className='list-disc pl-8'>
          <li>Glassmorphism .</li>
          <li>Information Architecture.</li>
          <li>Research Skills.</li>
          <li>Improved Design Skills Particlarly Iconography.</li>
        </ul>

      </section>
    </div>
  )
}

export default OnlineMobileStore
