import React from "react";

import '../AllStyles/Blogs.css'


const Blogs = () => {

  return (
    <>
      <div className="flex_container2 mt-5">
        <div><h1 className="mb-0 reviewClr">BLOGS</h1></div>
        <div className="rounded_icons">
          <span className="me-2"><i class="fas fa-less-than"></i></span>
          <span><i class="fas fa-greater-than"></i></span>
        </div>
      </div>

      <div className="container flex_conatainer3 mt-3">
        <div className="row">
          <div className="col-4">
            <div class="card mb-3" style={{maxWidth:"540px"}}>
              <div class="row g-0">
                <div class="col-md-12">
                  <img src={require('../Images/manpic.jpg')} className="img-fluid rounded-start rounded" alt="..."/>
                </div>
                <div class="col-md-12">
                  <div class="card-body">
                  
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card mb-3" style={{maxWidth:"540px"}}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={require('../Images/manpic.jpg')} className="img-fluid rounded-start rounded" alt="..."/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card mb-3" style={{maxWidth:"540px"}}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={require('../Images/manpic.jpg')} className="img-fluid rounded-start rounded" alt="..."/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div class="card mb-3" style={{maxWidth:"540px"}}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={require('../Images/manpic.jpg')} className="img-fluid rounded-start rounded" alt="..."/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card mb-3" style={{maxWidth:"540px"}}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={require('../Images/manpic.jpg')} className="img-fluid rounded-start rounded" alt="..."/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                 
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="card mb-3" style={{maxWidth:"540px"}}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={require('../Images/manpic.jpg')} class="img-fluid rounded-start rounded" alt="..."/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs