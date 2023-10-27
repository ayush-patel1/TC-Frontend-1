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

const CodemimeQuestForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("codeMimeForm")) || {
    Team_name: "",
    Leader_name: "",
    Leader_whatsapp: "",
    Leader_college: "",
    Leader_branch: "",
    Leader_yog: "",
    P2_name: "",
    P2_branch: "",
    P2_yog: "",
    P3_name: "",
    P3_branch: "",
    P3_yog: ""
  };
  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("codeMimeForm", JSON.stringify(update));
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
    alert("Registration Closed, see you next year😊");
    window.location.href = "/events";
    if (token) {
      console.log('Captcha verified')
    }
      // console.log(`hCaptcha Token: ${token}`);
  }, [token]);

  const submit = async () => {
    if (!token) {
      alert("Human verification is mandatory");
      return;
    }
    setSubmit(true);
    let condition1 =
      form.Team_name !== "" &&
      form.Leader_name !== "" &&
      form.Leader_whatsapp !== "" &&
      form.Leader_college !== "" &&
      form.Leader_branch !== "" &&
      form.Leader_yog !== "" &&
      form.P2_name !== "" &&
      form.P2_branch !== "" &&
      form.P2_year !== "" &&
      form.Leader_whatsapp.length == 10;

    let condition2 = false;
    if (form.P3_name === form.P3_branch && form.P3_branch === form.P3_yog && form.P3_name === "") condition2 = true;
    else if (form.P3_name !== "" && form.P3_branch !== "" && form.P3_yog !== "") condition2 = true;

    let condition3 = false;
    if (form.Leader_yog === form.P2_yog) {
      condition3 = true;
      if (form.P3_yog !== "" && form.P3_yog !== form.Leader_yog) condition3 = false;
    }

    if (!condition3) {
      alert("All participants must be from the same year");
      return;
    }

    if (condition1 && condition2 && condition3) {
      try {
        const res = await axios.post(`/server/register?event=codemime`, form, {
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
      <Title color={"CODEMIME"} noncolor={"QUEST"} />
      <div className="container small" style={{ paddingTop: "3rem" }}>
        <div className="metaportal_fn_mintbox">
          <div className="mint_left">
            <div className="mint_title">
              <span>REGISTER NOW</span>
            </div>
            <div className="mint_list">
              <ul>
                <p>Note : All team members should be from the same year.</p>
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
                    name="Leader_yog"
                    id="leaderYog"
                    type="text"
                    placeholder="Leader's year of graduation"
                    onChange={(e) => handle(e)}
                    value={form.Leader_yog}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_name"
                    id="leaderYog"
                    type="text"
                    placeholder="Player 2 Name"
                    onChange={(e) => handle(e)}
                    value={form.P2_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_branch"
                    id="leaderYog"
                    type="text"
                    placeholder="Player's 2 Year of Graduation"
                    onChange={(e) => handle(e)}
                    value={form.P2_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_yog"
                    id="leaderYog"
                    type="text"
                    placeholder="Player's 2 Year of Graduation"
                    onChange={(e) => handle(e)}
                    value={form.P2_yog}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_name"
                    id="leaderYog"
                    type="text"
                    placeholder="Player 3 Name"
                    onChange={(e) => handle(e)}
                    value={form.P3_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_branch"
                    id="leaderBranch"
                    type="text"
                    placeholder="Player 3 Branch"
                    onChange={(e) => handle(e)}
                    value={form.P3_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_yog"
                    id="leaderYog"
                    type="text"
                    placeholder="Player's 3 Year of Graduation"
                    onChange={(e) => handle(e)}
                    value={form.P3_yog}
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
                <h4>CODEMIME QUEST</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  1. Each team will consist of 2-3 people.
                </p>
                <p>2. The problem statement will be explained to only one of the teammates and he/she will try to explain the problem statement to the other teammate/s by drawings(on a board) and gestures.

                </p>
                <p>
                  3. The other teammate/s would then try to solve this problem as per their interpretation of the problem.
                </p>
                <p>
                  4. Writing any keywords/numbers would result in disqualification.
                </p>
                <p>
                  5. The maximum time that can be allotted to the team is 30 minutes.
                </p>
                <p>
                  6. A team that finishes early wins.
                </p>
                <p>
                    7. It is mandatory the all the team members should belong to the same year.
                </p>
                {/* <p>8. Certificates will be given to all the participants.</p> */}
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

export default CodemimeQuestForm;
