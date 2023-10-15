import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import urls from "../urls.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/terrainTreader.docx";
import ReCAPTCHA from "react-google-recaptcha";

const backend = urls.backend;

const TerrainTreaderForm = () => {
  const recaptchaRef = useRef();
  useEffect(() => {
    AOS.init();
    console.log(cachedForm);
  }, []);
  const [memberCount, setMemberCount] = useState(0);

  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [memberPhoneNumberValidations, setMemberPhoneNumberValidations] =
    useState([true, true, true]);

  const cachedForm = JSON.parse(localStorage.getItem("vigyaanForm")) || {
    Team_name: "",
    Leader_name: "",
    Leader_email: "",
    Leader_whatsapp: "",
    College: "",
    Leader_branch: "",
    Leader_yog: "",
    Member2_name: "",
    Member2_email: "",
    Member2_yog: "",
    Member2_whatsapp: "",
    Member2_branch: "",
    Member3_name: "",
    Member3_email: "",
    Member3_yog: "",
    Member3_whatsapp: "",
    Member3_branch: "",
    Problem_code: "",
  };

  useEffect(() => {
    const tmp = JSON.parse(localStorage.getItem("memberCount")) || 0;
    setMemberCount(tmp);
  });

  const [form, set] = useState(cachedForm);

  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isSubmitting, setSubmit] = useState(false);

  const handleAddMember = () => {
    if (memberCount < 2) {
      setMemberCount(memberCount + 1);
      localStorage.setItem("memberCount", memberCount + 1);
    }
  };

  const handleRemoveMember = () => {
    if (memberCount > 0) {
      form[`Member${memberCount + 1}_name`] = "";
      form[`Member${memberCount + 1}_whatsapp`] = "";
      form[`Member${memberCount + 1}_email`] = "";
      form[`Member${memberCount + 1}_branch`] = "";
      form[`Member${memberCount + 1}_yog`] = "";

      setMemberCount(memberCount - 1);
      localStorage.setItem("memberCount", memberCount - 1);
      localStorage.setItem("vigyaanForm", JSON.stringify(form));
    }
  };

  const handle = (e) => {
    const update = { ...form };
    update[e.target.name] = e.target.value;

    // if (e.target.name === "Leader_whatsapp") {
    //   const phoneNumber = e.target.value;
    //   if (!/^\d{10}$/.test(phoneNumber)) {
    //     setPhoneNumberError("Enter a number of 10 digits only.");
    //   } else {
    //     setPhoneNumberError("");
    //   }
    // }

    // if (e.target.name.endsWith("whatsappno")) {
    //   const memberIndex = parseInt(e.target.name.match(/\d+/)[0]) - 1;
    //   const memberPhoneNumbers = [...memberPhoneNumberValidations];
    //   const memberPhoneNumber = e.target.value;

    //   memberPhoneNumbers[memberIndex] = /^\d{10}$/.test(memberPhoneNumber);
    //   setMemberPhoneNumberValidations(memberPhoneNumbers);
    // }

    set(update);
    localStorage.setItem("vigyaanForm", JSON.stringify(update));
  };

  const submit = async () => {
    const recaptchaValue = recaptchaRef.current.getValue();
    // Send the recaptchaValue along with the form data to your server for verification.
    setSubmit(true);
    console.log(form);
    if (memberCount < 1) {
      alert("Minimum Team Size: 2");
    } else if (memberPhoneNumberValidations.includes(false)) {
      alert("Please fill all phone numbers with 10 digits.");
    } else {
      let condition1 =
        form.Team_name !== "" &&
        form.Leader_name !== "" &&
        form.Leader_email !== "" &&
        form.Leader_whatsapp !== "" &&
        form.College !== "" &&
        form.Leader_yog !== "" &&
        form.Leader_branch !== "" &&
        form.Member2_name !== "" &&
        form.Member2_email !== "" &&
        form.Member2_yog !== "" &&
        form.Member2_whatsapp !== "" &&
        form.Member2_branch !== "" &&
        form.Problem_code !== "" &&
        form.file &&
        form.Member2_whatsapp.length === 10;

      let condition2 = true;
      if (memberCount === 2) {
        condition2 =
          form.Member3_email !== "" &&
          form.Member3_name !== "" &&
          form.Member3_whatsapp !== "" &&
          form.Member3_whatsapp.length === 10 &&
          form.Member3_yog !== "" &&
          form.Member3_branch !== "";
      }
      if (condition1 && condition2) {
        try {
          const res = await axios.post(`${backend}/vigyaanReg`, form, {
            headers: {
              "Content-Type": "multipart/form-data",
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
    }
    setSubmit(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newData = { ...form };
      newData["file"] = file;
      set(newData);
      setUploadedFileName(file.name);
    }
  };

  const renderMemberFields = () => {
    const members = [];
    for (let i = 1; i <= memberCount; i++) {
      members.push(
        <div key={i}>
          <li>
            <input
              name={`Member${i + 1}_name`}
              className="memberName"
              type="text"
              placeholder={`Member ${i} Name`}
              onChange={(e) => handle(e)}
              value={form[`Member${i + 1}_name`]}
            />
          </li>
          <li>
            <input
              name={`Member${i + 1}_whatsapp`}
              className="memberNumber"
              type="text"
              placeholder={`Member ${i} Whatsapp Number`}
              onChange={(e) => handle(e)}
              value={form[`Member${i + 1}_whatsapp`]}
            />
            <span style={{ fontSize: "0.7rem" }}>
              * Don't include +91 or 0.
            </span>
            {form[`Member${i + 1}_whatsapp`] !== "" &&
              form[`Member${i + 1}_whatsapp`].length !== 10 && (
                <p style={{ color: "red" }}>
                  Enter a number of 10 digits only.
                </p>
              )}
          </li>
          <li>
            <input
              name={`Member${i + 1}_email`}
              className="memberName"
              type="text"
              placeholder={`Member ${i} Email ID`}
              onChange={(e) => handle(e)}
              value={form[`Member${i + 1}_email`]}
            />
          </li>
          <li>
            <input
              name={`Member${i + 1}_branch`}
              className="memberName"
              type="text"
              placeholder={`Member ${i}'s Branch`}
              onChange={(e) => handle(e)}
              value={form[`Member${i + 1}_branch`]}
            />
          </li>
          <li>
            <input
              name={`Member${i + 1}_yog`}
              className="memberName"
              type="text"
              placeholder={`Member ${i}'s year of graduation`}
              onChange={(e) => handle(e)}
              value={form[`Member${i + 1}_yog`]}
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
      <Title color={"TERRAIN"} noncolor={"TREADER"} />
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
                    name="Problem_code"
                    placeholder="Problem Code"
                    onChange={(e) => handle(e)}
                    value={form.Problem_code}
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
                    id="leaderEmail"
                    type="text"
                    name="Leader_email"
                    placeholder="Your Leader Email ID"
                    onChange={(e) => handle(e)}
                    value={form.Leader_email}
                  />
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
                    id="leaderYog"
                    type="text"
                    placeholder="Leader's year of graduation"
                    onChange={(e) => handle(e)}
                    value={form.Leader_yog}
                  />
                </li>
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
                  {memberCount < 2 && (
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
              <input
                accept="application/pdf"
                style={{ display: "none" }}
                id="file-input"
                type="file"
                onChange={handleFileChange}
              />
              <label
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
                htmlFor="file-input"
              >
                <span className="metaportal_fn_button_2">
                  Upload Your Abstract
                </span>
                {uploadedFileName && (
                  <p style={{ color: "white", paddingTop: "1rem" }}>
                    Uploaded File: {uploadedFileName}
                  </p>
                )}
              </label>
            </div>
            <div className="mint_desc" style={{ paddingTop: "4rem" }}>
              <ReCAPTCHA
                sitekey="6LcIzaMoAAAAAHJK_7w8zc2WlllaZm4asH4POtWI"
                ref={recaptchaRef}
              />
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
                <h4>Terrain Treader</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  1. This is racing event so fastest and most balanced robot
                  will win.
                </p>
                <p>2. Robot should be as per the given specifications.</p>
                <p>
                  3. Each team can have maximum 3 members. (Students from
                  different branches can form a team)
                </p>
                <p>
                  4. The robot must not leave behind any of its parts during the
                  run; else it will result in deduction in points.
                </p>
                <p>
                  5. No any AC/DC power supply will be provided at the sight of
                  play.
                </p>
                <p>
                  6. Unethical behaviour could lead to disqualification.
                  Faculty-coordinators have all the rights to take final
                  decision for any matter during the event.
                </p>
                <p>7. Judge's decision will be considered final.</p>
                <p>8. Certificates will be given to all the participants.</p>
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

export default TerrainTreaderForm;
