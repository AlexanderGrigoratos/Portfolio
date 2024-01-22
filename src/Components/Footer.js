import React from 'react'

export const Footer = () => {
  return (
    <div>
        <footer className="footer">
            <div className="container">
                <div className="row">
                <div className="col-md-12 col-lg-12 text-center contact-box pt-1">
                    <div className="contact-box__info">
                    <i className="fas fa-map fa-2x text-light" /><br />
                    <a href="#" className="contact-box__info--title">Montreal, Quebec, Canada</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="footer-sm">
                <div className="container">
                <div className="row py-4 text-center text-white">
                    <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
                    Connect with me on social media
                    </div>
                    <div className="col-lg-7 col-md-6">
                    <a href="#"><i className="fab fa-facebook" target="_blank" /></a>
                    <a href="#"><i className="fab fa-twitter" target="_blank" /></a>
                    <a href="#"><i className="fab fa-github" target="_blank" /></a>
                    <a href="https://www.linkedin.com/in/alexander-grigoratos" target="_blank"><i className="fab fa-linkedin" /></a>
                    <a href="#"><i className="fab fa-instagram" target="_blank" /></a>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
