import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAtom, useSetAtom, useAtomValue } from "jotai";

import {
  levelAtom,
  progressAtom,
  themeSiteAtom,
  stepTextNumberAtom,
  helpTextNumberAtom
} from "../../../store/atom";

import Button from "../../../components/button/Button";
import AnimationArea from "../../../components/Animation";
import IntroMessage from "./introMessage/IntroMessage";

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Intro = () => {
  const navigate = useNavigate();
  const level = useAtomValue(levelAtom);

  const [progress, setProgress] = useAtom(progressAtom);
  const setThemeSite = useSetAtom(themeSiteAtom);

  useEffect(() => {
    setThemeSite("practice");
  }, [setThemeSite]);

  const setStepTextNumber = useSetAtom(stepTextNumberAtom);
  const setHelpTextNumber = useSetAtom(helpTextNumberAtom);

  useEffect(() => {
    setProgress(0);
    setStepTextNumber(0);
    setHelpTextNumber(0);
  }, [setProgress]);

  const handleClick = () => {
    setProgress(1);
    if (level === "low" || level === "middle") {
      navigate("/progress/step1-2");
      return;
    }
    navigate("/progress/step1-1");
  };

  return (
    <IntroContainer>
      <IntroMessage />
      <AnimationArea $focus={level === "low"}>
        <Button text="시작하기" onClick={handleClick} />
      </AnimationArea>
    </IntroContainer>
  );
};

export default Intro;
