import axios from "axios";
import { React, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import keys from "../keys.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/ticTacToe.pdf";
import HCaptcha from '@hcaptcha/react-hcaptcha';

const backend = keys.backend;

const TicTacToeForm = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    
      const cachedForm = JSON.parse(localStorage.getItem("talentShowForm")) || {
        Name: "",
        Email: "",
        Phone: "",
        Additional_phone: "",
        College: "",
        Branch: "",
        YOG: "",
        Roll_number: "",
        Preferred_cube_type: "",
        Experience: "",
        Achievements: ""
      };
      const [form, set] = useState(cachedForm);
      const [uploadedFileName, setUploadedFileName] = useState("");
      const [isSubmitting, setSubmit] = useState(false);
      const [isSubmitted, setValue] = useState(false);
    
      const handle = (e) => {
        const update = { ...form };
        update[e.target.name] = e.target.value;
        set(update);
        localStorage.setItem("talentShowForm", JSON.stringify(update));
      };
    
      const [token, setToken] = useState(null);
      const captchaRef = useRef(null);
    
      const onLoad = () => {
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
          form.Name !== "" &&
          form.Email !== "" &&
          form.Phone !== "" &&
          form.College !== "" &&
          form.Branch !== "" &&
          form.YOG !== "" &&
          form.Preferred_cube_type !== "" &&
          form.Phone.length == 10;
    
        if (condition) {
          try {
            const res = await axios.post(`/server/register?event=talentShow`, form, {
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

      return (
        <div
          className="metaportal_fn_mintpage"
          id="registration"
          style={{ position: "relative", zIndex: "0", paddingTop: "5rem" }}
        >
          <Title color={"HUMAN"} noncolor={"TIC-TAC-TOE"} />
          <div className="container small" style={{ paddingTop: "3rem" }}>
            <div className="metaportal_fn_mintbox">
              <div className="mint_left">
                
                <div className="mint_list">
                  
                </div>
                
                <div style={{ fontSize: '30px' }}>
                  On Spot Registration
                </div>
                <div className="mint_desc" style={{ paddingTop: "2rem" }}>
                  {/* <ReCAPTCHA
                    sitekey="6LcIzaMoAAAAAHJK_7w8zc2WlllaZm4asH4POtWI"
                    ref={recaptchaRef}
                  /> */}
                  
              
                </div>
              </div>
              <div className="mint_right">
                <div className="mright">
                  <div data-aos="fade-down" className="mint_time">
                    <h4>Human Tic-Tac-Toe</h4>
                    <h3 className="metaportal_fn_countdown">
                      Rules and Regulations
                    </h3>
                  </div>
                  <div data-aos="fade-down" className="mint_info">
                    <p>
                    1. Each team should consist of 9 members (7 boys and 2 girls)
                    </p>
                    <p>
                    2. Interbranch teams are allowed.
                    </p>
                    <p>
                    3. Each member will be given a number from 1 to 9. There will be a speaker who will utter
numbers.
                   </p><p>
                   4. The number called will be try to reach the box. The first one to reach will be considered for
that box
                   </p><p>
                   5. In this way the game will continue the first team to make a horizontal, vertical or diagonal
line will win.
                   </p><p>
                   6. Unethical behaviour could lead to disqualification. Faculty-coordinators have all the rights to
take final decision for any matter during the event.
                   </p>
                   <p>
                   7. Judge's decision will be considered final.
                   </p>
                   <p>
                   8. *Rules may subject to change.
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

export default TicTacToeForm;
