import React from 'react'
import { services } from '../../assets/data/data'
import { GoArrowUpRight } from 'react-icons/go'

export const Services = () => {
  return (
    <>
      <section className="services-section">
        <div className="container">
          <div className="section-header text-center">
    <h2 className="section-title">My Quality Services</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsa alias dolorem minima!</p>
          </div>
          <div className="services-widget position-relative">
            {services.map((item) => (
              <div className="service-item flexSB" key={item.id}>
                <div className="left-box">
                  <span className="number">0{item.id}</span>
                  <h3 className="service-title">{item.title}</h3>
                </div>
                <div className="right-box">
                  <p>{item.text}</p>
                </div>
                <i>
                  <GoArrowUpRight size={40} />
                </i>
        <button className="service-link"></button>
              </div>
            ))}

          </div>
        </div>
      </section>
    
    </>
  )
}

export default Services