import Title from '../components/Title';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Contact = () => {
  const color="CONTACT";
  const noncolor="US";
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id="contact">
      <div>
        <Title color={color} noncolor={noncolor}/>
      
        <div className="fn_cs_contact_form">
          <form
            action="/"
            method="post"
            className="contact_form"
            id="contact_form"
            autoComplete="off"
          >
            <div className="input_list">
              <ul>
                <li data-aos="fade-down">
                  <input id="name" type="text" placeholder="Your Name *" />
                </li>
                <li data-aos="fade-down">
                  <input id="email" type="text" placeholder="Your Email *" />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="tel"
                    type="text"
                    placeholder="Your Phone (optional)"
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="subject"
                    type="text"
                    placeholder="Topic (optional)"
                  />
                </li>
                <li className="full" data-aos="fade-down">
                  <textarea
                    id="message"
                    placeholder="Your Message *"
                    defaultValue={""}
                  />
                </li>
                <li className="full" data-aos="fade-down">
                  <div className="mw300">
                    <a
                      id="send_message"
                      href="#"
                      className="metaportal_fn_button full"
                    >
                      <span>Send Message</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="returnmessage"
              data-success="Your message has been received, We will contact you soon."
            />
            <div data-aos="fade-down" className="empty_notice">
              <span>! Please Fill Required Fields !</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
