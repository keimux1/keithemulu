import React from 'react'
import { Link } from 'react-router-dom'
import hifi from "../assets/RPN REDESIGN.png"

const Rockline = () => {
  return (
    <div className='text-gray-300 mb-10'>
      <section aria-labelledby='Rockline-project-title' className="section-one text-gray-200">
        <h1 id='Rockline-project-title' className="text-2xl text-nowrap text-center uppercase font-extrabold">Rockline Peace Network Redesign</h1>
      </section>

      <section aria-labelledby='Rockline-intro' className="section">
        <h1 id='Rockline-intro' className="section-h">INTRODUCTION</h1>

        <p className="section-p">
          This is a Redesign That I did to practice my ui/Ux Skills to  see how I could Improve The face of their Existing WordPress Website.
        </p>
      </section>

      <section aria-labelledby='Rockline-solution' className="section">
        <h1 id='Rockline-solution' className="section-h">Solution</h1>
        <article className="text-base capitalize">
          <p className='section-p'>
            A Web App  Was Designed .
          </p>
        </article>
      </section>

      <section aria-labelledby='Rockline-tech-used' className="section">
        <h1 id='Rockline-tech-used' className="section-h">TECHNOLOGIES USED</h1>
        <ul className='list-disc pl-8'>
          <li>Figma.</li>
        </ul>

      </section>

      <section aria-labelledby='Rockline-process' className="section">
        <h1 id='Rockline-process' className="section-h">Process</h1>

        <div className='flex flex-col gap-4'>
          <div className="flex flex-col px-2">
            <div className="subsection-h">
              Reserach
            </div>
            <div className="section-p">
              Had to make Research On How Rockline works and what it does.
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
                  This showed the Ready To Code Product , That Sowed How the Product Would Look Like.
                  <Link target="_blank" className="flex py-4 whitespace-nowrap text-amber-900 hover:text-amber-700" to="https://www.figma.com/design/u7heN6REAPZlvAplgpfMaB/ROCKLINE-PEACE-NETWORK?node-id=0-1&t=AzQ7qY9atPosIYfb-1">Link to Figma Design</Link>
                  <div className='flex justify-center items-center'>
                    <img src={hifi} alt="hifi" />
                  </div>
                </div>
              </div>


            </div>

          </div>

        </div>
      </section>

      <section aria-labelledby='Rockline-learnt' className="section">
        <h1 id='Rockline-learnt' className="section-h">What i learnt</h1>

        <ul className='list-disc pl-8'>
          <li>Presentation Skills.</li>
          <li>Research Skills.</li>
          <li>Prototyping.</li>
        </ul>

      </section>
    </div>
  )
}

export default Rockline
