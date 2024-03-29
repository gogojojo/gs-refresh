// @flow

import React from "react";
import { Wrapper, Group, FullImage } from "../../components";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { TweenMax } from "gsap";
import ServicesBg from "../../static/services-bg.png";

type TServicesProps = {
  blurbs: {
    strategyBlurb: string,
    creativeBlurb: string,
    experientialBlurb: string,
    mediaBlurb: string,
    productionBlurb: string,
    socialBlurb: string,
  },
  handleLinkChange: Function,
};

const TextBox = styled.div`
  position: absolute;
  left: 10%;
  bottom: 15%;
  text-align: left;
  color: #fffcf2;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: none;
  }
`;
const ServicesTitle = styled.h1`
  line-height: 110%;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 400;

  @media (max-width: 1024px) {
    display: none;
  }
`;
const ServicesDesc = styled.p`
  font-size: 1rem;
  line-height: 140%;
  font-weight: 300;
  margin-bottom: 1rem;
  width: 30vw;
  &.see {
    font-weight: 400;
  }
  @media (max-width: 1024px) {
    width: 70vw;
    font-size: 0.8rem;
  }
`;
const ServicesList = styled.div`
  position: absolute;
  left: 50%;
  top: 2%;
  line-height: 16vh;
  font-size: 12vh;
  font-weight: 300;
  color: #fffcf2;
  @media (max-width: 1024px) {
    line-height: 10vh;
    font-size: 8vh;
    left: 10vw;
    top: 10vh;
  }
`;
const ServicesSpan = styled.span`
  z-index: 1001;
`;

const onHover = (color, title, desc) => {
  TweenMax.to(".cursor__ball", 0.4, {
    opacity: 1,
    scale: 4,
  });
  TweenMax.to(".cursor__ball circle", 0.4, {
    fill: color,
  });
  TweenMax.set(".hoverable", { cursor: "none" });
  // $FlowFixMe
  document.querySelector("#service-title").innerHTML = title;
  // $FlowFixMe
  document.querySelector("#service-desc").innerHTML = desc;

  // $FlowFixMe
  document.querySelector("#see-more").innerHTML = "";
};
const onMouseExit = () => {
  TweenMax.to(".cursor__ball", 0.4, {
    opacity: 0,
    scale: 1,
  });
  TweenMax.to(".cursor__ball circle", 0.4, {
    fill: "#f7f8fa",
  });
  TweenMax.set(".hoverable", { cursor: "default" });
  // $FlowFixMe
  document.querySelector("#see-more").innerHTML = "See More >";
  // $FlowFixMe
  document.querySelector("#service-title").innerHTML =
    "Now, what can we do for you?";
  // $FlowFixMe
  document.querySelector("#service-desc").innerHTML =
    "We’re a full-service agency and our secret sauce is that we’ve always been that way. We weren’t a creative agency that decided to break into media or an experiential upstart that sprouted a strategy arm. Every service had a seat at the table from the beginning. We built our agency so that the best brains from every discipline could collaborate and lend their own brand of problem solving to the brief. We find that’s where the best ideas come from -- not from one department or another, but the magic in between. Hover at right for what we do or click to find out more about how we do it.";
};

const Services = (props: TServicesProps) => {
  const [ref] = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  const {
    strategyBlurb,
    creativeBlurb,
    experientialBlurb,
    mediaBlurb,
    productionBlurb,
    socialBlurb,
  } = props.blurbs;

  return (
    <Wrapper>
      <div ref={ref}></div>
      <Group height="100vh">
        <FullImage src={ServicesBg} alt="services background" />
        <TextBox>
          <ServicesTitle id="service-title">
            {" "}
            Now, what can we do for you?{" "}
          </ServicesTitle>
          <ServicesDesc id="service-desc">
            We’re a full-service agency and our secret sauce is that we’ve
            always been that way. We weren’t a creative agency that decided to
            break into media or an experiential upstart that sprouted a strategy
            arm. Every service had a seat at the table from the beginning. We
            built our agency so that the best brains from every discipline could
            collaborate and lend their own brand of problem solving to the
            brief. We find that’s where the best ideas come from -- not from one
            department or another, but the magic in between. Hover at right for
            what we do or click to find out more about how we do it.
          </ServicesDesc>
          <ServicesDesc
            id="see-more"
            onClick={() => {
              props.handleLinkChange("/about#services");
            }}
            className="see"
          >
            See More >
          </ServicesDesc>
        </TextBox>
        <ServicesList className="hoverable" onMouseLeave={() => onMouseExit()}>
          <ServicesSpan
            onMouseEnter={() => onHover("#B1C3D6", "Strategy", strategyBlurb)}
          >
            Strategy
          </ServicesSpan>
          <br />
          <ServicesSpan
            onMouseEnter={() => onHover("#FE9B96", "Creative", creativeBlurb)}
          >
            Creative
          </ServicesSpan>
          <br />
          <ServicesSpan
            onMouseEnter={() => onHover("#0033A0", "Media", mediaBlurb)}
          >
            Media
          </ServicesSpan>
          <br />
          <ServicesSpan
            onMouseEnter={() =>
              onHover("#B1C3D6", "Production", productionBlurb)
            }
          >
            Production
          </ServicesSpan>
          <br />
          <ServicesSpan
            onMouseEnter={() => onHover("#FE9B96", "Social", socialBlurb)}
          >
            Social
          </ServicesSpan>
          <br />
          <ServicesSpan
            onMouseEnter={() =>
              onHover("#0033A0", "Experiential", experientialBlurb)
            }
          >
            Experiential
          </ServicesSpan>
          <br />
        </ServicesList>
      </Group>
    </Wrapper>
  );
};

export default Services;
