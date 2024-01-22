import React from 'react'

export const HomeComponent = () => {
  return (
    <div>
        <section id="home" className="intro-section">
            <div className="container">
                <div className="row align-items-center text-white">
                {/* START THE CONTENT FOR THE INTRO  */}
                <div className="col-md-6 intros text-start">
                    <h1 className="display-2">
                    <span className="display-2--intro">Hi!, I'm Alex</span>
                    <span className="display-2--description lh-base">
                        I'm a Data Analyst looking to dip my feet into the work force with my experience of SQL and Data Visualization
                    </span>
                    </h1>
                </div>
                {/* START THE CONTENT FOR THE VIDEO */}
                <div className="col-md-6 intros text-end">
                    <img src="images/arts/intro-section-illustration.png" alt="video illutration" className="img-fluid" />
                </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity={1} d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" /></svg>
        </section>
    </div>
  )
}
