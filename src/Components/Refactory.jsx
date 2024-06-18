import React from 'react'
import { Link } from 'react-router-dom'
import userFlow from ".././assets/Packing App Flow Chart.png"
import lofi from ".././assets/Dockville Low Fidelity.png"
import hifi from ".././assets/Dockvile High Fidelity.png"

const Refactory = () => {
  return (
    <div className='text-gray-300 mb-10'>
      <section aria-labelledby='refactory-project-title' className="section-one text-gray-200">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7d832a315ff53da627e9018d30c9e541651cb00b623b7264063f8b6178fcbdf6?apiKey=cf78a5e822724851b7bba55553a58bb2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d832a315ff53da627e9018d30c9e541651cb00b623b7264063f8b6178fcbdf6?apiKey=cf78a5e822724851b7bba55553a58bb2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d832a315ff53da627e9018d30c9e541651cb00b623b7264063f8b6178fcbdf6?apiKey=cf78a5e822724851b7bba55553a58bb2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d832a315ff53da627e9018d30c9e541651cb00b623b7264063f8b6178fcbdf6?apiKey=cf78a5e822724851b7bba55553a58bb2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d832a315ff53da627e9018d30c9e541651cb00b623b7264063f8b6178fcbdf6?apiKey=cf78a5e822724851b7bba55553a58bb2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d832a315ff53da627e9018d30c9e541651cb00b623b7264063f8b6178fcbdf6?apiKey=cf78a5e822724851b7bba55553a58bb2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d832a315ff53da627e9018d30c9e541651cb00b623b7264063f8b6178fcbdf6?apiKey=cf78a5e822724851b7bba55553a58bb2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d832a315ff53da627e9018d30c9e541651cb00b623b7264063f8b6178fcbdf6?apiKey=cf78a5e822724851b7bba55553a58bb2&"
          className="max-w-full aspect-[4.17] w-[177px]"
        />
        <h1 id='refactory-project-title' className="text-2xl text-nowrap text-center font-extrabold"> Dockville Day and Night parking </h1>
      </section>

      <section aria-labelledby='refactory-intro' className="section">
        <h1 id='refactory-intro' className="section-h">INTRODUCTION</h1>

        <p className="section-p">
          Refactory is a pioneer training academy in Uganda, offering alternative industry-led skilling for the global technology industry.The Project was A class Assignment That had  to be presented after the Training Period To demonstrate that One has Grasped the concepts Taught in class to demonstrate that learning has taken place . It lasted A period of About Six Weeks juggling between learning and Implementation.
        </p>
      </section>

      <section className="section">
        <h1 id='refactory-intro' className="section-h">PROBLEM</h1>

        <p className="section-p">
          Dockville is a public car parking space in Kyanja, which receives about 100 to 200 cars a day for  parking and operates a car Tire Clinic and renting car Batteries. For easy management and record  keeping, Dockville is looking for a software solution to fill the gap
        </p>
      </section>

      <section aria-labelledby='refactory-solution' className="section">
        <h1 id='refactory-solution' className="section-h">Solution</h1>
        <article className="text-base capitalize">
          <p className='section-p'>
            A Web Application that Takes In User Details like Name , NiN ,Email, Telephone Number Through A form , Tracks The Users In the System And Charges Them Appropriately In the given time Period  Spent While Using Any of the parking lot Services, Saves them In a Database , That can be updated , Deleted Incase Of Any Need.
          </p>
        </article>
      </section>

      <section aria-labelledby='refactory-tech-used' className="section">
        <h1 id='refactory-tech-used' className="section-h">TECHNOLOGIES USED</h1>
        <ul className='list-disc pl-8'>
          <li>HTML.</li>
          <li>CSS.</li>
          <li>BootStrap.</li>
          <li>JavaScript.</li>
          <li>NodeJS.</li>
          <li>Mongo DB.</li>
          <li>Figma.</li>
          <li>Git Hub.</li>
        </ul>

      </section>

      <section aria-labelledby='refactory-process' className="section">
        <h1 id='refactory-process' className="section-h">Process</h1>

        <div className='flex flex-col gap-4'>
          <div className="flex flex-col px-2">
            <div className="subsection-h">
              Reserach
            </div>
            <div className="section-p">
              Had to make Research With A parking lot to be Able to Obtain their Pinpoint's and See If the Software Would Have an impact on them And If If it Could Achieve Its Objective.
            </div>
          </div>

          <div className="flex flex-col self-stretch px-2">
            <div className="subsection-h">
              Learning
            </div>
            <div className="section-p">
              All Technologies were to be learnt to deliver this platform , with exception Of Figma That I Had A back Ground On After A UI/UX Course I Did Earlier.
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
                  &#x21e2; Flow Diagram
                </h2>
                <div className="section-p">
                  To Show How People Will Interact With The System , And Have a Vivid User Journey
                  <Link target="_blank" className="flex py-4 whitespace-nowrap text-amber-900 hover:text-amber-700" to="https://www.figma.com/board/lXKguNV5kY6sceuIXMacJS/Packing-App-Flow-Chart?node-id=0-1&t=FjXgOE8MGdRbVKmy-0">Link to Flow Diagram</Link>
                  <div>
                    <img src={userFlow} alt="" />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="subsection-h">
                  &#x21e2; Low Fidelity
                </h2>
                <div className="section-p">
                  This showed the vivid sketch of were elements would Be Put on the Screen With Precision

                  <div>
                    <img src={lofi} alt="" />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="subsection-h">
                  &#x21e2; High Fidelity
                </h2>
                <div className="section-p">
                  This showed the Ready To Code Product , That Sowed How the Product Would Look Like
                  <Link target="_blank" className="flex py-4 whitespace-nowrap text-amber-900 hover:text-amber-700" to="https://www.figma.com/design/WTb0FvECqqUZABI6Plmjgz/Dockvile-Day-and-Night-Parking?node-id=0-1&t=t60bSmcvZnpnvYFP-1">Link to Figma Design</Link>
                  <div>
                    <img src={hifi} alt="" />
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="flex flex-col self-stretch px-2">
            <div className="subsection-h">
              Code
            </div>
            <div className="section-p">
              <div>
                I Used The MVC Architecture For the code Organization and Structuring
              </div>
              <Link target="_blank" className="flex py-4 whitespace-nowrap text-amber-900 hover:text-amber-700" to="https://github.com/keimux1/Dockvile">Link to GitHUB</Link>


              <div className='mt-3 flex flex-col gap-1'>
                <p className='section-p'>the front End used</p>
                <ul className='list-disc pl-8'>
                  <li>HTML</li>
                  <li>CSS.</li>
                  <li>Bootstrap.</li>
                  <li>Pug for Templating.</li>
                </ul>
              </div>

              <div className='mt-3 flex flex-col gap-1'>
                <p className='section-p'>The Back End Used </p>
                <ul className='list-disc pl-8'>
                  <li>Node Js.</li>
                  <li>Express.</li>
                  <li>mongoose.</li>
                  <li>nodemon.</li>
                  <li>mongo Db.</li>
                </ul>
              </div>

              <div className='mt-3 flex flex-col gap-1'>
                <p className='section-p'>Version Control</p>
                <ul className='list-disc pl-8'>
                  <li>git Hub</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>

      <section aria-labelledby='refactory-learnt' className="section">
        <h1 id='refactory-learnt' className="section-h">What i learnt</h1>

        <ul className='list-disc pl-8'>
          <li>Presentation Skills.</li>
          <li>Team Work.</li>
          <li>Research Skills.</li>
          <li>Patience.</li>
          <li>Debugging.</li>
        </ul>

      </section>
    </div>
  )

}

export default Refactory
