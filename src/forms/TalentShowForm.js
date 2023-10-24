import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import keys from "../keys.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/terrainTreader.docx";
import HCaptcha from '@hcaptcha/react-hcaptcha';

const backend = keys.backend;

const TalentShowForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("talentShowForm")) || {
    Name: "",
    Email: "",
    Phone: "",
    Additional_phone: "",
    College: "",
    Branch: "",
    YOG: "",
    Roll_number: "",
    Preferred_cube_type: "",
    PIG:"",
  };
  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);
  const [isSubmitted, setValue] = useState(false);

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("talentShowForm", JSON.stringify(update));
  };

  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);

  const onLoad = () => {
    captchaRef.current.execute();
  };

  useEffect(() => {
    if (token) {
      console.log('Captcha verified')
    }
      // console.log(`hCaptcha Token: ${token}`);
  }, [token]);

  const submit = async () => {
    // const recaptchaValue = recaptchaRef.current.getValue();
    // Send the recaptchaValue along with the form data to your server for verification.
    if (!token) {
      alert("Human verification is mandatory");
      return;
    }
    setSubmit(true);
    let condition =
      form.Name !== "" &&
      form.Email !== "" &&
      form.Phone !== "" &&
      form.College !== "" &&
      form.Branch !== "" &&
      form.YOG !== "" &&
      form.Preferred_cube_type !== "" &&
      form.PIG !==""&&
      form.Phone.length == 10;

    if (condition) {
      try {
        const res = await axios.post(`/server/register?event=talentShow`, form, {
          headers: {
            "Content-Type": "application/json",
          },
        });
	setValue(true);
        alert(res.data.message);
      } catch (err) {
        console.error(err);
        alert(err.response.data.message);
      }
    } else {
      alert("Please fill all the necessary details correctly");
    }
    setSubmit(false);
  };

  const onVerifyCaptcha = () => {
  }

  return (
    <div
      className="metaportal_fn_mintpage"
      id="registration"
      style={{ position: "relative", zIndex: "0", paddingTop: "5rem" }}
    >
      <Title color={"TALENT"} noncolor={"SHOW"} />
      <div className="container small" style={{ paddingTop: "3rem" }}>
        <div className="metaportal_fn_mintbox">
          <div className="mint_left">
            <div className="mint_title">
              <span>REGISTER NOW</span>
            </div>
            <div className="mint_list">
              <ul>
                <li data-aos="fade-down">
                  <input
                    name="Name"
                    id="participantName"
                    type="text"
                    placeholder="Name Of Participant"
                    onChange={(e) => handle(e)}
                    value={form.Name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="emailId"
                    type="text"
                    name="Email"
                    placeholder="Email Id"
                    onChange={(e) => handle(e)}
                    value={form.Email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="whatsappNumber"
                    type="text"
                    name="Phone"
                    placeholder="Whatsapp Number"
                    onChange={(e) => handle(e)}
                    value={form.Phone}
                  />
                  <span style={{ fontSize: "0.7rem" }}>
                    * Don't include +91 or 0.
                  </span>
                  {form.Phone !== "" &&
                    form.Phone.length !== 10 && (
                      <p style={{ color: "red" }}>
                        Enter a number of 10 digits only.
                      </p>
                    )}
                </li>
                <li data-aos="fade-down">
                  <input
                    id="whatsappNumber"
                    type="text"
                    name="Additional_phone"
                    placeholder="Additional phone Number"
                    onChange={(e) => handle(e)}
                    value={form.Additional_phone}
                  />
                  <span style={{ fontSize: "0.7rem" }}>
                    * Don't include +91 or 0.
                  </span>
                  {form.Additional_phone !== "" &&
                    form.Additional_phone.length !== 10 && (
                      <p style={{ color: "red" }}>
                        Enter a number of 10 digits only.
                      </p>
                    )}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="College"
                    id="collegeName"
                    type="text"
                    placeholder="College Name"
                    onChange={(e) => handle(e)}
                    value={form.College}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Branch"
                    id="branch"
                    type="text"
                    placeholder="Branch"
                    onChange={(e) => handle(e)}
                    value={form.Branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="YOG"
                    id="year"
                    type="text"
                    placeholder="Year"
                    onChange={(e) => handle(e)}
                    value={form.YOG}
                  />
                </li>
                
                <li data-aos="fade-down">
                <h4 style={{marginBottom:"0.8rem",color:"red"}}>Performing in Group?</h4>
                  <input
                    name="group"
                    id="PIG"
                    type="text"
                    placeholder="Yes Or No"
                    onChange={(e) => handle(e)}
                    value={form.group}
                  />
                </li>
              </ul>
            </div>
            <HCaptcha
              sitekey={keys.hcaptcha}
              onClick={onLoad}
              onVerify={setToken}
              ref={captchaRef}
            />
            {/* <div style={{ fontSize: '17px' }}>
              Don't forget to join the WhatsApp Group after registration!
            </div> */}
            <div className="mint_desc" style={{ paddingTop: "2rem" }}>
              {/* <ReCAPTCHA
                sitekey="6LcIzaMoAAAAAHJK_7w8zc2WlllaZm4asH4POtWI"
                ref={recaptchaRef}
              /> */}
              {!isSubmitting ? (
                <div
                  target="_blank"
                  rel="noreferrer"
                  className="metaportal_fn_button"
                  style={{ cursor: "pointer" }}
                  onClick={submit}
                  disabled={isSubmitting}
                >
                  <span>Submit</span>
                </div>
              ) : (
                <>Submitting...</>
              )}
	      <div>
              {isSubmitted && (
                {/* <div>
                  <div>
                    <a style={{ textDecoration: "none"}} href="https://chat.whatsapp.com/LhuUE4GCgnhGy5nYrJ9S3q">
                      <span className="metaportal_fn_button_4">Join WA Group</span>
                    </a>
                  </div>
                </div> */}
              )}
            </div>
              <p>* Read the Rules & Regulations before Submitting</p>
            </div>
          </div>
          <div className="mint_right">
            <div className="mright">
              <div data-aos="fade-down" className="mint_time">
                <h4>Talent Show</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                1. Every performance should satisfy the time limit criteria.<br/>
                TIME LIMIT:<br/>  Stand up: 5-7 mins<br/>
                 Others: 3 mins
                </p>
                <p>
                2.Avoid using foul language 
                </p>
                <p>
                3.Adhere the formalities of the event 
               </p>
              </div>
              <a style={{ textDecoration: "none" }} href={docs}>
                {/* <span className="metaportal_fn_button_4">Download PDF</span> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentShowForm;
