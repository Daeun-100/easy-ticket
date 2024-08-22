import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "../../components/button/Button";
import Animation from "../../components/Animation";
import { useAtom, useSetAtom } from "jotai";
import { userNameAtom, themeSiteAtom, levelAtom } from "../../store/atom";
import { useNavigate } from "react-router-dom";
import MainImage from "../../assests/images/main.png";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  text-align: center;
`;

const Instructions = styled.p`
  margin-top: 20px;
  font-family: pretendardB;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  font-size: 20px;
`;

const Label = styled.label`
  margin-right: 20px;
  font-family: pretendardB;
`;

const Input = styled.input`
  height: 40px;
  width: 200px;
  border: 1px solid var(--fill-color);
  border-radius: 4px;
  font-family: pretendardB;
  font-size: 18px;
  color: var(--text-color);
`;

const StyledMainImage = styled.img`
  width: 600px;
  height: auto;
  flex-shrink: 0;
  object-fit: cover;
`;

function Main() {
  const [name, setName] = useAtom(userNameAtom);
  const setThemeSite = useSetAtom(themeSiteAtom);
  const setLevel = useSetAtom(levelAtom);
  const navigate = useNavigate();

  useEffect(() => {
    setThemeSite(null);
    setLevel(null);
    setName(null);
  }, [setThemeSite]);

  const handleNameInput = (e) => {
    const name = e.target.value;
    setName(name);
  };

  // 시작하기 클릭 시
  const handleClick = () => {
    if (!name) {
      alert("이름을 입력해주세요.");
      return;
    }
    navigate("/select-mode");
  };

  return (
    <MainContainer>
      <StyledMainImage src={MainImage} alt="main image" />
      <Instructions>
        아래 빈칸에 성함을 입력하신 후,{" "}
        <span style={{ color: "var(--key-color)" }}>‘시작하기’</span> 버튼을
        클릭해 주세요.
      </Instructions>

      <InputGroup>
        <Label htmlFor="name">이름</Label>
        <Input
          type="text"
          onChange={handleNameInput}
          id="name"
          placeholder="이름을 입력해 주세요."
        />
      </InputGroup>
      <Animation $focus="true">
        <Button onClick={handleClick} text="시작하기"></Button>
      </Animation>
    </MainContainer>
  );
}

export default Main;
