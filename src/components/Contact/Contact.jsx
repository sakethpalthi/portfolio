// import React from 'react';
// import './Contact.css';
// import theme from '../../assets/theme_pattern.svg';
// import mail from '../../assets/mail_icon.svg';
// import location from '../../assets/location_icon.svg';
// import call from '../../assets/call_icon.svg';
// import linkedin from '../../assets/linkedin_logo.png';
// import github from '../../assets/github_logo.png'; // Make sure this file exists

// const Contact = () => {
//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     formData.append("access_key", "e14cd044-f36d-43e7-a591-039c370f13b4");

//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     try {
//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json"
//         },
//         body: json
//       });

//       const result = await res.json();
//       if (result.success) {
//         console.log("Success", result);
//         alert("Message sent successfully!");
//         event.target.reset();
//       } else {
//         console.error("Failed to send", result);
//         alert("Failed to send message. Try again later.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Something went wrong!");
//     }
//   };

//   return (
//     <div id='contact' className='contact'>
//       <div className="contact-title">
//         <h1>Get in Touch With Me</h1>
//       </div>
//       <div className="contact-section">
//         <div className="contact-left">
//           <h1>Let's Talk</h1>
//           <p>Feel free to reach out — I’m actively seeking creative challenges</p>
//           <div className="contact-details">
//             <div className="contact-detail">
//               <img src={mail} alt="Email" />
//               <p>palthisaketh93@gmail.com</p>
//             </div>
//             <div className="contact-detail">
//               <img src={call} alt="Call" />
//               <p>+91 9014315457</p>
//             </div>
//             <div className="contact-detail">
//               <img src={location} alt="Location" />
//               <p>Kompally, Hyderabad</p>
//             </div>
//             <div className="contact-detail">
//               <img src={linkedin} alt="LinkedIn" />
//               <a 
//                 href="https://www.linkedin.com/in/palthi-saketh-9ba83128b/" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 LinkedIn Profile
//               </a>
//             </div>
//             <div className="contact-detail">
//               <img src={github} alt="GitHub" />
//               <a 
//                 href="https://github.com/sakethpalthi" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//               >
//                 GitHub Profile
//               </a>
//             </div>
//           </div>
//         </div>

//         <form onSubmit={onSubmit} className="contact-right">
//           <label>Your Name</label>
//           <input type="text" placeholder="Enter your Name" name="name" required />
//           <label>Your Email</label>
//           <input type="email" placeholder="Enter your Email" name="email" required />
//           <label>Write Your Message here</label>
//           <textarea name="message" rows="8" placeholder="Enter your Message" required></textarea>
//           <button type="submit" className="contact-submit">Submit now</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React from 'react';
import './Contact.css';
import theme from '../../assets/theme_pattern.svg';
import mail from '../../assets/mail_icon.svg';
import location from '../../assets/location_icon.svg';
import call from '../../assets/call_icon.svg';
import linkedin from '../../assets/linkedin_logo.png';
import github from '../../assets/github_logo.png';

import emailjs from '@emailjs/browser';

const Contact = () => {
  const onSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      'service_cr9wqnj',      // e.g., service_xxxxxx
      'template_45ehmba',     // e.g., template_xxxxxx
      event.target,
      'Z4GYBiEfgO1JzZPA9'       // e.g., M5vKxJXXXXXX
    )
    .then((result) => {
      console.log(result.text);
      alert("Message sent successfully!");
      event.target.reset();
    }, (error) => {
      console.log(error.text);
      alert("Failed to send message. Please try again.");
    });
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch With Me</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>Feel free to reach out — I’m actively seeking creative challenges</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="Email" />
              <p>palthisaketh93@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="Call" />
              <p>+91 9014315457</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="Location" />
              <p>Kompally, Hyderabad</p>
            </div>
            <div className="contact-detail">
              <img src={linkedin} alt="LinkedIn" />
              <a 
                href="https://www.linkedin.com/in/palthi-saketh-9ba83128b/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="contact-detail">
              <img src={github} alt="GitHub" />
              <a 
                href="https://github.com/sakethpalthi" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your Name" name="user_name" required />
          <label>Your Email</label>
          <input type="email" placeholder="Enter your Email" name="user_email" required />
          <label>Write Your Message here</label>
          <textarea name="message" rows="8" placeholder="Enter your Message" required></textarea>
          <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
