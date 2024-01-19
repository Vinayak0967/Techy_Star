import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form action="">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" required placeholder="Bell" />
          </div>

          
          <div>
            <label htmlFor="">Email</label>
            <input type="email" required placeholder="Bell@abc.com" />
          </div>
          
          <div>
            <label htmlFor="">Message</label>
            <input type="text" required placeholder="Tell us abourt query.." />
          </div>
          
          <button type="submit">Send</button>


        </form>
      </main>
    </div>
  );
};

export default Contact;
