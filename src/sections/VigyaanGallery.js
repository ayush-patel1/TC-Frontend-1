
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import sqrimg from '../assets/images/1x1.jpg'
import Title from "../components/Title";

const EventsGallery = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  useEffect(() => {
    const collection = document.querySelector(".fn_cs_collection");
    var items = collection.querySelectorAll(".item");
    var itemsLength = items.length;
    setInterval(function () {
      var numberOne = Math.floor(Math.random() * itemsLength);
      var numberTwo = Math.floor(Math.random() * itemsLength);

      while (numberTwo === numberOne) {
        numberTwo = Math.floor(Math.random() * itemsLength);
      }
      var firstDiv = items[numberOne];
      var secondDiv = items[numberTwo];
      var firstImage = firstDiv.querySelector("input").value;
      var secondImage = secondDiv.querySelector("input").value;
      firstDiv.classList.add("ready");
      secondDiv.classList.add("ready");
      // console.log(firstDiv.querySelector("input").value == firstDiv);
      setTimeout(function () {
        // console.log(secondDiv.querySelector("input").value == firstDiv);
        // firstDiv.querySelector("input").value == secondImage;
        // firstDiv.querySelector(".abs_img").style.backgroundImage =
        //   "url(" + secondImage + ")";
        // // secondDiv.querySelector("input").val(firstImage);
        // secondDiv.querySelector("input").value == firstDiv;
        // console.log(secondDiv.querySelector("input").value);
        // secondDiv.querySelector(".abs_img").style.backgroundImage =
        //   "url(" + firstImage + ")";

        firstDiv.classList.remove("ready");
        secondDiv.classList.remove("ready");
      }, 500);
    }, 2000);
  }, []);


  const color="VIGYAAN";
  const noncolor="GALLERY"

  return (
    <section id="collection">
      <div className="container collectionContainer">
      <Title color={color} noncolor={noncolor}/>
      <div className="fn_cs_desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus commodi sint ex optio unde, similique laudantium soluta, labore praesentium quo quibusdam consectetur explicabo culpa?
          </p>
        </div>
        <div className="fn_cs_collection">
          <div className="collection_top">
            <div className="item">
              <div data-aos="fade-down" className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    style={{
                      // backgroundImage: `url(https://technocracy.nitrr.ac.in/static/media/img1.16509a822bfd9a7b4772.jpg)`,
                      backgroundSize: 'cover', // Adjust this as needed
                      backgroundPosition: 'center', // Adjust this as needed
                    }}
                  />
                  <img src={sqrimg} alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/1.jpg" />
            </div>
            <div className="item">
              <div data-aos="fade-down" className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    style={{
                      // backgroundImage: `url(https://technocracy.nitrr.ac.in/static/media/img2.44c4d3e2d3bd389b510b.jpg)`,
                      backgroundSize: 'cover', // Adjust this as needed
                      backgroundPosition: 'center', // Adjust this as needed
                    }}
                  />
                  <img src={sqrimg} alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/2.jpg" />
            </div>
            <div className="item">
              <div data-aos="fade-down" className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    style={{
                      // backgroundImage: `url(https://technocracy.nitrr.ac.in/static/media/img3.84b72fe4dd3b48b6fcba.jpg)`,
                      backgroundSize: 'cover', // Adjust this as needed
                      backgroundPosition: 'center', // Adjust this as needed
                    }}
                  />
                  <img src={sqrimg} alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/3.jpg" />
            </div>
            <div className="item">
              <div data-aos="fade-down" className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    style={{
                      // backgroundImage: `url(https://technocracy.nitrr.ac.in/static/media/img5.c9a5551f854bb77d9bdf.jpg)`,
                      backgroundSize: 'cover', // Adjust this as needed
                      backgroundPosition: 'center', // Adjust this as needed
                    }}
                  />
                  <img src={sqrimg} alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/4.jpg" />
            </div>
          </div>
          <div className="collection_bottom">
            <div className="item">
              <div data-aos="fade-up" className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    style={{
                      // backgroundImage: `url(https://technocracy.nitrr.ac.in/static/media/img4.704eadcc90af7340fcae.jpg)`,
                      backgroundSize: 'cover', // Adjust this as needed
                      backgroundPosition: 'center', // Adjust this as needed
                    }}
                  />
                  <img src={sqrimg} alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/5.jpg" />
            </div>
            <div className="item">
              <div data-aos="fade-up" className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    style={{
                      // backgroundImage: `url(https://technocracy.nitrr.ac.in/static/media/img1.16509a822bfd9a7b4772.jpg)`,
                      backgroundSize: 'cover', // Adjust this as needed
                      backgroundPosition: 'center', // Adjust this as needed
                    }}
                  />
                  <img src={sqrimg} alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/6.jpg" />
            </div>
            <div className="item">
              <div data-aos="fade-up" className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    style={{
                      // backgroundImage: `url(https://technocracy.nitrr.ac.in/static/media/img1.16509a822bfd9a7b4772.jpg)`,
                      backgroundSize: 'cover', // Adjust this as needed
                      backgroundPosition: 'center', // Adjust this as needed
                    }}
                  />
                  <img src={sqrimg} alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/7.jpg" />
            </div>
            <div className="item">
              <div data-aos="fade-up" className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    style={{
                      // backgroundImage: `url(https://technocracy.nitrr.ac.in/static/media/img1.16509a822bfd9a7b4772.jpg)`,
                      backgroundSize: 'cover', // Adjust this as needed
                      backgroundPosition: 'center', // Adjust this as needed
                    }}
                  />
                  <img src={sqrimg} alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="img/collection/8.jpg" />
            </div>
          </div>
        </div>
        <div className="fn_cs_desc">
        <a
            href="https://opensea.io/"
            className="metaportal_fn_button"
            target="_blank"
            rel="noreferrer"
            style={{margin:"2rem 0"}}
          >
            <span>Show More</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default EventsGallery;
