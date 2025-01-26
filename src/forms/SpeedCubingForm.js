import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import keys from "../keys.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/terrainTreader.docx";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const backend = keys.backend;

const SpeedCubingForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("speedCubingForm")) || {
    Name: "",
    Email: "",
    Phone: "",
    Branch: "",
    Gender: "",
    Program_of_study: "",
    Sem: "",
  };

  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);
  const [isSubmitted, setValue] = useState(false);

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("speedCubingForm", JSON.stringify(update));
  };

  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);

  const onLoad = () => {
    captchaRef.current.execute();
  };

  useEffect(() => {
    if (token) {
      console.log("Captcha verified");
    }
  }, [token]);

  const submit = async () => {
    if (!token) {
      alert("Human verification is mandatory");
      return;
    }
    setSubmit(true);
    let condition =
      form.Name !== "" &&
      form.Email !== "" &&
      form.Phone !== "" &&
      form.Gender !== "" &&
      form.Branch !== "" &&
      form.Sem !== "" &&
      form.Program_of_study !== "" &&
      form.Phone.length == 10;

    if (condition) {
      try {
        const res = await axios.post(
          `/server/register?event=SpeedCubing`,
          form,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
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
                    name="Name"
                    id="participantName"
                    type="text"
                    placeholder="Name Of Participant"
                    onChange={(e) => handle(e)}
                    value={form.Name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="emailId"
                    type="text"
                    name="Email"
                    placeholder="Email Id"
                    onChange={(e) => handle(e)}
                    value={form.Email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    id="whatsappNumber"
                    type="text"
                    name="Phone"
                    placeholder="Whatsapp Number"
                    onChange={(e) => handle(e)}
                    value={form.Phone}
                  />
                  <span style={{ fontSize: "0.7rem" ,color:"white" }}>
                    * Don't include +91 or 0.
                  </span>
                  { form.Phone.length > 10 && (
                    <p style={{ color: "red" }}>
                      Enter a number of 10 digits only.
                    </p>
                  )}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Gender"
                    id="gender"
                    type="text"
                    placeholder="Gender"
                    onChange={(e) => handle(e)}
                    value={form.Gender}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="program of study"
                    id="program_of_study"
                    type="text"
                    placeholder="Program of study"
                    onChange={(e) => handle(e)}
                    value={form.Program_of_study}
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
                    name="Sem"
                    id="sem"
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
            <div style={{ fontSize: "17px" }}>
              Don't forget to join the WhatsApp Group after registration!
            </div>
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
                  <div>
                    <div>
                      <a
                        style={{ textDecoration: "none" }}
                        href="https://chat.whatsapp.com/LhuUE4GCgnhGy5nYrJ9S3q"
                      >
                        <span className="metaportal_fn_button_4">
                          Join WA Group
                        </span>
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
                <p>• Individual participants.</p>
                <p>
                  • According to number of participants we’ll divide all
                  participants in group of 6 people.
                </p>
                <p>• For each group we’ll conduct the competition.</p>
                <p>• There will be a time-based winner for each group.</p>
                <p>
                  • In second match all the winners from first match will be
                  competing against each other.
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

export default SpeedCubingForm;
