import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import keys from "../keys.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/terrainTreader.docx";
import HCaptcha from '@hcaptcha/react-hcaptcha';

const backend = keys.backend;

const TalentShowForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("talentShowForm")) || {
    P1_name: "",
    P1_rollno: "",
    P1_email: "",
    P1_whatsapp: "",
    Performance: "",
    Duration: "",
    P2_name: "",
    P2_rollno: "",
    P2_whatsapp: "",
    P3_name: "",
    P3_rollno: "",
    P3_whatsapp: "",
    P4_name: "",
    P4_rollno: "",
    P4_whatsapp: "",
  };
  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);
  const [isSubmitted, setValue] = useState(false);

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("talentShowForm", JSON.stringify(update));
  };

  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);

  const onLoad = () => {
    captchaRef.current.execute();
  };

  useEffect(() => {
    if (token) {
      console.log('Captcha verified');
    }
  }, [token]);

  const submit = async () => {
    // if (!token) {
    //   alert("Human verification is mandatory");
    //   return;
    // }
    setSubmit(true);
    let condition =
      form.P1_name !== "" &&
      form.P1_rollno !== "" &&
      form.P1_email !== "" &&
      form.P1_whatsapp !== "" &&
      form.Performance !== "" &&
      form.Duration !== "" &&
      form.P2_name !== "" &&
      form.P2_rollno !== "" &&
      form.P2_whatsapp !== "" &&
      form.P3_name !== "" &&
      form.P3_rollno !== "" &&
      form.P3_whatsapp !== "" &&
      form.P4_name !== "" &&
      form.P4_rollno !== "" &&
      form.P4_whatsapp !== "" &&
      form.P1_whatsapp.length === 10 &&
      form.P2_whatsapp.length === 10 &&
      form.P3_whatsapp.length === 10 &&
      form.P4_whatsapp.length === 10;

    if (true) {
      try {
        const res = await axios.post('/server/register?event=talentShow', form, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setValue(true);
        alert(res.data.message);
        window.location.reload();
      } catch (err) {
        alert(err.response.data.message);
      }
    } else {
      alert("Please fill all the necessary details correctly");
    }
    setSubmit(false);
  };

  const onVerifyCaptcha = () => {
  };

  return (
    <div
      className="metaportal_fn_mintpage"
      id="registration"
      style={{ position: "relative", zIndex: "0", paddingTop: "5rem" }}
    >
      <Title color={"TALENT"} noncolor={"SHOW"} />
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
                    name="P1_name"
                    id="P1name"
                    type="text"
                    placeholder="Participant 1 Name"
                    onChange={(e) => handle(e)}
                    value={form.P1_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="P1rollno"
                    type="text"
                    name="P1_rollno"
                    placeholder="Participant 1 Roll Number"
                    onChange={(e) => handle(e)}
                    value={form.P1_rollno}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="P1email"
                    type="text"
                    name="P1_email"
                    placeholder="Participant 1 Email"
                    onChange={(e) => handle(e)}
                    value={form.P1_email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="P1whatsapp"
                    type="text"
                    name="P1_whatsapp"
                    placeholder="Participant 1 Whatsapp Number"
                    onChange={(e) => handle(e)}
                    value={form.P1_whatsapp}
                  />
                  <span style={{ fontSize: "0.7rem" }}>
                    * Don't include +91 or 0.
                  </span>
                  {form.P1_whatsapp !== "" &&
                    form.P1_whatsapp?.length !== 10 && (
                      <p style={{ color: "red" }}>
                        Enter a number of 10 digits only.
                      </p>
                    )}
                </li>
                <li data-aos="fade-down">
                  <input
                    id="performance"
                    type="text"
                    name="Performance"
                    placeholder="What are you going to perform?"
                    onChange={(e) => handle(e)}
                    value={form.Performance}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="duration"
                    type="text"
                    name="Duration"
                    placeholder="Duration Of Performance"
                    onChange={(e) => handle(e)}
                    value={form.Duration}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_name"
                    id="P2name"
                    type="text"
                    placeholder="Participant 2 Name"
                    onChange={(e) => handle(e)}
                    value={form.P2_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="P2rollno"
                    type="text"
                    name="P2_rollno"
                    placeholder="Participant 2 Roll Number"
                    onChange={(e) => handle(e)}
                    value={form.P2_rollno}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="P2whatsapp"
                    type="text"
                    name="P2_whatsapp"
                    placeholder="Participant 2 Whatsapp Number"
                    onChange={(e) => handle(e)}
                    value={form.P2_whatsapp}
                  />
                  <span style={{ fontSize: "0.7rem" }}>
                    * Don't include +91 or 0.
                  </span>
                  {form.P2_whatsapp !== "" &&
                    form.P2_whatsapp?.length !== 10 && (
                      <p style={{ color: "red" }}>
                        Enter a number of 10 digits only.
                      </p>
                    )}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_name"
                    id="P3name"
                    type="text"
                    placeholder="Participant 3 Name"
                    onChange={(e) => handle(e)}
                    value={form.P3_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="P3rollno"
                    type="text"
                    name="P3_rollno"
                    placeholder="Participant 3 Roll Number"
                    onChange={(e) => handle(e)}
                    value={form.P3_rollno}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="P3whatsapp"
                    type="text"
                    name="P3_whatsapp"
                    placeholder="Participant 3 Whatsapp Number"
                    onChange={(e) => handle(e)}
                    value={form.P3_whatsapp}
                  />
                  <span style={{ fontSize: "0.7rem" }}>
                    * Don't include +91 or 0.
                  </span>
                  {form.P3_whatsapp !== "" &&
                    form.P3_whatsapp?.length !== 10 && (
                      <p style={{ color: "red" }}>
                        Enter a number of 10 digits only.
                      </p>
                    )}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P4_name"
                    id="P4name"
                    type="text"
                    placeholder="Participant 4 Name"
                    onChange={(e) => handle(e)}
                    value={form.P4_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="P4rollno"
                    type="text"
                    name="P4_rollno"
                    placeholder="Participant 4 Roll Number"
                    onChange={(e) => handle(e)}
                    value={form.P4_rollno}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="P4whatsapp"
                    type="text"
                    name="P4_whatsapp"
                    placeholder="Participant 4 Whatsapp Number"
                    onChange={(e) => handle(e)}
                    value={form.P4_whatsapp}
                  />
                  <span style={{ fontSize: "0.7rem" }}>
                    * Don't include +91 or 0.
                  </span>
                  {form.P4_whatsapp !== "" &&
                    form.P4_whatsapp?.length !== 10 && (
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
            <div className="mint_desc" style={{ paddingTop: "2rem" }}>
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
                  {/* <div>
                    <div>
                      <a style={{ textDecoration: "none"}} href="https://chat.whatsapp.com/LhuUE4GCgnhGy5nYrJ9S3q">
                        <span className="metaportal_fn_button_4">Join WA Group</span>
                      </a>
                    </div>
                  </div> */}
                )}
              </div>
              <p>* Read the Rules & Regulations before Submitting</p>
            </div>
          </div>
          <div className="mint_right">
            <div className="mright">
              <div data-aos="fade-down" className="mint_time">
                <h4>Talent Show</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  1. Every performance should satisfy the time limit criteria.<br/>
                  TIME LIMIT:<br/>  Stand up: 5-7 mins<br/>
                  Others: 3 mins
                </p>
                <p>
                  2. Avoid using foul language 
                </p>
                <p>
                  3. Adhere to the formalities of the event 
                </p>
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

export default TalentShowForm;