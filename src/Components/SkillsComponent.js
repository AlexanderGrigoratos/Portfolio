import React from 'react'

export const SkillsComponent = () => {
  return (
    <div>
       <section id="skills" className="skills mt-5 mb-5">
            <div className="container">
                <div className="row text-center">
                <h1 className="display-3 fw-bold mb-5">Skills</h1>
                </div>
                {/* START THE DESCRIPTION CONTENT  */}
                <div className="row">
                <div className="col-md-6">
                    <h5 className="mt-3">HTML</h5> 
                    <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>80</div>
                    </div>
                    <h5 className="mt-3">CSS</h5> 
                    <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>70</div>
                    </div>
                    <h5 className="mt-3">javascript</h5> 
                    <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>50</div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h5 className="mt-3">Python</h5> 
                    <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>75</div>
                    </div>
                    <h5 className="mt-3">PostgreSQL</h5> 
                    <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>80</div>
                    </div>
                    <h5 className="mt-3">Power Bi</h5> 
                    <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>65</div>
                    </div>

                    <h5 className="mt-3">SSRS</h5> 
                    <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>65</div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
  )
}
