import React from 'react'
import { Link } from 'react-router-dom'
import hifi from ".././assets/Slider.png"



const Slider = () => {
  return (
    <div className='text-gray-300 mb-10'>
      <section aria-labelledby='Slider-project-title' className="section-one text-gray-200">
        <h1 id='Slider-project-title' className="text-2xl text-nowrap text-center uppercase font-extrabold">Slider Animation In Figma</h1>
      </section>

      <section aria-labelledby='Slider-intro' className="section">
        <h1 id='Slider-intro' className="section-h">INTRODUCTION</h1>

        <p className="section-p">
          This was A self Initiative were i was testing my prototyping skills to make a image Slider that shows a Two tone Bike in Various colors.
        </p>
      </section>

      <section aria-labelledby='Slider-solution' className="section">
        <h1 id='Slider-solution' className="section-h">Solution</h1>
        <article className="text-base capitalize">
          <p className='section-p'>
            A Web App  Was Designed .
          </p>
        </article>
      </section>

      <section aria-labelledby='Slider-tech-used' className="section">
        <h1 id='Slider-tech-used' className="section-h">TECHNOLOGIES USED</h1>
        <ul className='list-disc pl-8'>
          <li>Figma.</li>
        </ul>

      </section>

      <section aria-labelledby='Slider-process' className="section">
        <h1 id='Slider-process' className="section-h">Process</h1>

        <div className='flex flex-col gap-4'>
          <div className="flex flex-col px-2">
            <div className="subsection-h">
              Reserach
            </div>
            <div className="section-p">
              Had to make Research On How sliders where made on youtube.
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
                  <Link target="_blank" className="flex py-4 whitespace-nowrap text-amber-900 hover:text-amber-700" to="https://www.figma.com/design/rQZUxB2q33g5wqOrmDPqGE/Motocycle-Comparison-Slider?node-id=0-1&t=T6goDWn0Nq3E48KN-1">Link to Figma Design</Link>
                  <div>
                    <img src={hifi} alt="hifi" />
                  </div>
                </div>
              </div>


            </div>

          </div>

        </div>
      </section>

      <section aria-labelledby='Slider-learnt' className="section">
        <h1 id='Slider-learnt' className="section-h">What i learnt</h1>

        <ul className='list-disc pl-8'>
          <li>Presentation Skills.</li>
          <li>Research Skills.</li>
          <li>Prototyping.</li>
        </ul>

      </section>
    </div>
  )
}

export default Slider
