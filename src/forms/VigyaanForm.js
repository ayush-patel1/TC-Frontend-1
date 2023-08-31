import { React, useEffect, useState } from "react";
import { connect } from "react-redux";

const VigyaanForm = () => {
  const [memberCount, setMemberCount] = useState(0);

  const handleAddMember = () => {
    if (memberCount < 2) {
      setMemberCount(memberCount + 1);
    }
  };

  const handleRemoveMember = () => {
    if (memberCount > 0) {
      setMemberCount(memberCount - 1);
    }
  };

  const renderMemberFields = () => {
    const members = [];
    for (let i = 1; i <= memberCount; i++) {
      members.push(
        <div key={i}>
          <li>
            <input
              className="memberName"
              type="text"
              placeholder={`Member ${i} Name`}
            />
          </li>
          <li>
            <input
              className="memberNumber"
              type="text"
              placeholder={`Member ${i} Whatsapp Number`}
            />
          </li>
        </div>
      );
    }
    return members;
  };

  return (
    <div className="metaportal_fn_mintpage">
      <div className="container small" style={{paddingTop:"3rem"}}>
        <div className="metaportal_fn_mintbox">
          <div className="mint_left">
            <div className="mint_title">
              <span>REGISTER NOW</span>
            </div>
            <div className="mint_list">
              <ul>
                <li>
                  <input id="teamName" type="text" placeholder="Team Name" />
                </li>
                <li>
                  <input
                    id="leaderName"
                    type="text"
                    placeholder="Your Leader Name"
                  />
                </li>
                <li>
                  <input
                    id="leaderNumber"
                    type="text"
                    placeholder="Your Leader Whatsapp Number"
                  />
                </li>
                <li>
                  <input
                    id="leaderEmail"
                    type="text"
                    placeholder="Your Leader Email ID"
                  />
                </li>
                <li>
                  <input
                    id="teamSize"
                    type="text"
                    placeholder="Team Size (Max 3)"
                  />
                </li>
                <li>
                  <input
                    id="collegeName"
                    type="text"
                    placeholder="College Name"
                  />
                </li>
                {renderMemberFields()}
                <li
                  style={{
                    padding: "0",
                    display: "flex",
                    justifyContent: "space-between",
                    margin:"0"
                  }}
                >
                  {memberCount < 2 && (
                    <li className="add-remove" onClick={handleAddMember}>
                      {" "}
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
                // onChange={handleFileChange}
              />
              <label style={{display:"flex", justifyContent:"center", flexDirection:"column"}} htmlFor="file-input">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="metaportal_fn_button_2"
                  // onClick={submit}
                  // disabled={isSubmitting}
                >
                  <span>Upload Your Abstract</span>
                </a>
                {/* {uploadedFileName && (
                        <p style={{ color: "white", paddingTop: "1rem" }}>Uploaded File: {uploadedFileName}</p>
                      )} */}
              </label>
            </div>
            <div className="mint_desc" style={{paddingTop:"4rem",}}>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="metaportal_fn_button"
                // onClick={submit}
                // disabled={isSubmitting}
              >
                <span>Submit</span>
              </a>
              <p>* Read the Rules & Regulations before Submitting</p>
            </div>
          </div>
          <div className="mint_right">
            <div className="mright">
              <div className="mint_time">
                <h4>Vigyaan</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div className="mint_info">
                <p>1. A team can have 2 to 3 members.</p>
                <p>
                  2. Each and every team is expected to have a Name and a Team
                  Leader
                </p>
                <p>
                  3. A maximum of 30% plagiarism is permitted in the abstract
                  submission. If more, then the respective team will be
                  eliminated.
                </p>
                <p>4. A team can opt for only one problem statement.</p>
              </div>
              <div style={{ paddingTop: "2rem" }} className="mint_time">
                <h4>VIGYAAN</h4>
                <h3 className="metaportal_fn_countdown">PROCEDURES</h3>
              </div>
              <div className="mint_info">
                <p>
                  The procedure to conduct Vigyaan ensures that only the most
                  excellent, unique and original ideas are selected.
                </p>
                <p>
                  Problem Statements for each branch are posted . Irrespective
                  of their branch, contestants are free to choose any of the
                  problem statements.
                </p>
                <p>
                  <div style={{ color: "white" }}>Round 1 :</div> In this round,
                  the contestants have to submit a blueprint or an overview and
                  concept of their project idea in around 200-300 words before
                  the deadline.
                </p>
                <p>
                  <div style={{ color: "white" }}>Round 2 :</div>Round 2 will
                  begin after the teams have been narrowed down based on their
                  abstracts presented .Here the contestants will have to
                  illustrate the working of their project with the help of a
                  PowerPoint presentation.
                </p>
                <p>
                  <div style={{ color: "white" }}>Round 3 :</div>Round 3 is the
                  prototype round.Here the teams will bring a working prototype
                  that they will present on the exhibition day.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="metaportal_fn_nft_cats">
            <ul>
              <li>
                <div className="item">
                  <h4 className="parent_category">10th September</h4>
                  <h3 className="child_category" title="Black Yukata">
                  Registration and Abstract Submission
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">7th & 28th September</h4>
                  <h3 className="child_category" title="Daydreaming">
                  Presentation Round
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">23rd October(Tentative)</h4>
                  <h3 className="child_category" title="Fireflies, Smoke">
                  Prototype Round
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
