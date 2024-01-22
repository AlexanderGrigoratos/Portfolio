import React from 'react'

export const AboutComponent = () => {
  return (
    <div>
        <section id="about" className="testimonials">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity={1} d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" /></svg>


            <div className="container justify-content-center text-center">
                <div className="row text-center text-white">
                <h1 className="display-3 fw-bold">About Me</h1>
                <h5 className=" pt-1">Hi,</h5>
                <span className="display-2--description lh-base">
                    My name is <strong>Alexander Grigoratos</strong> 
                    and I am a <strong>Data Analyst</strong> hungry for knowledge and ready to take my skills into
                    the work force. I feel like I have a lot to learn and through my hard work and determination I feel like I can bring much to the table and be a true asset to your company. I am eager to grow a long lasting career and grow in my position in time with lots of hard work in order to reach my goals.
                </span>

                <div className="text-center justify-content-center mt-5">
                    <a href="https://www.linkedin.com/in/alexander-grigoratos" target="_blank" type="button" className="rounded-pill btn-rounded" style={{textDecoration: 'none'}}> <i className="fab fa-linkedin" /> LinkedIn
                    <span><i className="fas fa-arrow-right" /></span>
                    </a>
                </div>
                </div>
            </div>


            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity={1} d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" /></svg>
        </section>
    </div>
  )
}
