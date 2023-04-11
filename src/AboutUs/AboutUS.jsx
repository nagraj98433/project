import React from "react";

import '../AllStyles/AboutUS.css'


const AboutUS = () => {

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <div className="overlaysImg">
              <div className="relative"><img src={require('../Images/Ellipse_13.jpg')} alt="" /></div>
              <div className="absolute"><img src={require('../Images/Elderly.png')} alt="" /></div>
            </div>
          </div>
          <div className="col-6 reviewClr">
            <div className="text-center"><h1>ABOUT US</h1></div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium accusantium rerum fuga dolores enim harum, amet reprehenderit distinctio ipsa quae quas modi nesciunt rem perspiciatis culpa cum expedita tempore autem officiis asperiores! Iste tempora, blanditiis, accusamus eveniet molestias distinctio adipisci a iusto, esse neque tenetur! Accusantium, vero similique et accusamus molestiae ad doloribus veniam cumque quam reiciendis ut deleniti assumenda! Ab iusto cupiditate, vel fugit dolore modi suscipit qui expedita accusantium. Officiis libero fuga ex blanditiis aliquam ipsa corrupti maxime omnis iusto autem tenetur nostrum magnam repellat, culpa sapiente quos consequuntur! Nobis veniam eligendi, possimus itaque quis repudiandae ratione!
            </div>
            <div className="mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium accusantium rerum fuga dolores enim harum, amet reprehenderit distinctio ipsa quae quas modi nesciunt rem perspiciatis culpa cum expedita tempore autem officiis asperiores! Iste tempora, blanditiis, accusamus eveniet molestias distinctio adipisci a iusto, esse neque tenetur! Accusantium, vero similique et accusamus molestiae ad doloribus veniam cumque quam reiciendis ut deleniti assumenda! Ab iusto cupiditate, vel fugit dolore modi suscipit qui expedita accusantium. Officiis libero fuga ex blanditiis aliquam ipsa corrupti maxime omnis iusto autem tenetur nostrum magnam repellat, culpa sapiente quos consequuntur! Nobis veniam eligendi, possimus itaque quis repudiandae ratione!
            </div>
            <div className="mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium accusantium rerum fuga dolores enim harum, amet reprehenderit distinctio ipsa quae quas modi nesciunt rem perspiciatis culpa cum expedita tempore autem officiis asperiores! Iste tempora, blanditiis, accusamus eveniet molestias distinctio adipisci a iusto, esse neque tenetur! Accusantium, vero similique et accusamus molestiae ad doloribus veniam cumque quam reiciendis ut deleniti assumenda! Ab iusto cupiditate, vel fugit dolore modi suscipit qui expedita accusantium. Officiis libero fuga ex blanditiis aliquam ipsa corrupti maxime omnis iusto autem tenetur nostrum magnam repellat, culpa sapiente quos consequuntur! Nobis veniam eligendi, possimus itaque quis repudiandae ratione!
            </div>

            <div className="mt-4 text-center">
              <button type="button" class="btn btn-primary">Primary</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUS