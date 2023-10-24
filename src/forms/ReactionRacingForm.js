import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/reactionRacing.docx";
import HCaptcha from '@hcaptcha/react-hcaptcha';
import keys from "../keys.json";

const ReactionRacingForm = () => {
  const recaptchaRef = useRef();
  useEffect(() => {
    AOS.init();
  }, []);
  const [memberCount, setMemberCount] = useState(0);
  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);
  const cachedForm = JSON.parse(localStorage.getItem("reactionRacingForm")) || {
    Leader_name: "",
    Leader_whatsapp: "",
    Leader_branch: "",
    Leader_sem: "",
    Leader_email: "",
    P2_name: "",
    P2_branch: "",
    P2_sem: "",
    P2_email: "",
    P2_number: "",
  };
  const [form, set] = useState(cachedForm);
  const [isSubmitting, setSubmit] = useState(false);

  useEffect(() => {
    if (token) {
      console.log('Captcha verified')
    }
    // console.log(`hCaptcha Token: ${token}`);
  }, [token]);

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("reactionRacingForm", JSON.stringify(update));
  };



  const onLoad = () => {
    // this reaches out to the hCaptcha JS API and runs the
    // execute function on it. you can use other functions as
    // documented here:
    // https://docs.hcaptcha.com/configuration#jsapi
    captchaRef.current.execute();
  };

  const submit = async () => {
    if (!token) {
      alert("Human verification is mandatory");
      return;
    }
    setSubmit(true);
    let condition =
      form.Leader_name !== "" &&
      form.Leader_whatsapp !== "" &&
      form.Leader_branch !== "" &&
      form.Leader_sem !== "" &&
      form.Leader_email !== "" &&
      form.P2_name !== "" &&
      form.P2_branch !== "" &&
      form.P2_sem !== "" &&
      form.P2_email !== "" &&
      form.P2_number !== "" &&
      form.P2_number.length === 10 &&
      form.Leader_whatsapp.length === 10;


    if (condition) {
      try {
        const res = await axios.post(`/server/register?event=ReactionRacing`, form, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        alert(res.data.message);
      } catch (err) {
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
      <Title color={"REACTION"} noncolor={"RACING"} />
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
                    placeholder="Your Leader Name"
                    onChange={(e) => handle(e)}
                    value={form.Leader_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderNumber"
                    type="text"
                    name="Leader_whatsapp"
                    placeholder="Your Leader Whatsapp Number"
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
                    id="leaderBranch"
                    type="text"
                    placeholder="Leader's Semester"
                    onChange={(e) => handle(e)}
                    value={form.Leader_sem}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Leader_email"
                    id="leaderBranch"
                    type="text"
                    placeholder="Leader's Email Id"
                    onChange={(e) => handle(e)}
                    value={form.Leader_email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="P2Name"
                    type="text"
                    name="P2_name"
                    placeholder="Player 2 Name"
                    onChange={(e) => handle(e)}
                    value={form.P2_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="P2Name"
                    type="text"
                    name="P2_branch"
                    placeholder="Player 2 branch"
                    onChange={(e) => handle(e)}
                    value={form.P2_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="P2Name"
                    type="text"
                    name="P2_sem"
                    placeholder="Player 2 Semester"
                    onChange={(e) => handle(e)}
                    value={form.P2_sem}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="P2Name"
                    type="text"
                    name="P2_email"
                    placeholder="Player 2 Email Id"
                    onChange={(e) => handle(e)}
                    value={form.P2_email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_number"
                    id="P2Number"
                    type="text"
                    placeholder="Player 2 Mobile Number"
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
              </ul>
            </div>
            <HCaptcha
              sitekey={keys.hcaptcha}
              onClick={onLoad}
              onVerify={setToken}
              ref={captchaRef}
            />
            <div className="mint_desc" style={{ paddingTop: "4rem" }}>
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
                <h4>Survival</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>All rules and Regulations will be told on the venue.</p>
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

export default ReactionRacingForm;
