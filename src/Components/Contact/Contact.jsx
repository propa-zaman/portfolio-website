import "./Contact.css";
import { FaPhone, FaMailBulk } from 'react-icons/fa';
import { useContext } from "react";
import { ThemeContext } from "../../context";
// import emailjs from "emailjs-com";


const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_rrvnzco",
//         "template_3v5nih4",
//         formRef.current,
//         "user_DrriDPTGKO2Zj4RDXCA6W"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setDone(true)
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
             <FaPhone></FaPhone> <div>01719221022</div>

           
            </div>
            <div className="c-info-item">
              <FaMailBulk></FaMailBulk>

              propazaman12@gmail.com
            </div>
            <div className="c-info-item">
              {/* <FaLocationDot></FaLocationDot> */}
              Dhaka, Bangladesh
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
         
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;