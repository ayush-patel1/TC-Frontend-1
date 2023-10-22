import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import keys from "../keys.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/circuitrix2.pdf";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const backend = keys.backend;

const Circuitrix2Form = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("circuitrixForm")) || {
    Participant_name: "",
    Email: "",
    Whatsapp: "",
    College: "",
    Branch: "",
    YOG: "",
    Roll_number: "",
  };
  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("circuitrixForm", JSON.stringify(update));
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
      form.Participant_name !== "" &&
      form.Email !== "" &&
      form.Whatsapp !== "" &&
      form.College !== "" &&
      form.Branch !== "" &&
      form.YOG !== "" &&
      form.Roll_number !== "" &&
      form.Whatsapp.length === 10;

    if (condition) {
      try {
        const res = await axios.post(`http://localhost:5000/server/register?event=Circuitrix`, form, {
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
      <Title color={"CIRCUITRIX"} noncolor={"2.0"} />
      <div className="container small" style={{ paddingTop: "3rem" }}>
        <div className="metaportal_fn_mintbox">
          <div className="mint_left">
            <div className="mint_title">
              <span>REGISTER NOW</span>
            </div>
            <div className="mint_list">
              <ul>
                {/* <p>Note : All team members should be from the same year.</p> */}
                <li data-aos="fade-down">
                  <input
                    id="name"
                    type="text"
                    name="Participant_name"
                    placeholder="Name of Participant"
                    onChange={(e) => handle(e)}
                    value={form.Participant_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="email"
                    type="text"
                    name="Email"
                    placeholder="Email Id"
                    onChange={(e) => handle(e)}
                    value={form.Email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="number"
                    type="text"
                    name="Whatsapp"
                    placeholder="Whatsapp Number"
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
                    id="yog"
                    type="text"
                    placeholder="Year of graduation"
                    onChange={(e) => handle(e)}
                    value={form.YOG}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Roll_number"
                    id="rollNumber"
                    type="text"
                    placeholder="Roll Number"
                    onChange={(e) => handle(e)}
                    value={form.Roll_number}
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
                <h4>CIRCUITRIX 2.0</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  1. In the round 1 candidates will be shortlisted on basis of
                  right answer and the time taken (faster you solve more chances
                  of your qualification)
                </p>
                <p>
                  2. In round 2 and 3 circuit assigned will be random and all
                  the required equipment’s will be provided by us. You will just
                  have to assemble them.
                </p>
                <p>
                  3. For round 2 and 3 team will be made by us and it will be
                  random all the participants must have to coordinate with the
                  assigned team.
                </p>
                <p>
                  4.Unethical behavior could lead to disqualification.
                  Faculty-coordinators have all the rights to take final
                  decision for any matter during the event.
                </p>
                <p>5. Judge's decision will be considered final.</p>
                <p>6. *Rules may subject to change.</p>
                <p>
                  7. It is mandatory the all the team members should belong to
                  the same year.
                </p>
                {/* <p>8. Certificates will be given to all the participants.</p> */}
              </div>
              <div data-aos="fade-down" className="mint_time">
                <h4>CIRCUITRIX 2.0</h4>
                <h3 className="metaportal_fn_countdown">EVENT DETAILS</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  Round 1 (Elimination round- It will be an online quiz top 25
                  participant will be considered for next round)
                </p>
                <p>
                  Round 2 (In this round teams of 3 will be made by us and given
                  a circuit. The first 4 teams to finish the circuit will go to
                  the final round.)
                </p>
                <p>
                  Round 3 Same as previous round another circuit will we be
                  assigned to the final 4 teams and the first to finish will be
                  considered the winner.
                </p>
                <p>
                  (Apart from this, participants will be added in a WhatsApp
                  group and detailed information will be shared there.)
                </p>
                {/* <p>8. Certificates will be given to all the participants.</p> */}
              </div>
              <h3 className="metaportal_fn_countdown">PRIZES</h3>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  Exciting prizes, including goodies and various opportunities,
                  await the top-performing teams. Our event partners are proud
                  to support Circuitrix and recognize the talent and innovation
                  displayed by participants.
                </p>
              </div>
              <h3 className="metaportal_fn_countdown">REGISTRATION</h3>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  Teams can register for Circuitrix through the official
                  Aavartan Tech Fest website. Early registration is recommended,
                  as the number of participating teams is limited.
                </p>
              </div>
              <h3 className="metaportal_fn_countdown">CONCLUSION</h3>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  Circuitrix promises to be a thrilling exploration of circuit
                  assembly skills, challenging participants to push the
                  boundaries of innovation. The Committee Technocracy invites
                  all tech enthusiasts and aspiring engineers to join us for
                  this electrifying competition and showcase their prowess in
                  assembling circuits at Aavartan Tech Fest!
                </p>
              </div>
              <h3 className="metaportal_fn_countdown">CONTACT</h3>
              <div data-aos="fade-down" className="mint_info">
                <p>SIDDHARTH BILLAIYA - 7000893343</p>
                <p>BHAVYA JAIN - 8302502344</p>
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

export default Circuitrix2Form;
