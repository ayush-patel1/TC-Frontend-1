import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import keys from "../keys.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../components/Title";
import docs from "../assets/eventsAssets/hydrolift.pdf";
import HCaptcha from '@hcaptcha/react-hcaptcha';

const backend = keys.backend;

const HydroliftForm = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const cachedForm = JSON.parse(localStorage.getItem("hydroliftForm")) || {
        P1_name: "",
        P1_rollno: "",
        P1_email: "",
        P1_whatsapp: "",
        Performance: "",
        Duration: "",
        P2_name: "",
        P2_rollno: "",
        P2_whatsapp: "",
        P3_name: "",
        P3_rollno: "",
        P3_whatsapp: "",
        P4_name: "",
        P4_rollno: "",
        P4_whatsapp: "",
    };
    const [form, set] = useState(cachedForm);
    const [uploadedFileName, setUploadedFileName] = useState("");
    const [isSubmitting, setSubmit] = useState(false);
    const [isSubmitted, setValue] = useState(false);

    const handle = (e) => {
        const update = { ...form };
        update[e.target.name] = e.target.value;
        set(update);
        localStorage.setItem("hydroliftForm", JSON.stringify(update));
    };

    const [token, setToken] = useState(null);
    const captchaRef = useRef(null);

    const onLoad = () => {
        captchaRef.current.execute();
    };

    useEffect(() => {
        if (token) {
            console.log('Captcha verified');
        }
    }, [token]);

    const submit = async () => {
        if (!token) {
            alert("Human verification is mandatory");
            return;
        }
        setSubmit(true);
        let condition =
            form.Leader_name !== "" &&
            form.Leader_branch !== "" &&
            form.Leader_year !== "" &&
            form.Leader_whatsapp !== "" &&
            form.Leader_college_name !== "" &&
            form.P2_name !== "" &&
            form.P2_branch !== "" &&
            form.P2_whatsapp !== "" &&
            form.P2_year !== "" &&
            form.P2_college_name!== "" &&
            form.P3_name !== "" &&
            form.P3_branch !== "" &&
            form.P3_whatsapp !== "" &&
            form.P3_year !== "" &&
            form.P3_college_name!== "" &&
            form.Leader_whatsapp.length === 10 &&
            form.P2_whatsapp.length === 10 &&
            form.P3_whatsapp.length === 10 ;

        if (true) {
            try {
                const res = await axios.post('/server/register?event=hydrolift', form, {
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
            alert("Please fill all the necessary details correctly");
        }
        setSubmit(false);
    };

    const onVerifyCaptcha = () => {
    };

    return (
        <div
            className="metaportal_fn_mintpage"
            id="registration"
            style={{ position: "relative", zIndex: "0", paddingTop: "5rem" }}
        >
            <Title color={"HYDROLIFT"} noncolor={""} />
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
                                        name="Leader_name"
                                        id="Leadername"
                                        type="text"
                                        placeholder="Leader Name"
                                        onChange={(e) => handle(e)}
                                        value={form.Leader_name}
                                    />
                                </li>
                                <li data-aos="fade-down">
                                    <input
                                        id="leadercollegename"
                                        type="text"
                                        name="Leader_college_name"
                                        placeholder="Leader's college name"
                                        onChange={(e) => handle(e)}
                                        value={form.Leader_college_name}
                                    />
                                </li>
                                <li data-aos="fade-down">
                                    <input
                                        id="leaderyear"
                                        type="text"
                                        name="Leader_year"
                                        placeholder="Leader's year"
                                        onChange={(e) => handle(e)}
                                        value={form.Leader_year}
                                    />
                                </li>
                                <li data-aos="fade-down">
                                    <input
                                        id="leaderbranch"
                                        type="text"
                                        name="Leader_branch"
                                        placeholder="Leader's Branch"
                                        onChange={(e) => handle(e)}
                                        value={form.Leader_branch}
                                    />
                                </li>
                                <li data-aos="fade-down">
                                    <input
                                        id="leaderwhatsapp"
                                        type="text"
                                        name="Leader_whatsapp"
                                        placeholder="Leader's Whatsapp Number"
                                        onChange={(e) => handle(e)}
                                        value={form.Leader_whatsapp}
                                    />
                                    <span style={{ fontSize: "0.7rem" }}>
                                        * Don't include +91 or 0.
                                    </span>
                                    {form.Leader_whatsapp !== "" &&
                                        form.Leader_whatsapp?.length !== 10 && (
                                            <p style={{ color: "red" }}>
                                                Enter a number of 10 digits only.
                                            </p>
                                        )}
                                </li>
                                <li data-aos="fade-down">
                                    <input
                                        name="P2_name"
                                        id="P2name"
                                        type="text"
                                        placeholder="Member 2 Name"
                                        onChange={(e) => handle(e)}
                                        value={form.P2_name}
                                    />
                                </li>
                                <li data-aos="fade-down">
                                    <input
                                        id="P2collegename"
                                        type="text"
                                        name="P2_college_name"
                                        placeholder="Member 2 college name"
                                        onChange={(e) => handle(e)}
                                        value={form.P2_college_name}
                                    />
                                </li>
                                <li data-aos="fade-down">
                                    <input
                                        id="P2year"
                                        type="text"
                                        name="P2_year"
                                        placeholder="Member 2 year"
                                        onChange={(e) => handle(e)}
                                        value={form.P2_year}
                                    />
                                </li>
                                <li data-aos="fade-down">
                                    <input
                                        id="P2branch"
                                        type="text"
                                        name="P2_branch"
                                        placeholder="Member 2 Branch"
                                        onChange={(e) => handle(e)}
                                        value={form.P2_branch}
                                    />
                                </li>
                                <li data-aos="fade-down">
                                    <input
                                        id="P2whatsapp"
                                        type="text"
                                        name="P2_whatsapp"
                                        placeholder="Member 2 Whatsapp Number"
                                        onChange={(e) => handle(e)}
                                        value={form.P2_whatsapp}
                                    />
                                    <span style={{ fontSize: "0.7rem" }}>
                                        * Don't include +91 or 0.
                                    </span>
                                    {form.P2_whatsapp !== "" &&
                                        form.P2_whatsapp?.length !== 10 && (
                                            <p style={{ color: "red" }}>
                                                Enter a number of 10 digits only.
                                            </p>
                                        )}
                                </li>
                                <li data-aos="fade-down">
                                    <input
                                        name="P3_name"
                                        id="P3name"
                                        type="text"
                                        placeholder="Member 3 Name"
                                        onChange={(e) => handle(e)}
                                        value={form.P3_name}
                                    />
                                </li>
                                <li data-aos="fade-down">
                                    <input
                                        id="P3collegename"
                                        type="text"
                                        name="P3_college_name"
                                        placeholder="Member 3 college name"
                                        onChange={(e) => handle(e)}
                                        value={form.P3_college_name}
                                    />
                                </li>
                                <li data-aos="fade-down">
                                    <input
                                        id="P3year"
                                        type="text"
                                        name="P3_year"
                                        placeholder="Member 3 year"
                                        onChange={(e) => handle(e)}
                                        value={form.P3_year}
                                    />
                                </li>
                                <li data-aos="fade-down">
                                    <input
                                        id="P3branch"
                                        type="text"
                                        name="P3_branch"
                                        placeholder="Member 3 Branch"
                                        onChange={(e) => handle(e)}
                                        value={form.P3_branch}
                                    />
                                </li>
                                <li data-aos="fade-down">
                                    <input
                                        id="P3whatsapp"
                                        type="text"
                                        name="P3_whatsapp"
                                        placeholder="Member 3 Whatsapp Number"
                                        onChange={(e) => handle(e)}
                                        value={form.P3_whatsapp}
                                    />
                                    <span style={{ fontSize: "0.7rem" }}>
                                        * Don't include +91 or 0.
                                    </span>
                                    {form.P3_whatsapp !== "" &&
                                        form.P3_whatsapp?.length !== 10 && (
                                            <p style={{ color: "red" }}>
                                                Enter a number of 10 digits only.
                                            </p>
                                        )}
                                </li>
                            </ul>
                        </div>
                        <HCaptcha
                            sitekey={keys.hcaptcha}
                            onClick={onLoad}
                            onVerify={setToken}
                            ref={captchaRef}
                        />
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
                            <div>
                                {isSubmitted && (
                                    {/* <div>
                    <div>
                      <a style={{ textDecoration: "none"}} href="https://chat.whatsapp.com/LhuUE4GCgnhGy5nYrJ9S3q">
                        <span className="metaportal_fn_button_4">Join WA Group</span>
                      </a>
                    </div>
                  </div> */}
                                )}
                            </div>
                            <p>* Read the Rules & Regulations before Submitting</p>
                        </div>
                    </div>
                    <div className="mint_right">
                        <div className="mright">
                            <div data-aos="fade-down" className="mint_time">
                                <h4>Hydrolift</h4>
                                <h3 className="metaportal_fn_countdown">
                                    Rules and Regulations
                                </h3>
                            </div>
                            <div data-aos="fade-down" className="mint_info">
                                <p>
                                    1. It is a team event and a team can comprise of at least 2 and at max 3 members.
                                </p>
                                <p>
                                    2.There is no college or semester barrier. Participants can be of any year and from any college.
                                </p>
                                <p>
                                    3. The hydraulic lifter/arm should be constructed following Pascal's Law.
                                </p>
                                <p>4.Participants will be provided with materials such as syringe,pipes,cardboard to construct the arm/lifter and build it in the given time duration in front of the volunteers.</p>
                                <p>5. Contestants will be monitored thoroughly and cannot take help from people outside of their teams</p>
                                <p>6. The object to be moved/lifted will be the same for all the teams and will be provided by Team Technocracy.</p>
                                <p>7.The team whose hydraulic arm/lifter will move/lift the object the most, will be the winner.</p>
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

export default HydroliftForm;