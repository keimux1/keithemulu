import React from 'react'

const Laboremus = () => {
  return (
    <div className='text-gray-300 mb-10'>
      <section aria-labelledby='laboremus-project-title' className="section-one text-gray-200">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e85bc91cc0bdb546b5a0f0aaa90c2e6e91a7bcbb66ddc1987cb843f71c0aced?apiKey=cf78a5e822724851b7bba55553a58bb2&" alt="Admin Analytics Icon" className="aspect-[1.15] w-[82px]" />
        <h1 id='laboremus-project-title' className="text-2xl text-nowrap text-center font-extrabold"> An Admin Analytics Platform </h1>
      </section>

      <section aria-labelledby='laboremus-intro' className="section">
        <h1 id='laboremus-intro' className="section-h">INTRODUCTION</h1>

        <p className="section-p">
          Laboremus Is a fintech that provides the infrastructure to Financial Institutions that collects and verify customer data. Laboremus developed STREAMLINE, a customer onboarding and KYC software platform for FinTech's and STREAMLINE offers web, mobile and WhatsApp interfaces for customer onboarding. The Project was Done In a team Of Five(5) and lasted about Four(4) Months
        </p>
      </section>

      <section className="section">
        <h1 id='laboremus-intro' className="section-h">PROBLEM</h1>

        <p className="section-p">
          With all the Information Collected by the users of the platform Came Need By the back office user's to have an interactive platform that provides analytics of the customer onboarding process So as to make Data Driven Decisions
        </p>
      </section>

      <section aria-labelledby='laboremus-solution' className="section">
        <h1 id='laboremus-solution' className="section-h">Solution</h1>
        <article className="text-base capitalize">
          <p className='section-p'>
            An analytics dashboard was to be built to be able to solve the problems of the back office users. The dashboard required to be built in Power BI and The MERN Architecture (MongoDB, Express, React, Node.js), following a Scrum methodology with weekly sprints. Tasks were assigned on a Trello board.
            <span className="font-bold block mb-2">Time Frame - About 4 Months</span>
          </p>

          <p>The Platform would:</p>
          <ul className='list-disc pl-8'>
            <li>Track customer application sources and volumes.</li>
            <li>Analyze applications created per specified time periods.</li>
            <li>Gain insights into application statuses and bottlenecks.</li>
            <li>Monitor applications opened per branch.</li>
            <li>Identify peak activity hours.</li>
          </ul>
        </article>
      </section>

      <section aria-labelledby='laboremus-process' className="section">
        <h1 id='laboremus-process' className="section-h">Process</h1>

        <div className='flex flex-col gap-4'>
          <div className="flex flex-col px-2">
            <div className="subsection-h">
              Reserach
            </div>
            <div className="section-p">
              As a team We had to research on the roles of the potential system Users
              to Obtain their true requirements In order to make a custom Tailor made
              Solution that would solve their problems and ease their day to day
              tasks. This Enabled Us to come up with a Software Requirements
              Specification(SRS) and Understand the companies Design System{" "}
            </div>
          </div>

          <div className="flex flex-col self-stretch px-2">
            <div className="subsection-h">
              Learning
            </div>
            <div className="section-p">
              New Technologies were to be learnt to deliver this platform , and these
              had to be self taught So as tho be able to pull it off.Some Of These
              Technologies Included:

              <ul className='list-disc pl-8'>
                <li>Power BI from Microsoft.</li>
                <li>React.</li>
                <li>Trello.</li>
                <li>Presentation Skills , Etc.</li>
              </ul>

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
          </div>

          <div className="flex flex-col self-stretch px-2">
            <div className="subsection-h">
              Use Of Power BI
            </div>
            <div className="section-p">
              Power bi later on was used to recreate the features that were on the High Fidelity Designs with functionality.It took learning and Implementation to make the product functional.

            </div>

          </div>

          <div className="flex flex-col self-stretch px-2">
            <div className="subsection-h">
              Embedding The Power Bi Report In React
            </div>
            <div className="section-p">
              The power Bi report was then embedded into a react application that had to have

              <ul className='list-disc pl-8'>
                <li>security features to enable Users log in to access it.</li>
                <li> a session timeout to enable it log out a user after a given time of Inactivity .</li>
                <li>admin to control access to the Users.</li>
              </ul>

            </div>
          </div>

          <div className="flex flex-col self-stretch px-2">
            <div className="subsection-h">
              MERN Stack / Code
            </div>
            <div className="section-p">
              <div>
                The react made up the front end and Node js ,Express and Mongoose made up the Back end the Front end was separated from the backend as this in future would help to host the platform on Azure
              </div>

              <div className='mt-3 flex flex-col gap-1'>
                <p className='section-p'>the front End used</p>
                <ul className='list-disc pl-8'>
                  <li>React, Hooks</li>
                  <li>Axios to connect it to the Backend  .</li>
                </ul>
              </div>

              <div className='mt-3 flex flex-col gap-1'>
                <p className='section-p'>The Back End Used </p>
                <ul className='list-disc pl-8'>
                  <li>Node Js.</li>
                  <li>Express.</li>
                  <li>cors to connect the front End.</li>
                  <li>mongoose.</li>
                  <li>nodemon.</li>
                  <li>mongo Db Atlas.</li>
                  <li>and later Docker for Hosting.</li>
                </ul>
              </div>

              <div className='mt-3 flex flex-col gap-1'>
                <p className='section-p'>Version Control</p>
                <ul className='list-disc pl-8'>
                  <li>git Hub</li>
                </ul>
              </div>

              <div className='mt-3 flex flex-col gap-1'>
                <p className='section-p'>CI/CD Pipeline</p>
                <ul className='list-disc pl-8'>
                  <li>Git Hub Actions</li>
                </ul>
              </div>

              <div className='mt-3 flex flex-col gap-1'>
                <p className='section-p'>Hosting</p>
                <ul className='list-disc pl-8'>
                  <li>Azure</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>

      <section aria-labelledby='laboremus-learnt' className="section">
        <h1 id='laboremus-learnt' className="section-h">What i learnt</h1>

        <ul className='list-disc pl-8'>
          <li>Presentation Skills.</li>
          <li>Team Work.</li>
          <li>Research Skills.</li>
          <li>Patience.</li>
          <li>code refactoring.</li>
          <li>Scrum and Agile Methodologyg.</li>
        </ul>

      </section>
    </div>
  )

}

export default Laboremus
