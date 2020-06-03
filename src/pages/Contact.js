import React from "react";

function Contact() {
  return (
    <div>
      <section class="p-3 border">
        <h2 class="mb-3 pb-3">Contact</h2>
        <div class="form-group">
          <label for="exampleInputName">Name</label>
          <input
            type="name"
            class="form-control"
            id="inputName"
            aria-describedby="nameHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail">Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputName">Message</label>
          <input
            type="message"
            class="form-control"
            id="inputMessage"
            aria-describedby="messageHelp"
          />
        </div>
        <input class="btn btn-primary" type="submit" value="Submit" />
      </section>
    </div>
  );
}

export default Contact;
