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

const ReverseCodingForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("reverseCodingForm")) || {
    Team_name: "",
    Leader_name: "",
    Leader_gender: "",
    Leader_email: "",
    Leader_whatsapp: "",
    Leader_college: "",
    Leader_program_of_study: "",
    Leader_branch: "",
    Leader_sem: "",
    P2_name: "",
    P2_email: "",
    P2_sem: "",
    P2_Branch: "",
    P3_name: "",
    P3_email: "",
    P3_sem: "",
    P3_Branch: "",
    P4_name: "",
    P4_email: "",
    P4_sem: "",
    P4_Branch: ""
  };
  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("reverseCodingForm", JSON.stringify(update));
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
      form.Team_name !== "" &&
      form.Leader_name !== "" &&
      form.Leader_email !== "" &&
      form.Leader_gender !== "" &&
      form.Leader_whatsapp !== "" &&
      form.Leader_college !== "" &&
      form.Leader_branch !== "" &&
      form.Leader_sem !== "" &&
      form.Leader_program_of_study !== "" &&
      form.P2_name !== "" &&
      form.P2_email !== "" &&
      form.P2_sem !== "" &&
      form.P2_branch !== "" &&
      form.P3_name !== "" &&
      form.P3_email !== "" &&
      form.P3_sem !== "" &&
      form.P3_branch !== "" &&
      form.P4_name !== "" &&
      form.P4_email !== "" &&
      form.P4_sem !== "" &&
      form.P4_branch !== "" &&
      form.Leader_whatsapp.length == 10;

    if (condition) {
      try {
        const res = await axios.post(`/server/register?event=reverseCoding`, form, {
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
      <Title color={"REVERSE CODING"} noncolor={""} />
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
                    name="Leader_name"
                    placeholder="Leader Name"
                    onChange={(e) => handle(e)}
                    value={form.Leader_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderGender"
                    type="text"
                    name="Leader_gender"
                    placeholder="Leader Gender"
                    onChange={(e) => handle(e)}
                    value={form.Leader_gender}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderNumber"
                    type="text"
                    name="Leader_whatsapp"
                    placeholder="Leader Whatsapp Number"
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
                    id="leaderEmail"
                    type="text"
                    name="Leader_email"
                    placeholder="Leader Email"
                    onChange={(e) => handle(e)}
                    value={form.Leader_email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Leader_college"
                    id="leaderBranch"
                    type="text"
                    placeholder="Leader College"
                    onChange={(e) => handle(e)}
                    value={form.Leader_college}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Leader_program_of_study"
                    id="leaderProgramOfStudy"
                    type="text"
                    placeholder="Program of Study"
                    onChange={(e) => handle(e)}
                    value={form.Leader_program_of_study}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Leader_branch"
                    id="leaderBranch"
                    type="text"
                    placeholder="Leader Branch"
                    onChange={(e) => handle(e)}
                    value={form.Leader_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Leader_sem"
                    id="leaderSem"
                    type="text"
                    placeholder="Leader Semester"
                    onChange={(e) => handle(e)}
                    value={form.Leader_sem}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_name"
                    id="P2_name"
                    type="text"
                    placeholder="Member 2 Name"
                    onChange={(e) => handle(e)}
                    value={form.P2_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_email"
                    id="P2_name"
                    type="text"
                    placeholder="Member 2 Email"
                    onChange={(e) => handle(e)}
                    value={form.P2_email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_sem"
                    id="leaderYog"
                    type="text"
                    placeholder="Member 2 Sem"
                    onChange={(e) => handle(e)}
                    value={form.P2_sem}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_branch"
                    id="leaderYog"
                    type="text"
                    placeholder="Member 2 Branch"
                    onChange={(e) => handle(e)}
                    value={form.P2_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_name"
                    id="P3_name"
                    type="text"
                    placeholder="Member 3 Name"
                    onChange={(e) => handle(e)}
                    value={form.P3_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_email"
                    id="P2_name"
                    type="text"
                    placeholder="Member 3 Email"
                    onChange={(e) => handle(e)}
                    value={form.P3_email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_sem"
                    id="leaderYog"
                    type="text"
                    placeholder="Member 3 Sem"
                    onChange={(e) => handle(e)}
                    value={form.P3_sem}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_branch"
                    id="leaderYog"
                    type="text"
                    placeholder="Member 3 Branch"
                    onChange={(e) => handle(e)}
                    value={form.P3_branch}
                  />
                </li><li data-aos="fade-down">
                  <input
                    name="P4_name"
                    id="P2_name"
                    type="text"
                    placeholder="Member 4 Name"
                    onChange={(e) => handle(e)}
                    value={form.P4_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P4_email"
                    id="P2_name"
                    type="text"
                    placeholder="Member 4 Email"
                    onChange={(e) => handle(e)}
                    value={form.P4_email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P4_sem"
                    id="leaderYog"
                    type="text"
                    placeholder="Member 4 Sem"
                    onChange={(e) => handle(e)}
                    value={form.P4_sem}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P4_branch"
                    id="leaderYog"
                    type="text"
                    placeholder="Member 4 Branch"
                    onChange={(e) => handle(e)}
                    value={form.P4_branch}
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
                <h4>Reverse Coding</h4>
                <h3 className="metaportal_fn_countdown">
                DESCRIPTION
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                Reverse Coding is a unique coding competition designed to challenge participant's problem-solving skills by presenting coding challenges that require them to work backward from a given output to the original code. The event aims to foster creative thinking, logical reasoning, and algorithmic understanding among participants.
                </p>
              </div>
              <div style={{ paddingTop: "2rem" }} data-aos="fade-down" className="mint_time">
                <h4>Reverse Coding</h4>
                <h3 className="metaportal_fn_countdown">
                  Requirements
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  1. Laptops are needed to take part in it, or we can conduct it in the CCC.
                </p>
                <p>2. Prior online registration.</p>
                <p>
                  3. Volunteers to manage the crowd (4-5 volunteers will work).
                </p>
                <p>
                  4. Google forms needed to be created before the conduction of it.
                </p>
                <p>
                  5. Some websites are required to be asked in the competition as questions.
                </p>
              </div>
              
              <div style={{ paddingTop: "2rem" }} data-aos="fade-down" className="mint_time">
                <h4>Reverse Coding</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  1. 4 members should be there in the team.
                </p>
                <p>2. No external help allowed.</p>
                <p>
                  3. Time limit should not exceed 30 minutes.
                </p>
                <p>
                  4. Panel decision shall be final.
                </p>
                <p>
                  5. 4-5 rounds should be there.
                </p>
                <p>
                  6. The team completing all the rounds shall be declared as winner.
                </p>
              </div>
              <div
                data-aos="fade-down"
                style={{ paddingTop: "2rem" }}
                className="mint_time"
              >
                <h4>Reverse Coding</h4>
                <h3 className="metaportal_fn_countdown">Event Justification</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>1. Team management</p>
                <p>2. Critical thinking ability</p>
                <p>3. Time management</p>
                <p>4. Coding skills</p>
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

export default ReverseCodingForm;
