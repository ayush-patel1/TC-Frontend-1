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

const SpeedCubingForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("terrainTreaderForm")) || {
    Team_name: "",
    Leader_name: "",
    Leader_whatsapp: "",
    Leader_branch: "",
    Leader_yog: ""
  };
  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);
  const [isSubmitted, setValue] = useState(false);

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("terrainTreaderForm", JSON.stringify(update));
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
      form.Leader_whatsapp !== "" &&
      form.Leader_yog !== "" &&
      form.Leader_branch !== "" &&
      form.Leader_whatsapp.length == 10;

    if (condition) {
      try {
        const res = await axios.post(`/server/register?event=terrainTreader`, form, {
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
      <Title color={"SPEED"} noncolor={"CUBING"} />
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
                    name="participant_name"
                    id="participantName"
                    type="text"
                    placeholder="Name Of Participant"
                    onChange={(e) => handle(e)}
                    value={form.participant_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="emailId"
                    type="text"
                    name="email_id"
                    placeholder="Email Id"
                    onChange={(e) => handle(e)}
                    value={form.email_id}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="whatsappNumber"
                    type="text"
                    name="whatsapp_number"
                    placeholder="Whatsapp Number"
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
                    name="college_name"
                    id="collegeName"
                    type="text"
                    placeholder="College Name"
                    onChange={(e) => handle(e)}
                    value={form.college_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="branch"
                    id="branch"
                    type="text"
                    placeholder="Branch"
                    onChange={(e) => handle(e)}
                    value={form.branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="year"
                    id="year"
                    type="text"
                    placeholder="Year"
                    onChange={(e) => handle(e)}
                    value={form.year}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="roll_number"
                    id="rollNumber"
                    type="text"
                    placeholder="Roll Number"
                    onChange={(e) => handle(e)}
                    value={form.roll_number}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="cube"
                    id="cube"
                    type="text"
                    placeholder="What type of cube you're used to? (e.g. 3x3x3, Pyraminx, etc)"
                    onChange={(e) => handle(e)}
                    value={form.cube}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="how_long"
                    id="howLong"
                    type="text"
                    placeholder="How long have you been solving the cube?"
                    onChange={(e) => handle(e)}
                    value={form.how_long}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="achievement"
                    id="achievement"
                    type="text"
                    placeholder="Any achievement(s) in solving cube-related events?"
                    onChange={(e) => handle(e)}
                    value={form.achievement}
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
            <div style={{ fontSize: '17px' }}>
              Don't forget to join the WhatsApp Group after registration!
            </div>
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
                <div>
                  <div>
                    <a style={{ textDecoration: "none"}} href="https://chat.whatsapp.com/LhuUE4GCgnhGy5nYrJ9S3q">
                      <span className="metaportal_fn_button_4">Join WA Group</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
              <p>* Read the Rules & Regulations before Submitting</p>
            </div>
          </div>
          <div className="mint_right">
            <div className="mright">
              <div data-aos="fade-down" className="mint_time">
                <h4>Speed Cubing</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                1. Any modification or tampering with the cubes is strictly prohibited.
                </p>
                <p>
                2. Participants are expected to maintain the highest standards of sportsmanship. Any form of cheating or disruptive behaviour will result in disqualification. 
                </p>
                <p>
                3. In Round 3, participants must allow volunteers/executives to scramble their cubes. The cube's pattern should be unknown to the participants until the start of the round. Any attempt to do so will result in immediate disqualification. 
                </p>
                <p>
                4. Participants must follow all instructions and directions given by the organizers, volunteers, and executives. Failure to do so may result in disqualification.
                </p>
                <p>
                6. All the participants must report to concerned venue at the reported time. Late reporting can lead to disqualification.
                </p>
              </div>
              {/* <div
                data-aos="fade-down"
                style={{ paddingTop: "2rem" }}
                className="mint_time"
              >
                <h4>PROCEDURES</h4>
                <h3 className="metaportal_fn_countdown">PHASES IN THE EVENT</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  1. The competition is based on time, performance and
                  perfection trail system. There will a qualifying round for
                  each team.
                  <br />
                  <br /> 2. The top team from qualifying round makes it to the
                  final round on basis of time trials.
                  <br />
                  <br /> 3. 2 hand touches are allowed without any penalty after
                  that there will be penalty of 7 sec for each hand touch,
                  penalty time will be added further too overall time required
                  by robot for completion of specified round.
                  <br />
                  <br /> 4. If any of the robots starts off before start up
                  call, the counter would be restarted and the machines will get
                  a second chance.
                  <br />
                  <br /> 5. Your robot must be ready when call is made for your
                  team.
                  <br />
                  <br /> 6. Machine must not contain any readymade kits,
                  pneumatic & hydraulic systems, IC engines.
                  <br /> <br /> 7. Decision about your robot will be taken by
                  the organizers.
                </p>
              </div> */}
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

export default SpeedCubingForm;
