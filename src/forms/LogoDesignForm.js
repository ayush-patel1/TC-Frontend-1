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

  const cachedForm = JSON.parse(localStorage.getItem("LogoDesignForm")) || {
    Name: "",
    Email: "",
    Whatsapp: "",
    College: "",
    Branch: "",
    Year: "",
    Roll_Number: "",
    Software_Used: "",
    Prior_Experience: ""
  };
  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);
  const [isSubmitted, setValue] = useState(false);

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("LogoDesignForm", JSON.stringify(update));
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
    if (!token) {
      alert("Human verification is mandatory");
      return;
    }
    setSubmit(true);
    let condition =
      form.Name !== "" &&
      form.Email !== "" &&
      form.Whatsapp !== "" &&
      form.Whatsapp.length == 10 &&
      form.College !== "" &&
      form.Branch !== "" &&
      form.Year !== "" &&
      form.Roll_Number !== "" &&
      form.Software_Used !== "" &&
      form.Prior_Experience !== "";

    if (condition) {
      try {
        const res = await axios.post(`/server/register?event=LogoDesign`, form, {
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
                    name="Year"
                    id="year"
                    type="text"
                    placeholder="Year"
                    onChange={(e) => handle(e)}
                    value={form.Year}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Roll_Number"
                    id="rollNumber"
                    type="text"
                    placeholder="Roll Number"
                    onChange={(e) => handle(e)}
                    value={form.Roll_Number}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Software_Used"
                    id="software"
                    type="text"
                    placeholder="Designing Software You are Most Used To"
                    onChange={(e) => handle(e)}
                    value={form.Software_Used}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Prior_Experience"
                    id="priorExperience"
                    type="text"
                    placeholder="Prior Experience in Designing (No of Months / Years)"
                    onChange={(e) => handle(e)}
                    value={form.Prior_Experience}
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
                    <a style={{ textDecoration: "none"}} href="https://chat.whatsapp.com/DNYul3AnvjYElO2dsH86o5">
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
                <h4>Logo Design</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  1. Candidates should bring their own laptops.
                </p>
                  <p>
                2. Participants will be given abstracts accordingly which a logo has to be designed. They'll be given ample amount of time for completion of their task at the venue itself.
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
