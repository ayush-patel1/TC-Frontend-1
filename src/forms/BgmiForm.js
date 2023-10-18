import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/bgmi.docx";
import keys from "../keys.json";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import qr from "../assets/eventsAssets/bgmiQr.jpeg"

const backend = keys.backend;

const BgmiForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cachedForm = JSON.parse(localStorage.getItem("terrainTreaderForm")) || {
    Team_name: "",
    Leader_name: "",
    Leader_whatsapp: "",
    Leader_branch: "",
    Leader_yog: "",
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
    let condition =
      form.Team_name !== "" &&
      form.Leader_name !== "" &&
      form.Leader_whatsapp !== "" &&
      form.Leader_yog !== "" &&
      form.Leader_branch !== "" &&
      form.Leader_whatsapp.length == 10;

    if (condition) {
      try {
        const res = await axios.post(
          `/server/register?event=terrainTreader`,
          form,
          {
            headers: {
              "Content-Type": "application/json",
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

  const onVerifyCaptcha = () => {};

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
                <li data-aos="fade-down">
                  <input
                    name="Leader_email"
                    id="leaderEmail"
                    type="text"
                    placeholder="Leader's Email"
                    onChange={(e) => handle(e)}
                    value={form.Leader_email}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="Leader_college"
                    id="leaderCollege"
                    type="text"
                    placeholder="Leader's College"
                    onChange={(e) => handle(e)}
                    value={form.Leader_college}
                  />
                </li>
  
                <li data-aos="fade-down">
                  <input
                    name="P1_name"
                    id="P1Name"
                    type="text"
                    placeholder="Player 1 in Game Name "
                    onChange={(e) => handle(e)}
                    value={form.P1_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P1_id"
                    id="P1Id"
                    type="text"
                    placeholder="Player 1 Game ID "
                    onChange={(e) => handle(e)}
                    value={form.P1_id}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P1_number"
                    id="P1Number"
                    type="text"
                    placeholder="Player 1 Mobile Name"
                    onChange={(e) => handle(e)}
                    value={form.P1_number}
                  />
                </li>

                <li data-aos="fade-down">
                  <input
                    name="P2_name"
                    id="P2Name"
                    type="text"
                    placeholder="Player 2 in Game Name "
                    onChange={(e) => handle(e)}
                    value={form.P2_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_id"
                    id="P2Id"
                    type="text"
                    placeholder="Player 2 Game ID "
                    onChange={(e) => handle(e)}
                    value={form.P2_id}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P2_number"
                    id="P2Number"
                    type="text"
                    placeholder="Player 2 Mobile Name"
                    onChange={(e) => handle(e)}
                    value={form.P2_number}
                  />
                </li>

                <li data-aos="fade-down">
                  <input
                    name="P3_name"
                    id="P3Name"
                    type="text"
                    placeholder="Player 3 in Game Name "
                    onChange={(e) => handle(e)}
                    value={form.P3_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_id"
                    id="P3Id"
                    type="text"
                    placeholder="Player 3 Game ID "
                    onChange={(e) => handle(e)}
                    value={form.P3_id}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P3_number"
                    id="P3Number"
                    type="text"
                    placeholder="Player 3 Mobile Name"
                    onChange={(e) => handle(e)}
                    value={form.P3_number}
                  />
                </li>

                <li data-aos="fade-down">
                  <input
                    name="P4_name"
                    id="P4Name"
                    type="text"
                    placeholder="Player 4 in Game Name "
                    onChange={(e) => handle(e)}
                    value={form.P4_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P4_id"
                    id="P4Id"
                    type="text"
                    placeholder="Player 4 Game ID "
                    onChange={(e) => handle(e)}
                    value={form.P4_id}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P4_number"
                    id="P4Number"
                    type="text"
                    placeholder="Player 4 Mobile Name"
                    onChange={(e) => handle(e)}
                    value={form.P4_number}
                  />
                </li>
                <li data-aos="fade-down">
                (Optional)
                  <input
                    name="P5_name"
                    id="P5Name"
                    type="text"
                    placeholder="Player 5 in Game Name"
                    onChange={(e) => handle(e)}
                    value={form.P5_name}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P5_id"
                    id="P5Id"
                    type="text"
                    placeholder="Player 5 Game ID"
                    onChange={(e) => handle(e)}
                    value={form.P5_id}
                  />
                </li>
                <li data-aos="fade-down">
                  <input
                    name="P5_number"
                    id="P5Number"
                    type="text"
                    placeholder="Player 5 Mobile Name"
                    onChange={(e) => handle(e)}
                    value={form.P5_number}
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
                <h4>BGMI</h4>
                <h3 className="metaportal_fn_countdown">
                  Rules and Regulations
                </h3>
              </div>
              <div data-aos="fade-down" className="mint_info">
                <p>1. All games will be a Battle Royal. (Team size =5)</p>
                <p>
                  2. All players must have the latest version of BGMI installed
                  on their device and all the classic maps should be downloaded.
                </p>
                <p>
                  3. Players must have a BGMI account eligible for competitive
                  games in order to compete. This same account must be used for
                  all matches during the competition.
                </p>
                <p>
                  4. If a player receives a ban due to in-game behaviour or
                  Terms of Services violation, that player is not eligible to
                  participate further. This applies to all accounts owned by a
                  player, not just their registered account. The judges have
                  right to include or discount bans on a case-tocase basis.
                </p>
                <p>
                  5. Teams are responsible for being aware of any player's loss
                  of eligibility for any reason, and must take appropriate
                  proactive action to change their roster or otherwise notify
                  organising team of any such loss of eligibility
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
                  Each Team must maintain, at all times during any Official
                  Competition, exactly four players plus one optional
                  substitute.
                  <br />
                  <br />
                  Each Team must designate one player as its captain when
                  completing the online registration process ("Team Captain").
                  <br />
                  <br />
                  The Team Captain will be responsible for all Team
                  communications with Tournament Officials.
                  <br />
                  <br />
                  The Tournament Officials may rely upon any communications from
                  the Team Captain as being made by all players on the Team.
                  <br />
                  <br />
                  The Team Captain must at all times be a player on the Team's
                  roster.
                </p>
              </div>
              <div>
              <img src={qr} width="100%" alt="" />
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
