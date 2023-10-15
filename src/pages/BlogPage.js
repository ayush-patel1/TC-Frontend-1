import { useEffect } from 'react';
import Title from '../components/Title';
import PageBanner from "../layout/PageBanner"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Vigyaan_data from '../assets/vigyaan_data';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0,0)
  }, [])
  return (
    <div className="metaportal_fn_bloglist">
        <div className="container small">
          <div className="bloglist">
            <ul className="fn-isotope">
              <li className="isotope-item">
                <div className="blog__item">
                  <div className="counter">
                    <span className="cc">
                      <span>01</span>
                    </span>
                  </div>
                  <div className="meta">
                    <p>October 09, 2023 / Aniket / 4 Comments</p>
                  </div>
                  <div className="title">
                    <h3>
                      <Link to="/blog-single">
                        <a>Reasons why i like Anime</a>
                      </Link>
                    </h3>
                  </div>
                  <div className="read_more">
                    <Link to="/blog-single">
                      <a>
                        <span>Read More</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="isotope-item">
                <div className="blog__item">
                  <div className="counter">
                    <span className="cc">
                      <span>02</span>
                    </span>
                  </div>
                  <div className="meta">
                    <p>October 10, 2023 / Piyush / 4 Comments</p>
                  </div>
                  <div className="title">
                    <h3>
                      <Link to="/blog-single">
                        <a>How to learn Backend in few hours</a>
                      </Link>
                    </h3>
                  </div>
                  <div className="read_more">
                    <Link to="/blog-single">
                      <a>
                        <span>Read More</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="isotope-item">
                <div className="blog__item">
                  <div className="counter">
                    <span className="cc">
                      <span>03</span>
                    </span>
                  </div>
                  <div className="meta">
                    <p>October 09, 2023 / Aniket / 4 Comments</p>
                  </div>
                  <div className="title">
                    <h3>
                      <Link to="/blog-single">
                        <a>Reasons why i like Anime</a>
                      </Link>
                    </h3>
                  </div>
                  <div className="read_more">
                    <Link to="/blog-single">
                      <a>
                        <span>Read More</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="isotope-item">
                <div className="blog__item">
                  <div className="counter">
                    <span className="cc">
                      <span>04</span>
                    </span>
                  </div>
                  <div className="meta">
                    <p>October 10, 2023 / Piyush / 4 Comments</p>
                  </div>
                  <div className="title">
                    <h3>
                      <Link to="/blog-single">
                        <a>How to learn Backend in few hours</a>
                      </Link>
                    </h3>
                  </div>
                  <div className="read_more">
                    <Link to="/blog-single">
                      <a>
                        <span>Read More</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="isotope-item">
                <div className="blog__item">
                  <div className="counter">
                    <span className="cc">
                      <span>05</span>
                    </span>
                  </div>
                  <div className="meta">
                    <p>October 09, 2023 / Aniket / 4 Comments</p>
                  </div>
                  <div className="title">
                    <h3>
                      <Link to="/blog-single">
                        <a>Reasons why i like Anime</a>
                      </Link>
                    </h3>
                  </div>
                  <div className="read_more">
                    <Link to="/blog-single">
                      <a>
                        <span>Read More</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="isotope-item">
                <div className="blog__item">
                  <div className="counter">
                    <span className="cc">
                      <span>06</span>
                    </span>
                  </div>
                  <div className="meta">
                    <p>October 10, 2023 / Piyush / 4 Comments</p>
                  </div>
                  <div className="title">
                    <h3>
                      <Link to="/blog-single">
                        <a>How to learn Backend in few hours</a>
                      </Link>
                    </h3>
                  </div>
                  <div className="read_more">
                    <Link to="/blog-single">
                      <a>
                        <span>Read More</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="isotope-item">
                <div className="blog__item">
                  <div className="counter">
                    <span className="cc">
                      <span>07</span>
                    </span>
                  </div>
                  <div className="meta">
                    <p>October 09, 2023 / Aniket / 4 Comments</p>
                  </div>
                  <div className="title">
                    <h3>
                      <Link to="/blog-single">
                        <a>Reasons why i like Anime</a>
                      </Link>
                    </h3>
                  </div>
                  <div className="read_more">
                    <Link to="/blog-single">
                      <a>
                        <span>Read More</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="isotope-item">
                <div className="blog__item">
                  <div className="counter">
                    <span className="cc">
                      <span>08</span>
                    </span>
                  </div>
                  <div className="meta">
                    <p>October 10, 2023 / Piyush / 4 Comments</p>
                  </div>
                  <div className="title">
                    <h3>
                      <Link to="/blog-single">
                        <a>How to learn Backend in few hours</a>
                      </Link>
                    </h3>
                  </div>
                  <div className="read_more">
                    <Link to="/blog-single">
                      <a>
                        <span>Read More</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="isotope-item">
                <div className="blog__item">
                  <div className="counter">
                    <span className="cc">
                      <span>09</span>
                    </span>
                  </div>
                  <div className="meta">
                    <p>October 09, 2023 / Aniket / 4 Comments</p>
                  </div>
                  <div className="title">
                    <h3>
                      <Link to="/blog-single">
                        <a>Reasons why i like Anime</a>
                      </Link>
                    </h3>
                  </div>
                  <div className="read_more">
                    <Link to="/blog-single">
                      <a>
                        <span>Read More</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="isotope-item">
                <div className="blog__item">
                  <div className="counter">
                    <span className="cc">
                      <span>10</span>
                    </span>
                  </div>
                  <div className="meta">
                    <p>October 10, 2023 / Piyush / 4 Comments</p>
                  </div>
                  <div className="title">
                    <h3>
                      <Link to="/blog-single">
                        <a>How to learn Backend in few hours</a>
                      </Link>
                    </h3>
                  </div>
                  <div className="read_more">
                    <Link to="/blog-single">
                      <a>
                        <span>Read More</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="metaportal_fn_pagination">
            <ul>
              <li>
                <span>1</span>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <span>...</span>
              </li>
              <li>
                <a href="#">77</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default BlogPage;
