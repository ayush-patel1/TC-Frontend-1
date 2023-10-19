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

const LogoDesignForm = () => {
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
      <Title color={"LOGO"} noncolor={"DESIGN"} />
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
                    name="software"
                    id="software"
                    type="text"
                    placeholder="Designing Software You are Most Used To"
                    onChange={(e) => handle(e)}
                    value={form.software}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="prior_experience"
                    id="priorExperience"
                    type="text"
                    placeholder="Prior Experience in Designing (No of Months / Years)"
                    onChange={(e) => handle(e)}
                    value={form.prior_experience}
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
                <h4>Logo Design</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  1. Candidates should bring their own laptops.
                </p>
                <p>2. Each participant have to submit only one logo design.</p>
                <p>3. Participants can use any of the following softwares: Adobe Illustrator CC, Adobe Photoshop, Canva, Figma, or Gimp.</p>
                <p>4. Submissions should be in digital format (JPEG or PNG) and high resolution (at least 300 dpi).</p>
                <p>5. The design should be scalable, ensuring it looks good both in small and large sizes.</p>
                <p>6. The deadline for submitting entries will be told during the event. Late submissions will not be accepted.</p>
                <p>7. The logo should not include any offensive or explicit material.</p>
                <p>8. Submissions should include a brief explanation of the logo's concept and design choices.</p>
                <p>9. Label your submission with your full name and the title of the logo.</p>
                <p>10. A panel of judges will evaluate the submissions based on creativity, originality, and overall design quality. The decision of the judges is final and binding.</p>
                <p>11. Participants should provide accurate contact information (name, email, phone) for notification purposes.</p>
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

export default LogoDesignForm;
