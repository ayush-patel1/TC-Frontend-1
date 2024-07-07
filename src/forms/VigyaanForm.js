import axios from "axios";
import { React, useEffect, useState } from "react";
import { connect } from "react-redux";
import urls from "../keys.json";
import AOS from "aos";
import "aos/dist/aos.css";
import VigyaanTemplate from "../assets/Vigyaan_Idea_Submission_Template/VigyaanTemplate.pdf";

const backend = urls.backend;

const VigyaanForm = () => {
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
    alert('Registrations are closed.');
    return;
    setSubmit(true);
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
        form.Member2_whatsapp.length === 10

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
            {form[`Member${i + 1}_whatsapp`] !== "" && form[`Member${i + 1}_whatsapp`].length !== 10 && (
              <p style={{ color: "red" }}>Enter a number of 10 digits only.</p>
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
      style={{ position: "relative", zIndex: "0" }}
    >
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
                  {form.Leader_whatsapp !== "" && form.Leader_whatsapp.length !== 10 && (
                    <p style={{ color: "red" }}>Enter a number of 10 digits only.</p>
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
                <h4>Vigyaan</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>1. A team can have 2 to 3 members(including team leader).</p>
                <p>
                2. Each team must designate a team leader and select a team name.
(up to 20 characters, for e.g., Tech_Titans)
                </p>
                <p>
                3. A Team ID will be assigned to the team upon registration, which will be used for future reference.
(for e.g., ECE_A1)
                </p>
              </div>
              <div
                data-aos="fade-down"
                style={{ paddingTop: "2rem" }}
                className="mint_time"
              >
                <h4>VIGYAAN</h4>
                <h3 className="metaportal_fn_countdown">Guidelines</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
              <p>1. This competition is open for all.</p>
<p>2. A team is free to select any one Problem Statement regardless of their engineering department.</p>
<p>3. Teams can include members from various academic disciplines or academic years, provided all participants are from the same institution.</p>
<p>4. Each participant can be a part of only one team.</p>
<p>5. Multiple entries are not permitted.</p>
<p>6. On-campus accommodation is available during the two-day Vigyaan exhibition for team members from institutes outside Chhattisgarh. Additional stay must be arranged and paid for by the teams. Accommodation is not provided for accompanying individuals, such as teachers or guardians.</p>
<p>7. Plagiarism in any form will lead to immediate disqualification.</p>
<p>8. Each round will be an eliminatory round.</p>

              </div>
              <div
                data-aos="fade-down"
                style={{ paddingTop: "2rem" }}
                className="mint_time"
              >
                <h4>VIGYAAN</h4>
                <h3 className="metaportal_fn_countdown">ROUNDS</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                  <div style={{ color: "white" }}>Round 1: Idea Submission Round</div> 
                  <p>1. Create a concise and effective presentation for the idea submission round.</p>
<p>2. Teams must strictly adhere to the provided template without making any modifications. Refer to the template for additional details.</p>
<p>3. File type: .ppt, .pptx or PDF</p>
<p>4. Document Name: TeamName_ProblemNum (e.g., TeamName_ECE01)</p>

                </p>
                <p>
                  <div style={{ color: "white" }}>Round 2: Presentation Round</div>
                  <p>1. Selected teams are required to present their project in front of concerned faculty in-charge.</p>
<p>2. This round is mandatorily offline for NIT Raipur students. Non-NIT Raipur students have the option
to participate either online or offline.</p>
<p>3. You will have 10-15 minutes to present, followed by a Q&A session with the judges.</p>
<p>4. File type: .ppt, .pptx or PDF</p>
<p>5. Document Name: TeamName_ProblemNum (e.g., TeamName_ECE01).</p>
                </p>
                <p>
                  <div style={{ color: "white" }}>Round 3: Prototype Round</div>
                  <p>1. Shortlisted teams will need to develop a functional prototype based on their proposed approach,
ensuring that the prototype demonstrates core features and functionalities effectively.</p>
                  <p>2. Qualified teams will present their project in VIGYAAN Exhibition.</p>
                </p>
              </div>
            </div>
            <div
                data-aos="fade-down"
                style={{ paddingTop: "2rem" }}
                className="mint_time"
              >
                <h4>VIGYAAN</h4>
                <h3 className="metaportal_fn_countdown">Certificates & Rewards</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                ▪ Top teams from each branch will receive goodies.

                </p>
                <p>
                ▪ A digital Certificate of Participation will be awarded to teams that qualified the presentation round but narrowly missed clearing the prototype round subject to the approval of concerned faculty incharges.
                </p>
                <p>
                ▪ A digital Certificate of Appreciation will be awarded to those teams who presented their project in
the VIGYAAN exhibition.
                </p>
              </div>
              <a style={{ textDecoration: "none" }} href={VigyaanTemplate}>
                <span className="metaportal_fn_button_4">Vigyaan Template</span>
              </a>
          </div>
        </div>

        <div className="metaportal_fn_nft_cats">
          <ul data-aos="fade-down">
            <li>
              <div className="item">
                <h4 className="parent_category">27th & 28th September</h4>
                <h3 className="child_category" title="Black Yukata">
                Presentation Round
                </h3>
              </div>
            </li>
            <li>
              <div className="item">
                <h4 className="parent_category">25-26 October</h4>
                <h3 className="child_category" title="Daydreaming">
                Prototype Round
                </h3>
              </div>
            </li>
            <li>
              <div className="item">
                <h4 className="parent_category">28-29 October</h4>
                <h3 className="child_category" title="Fireflies, Smoke">
                Exhibition
                </h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VigyaanForm;
