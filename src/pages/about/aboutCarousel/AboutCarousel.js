import React, { useState, useEffect, useCallback } from "react";
import "./aboutCarousel.css";
import leftarrow from "../../../assets/images/arrow_left.png";
import rightarrow from "../../../assets/images/arrow_right.png";
 

export default function AboutCarousel({ profiles, autoRotateInterval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const profilesToShow = 3;

  const nextProfile = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + profilesToShow) % profiles.length
    );
  }, [profiles.length, profilesToShow]);

  const prevProfile = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - profilesToShow + profiles.length) % profiles.length
    );
  };

  const visibleProfiles = profiles
    .slice(currentIndex, currentIndex + profilesToShow)
    .concat(
      profiles.slice(
        0,
        Math.max(0, currentIndex + profilesToShow - profiles.length)
      )
    );

  useEffect(() => {
    const interval = setInterval(() => {
      nextProfile();
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [nextProfile, autoRotateInterval]);

  return (
    <div className="a-carousel">
      
      <div className="a-carousel-profiles">
        {visibleProfiles.map((profile, index) => (
          <div key={index} className="a-profile-card">
            <img
              src={profile.image}
              alt={`${profile.name}'s profile`}
              className="a-profile-image"
            />
            <h3 className="a-profile-name">{profile.name}</h3>
            <p className="a-profile-role">{profile.role}</p>
          </div>
        ))}
      </div>
      <button className="a-carousel-button prev" onClick={prevProfile}>
        <img src={leftarrow} alt="Previous" />
      </button>
      <button className="a-carousel-button next" onClick={nextProfile}>
        <img src={rightarrow} alt="Previous" />
      </button>
    </div>
  );
}
