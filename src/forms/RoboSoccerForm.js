import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/roboSoccer.docx";
import HCaptcha from '@hcaptcha/react-hcaptcha';
import keys from "../keys.json";

const RoboSoccerForm = () => {
  const recaptchaRef = useRef();
  useEffect(() => {
    AOS.init();
  }, []);
  const [memberCount, setMemberCount] = useState(0);
  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);
  const cachedForm = JSON.parse(localStorage.getItem("roboSoccerForm")) || {
    Team_name: "",
    Leader_name: "",
    Leader_whatsapp: "",
    Leader_branch: "",
    Leader_yog: ""
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
    localStorage.setItem("roboSoccerForm", JSON.stringify(update));
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
      form.Team_name !== "" &&
      form.Leader_name !== "" &&
      form.Leader_whatsapp !== "" &&
      form.Leader_branch !== "" &&
      form.Leader_whatsapp.length == 10 &&
      form.Leader_yog !== "";

    if (condition) {
      try {
        const res = await axios.post(`/server/register?event=RoboSoccer`, form, {
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
      <Title color={"ROBO"} noncolor={"SOCCER"} />
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
                    name="Leader_yog"
                    id="leaderBranch"
                    type="text"
                    placeholder="Leader Year of graduation"
                    onChange={(e) => handle(e)}
                    value={form.Leader_yog}
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
                <h4>Robo Soccer</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>1. Team can have maximum number of four members.</p>
                <p>
                  2. Anyone can control the robot and player can be exchanged in
                  the middle of match.
                </p>
                <p>
                  3. A Robot can push or hit the ball. It cannot withhold or
                  grab the ball.
                </p>
                <p>
                  4. Human interference (e.g., touching the robot) during the
                  game is allowed but at most 3 free touches and after that
                  penalty will be entertained.
                </p>
                <p>
                  5. Decision of the Judges and Event Organizers shall be
                  treated as final and binding on all and cannot be contested.
                  The event coordinator is the match referee. He takes all the
                  decisions and participants have to abide by it.
                </p>
                <p>
                  6. Coordinators reserve the right to ask for the explanation
                  of the robot. The coordinator can change the rules of the game
                  depending on the situation.
                </p>
                <p>
                  7. Rules & Regulations may change without prior notice, by the
                  Event organizers.
                </p>
                <p>
                  8. Positions of balls and obstacles in the arena will be
                  decided by the organizers on the particular day of event.
                </p>
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
                <p>
                  It’s football time and no-one plays soccer better than the
                  engineers, in their own sophisticated way we hail this event
                  ROBO SOCCER. All you soccer fans hold your breath, as we
                  present to you soccer with an entirely new dimension. So, if
                  you are up for the challenge get your manual soccer playing
                  bots ready in order to compete on the biggest stage and bring
                  out the hidden RONALDO, MESSI in you…its time you to stop
                  watching soccer on screens. Participate and have lots of fun
                  it’s going to be thrilling for sure…...enjoy the event!
                  <br /><br />
                  Organized by TEAM TECHNOCRACY in collaboration with ROBOTIX
                  club under the banner of ‘Tech Fest “AAVARTAN’23”.
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

export default RoboSoccerForm;
