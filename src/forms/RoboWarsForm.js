import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import urls from "../keys.json";
import AOS from "aos";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import keys from "../keys.json";
import "aos/dist/aos.css";
import Title from "../components/Title";

const backend = urls.backend;

const RoboWarsForm = () => {
  useEffect(() => {
    AOS.init();
    console.log(cachedForm);
  }, []);

  const [memberCount, setMemberCount] = useState(0);

  const cachedForm = JSON.parse(localStorage.getItem("vigyaanForm")) || {
    Team_name: "",
    Leader_name: "",
    Leader_gender: "",
    Leader_email: "",
    Leader_whatsapp: "",
    Leader_college: "",
    Leader_program_of_study: "",
    Leader_branch: "",
    Leader_sem: "",
    Member2_name: "",
    Member2_email: "",
    Member2_branch: "",
    Member2_sem: "",
    Member3_name: "",
    Member3_email: "",
    Member3_branch: "",
    Member3_sem: "",
    Member4_name: "",
    Member4_email: "",
    Member4_branch: "",
    Member4_sem: "",
    Member5_name: "",
    Member5_email: "",
    Member5_branch: "",
    Member5_sem: "",
  };

  useEffect(() => {
    const tmp = JSON.parse(localStorage.getItem("memberCount")) || 0;
    setMemberCount(tmp);
  });

  const [form, set] = useState(cachedForm);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);
  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);

  const onLoad = () => {
    // this reaches out to the hCaptcha JS API and runs the
    // execute function on it. you can use other functions as
    // documented here:
    // https://docs.hcaptcha.com/configuration#jsapi
    captchaRef.current.execute();
  };

  const handleAddMember = () => {
    if (memberCount < 4) {
      setMemberCount(memberCount + 1);
      localStorage.setItem("memberCount", memberCount + 1);
    }
  };

  const handleRemoveMember = () => {
    if (memberCount > 0) {
      form[`Member${memberCount + 1}_name`] = "";
      form[`Member${memberCount + 1}_email`] = "";
      form[`Member${memberCount + 1}_branch`] = "";
      form[`Member${memberCount + 1}_sem`] = "";

      setMemberCount(memberCount - 1);
      localStorage.setItem("memberCount", memberCount - 1);
      localStorage.setItem("roboWarsForm", JSON.stringify(form));
    }
  };

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;
    set(update);
    localStorage.setItem("roboWarsForm", JSON.stringify(update));
  };

  const submit = async () => {
    if (!token) {
      alert("Human verification is mandatory");
      return;
    }

    setSubmit(true);
    if (memberCount < 2) {
      alert("Minimum Team Size: 3");
    } else {
      let condition1 =
        form.Team_name !== "" &&
        form.Leader_name !== "" &&
        form.Leader_email !== "" &&
        form.Leader_gender !== "" &&
        form.Leader_college !== "" &&
        form.Leader_whatsapp !== "" &&
        form.Leader_branch !== "" &&
        form.Leader_sem !== "" &&
        form.Leader_program_of_study !== "" &&
        form.Member2_name !== "" &&
        form.Member2_email !== "" &&
        form.Member2_sem !== "" &&
        form.Member2_branch !== "" &&
        form.Member3_name !== "" &&
        form.Member3_email !== "" &&
        form.Member3_sem !== "" &&
        form.Member3_branch !== ""

      let condition2 = true;
      if (memberCount > 2) {
        condition2 =
        form.Member4_name !== "" &&
        form.Member4_email !== "" &&
        form.Member4_sem !== "" &&
        form.Member4_branch !== ""
      }

      let condition3 = true;
      if (memberCount > 3) {
        condition3 =
        form.Member4_name !== "" &&
        form.Member4_email !== "" &&
        form.Member4_sem !== "" &&
        form.Member4_branch !== ""
      }

      if (condition1 && condition2 && condition3) {
        const formData = { ...form };
        if (formData.isNITRR === "Yes") {
          delete formData.College_name;
        }
        try {
          const res = await axios.post(`/server/register?event=RoboWars`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
    
        } catch (err) {
          console.error(err);
          alert(err.response.data.message);
        }
      } else {
        alert("Please fill all the necessary details correctly!!");
      }
    }
    setSubmit(false);
  }; 

  {
    /* Member Details */
  }
  const renderMemberFields = () => {
    const members = [];
    for (let i = 1; i <= memberCount; i++) {
      members.push(
        <div style={{width: "100%"}} key={i}>
          <li>
            <input
              name={`Member${i + 1}_name`}
              className="memberName"
              type="text"
              placeholder={`Member ${i+1} Name`}
              onChange={(e) => handle(e)}
              value={form[`Member${i + 1}_name`]}
            />
          </li>
          <li>
            <input
              name={`Member${i + 1}_email`}
              className="memberName"
              type="text"
              placeholder={`Member ${i+1} Email ID`}
              onChange={(e) => handle(e)}
              value={form[`Member${i + 1}_email`]}
            />
            
          </li>
          <li>
            <input
              name={`Member${i + 1}_branch`}
              className="memberName"
              type="text"
              placeholder={`Member ${i+1}'s Branch`}
              onChange={(e) => handle(e)}
              value={form[`Member${i + 1}_branch`]}
            />
          </li>

          <li>
            <input
              name={`Member${i + 1}_sem`}
              className="memberName"
              type="text"
              placeholder={`Member ${i+1}'s Semester`}
              onChange={(e) => handle(e)}
              value={form[`Member${i + 1}_sem`]}
            />
          </li>
        </div>
      );
    }
    return members;
  };

  return (
    <div
      className="metaportal_fn_mintpage"
      id="registration"
      style={{ position: "relative", zIndex: "0", paddingTop: "5rem" }}
    >
      <Title color={"ROBO WARS"} noncolor={""} />
      <div
        className="container small centered-container"
        style={{ paddingTop: "3rem" }}
      >
        <div className="metaportal_fn_mintbox" style={{ maxWidth: "100%" }}>
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
                
              </ul>
              {/* Team Leader Details */}
              
              <ul>
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
                    name="Leader_gender"
                    id="leaderBranch"
                    type="text"
                    placeholder="Leader Gender"
                    onChange={(e) => handle(e)}
                    value={form.Leader_gender}
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
                  <span style={{ fontSize: "0.7rem",color:"white"}}>
                    * Don't include +91 or 0.
                  </span>
                  {
                    form.Leader_whatsapp.length > 10 && (
                      <p style={{ color: "red" }}>
                        Enter a number of 10 digits only.
                      </p>
                    )}
                </li>
                <li data-aos="fade-down">
                  <input
                    id="leaderEmail"
                    type="text"
                    name="Leader_email"
                    placeholder="Leader Email ID"
                    onChange={(e) => handle(e)}
                    value={form.Leader_email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Leader_college"
                    id="leaderBranch"
                    type="text"
                    placeholder="Leader College"
                    onChange={(e) => handle(e)}
                    value={form.Leader_college}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Leader_program_of_study"
                    id="leaderBranch"
                    type="text"
                    placeholder="Program of Study"
                    onChange={(e) => handle(e)}
                    value={form.Leader_program_of_study}
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
                    name="Leader_sem"
                    id="leaderYear"
                    type="text"
                    placeholder="Leader Semester"
                    onChange={(e) => handle(e)}
                    value={form.Leader_sem}
                  />
                </li>
                
              </ul>
              
              <ul>
                {/* Member's Field*/}
                {renderMemberFields()}
                <li
                  data-aos="fade-down"
                  style={{
                    padding: "0",
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "0",
                  }}
                >
                  {memberCount < 6 && (
                    <li className="add-remove" onClick={handleAddMember}>
                      + Add Member
                    </li>
                  )}
                  {memberCount > 0 && (
                    <li className="add-remove" onClick={handleRemoveMember}>
                      - Remove
                    </li>
                  )}
                </li>
              </ul>
              
            </div>
            <div className="hcap" style={{ paddingTop: "3rem" }}>
              <HCaptcha
                sitekey={keys.hcaptcha}
                onClick={onLoad}
                onVerify={setToken}
                ref={captchaRef}
                className="custom-captcha"
              />
            </div>
            <div className="mint_desc" style={{ paddingTop: "3rem" }}>
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
                <h4>Robo Wars</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>A fun and exhilarating event, where participants will bring their own small robots for an epic death match.</p>
              </div>
              <div style={{paddingTop: "2rem"}} data-aos="fade-down" className="mint_time">
                <h4>Robo Wars</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>1. Each team will consist of 3-5 members each.</p>
                <p>
                  2. Specifications need to be decided, which the teams should follow.
                </p>
                <p>
                  3. An elimination setup will be made where teams will proceed to the next round after defeating their current opponent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoboWarsForm;
