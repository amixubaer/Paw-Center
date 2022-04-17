import React from 'react';
import { Link } from 'react-router-dom';
import "./Gallery.css"

const Gallery = () => {
    return (
        <div style={{ marginTop: 50 }}>
      <section className="gallery" id="gallery">
        <h1 style={{textAlign: 'center', marginTop:'50px', color:'red'}}>Gallery</h1>

        <div className="box-container">
          <div className="box">
            <img src="images/g-1.jpg" alt="" />
            <div className="content">
              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img src="images/g-2.jpg" alt="" />
            <div className="content">
              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img src="images/g-3.jpg" alt="" />
            <div className="content">
              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img src="images/g-4.jpg" alt="" />
            <div className="content">
              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img src="images/g-5.jpg" alt="" />
            <div className="content">
              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img src="images/g-6.jpg" alt="" />
            <div className="content">
              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img src="images/g-7.jpg" alt="" />
            <div className="content">
              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img src="images/g-8.jpg" alt="" />
            <div className="content">
              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img src="images/g-9.jpg" alt="" />
            <div className="content">
              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
};

export default Gallery;