import React from "react";

function Contact() {
  return (
    <div>
      <section className="p-3 border">
        <h2 className="mb-3 pb-3">Contact</h2>
        <div className="form-group">
          <label for="exampleInputName">Name</label>
          <input
            type="name"
            className="form-control"
            id="inputName"
            aria-describedby="nameHelp"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputName">Message</label>
          <input
            type="message"
            className="form-control"
            id="inputMessage"
            aria-describedby="messageHelp"
          />
        </div>
        <input className="btn btn-primary" type="submit" value="Submit" />
      </section>
    </div>
  );
}

export default Contact;
