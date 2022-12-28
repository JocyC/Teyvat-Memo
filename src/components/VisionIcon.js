import anemo from "../assets/visions/anemo.webp";
import cryo from "../assets/visions/cryo.webp";
import pyro from "../assets/visions/pyro.webp";
import dendro from "../assets/visions/dendro.webp";
import electro from "../assets/visions/electro.webp";
import geo from "../assets/visions/geo.webp";
import hydro from "../assets/visions/hydro.webp";
import styled from "styled-components";

const VisionIcon = ({ vision }) => {
  const iconSrc = vision.toLowerCase();
  if (iconSrc === "anemo") {
    return (
      <Wrapper>
        <div className="vision-container">
          <img src={anemo} alt={iconSrc} className="vision-img" />
        </div>
      </Wrapper>
    );
  }
  if (iconSrc === "geo") {
    return (
      <Wrapper>
        <div className="vision-container">
          <img src={geo} alt={iconSrc} className="vision-img" />
        </div>
      </Wrapper>
    );
  }
  if (iconSrc === "cryo") {
    return (
      <Wrapper>
        <div className="vision-container">
          <img src={cryo} alt={iconSrc} className="vision-img" />
        </div>
      </Wrapper>
    );
  }
  if (iconSrc === "pyro") {
    return (
      <Wrapper>
        <div className="vision-container">
          <img src={pyro} alt={iconSrc} className="vision-img" />
        </div>
      </Wrapper>
    );
  }
  if (iconSrc === "electro") {
    return (
      <Wrapper>
        <div className="vision-container">
          <img src={electro} alt={iconSrc} className="vision-img" />
        </div>
      </Wrapper>
    );
  }
  if (iconSrc === "dendro") {
    return (
      <Wrapper>
        <div className="vision-container">
          <img src={dendro} alt={iconSrc} className="vision-img" />
        </div>
      </Wrapper>
    );
  }
  if (iconSrc === "hydro") {
    return (
      <Wrapper>
        <div className="vision-container">
          <img src={hydro} alt={iconSrc} className="vision-img" />
        </div>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  .vision-img {
    width: 30%;
  }
  .vision-container {
    position: absolute;
    top: 0.5rem;
  }
`;

export default VisionIcon;
