import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import keys from "../keys.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/terrainTreader.docx";
import HCaptcha from '@hcaptcha/react-hcaptcha';
import styled from 'styled-components';

const backend = keys.backend;



const AddButton = styled.button`
  background-color: green;
  color: white;
  padding: 5px 10px;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
  margin-bottom: 10px;


  &:hover {
    background-color: #45a049;
  }
`;

const RemoveButton = styled.button`
  background-color:transparent;
  color: red;
  padding: 5px 15px;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
  margin-bottom: 10px;


  &:hover {
    background-color: #e53935;
    color:white;
  }
`;

const TalentShowForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // Initial empty member structure
  const initialForm = {
    teamName: "",
    members: [
      {
        name: "",
        branch: "",
        year: "",
        talent: "",
        whatsapp: "",
      },
    ],
  };

  const [form, setForm] = useState(initialForm);
  const [token, setToken] = useState(null);
  const [isSubmitting, setSubmit] = useState(false);
  const [isSubmitted, setValue] = useState(false);

  const handleMemberChange = (index, e) => {
    const updatedMembers = form.members.map((member, i) =>
      i === index ? { ...member, [e.target.name]: e.target.value } : member
    );
    setForm({ ...form, members: updatedMembers });
  };

  const handleAddMember = () => {
    setForm({
      ...form,
      members: [
        ...form.members,
        {
          name: "",
          branch: "",
          year: "",
          talent: "",
          whatsapp: "",
        },
      ],
    });
  };

  const handleRemoveMember = (index) => {
    const updatedMembers = form.members.filter((_, i) => i !== index);
    setForm({ ...form, members: updatedMembers });
  };

  const submit = async () => {
    if (!token) {
      alert("Human verification is mandatory");
      return;
    }

    setSubmit(true);

    const valid = form.members.every(
      (member) =>
        member.name &&
        member.branch &&
        member.year &&
        member.talent &&
        member.whatsapp.length === 10
    );

    if (valid) {
      try {
        const res = await axios.post("/server/register?event=talentShow", form, {
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
      alert("Please fill all the necessary details correctly.");
    }
    setSubmit(false);
  };

  return (
    <div className="metaportal_fn_mintpage" id="registration" style={{ position: "relative", zIndex: "0", paddingTop: "5rem" }}>
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
                    name="teamName"
                    type="text"
                    placeholder="Team Name (if group)"
                    value={form.teamName}
                    onChange={(e) => setForm({ ...form, teamName: e.target.value })}
                  />
                </li>
                {form.members.map((member, index) => (
                  <div key={index}>
                    <li data-aos="fade-down">
                      <input
                        name="name"
                        type="text"
                        placeholder={`Participant ${index + 1} Name`}
                        value={member.name}
                        onChange={(e) => handleMemberChange(index, e)}
                      />
                    </li>
                    <li data-aos="fade-down">
                      <input
                        name="branch"
                        type="text"
                        placeholder={`Participant ${index + 1} Branch`}
                        value={member.branch}
                        onChange={(e) => handleMemberChange(index, e)}
                      />
                    </li>
                    <li data-aos="fade-down">
                      <input
                        name="year"
                        type="text"
                        placeholder={`Participant ${index + 1} Year`}
                        value={member.year}
                        onChange={(e) => handleMemberChange(index, e)}
                      />
                    </li>
                    <li data-aos="fade-down">
                      <input
                        name="talent"
                        type="text"
                        placeholder={`Participant ${index + 1} Talent`}
                        value={member.talent}
                        onChange={(e) => handleMemberChange(index, e)}
                      />
                    </li>
                    <li data-aos="fade-down">
                      <input
                        name="whatsapp"
                        type="text"
                        placeholder={`Participant ${index + 1} Whatsapp Number`}
                        value={member.whatsapp}
                        onChange={(e) => handleMemberChange(index, e)}
                      />
                      <span style={{ fontSize: "0.7rem" }}>
                        * Don't include +91 or 0.
                      </span>
                      {member.whatsapp.length !== 10 && member.whatsapp && (
                        <p style={{ color: "red" }}>
                          Enter a number of 10 digits only.
                        </p>
                      )}
                    </li>
                    {index > 0 && (
                       <RemoveButton onClick={() => handleRemoveMember(index)}>
                      - Remove Member
                     </RemoveButton>
                    )}
                  </div>
                ))}
                <AddButton onClick={handleAddMember}>+ Add Members</AddButton>
              </ul>
            </div>

            <HCaptcha sitekey={keys.hcaptcha} onVerify={setToken} />
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
              <p>* Read the Rules & Regulations before Submitting</p>
            </div>
          </div>

          <div className="mint_right">
            <div className="mright">
              <div data-aos="fade-down" className="mint_time">
                <h4>Talent Show</h4>
                <h3 className="metaportal_fn_countdown">Rules and Regulations</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p> No rules. People will be allowed to do the registration on spot and showcase their talent.</p>
              </div>
              {/* <a style={{ textDecoration: "none" }} href={docs}> */}
                {/* <span className="metaportal_fn_button_4">Download PDF</span> */}
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentShowForm;
