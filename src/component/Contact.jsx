"use client";
import React from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { MdEmail } from "react-icons/md";
import { SiMessenger, SiWhatsapp } from "react-icons/si";
import Swal from "sweetalert2";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0xs52j4",
        "template_ao4sm0f",
        form.current,
        "BIRQzJB2v0FdjNvU2"
      )
      .then(
        (result) => {
          Swal.fire("Message Send Successfully");
          console.log(result.text);
          e.target.reset("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-100 justify-center h-100 flex flex-col text-center mt-10 lg:mb-10"
    >
      <div className="mt-10 lg:mt-10">
        <h4 className="text-xs">Get In Touch</h4>
        <span className="text-2xl font-bold">Contact Me</span>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-center mt-8  space-y-6 lg:space-y-0">
        {/* ************* Email,whatsapp,Messenger ***************** */}
        <div className="flex flex-col">
          <div className="inline-flex flex-col justify-center items-center space-y-3">
            <div className="flex flex-col justify-center items-center w-2/3 lg:w-1/3 bg-slate-900 p-4 rounded-xl space-y-3">
              <MdEmail className="text-2xl" />
              <div className="flex flex-col justify-center space-y-1">
                <h2 className="font-bold text-md">Mail</h2>
                <span className="text-sm cursor-cell">fk.nafi11@gmail.com</span>
                <a
                  href="mailto:fk.nafi11@gmail.com"
                  target="_blank"
                  className="text-xs text-red-700 font-bold"
                >
                  {" "}
                  Send A Message
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center w-2/3 lg:w-1/3 bg-slate-900 p-4 rounded-xl space-y-3">
              <SiMessenger className="text-2xl" />
              <div className="flex flex-col justify-center space-y-1">
                <h2 className="font-bold text-md">Messenger</h2>
                <span className="text-sm cursor-pointer">Forhad Khan</span>
                <a
                  href="https://m.me/fk.nafi"
                  target="_blank"
                  className="text-xs text-red-700 font-bold"
                >
                  {" "}
                  Send A Message
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center w-2/3 lg:w-1/3 bg-slate-900 p-4 rounded-xl space-y-3">
              <SiWhatsapp className="text-2xl" />
              <div className="flex flex-col justify-center space-y-1">
                <h2 className="font-bold text-md">WhatsApp</h2>
                <span className="text-sm cursor-pointer">+8801762057784</span>
                <a
                  href="https://wa.me/+8801762057784"
                  target="_blank"
                  className="text-xs text-red-700 font-bold"
                >
                  {" "}
                  Send A Message
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ******************form******************* */}

        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
          <form
            ref={form}
            className="flex flex-col space-y-3 w-2/3"
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Full Name..."
              required
              className="p-2 rounded-md bg-slate-900"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email..."
              required
              className="p-2 rounded-md bg-slate-900"
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
              className="p-2 rounded-md bg-slate-900"
            ></textarea>
            <button
              type="submit"
              className="bg-slate-900 p-2 font-extrabold rounded-xl hover:bg-red-900"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
