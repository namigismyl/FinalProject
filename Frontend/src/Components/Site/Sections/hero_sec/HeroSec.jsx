import React, { useState, useEffect, useContext } from "react";
import "./HeroSec.css";
import GTAVideoPhoto from "../../../../assets/img/GTA6_Video.png";
import MainContext from "../../../../Context/Context";

const HeroSec = () => {
    const {modal,clickModal}=useContext(MainContext)
    useEffect(() => {
        if (modal) {
            document.body.style.overflow = "hidden"; 
        } else {
            document.body.style.overflow = ""; 
        }

        return () => {
            document.body.style.overflow = ""; 
        };
    }, [modal]);


    return (
        <>
            <section className="herosec">
                <div className="custom-container heroSec__container">
                    <div className="row heroSec__row">
                        <div className="col-9 heroSec__col1">
                            <img src={GTAVideoPhoto} alt="" />
                        </div>
                        <div className="col-3 heroSec__col2">
                            <div className="heroSec__info">
                                <div className="heroSec__title">
                                    <p>Grand Theft Auto VI</p>
                                    <h2>Trailer 1</h2>
                                </div>
                                <div className="heroSec__button">
                                    <button onClick={clickModal}>Watch Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {modal ? (
                <div className="modal" onClick={clickModal}>
                    <div className="modal-content">
                    <iframe  src="https://www.youtube.com/embed/QdBZY2fkU-0?si=hnK-4W6KwyTP274f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="true"></iframe>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default HeroSec;
