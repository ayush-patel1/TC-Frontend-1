import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/ecopolis.docx";
import keys from "../keys.json";
import HCaptcha from "@hcaptcha/react-hcaptcha";


// const backend = keys.backend;

const EcopolisForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("ecopolisForm")) || {
    Team_name: "",
    Leader_name: "",
    Leader_whatsapp: "",
    Leader_email: "",
    Leader_semester: "",
    P2_name: "",
    P2_number: "",
    P2_semester:"",
    P3_name: "",
    P3_number: "",
    P3_semester:"",
  };
  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("ecopolisForm", JSON.stringify(update));
  };

  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);

  const onLoad = () => {
    // this reaches out to the hCaptcha JS API and runs the
    // execute function on it. you can use other functions as
    // documented here:
    // https://docs.hcaptcha.com/configuration#jsapi
    captchaRef.current.execute();
  };

  useEffect(() => {
    if (token) {
      console.log("Captcha verified");
    }
    // console.log(`hCaptcha Token: ${token}`);
  }, [token]);

  const submit = async () => {
    // const recaptchaValue = recaptchaRef.current.getValue();
    // Send the recaptchaValue along with the form data to your server for verification.
    // if (!token) {
    //   alert("Human verification is mandatory");
    //   return;
    // }
    setSubmit(true);
    console.log(form);
    let condition1 =
      form.Team_name !== "" &&
      form.Leader_name !== "" &&
      form.Leader_whatsapp !== "" &&
      form.Leader_email !== "" &&
      form.Leader_semester!==""&&
      form.Leader_whatsapp.length === 10;
    
    if (condition1) {
      try {
        const res = await axios.post(
          `/server/register?event=Ecopolis`,
          form,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
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

  return (
    <div
      className="metaportal_fn_mintpage"
      id="registration"
      style={{ position: "relative", zIndex: "0", paddingTop: "5rem" }}
    >
      <Title color={"ECOPOLIS"} noncolor={""} />
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
                    name="Team_name"
                    id="teamName"
                    type="text"
                    placeholder="Team Name"
                    onChange={(e) => handle(e)}
                    value={form.Team_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderName"
                    type="text"
                    name="Leader_name"
                    placeholder="Leader Name"
                    onChange={(e) => handle(e)}
                    value={form.Leader_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderNumber"
                    type="text"
                    name="Leader_whatsapp"
                    placeholder="Leader  Number"
                    onChange={(e) => handle(e)}
                    value={form.Leader_whatsapp}
                  />
                  <span style={{ fontSize: "0.7rem" }}>
                    * Don't include +91 or 0.
                  </span>
                  {form.Leader_whatsapp !== "" &&
                    form.Leader_whatsapp.length !== 10 && (
                      <p style={{ color: "red" }}>
                        Enter a number of 10 digits only.
                      </p>
                    )}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Leader_semester"
                    id="leaderBranch"
                    type="text"
                    placeholder="Leader Semester"
                    onChange={(e) => handle(e)}
                    value={form.Leader_semester}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Leader_email"
                    id="leaderEmail"
                    type="text"
                    placeholder="Leader Email"
                    onChange={(e) => handle(e)}
                    value={form.Leader_email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_name"
                    id="P2Name"
                    type="text"
                    placeholder="Member 2 Name "
                    onChange={(e) => handle(e)}
                    value={form.P2_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_number"
                    id="P2Number"
                    type="text"
                    placeholder="Member 2 Mobile Number"
                    onChange={(e) => handle(e)}
                    value={form.P2_number}
                  />
                  <span style={{ fontSize: "0.7rem" }}>
                    * Don't include +91 or 0.
                  </span>
                  {form.P2_number !== "" &&
                    form.P2_number.length !== 10 && (
                      <p style={{ color: "red" }}>
                        Enter a number of 10 digits only.
                      </p>
                    )}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_semester"
                    id="P2Branch"
                    type="text"
                    placeholder="Member 2 Semester"
                    onChange={(e) => handle(e)}
                    value={form.P2_semester}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_name"
                    id="P3Name"
                    type="text"
                    placeholder="Member 3 Name "
                    onChange={(e) => handle(e)}
                    value={form.P3_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_number"
                    id="P3Number"
                    type="text"
                    placeholder="Member 3 Mobile Number"
                    onChange={(e) => handle(e)}
                    value={form.P3_number}
                  />
                  <span style={{ fontSize: "0.7rem" }}>
                    * Don't include +91 or 0.
                  </span>
                  {form.P3_number !== "" &&
                    form.P3_number.length !== 10 && (
                      <p style={{ color: "red" }}>
                        Enter a number of 10 digits only.
                      </p>
                    )}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_semester"
                    id="P3Branch"
                    type="text"
                    placeholder="Member 3 Semester"
                    onChange={(e) => handle(e)}
                    value={form.P3_semester}
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
            <div className="mint_desc" style={{ paddingTop: "4rem" }}>
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
              <p>* Read the Rules & Regulations before Submitting</p>
            </div>
          </div>
          <div className="mint_right">
            <div className="mright">
              <div data-aos="fade-down" className="mint_time">
                <h4>Terrain Treader</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                1. It is a city planning event. The purpose of this competition is choosing the best architectural and urban planning concept (master plan) of a new city.
                </p>
                <p>2. Date: 28/10/2023</p>
                <p>
                  3. Venue: architecture studio 3,4
                </p>
                <p>
                4. Time : 11:00 am – 1: pm 
                  
                </p>
                <p>
                5. Team of max 3 members will be allowed.
                   
                </p>
                <p>
                6. Requirement : 2-3 architecture executives and 3-4 volunteers
                  
                </p>
                <p>7. The problem statement will be given to the participants 45 mins prior competition .</p>
                <p>8. Participants  have to make city plan according to the problem statement given on the sheet provided to them. </p>
              </div>
              <div
                data-aos="fade-down"
                style={{ paddingTop: "2rem" }}
                className="mint_time"
              >
                <h4>PROCEDURES</h4>
                <h3 className="metaportal_fn_countdown">PHASES IN THE EVENT</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>1. Round 1:
                
                                 
                  <br />
                  <br />• PPT presentation(1 slider).
                  <br />
                  <br />•	Top 5 teams will qualify   


                  <br />
                  <br />2. Round 2:  
                  <br />
                  <br />• Proper ppt presentation(max 10 slides). 
                  <br /> 
                  <br />• 3 winners.
                  <br/>
                  <br />• Model presentation.
                </p>
              </div>
              <a style={{ textDecoration: "none" }} href={docs}>
                <span className="metaportal_fn_button_4">Download PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcopolisForm;
