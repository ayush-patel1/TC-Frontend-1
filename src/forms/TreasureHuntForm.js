import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import keys from "../keys.json";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const TreasureHuntForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("treasureHuntForm")) || {
    Team_name: "",
    Leader_name: "",
    Leader_whatsapp: "",
    Leader_branch: "",
    Leader_sem: "",
    Leader_gender: "",
    Leader_Program_of_Study: "",
    P2_name: "",
    P2_sem: "",
    P2_branch: "",
    P3_name: "",
    P3_sem: "",
    P3_branch: "",
    P4_name: "",
    P4_sem: "",
    P4_branch: "",
    P5_name: "",
    P5_sem: "",
    P5_branch: "",
  };

  const [form, set] = useState(cachedForm);
  const [isSubmitting, setSubmit] = useState(false);
  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);

  const handle = (e) => {
    const update = { ...form, [e.target.name]: e.target.value };
    set(update);
    localStorage.setItem("treasureHuntForm", JSON.stringify(update));
  };

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
    console.log(form);

    const isFormValid =
      Object.values(form).every((value) => value.trim() !== "") &&
      form.Leader_whatsapp.length === 10;

    if (isFormValid) {
      try {
        const res = await axios.post(
          `/server/register?event=TreasureHunt`,
          form,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        alert(res.data.message);
      } catch (err) {
        console.error(err);
        alert(err.response?.data?.message || "Error submitting the form.");
      }
    } else {
      alert("Please fill all the necessary details correctly.");
    }
    setSubmit(false);
  };

  return (
    <div
      className="metaportal_fn_mintpage"
      id="registration"
      style={{ position: "relative", zIndex: "0", paddingTop: "5rem" }}
    >
      <Title color={"Treasure"} noncolor={"Hunt"} />
      <div className="container small" style={{ paddingTop: "3rem" }}>
        <div className="metaportal_fn_mintbox">
          <div className="mint_left">
            <div className="mint_title">
              <span>REGISTER NOW</span>
            </div>
            <div className="mint_list">
              <ul>
                {Object.keys(form).map((key, index) => (
                  <li key={index} data-aos="fade-down">
                    <input
                      name={key}
                      id={key}
                      type="text"
                      placeholder={key.replace(/_/g, " ")}
                      onChange={handle}
                      value={form[key]}
                    />
                  </li>
                ))}
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
                  className="metaportal_fn_button"
                  style={{ cursor: "pointer" }}
                  onClick={submit}
                >
                  Submit
                </div>
              ) : (
                <div className="metaportal_fn_button" style={{ opacity: 0.5 }}>
                  Submitting...
                </div>
              )}
            </div>
          </div>
          <div className="mint_right">
            <div className="mright">
              <div data-aos="fade-down" className="mint_time">
                <h4></h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>• An interesting on-campus murder story can be created.</p>
                <p>• Clues are left behind all around the campus.</p>
                <p>• Some volunteers and team members can act as witnesses.</p>
                <p>• The one who finds out the real murderer first wins.</p>
                <p>• Multiple participating teams (5-6 teams).</p>
                <p>
                  • Clues can be left behind all around the campus (left garden,
                  central garden, parking area, in Mandir area, etc.).
                </p>
                <p>
                  • A quiz round first for the selection of participating teams.
                </p>
                <p>• Online registrations.</p>
                <p>
                  • This year we can conduct this on both days if it attracts a
                  great audience on the first day
                </p>
              </div>

              {/* <a style={{ textDecoration: "none" }} href={docs}>
                <span className="metaportal_fn_button_4">Download PDF</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreasureHuntForm;
