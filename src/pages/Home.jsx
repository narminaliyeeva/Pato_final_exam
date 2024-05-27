import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { WiDirectionRight } from "react-icons/wi";
import axios from 'axios';

function Home() {
  const [data, setdata] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/data')
      .then(res => setdata(res.data));
  }, [])



  return (
    <div>
      <section className='first'>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 text">
              <h2>Italian Restaurant</h2>
              <h1>WELCOME</h1>
              <span>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</span>
              <span>OUR STORY <WiDirectionRight /></span>
            </div>
            <div className="col-lg-5 foto">
              <img src="our-story-01.jpg" className='ourimg' />
            </div>
          </div>
        </div>
      </section>
      <section className="banner">
        <div className="container-fluid">
          <div className="row discover">
            <div className="col-lg-12 text-center align-items-end" ><p>Discover</p></div>
            <div className="col-lg-12 text-center  align-items-start"><h1>PATO PLACE</h1></div>
          </div>
        </div>

      </section>
      <section className="card">
        <div className="container">
          <div className="row data">
            {
              data.map(item => {
                return (
                  <div className="col-lg-4 dat">
                    <div>
                      <img src={item.img} className='ourimg' />
                    </div>
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.content} </p>
                      <span>{item.learn}<WiDirectionRight /></span>
                    </div>
                  </div>)
              })
            }
          </div>
        </div>
      </section>
      <section className="menu">
        <div className="container">
          <div className="row text-center">
            <span>Discover</span>
            <h1>OUR MENU</h1>
            <div className="col-lg-4 meal">
              <button className='btnone'>Meal</button>
            </div>
            <div className="col-lg-4 wine">
              <button className='btnone'>Wine</button>
            </div>
            <div className="col-lg-4 lunch">
              <button className='btnone'>Lunch</button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 hour">
              <button className='btnone'>Happy Hour</button>
            </div>
            <div className="col-lg-4 desert">
              <button className='btnone'>Desert</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home