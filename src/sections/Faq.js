import { useState, useEffect } from "react";
import Title from "../components/Title";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Faq = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const faqs1 = [
    {
      title: "What is Aavartan?",
      dec: "AAVARTAN is the annual Techfest of NIT Raipur organised by Team Technocracy, with more than 30 events.",
    },
    {
      title: "What is Aavartan?",
      dec: "AAVARTAN is the annual Techfest of NIT Raipur organised by Team Technocracy, with more than 30 events. It is a two day annual symposium of NIT Raipur, by far the largest Techfest of central India.",
    },
    {
      title: "What is Aavartan?",
      dec: "AAVARTAN is the annual Techfest of NIT Raipur organised by Team Technocracy, with more than 30 events. It is a two day annual symposium of NIT Raipur, by far the largest Techfest of central India.",
    },
    {
      title: "What is Aavartan?",
      dec: "AAVARTAN is the annual Techfest of NIT Raipur organised by Team Technocracy, with more than 30 events. It is a two day annual symposium of NIT Raipur, by far the largest Techfest of central India.",
    },
  ];
  const faqs2 = [
    {
      title: "What is Aavartan?",
      dec: "AAVARTAN is the annual Techfest of NIT Raipur organised by Team Technocracy, with more than 30 events. It is a two day annual symposium of NIT Raipur, by far the largest Techfest of central India.",
    },
    {
      title: "What is Aavartan?",
      dec: "AAVARTAN is the annual Techfest of NIT Raipur organised by Team Technocracy, with more than 30 events. It is a two day annual symposium of NIT Raipur, by far the largest Techfest of central India.",
    },
    {
      title: "What is Aavartan?",
      dec: "AAVARTAN is the annual Techfest of NIT Raipur organised by Team Technocracy, with more than 30 events. It is a two day annual symposium of NIT Raipur, by far the largest Techfest of central India.",
    },
    {
      title: "What is Aavartan?",
      dec: "AAVARTAN is the annual Techfest of NIT Raipur organised by Team Technocracy, with more than 30 events. It is a two day annual symposium of NIT Raipur, by far the largest Techfest of central India.",
    },
  ];
  const [active, setActive] = useState(`a0`);
  const faqMap = (arr, index) => {
    return arr.map((data, i) => (
      <div data-aos="fade-down" className="fn_cs_accordion" key={i}>
        <div className={`acc_item ${index + i === active ? "active" : ""}`}>
          <div
            className="acc_header"
            onClick={() =>
              setActive(`${index + i}` === active ? null : `${index + i}`)
            }
          >
            <h3 className="" data-text={data.title}>
              {data.title}
            </h3>
            <span className="icon">
              <span />
            </span>
          </div>
          <div
            className="acc_content"
            style={{
              display: `${index + i === active ? "block" : "none"}`,
            }}
          >
            <p>{data.dec}</p>
          </div>
        </div>
      </div>
    ));
  };

  const color="";
  const noncolor="FAQ"
  return (
    <section id="faq">
      <div className="">
        <div className="fn_cs_faq">
          <div className="faq_col">
            <Title color={color} noncolor={noncolor}/>
            {/* <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div> */}
            <div className="desc">
              <p data-aos="fade-down">
              Our FAQ covers event registration, schedule, venue details, participant prerequisites, and volunteer opportunities. It also addresses accommodation options, transportation guidance, and sponsorship inquiries.
              </p>
              {/* <p>
              It also addresses inquiries about sponsorship opportunities, event schedules, and ways to engage with the club. With this comprehensive FAQ, we aim to ensure a seamless experience for everyone involved in our technical events.
              </p> */}
            </div>
          </div>
          <div className="faq_col">
            <div className="fn_cs_accordion">{faqMap(faqs1, "a")}</div>
          </div>
          <div className="faq_col">
            <div  className="fn_cs_accordion">{faqMap(faqs2, "b")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq;
