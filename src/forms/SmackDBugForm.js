import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import keys from "../keys.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/aerofilia.docx";
import HCaptcha from '@hcaptcha/react-hcaptcha';

const backend = keys.backend;

const SmackDBugForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("smackDbugForm")) || {
    Name: "",
    Gender: "",
    Email: "",
    Whatsapp: "",
    College: "",
    Program_of_study: "",
    Branch: "",
    Sem: ""
  };
  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("smackDbugForm", JSON.stringify(update));
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
      form.Gender !== "" &&
      form.Email !== "" &&
      form.Whatsapp !== "" &&
      form.College !== "" &&
      form.Branch !== "" &&
      form.Sem !== "" &&
      form.Program_of_study !== "" &&
      form.Whatsapp.length == 10;

    if (condition) {
      try {
        const res = await axios.post(`/server/register?event=DBugShowdown`, form, {
          headers: {
            "Content-Type": "application/json",
          },
        });
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
      <Title color={"D-BUGSHOWDOWN"} noncolor={""} />
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
                    id="leaderName"
                    type="text"
                    name="Name"
                    placeholder="Full Name"
                    onChange={(e) => handle(e)}
                    value={form.Name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderName"
                    type="text"
                    name="Gender"
                    placeholder="Gender"
                    onChange={(e) => handle(e)}
                    value={form.Gender}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderNumber"
                    type="text"
                    name="Whatsapp"
                    placeholder="Contact Number"
                    onChange={(e) => handle(e)}
                    value={form.Whatsapp}
                  />
                  <span style={{ fontSize: "0.7rem" }}>
                    * Don't include +91 or 0.
                  </span>
                  {form.Whatsapp !== "" &&
                    form.Whatsapp.length !== 10 && (
                      <p style={{ color: "red" }}>
                        Enter a number of 10 digits only.
                      </p>
                    )}
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderEmail"
                    type="text"
                    name="Email"
                    placeholder="Email Address"
                    onChange={(e) => handle(e)}
                    value={form.Email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderName"
                    type="text"
                    name="College"
                    placeholder="College"
                    onChange={(e) => handle(e)}
                    value={form.College}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Program_of_study"
                    id="leaderProgramOfStudy"
                    type="text"
                    placeholder="Program of Study"
                    onChange={(e) => handle(e)}
                    value={form.Program_of_study}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Branch"
                    id="leaderBranch"
                    type="text"
                    placeholder="Branch"
                    onChange={(e) => handle(e)}
                    value={form.Branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Sem"
                    id="leaderSem"
                    type="text"
                    placeholder="Semester"
                    onChange={(e) => handle(e)}
                    value={form.Sem}
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
                <h4>D-Bug Showdown</h4>
                <h3 className="metaportal_fn_countdown">Rules and Regulations</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>1. D-Bug Showdown consists of two rounds.</p>
                <p>2. Interested students can participate individually. </p>
                <p>
                  3. The registration and testing for the event will be held on UNSTOP.
                </p>
                <p>
                    4. The assessment will be hosted in full-screen mode.
                </p>
                <p>
                  5. Malpractice of any sort is strictly condemned and if caught, the participant will be promptly eliminated.
                </p>
                <p>
                  6. All decisions regarding eligibility and final judgement shall rest with the Technocracy team.
                </p>
              </div>
              <div data-aos="fade-down" className="mint_time">
                <h4>D-Bug Showdown </h4>
                <h3 className="metaportal_fn_countdown">Details of Rounds</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <h4>Round 1: MCQ Round</h4>
                <p>
                  1. The participants are expected to solve 25 programming-related questions in 20 minutes.
                </p>
                <p>
                  2. Candidates will be awarded +4 marks for each correct answer and -1 mark for wrong answer.
                </p>
                <p>
                  3. Questions will be based on OOPs, Operating Systems, DSA and Code Debugging.
                </p>
                <p>
                    4. Shortlisted students from round one will be informed for the final round.
                </p>
                <p>
                  5. Malpractice of any sort will lead to immediate elimination.
                </p>
                <h4>Round 2: Code Debugging Round</h4>
                <p>
                  1. This round comprises 5 code snippets with errors (logical and syntactical).
                </p>
                <p>2. A duration of 30 minutes will be provided to the participants for submitting the corrected codes.</p>
                <p>
                  3. The code snippets in this round will be in C++. 
                </p>
                <p>
                  4. All questions are compulsory. There is no negative marking.
                </p>
                <p>5. Maximum marks: 50, i.e. 10 marks for each question and partial marks will be given for correct sections of the code.</p>
                <p>
                  6. Candidates need to debug the given snippets and submit the correct code.
                </p>
                <p>
                7. Plagiarised answers will not be entertained.
                </p>
                <p>
                  8. Mode of Conduction: Online on Unstop.
                </p>
              </div>
              {/* <div
                data-aos="fade-down"
                style={{ paddingTop: "2rem" }}
                className="mint_time"
              >
                <a style={{ textDecoration: "none" }} href={docs}>
                  <span className="metaportal_fn_button_4">Download PDF</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmackDBugForm;
