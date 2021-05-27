import React from "react";
import classes from "./Form.module.css";
import emailjs from "emailjs-com";
import logo from "../../images/logo.svg";

function Form() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_keehfv5",
        "template_ou46hdd",
        e.target,
        "user_kQZJCNGck2nNzDWGEeqtd"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    e.target.reset();
  }

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <img className={classes.logo} src={logo} alt="logo" />
        <form className={classes.form} onSubmit={sendEmail}>
          <div className={classes.box}>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" />
          </div>
          <div className={classes.box}>
            <label htmlFor="tel">Phone:</label>
            <input id="tel" name="tel" type="tel" />
          </div>
          <div className={classes.box}>
            <label htmlFor="nome">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className={classes.box}>
            <label htmlFor="mensagem">Message:</label>
            <input
              type="message"
              id="message"
              name="message"
              className={classes.textarea}
            ></input>
          </div>
          <button className={classes.button} type="submit" value="Send">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
