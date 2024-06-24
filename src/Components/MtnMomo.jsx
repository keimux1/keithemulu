import React from 'react'
import { Link } from 'react-router-dom'
import hifi from ".././assets/Mtn HighFidelity.png"
import designSystem from ".././assets/Mtn Design Ststem.png"
import mockup from ".././assets/MOMO REDESIGN MokeUps.png"


const MtnMomo = () => {
  return (
    <div className='text-gray-300 mb-10'>
      <section aria-labelledby='MtnMomo-project-title' className="section-one text-gray-200">
        <h1 id='MtnMomo-project-title' className="text-2xl text-nowrap text-center font-extrabold">MTN MOMO APP REDESIGN </h1>
      </section>

      <section aria-labelledby='MtnMomo-intro' className="section">
        <h1 id='MtnMomo-intro' className="section-h">INTRODUCTION</h1>

        <p className="section-p">
          The Goal Of a Design Application Is to Make  Life Simple ,with a User Friendly Interface But I felt This was Bottle Necked And So i Made A Redesign That I Felt was More Intuitive
        </p>
      </section>

      <section aria-labelledby='MtnMomo-solution' className="section">
        <h1 id='MtnMomo-solution' className="section-h">Solution</h1>
        <article className="text-base capitalize">
          <p className='section-p'>
            A Mobile App Was Designed.
          </p>
        </article>
      </section>

      <section aria-labelledby='MtnMomo-tech-used' className="section">
        <h1 id='MtnMomo-tech-used' className="section-h">TECHNOLOGIES USED</h1>
        <ul className='list-disc pl-8'>
          <li>Figma.</li>
        </ul>

      </section>

      <section aria-labelledby='MtnMomo-process' className="section">
        <h1 id='MtnMomo-process' className="section-h">Process</h1>

        <div className='flex flex-col gap-4'>
          <div className="flex flex-col px-2">
            <div className="subsection-h">
              Reserach
            </div>
            <div className="section-p">
              Had to make Research On What People Who used the application Could Be Motivated and what features they  deemed usable , Derive Inspiration From Sources like Dribble.
            </div>
          </div>

          <div className="flex flex-col self-stretch px-2">
            <div className="subsection-h">
              UI Design
            </div>

            <div className='px-4 flex flex-col gap-4'>
              <div>
                <h2 className="subsection-h">
                  &#x21e2; Design System
                </h2>
                <div className="section-p">
                  A System The holds the Colors, Typography, Icons ,grids and more that would be used in the design process.

                  <div className='flex justify-center items-center'>
                    <img src={designSystem} alt="designSystem" />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="subsection-h">
                  &#x21e2; High Fidelity
                </h2>
                <div className="section-p">
                  This showed the Ready To Code Product , That Sowed How the Product Would Look Like
                  <Link target="_blank" className="flex py-4 whitespace-nowrap text-amber-900 hover:text-amber-700" to="https://www.figma.com/design/6bTXULAKoq5Vjfnhgv5JU9/MTN-MOMO-APP?node-id=114-816&t=UfrmHlF2Cxhn6YPK-1">Link to Figma Design</Link>
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

      <section aria-labelledby='MtnMomo-learnt' className="section">
        <h1 id='MtnMomo-learnt' className="section-h">What i learnt</h1>

        <ul className='list-disc pl-8'>
          <li>Grid System For Mobile.</li>
          <li>Information Architecture.</li>
          <li>Research Skills.</li>
          <li>Improved Design Skills Particlarly Iconography.</li>
        </ul>

      </section>
    </div>
  )
}

export default MtnMomo
