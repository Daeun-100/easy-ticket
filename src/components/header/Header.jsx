import styled from "styled-components";
import Nav from "./nav/Nav";
import Logo from "../../assests/logo.svg?react";
import { useLocation, useNavigate } from "react-router-dom";

/*헤더 Container*/
const HeaderContainer = styled.div`
  width: 1320px;
  height: 120px;
  display: flex;
  justify-content: left;
  position: relative;
`;

const LogoContainer = styled.div`
  width: 140px;
  height: 80px;
  position: absolute;
  left: 590px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const goToMain = () => {
    //location에 step을 포함하지 않은 경우 : 사이트 선택 창, 난이도 선택창 등
    if (!location.includes("step")) {
      navigate("/");
      return;
    }
    //location에 step을 포함한 경우 : 예매를 진행 중인 경우
    if (
      confirm("메인화면으로 이동하시겠습니까? 진행상황은 저장되지 않습니다.")
    ) {
      navigate("/");
    }
  };
  return (
    <HeaderContainer>
      <LogoContainer onClick={() => goToMain("/")}>
        <Logo />
      </LogoContainer>
      <Nav />
    </HeaderContainer>
  );
};

export default Header;
