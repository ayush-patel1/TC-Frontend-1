import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/bgmi.pdf";
import qr from "../assets/eventsAssets/bgmiQr.jpeg";

const BgmiForm = () => {
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
    if (false) {
      alert("Minimum Team Size: 2");
    } else if (false) {
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
      if (true) {
        try {
          const res = await axios.post(`/api/xyz`, form, {
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
      <Title color={"BGMI"} noncolor={"TOURNAMENT"} />
      <div className="container small" style={{ paddingTop: "3rem" }}>
        <div className="metaportal_fn_mintbox">
          <div className="mint_left">
            <div className="mint_title">
              <span>REGISTER NOW</span>
            </div>
            <div className="mint_list">
                <img src={qr} width="100%" alt="" />
            </div>
            <div className="mint_desc" style={{ paddingTop: "4rem" }}>
                <div
                  target="_blank"
                  rel="noreferrer"
                  className="metaportal_fn_button"
                  style={{ cursor: "pointer" }}
                >
                  <span>
                    <a style={{textDecoration:"none", color:"white"}} href="https://unstop.com/o/V0MuxaA?lb=dU5Jo2bN">Click Here To Register</a>
                    
                    </span>
                </div>
            </div>
          </div>
          <div className="mint_right">
            <div className="mright">
              <div data-aos="fade-down" className="mint_time">
                <h4>BGMI</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>1. All games will be a Battle Royal. (Team size =5)</p>
                <p>
                  2. All players must have the latest version of BGMI installed on their device and all the classic
maps should be downloaded.
                </p>
                <p>
                  3. Players must have a BGMI account eligible for competitive games in order to compete. This
same account must be used for all matches during the competition.
                </p>
                <p>
                  4. If a player receives a ban due to in-game behaviour or Terms of Services violation, that
player is not eligible to participate further. This applies to all accounts owned by a player, not
just their registered account. The judges have right to include or discount bans on a case-tocase basis.
                </p>
                <p>
                  5. Teams are responsible for being aware of any player's loss of eligibility for any reason, and
must take appropriate proactive action to change their roster or otherwise notify organising
team of any such loss of eligibility
                </p>
              </div>
              <div
                data-aos="fade-down"
                style={{ paddingTop: "2rem" }}
                className="mint_time"
              >
                <h4>BGMI</h4>
                <h3 className="metaportal_fn_countdown">ROSTER REQUIREMENTS</h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>
                Each Team must maintain, at all times during any Official Competition, exactly four players
plus one optional substitute.
                  <br /><br />
                  Each Team must designate one player as its captain when completing the online registration
process ("Team Captain").
                    <br /><br />
                    The Team Captain will be responsible for all Team communications with Tournament
Officials.
                    <br /><br />
                    The Tournament Officials may rely upon any communications from the Team Captain as
being made by all players on the Team.
                    <br /><br />
                    The Team Captain must at all times be a player on the Team's roster.
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

export default BgmiForm;
