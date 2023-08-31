import { useEffect } from "react";
import sqrimg from '../assets/images/1x1.jpg'
import Title from "../components/Title";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';

const EveningShow = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  // Hero slider
  useEffect(() => {
    const fn_cs_slider = document.querySelectorAll(".fn_cs_slider");
    fn_cs_slider.forEach((element) => {
      let sliderTop = element.getElementsByClassName("slider_top")[0],
        sliderBottom = element.getElementsByClassName("slider_content"),
        activeIndex = 2,
        speed = 6000;

      let myInterval = setInterval(function () {
        activeIndex++;
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
      }, speed);
      const prev = document.querySelector(".slider_nav .prev"),
        next = document.querySelector(".slider_nav .next"),
        li = element.getElementsByTagName("li");
      prev.addEventListener("click", function (e) {
        e.preventDefault();
        clearInterval(myInterval);
        activeIndex--;
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        myInterval = setInterval(function () {
          activeIndex++;
          activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        }, speed);
        return false;
      });
      next.addEventListener("click", (e) => {
        e.preventDefault();
        clearInterval(myInterval);
        activeIndex++;
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        myInterval = setInterval(function () {
          activeIndex--;
          activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        }, speed);
        return false;
      });
      for (let i = 0; i < li.length; i++) {
        const liElement = li[i];
        const getClass = liElement.getAttribute("class");
        if (getClass === "next") {
          activeIndex++;
        } else if (getClass === "prev") {
          activeIndex--;
        } else {
          return false;
        }
        clearInterval(myInterval);
        activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        myInterval = setInterval(function () {
          activeIndex++;
          activeIndex = sliderDo(sliderTop, sliderBottom, activeIndex);
        }, speed);
        return false;
      }
    });
  }, []);

  const sliderDo = (sliderTop, sliderBottom, activeIndex) => {
    var topLength = sliderTop.getElementsByTagName("li").length;
    if (activeIndex > topLength) {
      activeIndex -= topLength;
    }
    var indexPrev = activeIndex - 1;
    var indexPrev2 = activeIndex - 2;
    var indexNext = activeIndex + 1;
    var indexNext2 = activeIndex + 2;
    if (indexPrev > topLength) {
      indexPrev -= topLength;
    }
    if (indexPrev2 > topLength) {
      indexPrev2 -= topLength;
    }
    if (indexNext > topLength) {
      indexNext -= topLength;
    }
    if (indexNext2 > topLength) {
      indexNext2 -= topLength;
    }
    if (indexPrev < 1) {
      indexPrev += topLength;
    }
    if (indexPrev2 < 1) {
      indexPrev2 += topLength;
    }
    if (activeIndex < 1) {
      activeIndex += topLength;
    }
    if (indexNext < 1) {
      indexNext += topLength;
    }
    if (indexNext2 < 1) {
      indexNext2 += topLength;
    }
    let li = sliderTop.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
      const element = li[i];
      element.classList.remove("prev", "prev2", "active", "next", "next2");
      // element.setAttribute(`data-index${indexNext}`);
    }
    sliderTop
      .querySelector('li[data-index="' + indexPrev2 + '"]')
      .classList.add("prev2");
    sliderTop
      .querySelector('li[data-index="' + indexPrev + '"]')
      .classList.add("prev");
    sliderTop
      .querySelector('li[data-index="' + activeIndex + '"]')
      .classList.add("active");
    sliderTop
      .querySelector('li[data-index="' + indexNext + '"]')
      .classList.add("next");
    sliderTop
      .querySelector('li[data-index="' + indexNext2 + '"]')
      .classList.add("next2");
    return activeIndex;
  };

  const color="EVENING";
  const noncolor="SHOWS"

  return (
    <section id="home">
      <div className="container eveningContainer">
      <Title color={color} noncolor={noncolor}/>
      <div data-aos="fade-down" className="fn_cs_desc">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, amet. Fuga modi voluptatum deserunt numquam voluptatem consequuntur voluptate, rerum voluptas corrupti inventore architecto totam.
          </p>
        </div>
        {/* Slider */}
        <div data-aos="fade-down" className="fn_cs_slider" data-responsive="on">
          <div className="slider_top">
            <img src={sqrimg} alt="" />
            <ul>
              <li className="prev" data-index={1}>
                <div className="item">
                  <img src={sqrimg} alt="" />
                  <div className="item_in">
                    <div className="img" 
                                       style={{
                                        // backgroundImage: `url(https://technocracy.nitrr.ac.in/static/media/img1.16509a822bfd9a7b4772.jpg)`,
                                        backgroundSize: 'cover', // Adjust this as needed
                                        backgroundPosition: 'center', // Adjust this as needed
                                      }}
                     />
                  </div>
                </div>
              </li>
              <li className="active" data-index={2}>
                <div className="item">
                  <img src={sqrimg} alt="" />
                  <div className="item_in">
                    <div className="img"                    style={{
                      // backgroundImage: `url(https://technocracy.nitrr.ac.in/static/media/img1.16509a822bfd9a7b4772.jpg)`,
                      backgroundSize: 'cover', // Adjust this as needed
                      backgroundPosition: 'center', // Adjust this as needed
                    }} />
                  </div>
                </div>
              </li>
              <li className="next2" data-index={3}>
                <div className="item">
                  <img src={sqrimg} alt="" />
                  <div className="item_in">
                    <div className="img"                    style={{
                      // backgroundImage: `url(https://technocracy.nitrr.ac.in/static/media/img1.16509a822bfd9a7b4772.jpg)`,
                      backgroundSize: 'cover', // Adjust this as needed
                      backgroundPosition: 'center', // Adjust this as needed
                    }} />
                  </div>
                </div>
              </li>
              <li className="next2" data-index={4}>
                <div className="item">
                  <img src={sqrimg} alt="" />
                  <div className="item_in">
                    <div className="img"                    style={{
                      // backgroundImage: `url(https://technocracy.nitrr.ac.in/static/media/img1.16509a822bfd9a7b4772.jpg)`,
                      backgroundSize: 'cover', // Adjust this as needed
                      backgroundPosition: 'center', // Adjust this as needed
                    }} />
                  </div>
                </div>
              </li>
              <li data-index={5}>
                <div className="item">
                  <img src={sqrimg} alt="" />
                  <div className="item_in">
                    <div className="img"                    style={{
                      // backgroundImage: `url(https://technocracy.nitrr.ac.in/static/media/img1.16509a822bfd9a7b4772.jpg)`,
                      backgroundSize: 'cover', // Adjust this as needed
                      backgroundPosition: 'center', // Adjust this as needed
                    }} />
                  </div>
                </div>
              </li>
              <li data-index={6}>
                <div className="item">
                  <img src={sqrimg} alt="" />
                  <div className="item_in">
                    <div className="img"                    style={{
                      // backgroundImage: `url(https://technocracy.nitrr.ac.in/static/media/img1.16509a822bfd9a7b4772.jpg)`,
                      backgroundSize: 'cover', // Adjust this as needed
                      backgroundPosition: 'center', // Adjust this as needed
                    }} />
                  </div>
                </div>
              </li>
              <li className="prev2" data-index={7}>
                <div className="item">
                  <img src={sqrimg} alt="" />
                  <div className="item_in">
                    <div className="img"                    style={{
                      // backgroundImage: `url(https://technocracy.nitrr.ac.in/static/media/img1.16509a822bfd9a7b4772.jpg)`,
                      backgroundSize: 'cover', // Adjust this as needed
                      backgroundPosition: 'center', // Adjust this as needed
                    }} />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="slider_nav">
            <a href="#" className="prev">
              <span className="circle" />
              <span className="icon">
                <AiOutlineArrowLeft color="white"/>
              </span>
              <span className="circle" />
            </a>
            <a href="#" className="next">
              <span className="circle" />
              <span className="icon">
               <AiOutlineArrowRight color="white"/>
              </span>
              <span className="circle" />
            </a>
          </div>
        </div>
        {/* !Slider */}
        {/* Description */}

        {/* !Description */}
      </div>
    </section>
  );
};
export default EveningShow;
