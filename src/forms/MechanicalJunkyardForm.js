import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/mechanicalJunkyard.docx";
import keys from "../keys.json";
import HCaptcha from "@hcaptcha/react-hcaptcha";


// const backend = keys.backend;

const MechanicalJunkyardForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("mechanicalJunkyardForm")) || {
    Team_name: "",
    Leader_name: "",
    Leader_whatsapp: "",
    Leader_semester: "",
    Leader_branch: "",
    Leader_Email: "",
    P2_name: "",
    P2_number: "",
    P2_branch: "",
    P2_Email: "",
    P2_semester:"",
    P3_name: "",
    P3_number: "",
    P3_branch: "",
    P3_Email: "",
    P3_semester:"",
    P4_name: "",
    P4_number: "",
    P4_branch: "",
    P4_Email: "",
    P4_semester:"",
  };
  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("mechanicalJunkyardForm", JSON.stringify(update));
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
    console.log(form);
    let condition1 =
      form.Team_name !== "" &&
      form.Leader_name !== "" &&
      form.Leader_whatsapp !== "" &&
      form.Leader_college !== "" &&
      form.Leader_branch !== "" &&
      form.Leader_Email !== "" &&
      form.P2_name !== "" &&
      form.P2_number !== "" &&
      form.P2_branch !== "" &&
      form.P2_Email !== "" &&
      form.P2_semeseter!==""&&
      form.P3_name !== "" &&
      form.P3_number !== "" &&
      form.P3_branch !== "" &&
      form.P3_Email!== "" &&
      form.P3_semeseter!==""&&
      form.P4_name !== "" &&
      form.P4_number !== "" &&
      form.P4_branch !== "" &&
      form.P4_Email !== "" &&
      form.P4_semeseter!==""&&
      form.Leader_whatsapp.length === 10 &&
      form.P2_number.length === 10 &&
      form.P3_number.length === 10 &&
      form.P4_number.length === 10 ;

    let condition2 = false;
    if (form.P2_id === form.P2_name && form.P2_name === form.P2_number && form.P2_id === "") {
      condition2 = true;
    }
    else if (
      form.P2_id !== "" &&
      form.P2_name !== "" &&
      form.P2_number !== "" &&
      form.P2_number.length === 10
    ) {
      condition2 = true;
    }
    if (condition1) {
      try {
        const res = await axios.post(
          `/server/register?event=MechanicalJunkyard`,
          form,
          {
            headers: {
              "Content-Type": "multipart/form-data",
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

  return (
    <div
      className="metaportal_fn_mintpage"
      id="registration"
      style={{ position: "relative", zIndex: "0", paddingTop: "5rem" }}
    >
      <Title color={"MECHANICAL"} noncolor={"JUNKYARD"} />
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
                    name="Leader_semester"
                    id="leaderBranch"
                    type="text"
                    placeholder="Leader Semester"
                    onChange={(e) => handle(e)}
                    value={form.Leader_semester}
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
                    name="Leader_Email"
                    id="leaderEmail"
                    type="text"
                    placeholder="Leader Email"
                    onChange={(e) => handle(e)}
                    value={form.Leader_Email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_name"
                    id="P2Name"
                    type="text"
                    placeholder="Member 2 Name "
                    onChange={(e) => handle(e)}
                    value={form.P2_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_number"
                    id="P2Number"
                    type="text"
                    placeholder="Member 2 Mobile Number"
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
                <li data-aos="fade-down">
                  <input
                    name="P2_semester"
                    id="P2Branch"
                    type="text"
                    placeholder="Member 2 Semester"
                    onChange={(e) => handle(e)}
                    value={form.P2_semester}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_branch"
                    id="P2Name"
                    type="text"
                    placeholder="Member 2 Branch"
                    onChange={(e) => handle(e)}
                    value={form.P2_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_Email"
                    id="P2Name"
                    type="text"
                    placeholder="Member 2 Email."
                    onChange={(e) => handle(e)}
                    value={form.P2_Email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_name"
                    id="P3Name"
                    type="text"
                    placeholder="Member 3 Name "
                    onChange={(e) => handle(e)}
                    value={form.P3_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_number"
                    id="P3Number"
                    type="text"
                    placeholder="Member 3 Mobile Number"
                    onChange={(e) => handle(e)}
                    value={form.P3_number}
                  />
                  <span style={{ fontSize: "0.7rem" }}>
                    * Don't include +91 or 0.
                  </span>
                  {form.P3_number !== "" &&
                    form.P3_number.length !== 10 && (
                      <p style={{ color: "red" }}>
                        Enter a number of 10 digits only.
                      </p>
                    )}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_semester"
                    id="P3Branch"
                    type="text"
                    placeholder="Member 3 Semester"
                    onChange={(e) => handle(e)}
                    value={form.P3_semester}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_branch"
                    id="P3Name"
                    type="text"
                    placeholder="Member 3 Branch"
                    onChange={(e) => handle(e)}
                    value={form.P3_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_Email"
                    id="P3Name"
                    type="text"
                    placeholder="Member 3 Email."
                    onChange={(e) => handle(e)}
                    value={form.P3_Email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P4_name"
                    id="P4Name"
                    type="text"
                    placeholder="Member 4 Name"
                    onChange={(e) => handle(e)}
                    value={form.P4_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P4_number"
                    id="P4Number"
                    type="text"
                    placeholder="Member 4 Mobile Number"
                    onChange={(e) => handle(e)}
                    value={form.P4_number}
                  />
                  <span style={{ fontSize: "0.7rem" }}>
                    * Don't include +91 or 0.
                  </span>
                  {form.P4_number !== "" &&
                    form.P4_number.length !== 10 && (
                      <p style={{ color: "red" }}>
                        Enter a number of 10 digits only.
                      </p>
                    )}
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P4_semester"
                    id="Member4Branch"
                    type="text"
                    placeholder="Member 4 Semester"
                    onChange={(e) => handle(e)}
                    value={form.P4_semester}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P4_branch"
                    id="P4Name"
                    type="text"
                    placeholder="Member 4 branch"
                    onChange={(e) => handle(e)}
                    value={form.P4_branch}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P4_Email"
                    id="P2Name"
                    type="text"
                    placeholder="Member 4 Email."
                    onChange={(e) => handle(e)}
                    value={form.P4_Email}
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
                <h4>Mechanical Junkyard</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
              <p>1. One round event ,2-4 members in each group.</p>
                <p>2. Max 10 groups on a first come first serve basis.</p>
                <p>
                  3. The best and most creative model in given time will be announced winner.
                </p>
                <p>
                  4. Participants will be provided some mechanical junk and waste, cardboard and necessary items.
                </p>
                <p>
                  5. Participants have to bring their own glue, scissors, sheets, any other stationary, if they find it useful.
                </p>
                <p>
                  6. Winner will be decided 
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

export default MechanicalJunkyardForm;
