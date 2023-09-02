import { useEffect } from 'react';
import sqrimg from '../assets/images/1x1.jpg'
import Title from '../components/Title';
import PageBanner from "../layout/PageBanner"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aavartan_data from '../assets/aavartan_data';
import Aavartan_Card from '../components/AavartanCard';

const EventsGalleryPage = () => {
  useEffect(() => {
    AOS.init({  duration: 1000, });
    window.scrollTo(0,0)
  }, [])
  return (
      <div className="metaportal_fn_collectionpage">
        <div className="container">
          <div className="metaportal_fn_collection">
            {/* Filters */}

            {/* !Filters */}
            <div className="metaportal_fn_clist">
              {/* Result Box */}

              {/* !Result Box */}
              {/* Result List */}
              <div className="metaportal_fn_result_list">
                <div className="metaportal_fn_drops">
                <PageBanner pageName={"gallery"} prePageName={"aavartan"} prePageLink={"/aavartan"} />
                  <Title color="EVENTS" noncolor="GALLERY"/>
                  <ul className="grid">
                  {Aavartan_data.map((data)=>{
                    return(
                      <Aavartan_Card
                      aavartan_img={data.url}
                      >
                      </Aavartan_Card>
                    );
                  })}
                  </ul>
                </div>
              </div>
              {/* !Result List */}
            </div>
          </div>
        </div>
      </div>
  );
};

export default EventsGalleryPage;
