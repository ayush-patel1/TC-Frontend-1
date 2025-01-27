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

const DsaMarathonForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("dsamarathonform")) || {
    Team_name: "",
    Leader_name: "",
    Leader_email: "",
    Leader_whatsapp: "",
    Leader_college: "",
    Leader_branch: "",
    Leader_sem: "",
    Leader_gender: "",
    Leader_program_Of_Study: "",
    P2_email: "",
    P2_sem: "",
    P2_branch: "",
    P2_name: "",
    P3_name: "",
    P3_email: "",
    P3_sem: "",
    P3_branch: "",
    Leader_Hackerrank: "",
    Leader_Hackerearth: "",
    P2_Hackerrank: "",
    P2_Hackerearth: "",
    P3_Hackerrank: "",
    P3_Hackerearth: "",
  };
  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("dsamarathonform", JSON.stringify(update));
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
      form.Leader_Hackerearth !== "" &&
      form.Leader_Hackerrank !== "" &&
      form.P2_name !== "" &&
      form.P2_sem !== "" &&
      form.P2_branch !== "" &&
      form.P2_email !== "" &&
      form.P2_Hackerearth !== "" &&
      form.P2_Hackerrank !== "" &&
      form.P3_name !== "" &&
      form.P3_email !== "" &&
      form.P3_branch !== "" &&
      form.P3_sem !== "" &&
      form.P3_Hackerearth !== "" &&
      form.P3_Hackerrank !== "" &&
      form.Leader_whatsapp.length == 10;

    if (condition) {
      try {
        const res = await axios.post(
          `/server/register?event=DsaMarathon`,
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

  const onVerifyCaptcha = () => {};

  return (
    <div
      className="metaportal_fn_mintpage"
      id="registration"
      style={{ position: "relative", zIndex: "0", paddingTop: "5rem" }}
    >
      <Title color={"DSA Marathon"} noncolor={""} />
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
                    name="Leader_Hackerrank"
                    id="Leader_Hackerrank"
                    type="text"
                    placeholder="Leader's Hackerrank ID"
                    onChange={(e) => handle(e)}
                    value={form.Leader_Hackerrank}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Leader_Hackerearth"
                    id="Leader_Hackerearth"
                    type="text"
                    placeholder="Leader's HackerEarth ID"
                    onChange={(e) => handle(e)}
                    value={form.Leader_Hackerearth}
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
                    name="P2_Hackerrank"
                    id="P2_Hackerrank"
                    type="text"
                    placeholder="Team Member 2 Hackerrank ID"
                    onChange={(e) => handle(e)}
                    value={form.P2_Hackerrank}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_Hackerearth"
                    id="P2_Hackerearth"
                    type="text"
                    placeholder="Team Member 2 HackerEarth ID"
                    onChange={(e) => handle(e)}
                    value={form.P2_Hackerearth}
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
                </li>
                <li data-aos="fade-down">
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
                    name="P3_Hackerrank"
                    id="P3_Hackerrank"
                    type="text"
                    placeholder="Team Member 3 Hackerrank ID"
                    onChange={(e) => handle(e)}
                    value={form.P3_Hackerrank}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_Hackerearth"
                    id="P3_Hackerearth"
                    type="text"
                    placeholder="Team Member 3 HackerEarth ID"
                    onChange={(e) => handle(e)}
                    value={form.P3_Hackerearth}
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
                <h4>DSA Marathon</h4>
                <h3 className="metaportal_fn_countdown">DESCRIPTION</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  An event based on quick selection and solving maximum
                  questions from a set of 30 Standard DSA questions.
                </p>
                <p>Team size: 3</p>
                <p>Time duration: 45mins</p>
              </div>
              <div data-aos="fade-down" className="mint_time">
                <h4>DSA Marathon</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  1. All the team members of a team have to login through the
                  platform and have to solve maximum questions possible from a
                  set of 30 questions in 45 minutes.
                </p>
                <p>
                  2. Students will be assessed from the number of test cases
                  passed per question.
                </p>
                <p>
                  3. Same question can be solved by different members of the
                  team and a solution with maximum passed test cases will be
                  counted.
                </p>
                <p>
                  4. The team with the maximum number of questions solved will
                  be declared winners.
                </p>
                <p>
                  5. Any unfair means and plagiarism will lead to immediate
                  disqualification.
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

export default DsaMarathonForm;
