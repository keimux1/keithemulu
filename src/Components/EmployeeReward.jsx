import React from 'react'
import { Link } from 'react-router-dom'
import wireframe from ".././assets/Employee Wireframe.png"
import lofi from ".././assets/Employee Lofi.png"
import hifi from ".././assets/Employee Hifi.png"
import designSystem from ".././assets/Design System.png"
import mockup from ".././assets/Employee Mockups.png"


const EmployeeReward = () => {
  return (
    <div className='text-gray-300 mb-10'>
      <section aria-labelledby='EmployeeReward-project-title' className="section-one text-gray-200">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7d832a315ff53da627e9018d30c9e541651cb00b623b7264063f8b6178fcbdf6?apiKey=cf78a5e822724851b7bba55553a58bb2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d832a315ff53da627e9018d30c9e541651cb00b623b7264063f8b6178fcbdf6?apiKey=cf78a5e822724851b7bba55553a58bb2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d832a315ff53da627e9018d30c9e541651cb00b623b7264063f8b6178fcbdf6?apiKey=cf78a5e822724851b7bba55553a58bb2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d832a315ff53da627e9018d30c9e541651cb00b623b7264063f8b6178fcbdf6?apiKey=cf78a5e822724851b7bba55553a58bb2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d832a315ff53da627e9018d30c9e541651cb00b623b7264063f8b6178fcbdf6?apiKey=cf78a5e822724851b7bba55553a58bb2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d832a315ff53da627e9018d30c9e541651cb00b623b7264063f8b6178fcbdf6?apiKey=cf78a5e822724851b7bba55553a58bb2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d832a315ff53da627e9018d30c9e541651cb00b623b7264063f8b6178fcbdf6?apiKey=cf78a5e822724851b7bba55553a58bb2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d832a315ff53da627e9018d30c9e541651cb00b623b7264063f8b6178fcbdf6?apiKey=cf78a5e822724851b7bba55553a58bb2&"
          className="max-w-full aspect-[4.17] w-[177px]"
        />
        <h1 id='EmployeeReward-project-title' className="text-2xl text-nowrap text-center font-extrabold">Employee Reward App</h1>
      </section>

      <section aria-labelledby='EmployeeReward-intro' className="section">
        <h1 id='EmployeeReward-intro' className="section-h">INTRODUCTION</h1>

        <p className="section-p">
          This was a class Project For My UI/UX model While at Refactory .
          A module that tasked Every one to Design an Employee reward System For Employers and fellow Employees
          to reward themselves incase they do exertional work and the employees would later Redeem The points Awarded to them as presents.
        </p>
      </section>


      <section aria-labelledby='EmployeeReward-solution' className="section">
        <h1 id='EmployeeReward-solution' className="section-h">Solution</h1>
        <article className="text-base capitalize">
          <p className='section-p'>
            A Mobile App Was Designed.
          </p>
        </article>
      </section>

      <section aria-labelledby='EmployeeReward-tech-used' className="section">
        <h1 id='EmployeeReward-tech-used' className="section-h">TECHNOLOGIES USED</h1>
        <ul className='list-disc pl-8'>
          <li>Figma.</li>
        </ul>

      </section>

      <section aria-labelledby='EmployeeReward-process' className="section">
        <h1 id='EmployeeReward-process' className="section-h">Process</h1>

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
              This laid a Back Bone Of how the Final Product would Look
              <br />
              Wire Frames &#x21e2; Low Fidelity Design &#x21e2; High Fidelity Designs &#x21e2; Prototypes  &#x21e2; Mock Ups
            </div>

            <div className='px-4 flex flex-col gap-4'>
              <div>
                <h2 className="subsection-h">
                  &#x21e2; Wireframes
                </h2>
                <div className="section-p">
                  To Show How the elements will probably appear on the Screen
                  <Link target="_blank" className="flex py-4 whitespace-nowrap text-amber-900 hover:text-amber-700" to="https://www.figma.com/design/AxbeDf5BOVuslclT7gC9Z0/Employee-Reward-points?node-id=187-5711&t=t60bSmcvZnpnvYFP-1">Link to Figma File</Link>
                  <div className='flex justify-center'>
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

                  <div className='flex justify-center'>
                    <img src={lofi} alt="" />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="subsection-h">
                  &#x21e2; Design System
                </h2>
                <div className="section-p">
                  A System The holds the Colors, Typography, Icons ,grids and more that would be used in the design process.

                  <div className='flex justify-center'>
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
                  <Link target="_blank" className="flex py-4 whitespace-nowrap text-amber-900 hover:text-amber-700" to="https://www.figma.com/design/AxbeDf5BOVuslclT7gC9Z0/Employee-Reward-points?node-id=187-5711&t=t60bSmcvZnpnvYFP-1">Link to Figma Design</Link>
                  <div className='flex justify-center'>
                    <img src={hifi} alt="" />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="subsection-h">
                  &#x21e2; Mockups
                </h2>
                <div className="section-p">
                  That Sowed How the Product Would Look Like on a device

                  <div className='flex justify-center'>
                    <img src={mockup} alt="Mockups" />
                  </div>
                </div>
              </div>

            </div>

          </div>



        </div>
      </section>

      <section aria-labelledby='EmployeeReward-learnt' className="section">
        <h1 id='EmployeeReward-learnt' className="section-h">What i learnt</h1>

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

export default EmployeeReward
