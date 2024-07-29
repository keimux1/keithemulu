import React from 'react'
import { Link } from 'react-router-dom'
import sketches from "../assets/HrManagementSketch.png"
import flowChart from "../assets/HrManagementflowdiagram.png"
import wireframe from "../assets/HrManagementWireFrame.png"
import lofi from "../assets/HrManagementLofidelity.png"
import hifi from "../assets/HrManagementHighFidelity.png"
import designSystem from "../assets/HrManagementDesignSystem.png"
import mockup from "../assets/HrManagementMokeUp.png"


const HrManagement = () => {
  return (
    <div className='text-gray-300 mb-10'>
      <section aria-labelledby='HrManagement-project-title' className="section-one text-gray-200">
        <h1 id='HrManagement-project-title' className="text-2xl text-nowrap text-center font-extrabold">HR MANAGEMENT SYSYTEM </h1>
      </section>

      <section aria-labelledby='HrManagement-intro' className="section">
        <h1 id='HrManagement-intro' className="section-h">INTRODUCTION</h1>

        <p className="section-p">
          This was a Sample Project For a job Interview I was Given to Design a Sample Of an Human Resource Management System .
        </p>
      </section>

      <section aria-labelledby='HrManagement-solution' className="section">
        <h1 id='HrManagement-solution' className="section-h">Solution</h1>
        <article className="text-base capitalize">
          <p className='section-p'>
            A Responsive Web App Was Designed  .
          </p>
        </article>
      </section>

      <section aria-labelledby='HrManagement-tech-used' className="section">
        <h1 id='HrManagement-tech-used' className="section-h">TECHNOLOGIES USED</h1>
        <ul className='list-disc pl-8'>
          <li>Figma.</li>
        </ul>

      </section>

      <section aria-labelledby='HrManagement-process' className="section">
        <h1 id='HrManagement-process' className="section-h">Process</h1>

        <div className='flex flex-col gap-4'>
          <div className="flex flex-col px-2">
            <div className="subsection-h">
              Reserach
            </div>
            <div className="section-p">
              Had to make Research On How Employees Are Rewarded , How they Could Be Motivated , Derive Inspiration From Sources like Dribble.
            </div>
          </div>

          <div className="flex flex-col self-stretch px-2">
            <div className="subsection-h">
              UI Design
            </div>
            <div className="section-p">
              This laid a Back Bone Of how the Final Product would Look.
              <br />
              Structuring the files in the sections : SANDBOX, INSPIRATION / AUDIT, LOW FIDELITY, Design System, High Fidelity, Archives, Mockups
              <br />
              Wire Frames &#x21e2; Low Fidelity Design &#x21e2; High Fidelity Designs &#x21e2; Prototypes  &#x21e2; Mock Ups
            </div>

            <div className='px-4 flex flex-col gap-4'>
              <div>
                <h2 className="subsection-h">
                  &#x21e2; Sketches
                </h2>
                <div className="section-p">
                  To Show How the elements will probably appear on the Screen during Ideation.
                  <div className='flex justify-center items-center'>
                    <img src={sketches} alt="sketches" />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="subsection-h">
                  &#x21e2; flowChart
                </h2>
                <div className="section-p">
                  To Show How The content Will Flow On the Screen

                  <div className='flex justify-center items-center'>
                    <img src={flowChart} alt="flowChart" />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="subsection-h">
                  &#x21e2; Wireframes
                </h2>
                <div className="section-p">
                  To Show How the elements will probably appear on the Screen

                  <div className='flex justify-center items-center'>
                    <img src={wireframe} alt="wireframe" />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="subsection-h">
                  &#x21e2; Low Fidelity
                </h2>
                <div className="section-p">
                  This showed the vivid sketch of were elements would Be Put on the Screen With Precision

                  <div className='flex justify-center items-center'>
                    <img src={lofi} alt="lofi" />
                  </div>
                </div>
              </div>

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
                  <Link target="_blank" className="flex py-4 whitespace-nowrap text-amber-900 hover:text-amber-700" to="https://www.figma.com/design/DQ7pdPvIDQhJFbYbvAPSSH/HR-PLATFORM-LANDING-PAGE?node-id=133-512&t=E2AZDJ1suaiSUf3z-1">Link to Figma Design</Link>
                  <div className='flex justify-center items-center'>
                    <img src={hifi} alt="hifi" />
                  </div>
                </div>
              </div>

              <div >
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

      <section aria-labelledby='HrManagement-learnt' className="section">
        <h1 id='HrManagement-learnt' className="section-h">What i learnt</h1>

        <ul className='list-disc pl-8'>
          <li>Presentation Skills.</li>
          <li>Information Architecture.</li>
          <li>Research Skills.</li>
          <li>Improved Design Skills.</li>
        </ul>

      </section>
    </div>
  )
}

export default HrManagement
