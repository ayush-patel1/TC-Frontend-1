import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import keys from "../keys.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/aerofilia.docx";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const backend = keys.backend;

const EscapeTheMatrixForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("escapethematrix")) || {
    Team_name: "",
    Leader_name: "",
    Leader_email: "",
    Leader_whatsapp: "",
    Leader_college: "",
    Leader_branch: "",
    Leader_sem: "",
    Leader_gender:"",
    Leader_program_Of_Study:"",
    P2_email:"",
    P2_sem:"",
    P2_branch:"",
    P2_name: "",
    P3_name: "",
    P3_email:"",
    P3_sem:"",
    P3_branch:"",
    P4_name: "",
    P4_email:"",
    P4_sem:"",
    P4_branch:"",
  };
  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("escapethematrix", JSON.stringify(update));
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
    if (!token) {
      alert("Human verification is mandatory");
      return;
    }
    setSubmit(true);
    let condition =
    form.Team_name !== "" &&
    form.Leader_name !== "" &&
    form.Leader_email !== "" &&
    form.Leader_whatsapp !== "" &&
    form.Leader_college !== "" &&
    form.Leader_branch !== "" &&
    form.Leader_sem !== "" &&
    form.Leader_program_Of_Study !== "" &&
    form.Leader_gender !== "" &&
    form.P2_name !== "" &&
    form.P2_sem !== "" &&
    form.P2_branch !== "" &&
    form.P2_email !== "" &&
    form.P3_name !== "" &&
    form.P3_email !== "" &&
    form.P3_branch !== "" &&
    form.P3_sem !== "" &&
    form.P4_name !== "" &&
    form.P4_email !== "" && 
    form.P4_branch !== "" &&
    form.P4_sem !== "" &&
    form.Leader_whatsapp.length == 10;

    if (condition) {
      try {
        const res = await axios.post(`/server/register?event=EscapeTheMatrix`, form, {
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

  const onVerifyCaptcha = () => {};

  return (
    <div
      className="metaportal_fn_mintpage"
      id="registration"
      style={{ position: "relative", zIndex: "0", paddingTop: "5rem" }}
    >
      <Title color={"Escape The Matrix"} noncolor={""} />
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
                    id="leaderName"
                    type="text"
                    name="Leader_email"
                    placeholder="Leader Email"
                    onChange={(e) => handle(e)}
                    value={form.Leader_email}
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
                  <span style={{ fontSize: "0.7rem",color:"white"}}>
                    * Don't include +91 or 0.
                  </span>
                  {
                    form.Leader_whatsapp.length > 10 && (
                      <p style={{ color: "red" }}>
                        Enter a number of 10 digits only.
                      </p>
                    )}
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
                    id="leadersem"
                    type="text"
                    placeholder="semester"
                    onChange={(e) => handle(e)}
                    value={form.Leader_sem}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_name"
                    id="P2_name"
                    type="text"
                    placeholder="Team Member 2 Name"
                    onChange={(e) => handle(e)}
                    value={form.P2_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_branch"
                    id="P2_branch"
                    type="text"
                    placeholder="Team Member 2 branch"
                    onChange={(e) => handle(e)}
                    value={form.P2_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_email"
                    id="P2_email"
                    type="text"
                    placeholder="Team Member 2 email"
                    onChange={(e) => handle(e)}
                    value={form.P2_email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_sem"
                    id="P2_sem"
                    type="text"
                    placeholder="Team Member 2 semester"
                    onChange={(e) => handle(e)}
                    value={form.P2_sem}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_name"
                    id="P3_name"
                    type="text"
                    placeholder="Team Member 3 Name"
                    onChange={(e) => handle(e)}
                    value={form.P3_name}
                  />
                </li><li data-aos="fade-down">
                  <input
                    name="P3_sem"
                    id="P3_sem"
                    type="text"
                    placeholder="Team Member 3 sem"
                    onChange={(e) => handle(e)}
                    value={form.P3_sem}
                  />
                </li><li data-aos="fade-down">
                  <input
                    name="P3_branch"
                    id="P3_branch"
                    type="text"
                    placeholder="Team Member 3 branch"
                    onChange={(e) => handle(e)}
                    value={form.P3_branch}
                  />
                </li><li data-aos="fade-down">
                  <input
                    name="P3_email"
                    id="P3_email"
                    type="text"
                    placeholder="Team Member 3 email"
                    onChange={(e) => handle(e)}
                    value={form.P3_email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P4_name"
                    id="P4_name"
                    type="text"
                    placeholder="Team Member 4 Name"
                    onChange={(e) => handle(e)}
                    value={form.P4_name}
                  />
                </li><li data-aos="fade-down">
                  <input
                    name="P4_sem"
                    id="P4_sem"
                    type="text"
                    placeholder="Team Member 4 sem"
                    onChange={(e) => handle(e)}
                    value={form.P4_sem}
                  />
                </li><li data-aos="fade-down">
                  <input
                    name="P4_branch"
                    id="P4_branch"
                    type="text"
                    placeholder="Team Member 4 branch"
                    onChange={(e) => handle(e)}
                    value={form.P4_branch}
                  />
                </li><li data-aos="fade-down">
                  <input
                    name="P4_email"
                    id="P4_email"
                    type="text"
                    placeholder="Team Member 4 email"
                    onChange={(e) => handle(e)}
                    value={form.P4_email}
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
                <h4>Escape The Matrix</h4>
                <h3 className="metaportal_fn_countdown">DESCRIPTION</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  "Escape the Matrix" is a thrilling survival quiz designed to
                  test participant's knowledge, problem-solving skills, and
                  quick thinking. Participants will navigate through a series of
                  challenging questions and tasks, each more difficult than the
                  last, to escape the virtual matrix. This event combines
                  elements of a quiz, making it a unique and engaging
                  experience.
                </p>
                <p>Team size: 3-4</p>
                <p>Rounds: 4</p>
              </div>
              <div data-aos="fade-down" className="mint_time">
                <h4>Escape The Matrix</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  1. Team Composition: Teams must consist of 3-4 members. No
                  changes in team composition are allowed once the event starts.
                </p>
                <p>
                  2. All participants must adhere to the rules and instructions
                  provided by the event coordinators.
                </p>
                <p>
                  3. Any form of cheating or misconduct will result in immediate
                  disqualification.
                </p>
                <p>
                  4. Time Limits: Each round has a specific time limit which
                  must be adhered to. Teams must submit their answers and
                  solutions within the given time frame.
                </p>
              </div>
              <div data-aos="fade-down" className="mint_time">
                <h4>Escape The Matrix</h4>
                <h3 className="metaportal_fn_countdown">Event Structure</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  Pre-Event Briefing: All teams will gather for a briefing where
                  the rules and structure of the event will be explained.
                </p>
                <h4>Round 1: The Entry Point (Buzzer Round): 40 teams</h4>
                <p>Teams will face a set of 10 multiple-choice questions.</p>
                <p>
                  Each correct answer earns points, and negative marks for
                  pressing the buzzer and telling a wrong answer and a minimum
                  score is required to progress to the next round.
                </p>
                <h4>Round 2: The Movie Quiz: 20 teams</h4>
                <p>
                  Teams will be prompted with dialogues and they have to
                  complete the dialogues
                </p>
                <p>
                  Teams must solve all puzzles within a given time frame to
                  advance.
                </p>
                <h4>Round 3: The Code Breaker: 10 teams</h4>
                <p>
                  Teams will be given encrypted messages and codes to decipher.
                </p>
                <p>
                  Points are awarded for each correct code, with higher points
                  for faster solutions.
                </p>
                <p>
                  The top teams based on points and time will proceed to the
                  final round.
                </p>
                <h4>Round 4: The Final Escape: 3-5 teams</h4>
                <p>
                  Teams will face a mix of high-difficulty rapid fire questions
                  and those who will give the most correct answers will win.
                </p>
              </div>
              
              
              {/* <a style={{ textDecoration: "none" }} href={docs}>
                <span className="metaportal_fn_button_4">Download PDF</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscapeTheMatrixForm;
