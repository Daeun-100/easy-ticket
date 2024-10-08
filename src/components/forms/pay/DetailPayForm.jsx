import styled from "styled-components";
import { FormWrap } from "../FormStyle";
import Input from "../../input/Input";
import { useAtomValue } from "jotai";
import { levelAtom, themeSiteAtom } from "../../../store/atom";
import AnimationArea from "../../Animation";
import ErrorText from "../../errorText/ErrorText";

const DetailPayFormWrap = styled(FormWrap)`
  flex-direction: row;
  color: ${(props) => props.$hasPayFormError && "var(--point-color)"};
`;
const DropDown = styled.select`
  width: 230px;
  height: 35px;
  border-radius: 4px;
  margin-left: 5px;
  border: ${(props) =>
    props.$cardTypesError
      ? "2px solid var(--point-color)"
      : "1px solid var(--fill-color)"};

  //값 설정 후 생기는 outline 제거
  &:focus {
    outline: none;
  }
  option {
    color: var(--text-color2);
    font-family: "pretendardM";
    font-size: 16px;
  }
`;
const textArr = [
  "일반 신용카드",
  "하나 컬쳐 카드",
  "인터파크 롯데 카드",
  "NOL 카드"
];
const optionArr = [
  "KB국민카드",
  "BC카드",
  "우리카드",
  "삼성카드",
  "삼성올앳카드",
  "현대카드",
  "신한카드",
  "롯데카드"
];
//isSelected : 선택되었는가?
//드롭다운은 '결제수단'은 선택됐지만 '페이지 전체 정답'이 아닌 경우 애니메이션
const DetailPayForm = ({
  handleChange,
  isSelected,
  isAnswer,
  hasPayFormError,
  cardTypesError
}) => {
  //레벨 및 연습모드 여부
  const level = useAtomValue(levelAtom);
  const isPractice = useAtomValue(themeSiteAtom) === "practice";

  return (
    <>
      {hasPayFormError && isPractice && (
        <ErrorText text="올바른 결제 수단을 선택해 주세요" />
      )}
      {cardTypesError && <ErrorText text="올바른 카드를 선택해 주세요" />}
      <DetailPayFormWrap $hasPayFormError={hasPayFormError}>
        <FormWrap>
          {textArr.map((payItem, index) => (
            <Input
              name="DetailPayForm"
              key={payItem}
              type="radio"
              value={payItem}
              text={payItem}
              onChange={handleChange}
              $focus={
                level === "low" && isPractice && index == 0 && !isSelected
              }
            />
          ))}
        </FormWrap>
        <AnimationArea $focus={level === "low" && isSelected && !isAnswer}>
          <DropDown
            name="CardTypes"
            onChange={handleChange}
            $cardTypesError={cardTypesError}
          >
            {/*드롭다운의 placeholder역할 */}
            <option value="" disabled>
              카드 종류를 선택해 주세요
            </option>
            {optionArr.map((optionItem) => (
              <option key={optionItem} value={optionItem}>
                {optionItem}
              </option>
            ))}
          </DropDown>
        </AnimationArea>
      </DetailPayFormWrap>
    </>
  );
};

export default DetailPayForm;
