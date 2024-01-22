import React from 'react'

export const Weather = () => {
  return (
    <div>
        <section>
            {/* Weather DESIGN  */}
            <div className="container">
                <div className="row">
                <div className="col-md-4" />
                <div className="col-md-4">
                    <div className="card">
                    <span className="icon"><img className="img-fluid" id="weatherIcon" alt="Weather Icon" /></span>
                    <div className="title" id="cityDetails"><p /></div>
                    <div className="temp" id="temperature"> <sup>°</sup></div>
                    <div className="row">
                        <div className="col-12">
                        <div className="header">Description</div>
                        <div className="value" id="description" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-4" />
                </div>
            </div>
        </section>
    </div>
  )
}
