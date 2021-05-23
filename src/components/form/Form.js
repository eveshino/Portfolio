import classes from "./Form.module.css";
import emailjs from "emailjs-com";
import { useState } from "react";

function Form() {
  const [toSend, setToSend] = useState({
    email: "",
    tel: "",
    name: "",
    message: "",
  });
  function sendEmail(e) {
    e.preventDefault();
    toSend(
      "service_keehfv5",
      "service_keehfv5 ",
      e.target,
      "user_kQZJCNGck2nNzDWGEeqtd"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  }

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className={classes.container}>
      <form onSubmit={sendEmail}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email..."
          value={toSend.email}
          onChange={handleChange}
        />

        <label htmlFor="tel">Phone</label>
        <input
          id="tel"
          name="tel"
          type="tel"
          placeholder="phone number"
          value={toSend.tel}
          onChange={handleChange}
        />

        <label htmlFor="nome">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name.."
          value={toSend.name}
          onChange={handleChange}
        />

        <label htmlFor="mensagem">Message</label>
        <input
          type="message"
          id="message"
          name="message"
          className={classes.textarea}
          value={toSend.message}
          onChange={handleChange}
        ></input>

        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Form;
