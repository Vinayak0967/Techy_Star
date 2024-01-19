import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            everyday.We are leading tech company whose aim is to increase
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut omnis
            autem quae repudiandae possimus facere, architecto reiciendis velit
            optio nemo. Veritatis sunt architecto voluptate culpa delectus
            tempore alias voluptates nesciunt, reprehenderit reiciendis ipsum!
            Sint itaque dolores repellendus vitae mollitia quae deserunt
            necessitatibus maxime odio, recusandae assumenda ut iure sit sunt.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: ".3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            
            <div style={{ animationDelay: ".5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div style={{ animationDelay: ".7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>


          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
