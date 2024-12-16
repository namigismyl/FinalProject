import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import RGLogo from "../../../assets/img/RG__footer.png"
const Footer = () => {
  return (
    <footer>
      <div className="footer" style={{zIndex:"1000"}}>
        <div className="footer__top">
          <div className="footer__top__left">
            <ul>
              <li>
                <Link>Contact</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
              <li>
                <Link>Community Guidelines</Link>
              </li>
              <li>
                <Link>Subscribe</Link>
              </li>
            </ul>
          </div>
          <div className="footer__top__right">
            <Link to="/">
            <div className="rockstarGames__home--logo footer__rg__log"></div>
            </Link>
          </div>
        </div>
        <div className="footer__middle">
          <div className="footer__middle__left">
            <ul>
              <li>
                <Link>Corporate</Link>
              </li>
              <li>
                <Link>Privacy</Link>
              </li>
              <li>
                <Link>Cookie Settings</Link>
              </li>
              <li>
                <Link>Cookie Policy</Link>
              </li>
              <li>
                <Link>Legal</Link>
              </li>
              <li>
                <Link>Do Not Sell My Personal Information</Link>
              </li>
            </ul>
          </div>
          <div className="footer__middle__right">
            <ul>
              <li>
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      d="M13.61 11.003 19.634 4h-1.428l-5.23 6.08L8.796 4H3.98l6.317 9.195-6.317 7.343h1.427l5.524-6.42 4.413 6.42h4.818l-6.552-9.535Zm-1.956 2.273-.64-.916-5.093-7.285h2.192l4.11 5.88.641.915 5.343 7.643h-2.193l-4.36-6.237Z"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      d="M11.999 7.377a4.624 4.624 0 1 0 0 9.248 4.624 4.624 0 0 0 0-9.248Zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008Zm4.807-6.719a1.078 1.078 0 1 0 0-2.156 1.078 1.078 0 0 0 0 2.156Z"
                    />
                    <path
                      fill="#fff"
                      d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.607 6.607 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.583 6.583 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.616 6.616 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.583 6.583 0 0 0-.421-2.217Zm-1.218 9.532a5.046 5.046 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.99 4.99 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.961 4.961 0 0 1-1.67-.311 2.985 2.985 0 0 1-1.718-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.95-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.99 2.99 0 0 1 1.712 1.712c.197.535.302 1.1.311 1.669.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011v-.001Z"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      d="M22.963 6.517A2.863 2.863 0 0 0 20.95 4.5C19.16 4.008 12 4 12 4s-7.158-.008-8.949.462a2.925 2.925 0 0 0-2.018 2.031c-.472 1.79-.476 5.502-.476 5.502s-.005 3.73.464 5.5a2.863 2.863 0 0 0 2.014 2.018c1.808.491 8.948.499 8.948.499s7.16.008 8.949-.46a2.874 2.874 0 0 0 2.019-2.015c.473-1.788.476-5.499.476-5.499s.023-3.731-.465-5.52ZM9.711 15.433l.006-6.856 5.95 3.434-5.956 3.422Z"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      d="M21 11.996a9 9 0 1 0-11.174 8.735v-5.984H7.97v-2.75h1.856V10.81c0-3.063 1.386-4.483 4.393-4.483.57 0 1.555.112 1.957.224v2.493a11.549 11.549 0 0 0-1.04-.034c-1.475 0-2.046.56-2.046 2.013v.972h2.94l-.505 2.75H13.09v6.184A9 9 0 0 0 21 11.995Z"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="m6.998 3-3.57 3.571V19.43h4.285V23l3.57-3.571h2.857L20.567 13V3H6.998Zm12.14 9.286-2.856 2.857h-2.857l-2.499 2.5v-2.5H7.713V4.429h11.426v7.857Zm-2.142-5.357h-1.428v4.285h1.428V6.93Zm-5.355 0h1.428v4.285H11.64V6.93Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom__left">Rockstar Games</div>
          <div className="footer__bottom__middle">
            <span>New York</span>
            <span>London</span>
            <span>Paris</span>
            <span>Bogotá</span>
          </div>
          <div className="footer__bottom__right">MCMXCVIII</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
