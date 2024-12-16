import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./CarouselFadeExample.css";
import Gta5_FMT from '../../../../assets/img/GTA5_FMT.png';
import RDR2ShopBig from "../../../../assets/img/reddeadredemption2-shopBig.png";
import RockstarGamesShopBig from "../../../../assets/img/RockstarGamesShopBig.png";
import RockstarGamesShopLogo from "../../../../assets/img/RockstarGamesShopLogo.png"
import RDR2ShopLogo from "../../../../assets/img/RDR2__logo.png"
import GTA5ShopLogo from "../../../../assets/img/GTAVShop__Logo.png"
const CarouselComponent = () => {
  return (
    <section className='shop__carousel'>
      <Carousel fade  prevLabel="" nextLabel="" interval={2500}>
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center">
            <div className="row rdr2Shop__row">
              <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                <div className="carousel-text rdr2shop-text">
                  <img src={RDR2ShopLogo} alt="" />
                  <h2 className='rdr2shop__title'>Red Dead Redemption 2</h2>
                  <p className='rdr2shop__description'>Experience the epic western adventures that defined a generation.</p>
                </div>
              </div>
              <div className="col-8 d-flex justify-content-center align-items-center">
                <div className="carousel-image">
                  <img className='rdr2Shop__img'
                    src={RDR2ShopBig}
                    alt="First slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center">
            <div className="row gta5FmtShop__row">
              <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                <div className="carousel-text gta5FmtShop-text">
                  <img src={GTA5ShopLogo} alt="" />
                  <h2 className='gta5FmtShop__title'>GTAV and GTA Online for PS5 and Xbox Series X|S</h2>
                  <p className='gta5FmtShop__description'>Experience blockbuster hits Grand Theft Auto V and GTA Online — now upgraded for a new generation with stunning visuals, faster loading, 3D audio and more, plus exclusive content for GTA Online players.</p>
                </div>
              </div>
              <div className="col-8 d-flex justify-content-center align-items-center">
                <div className="carousel-image">
                  <img className='gta5FmtShop__img'
                    src={Gta5_FMT}
                    alt="Second slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center align-items-center">
            <div className="row rockstarGamesShop__row">
              <div className="col-4 d-flex flex-column justify-content-center align-items-center">
                <div className="carousel-text rockstarGamesShop-text">
                  <img src={RockstarGamesShopLogo} alt=""/>
                  <h1 className='rockstarGamesShop__title'>New Rockstar Games Gear Now Available</h1>
                  <p className='rockstarGamesShop__description'>Get new Crewnecks, Hats, and more just in time for the holidays.</p>
                </div>
              </div>
              <div className="col-8 d-flex justify-content-center align-items-center">
                <div className="carousel-image">
                  <img className='RGShopBig__img'
                    src={RockstarGamesShopBig}
                    alt="Third slide"
                  />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
export default CarouselComponent;
