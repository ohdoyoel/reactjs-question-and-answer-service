import styled from "styled-components";
import QuestionRow from "../molecules/QuestionRow";

const HeaderRow = styled.div`
display: grid;
grid-template-columns: 1fr max-content;
padding: 30px 20px;
`;

const StyledH1 = styled.h1`
font-size: 1.8rem;
`;

const BlueButton = styled.button`
background-color: #378ad3;
color: #fff;
border: 0;
border-radius: 3px;
padding: 12px 10px;
`;

function QuestionsPage() {
  return (
    <main>
      <HeaderRow>
        <StyledH1>많이 읽는 질문이오</StyledH1>
        <BlueButton>질문하쇼</BlueButton>
      </HeaderRow>
      <QuestionRow/>
      <QuestionRow/>
      <QuestionRow/>
      <QuestionRow/>
      <QuestionRow/>
      <QuestionRow/>
      <QuestionRow/>
      <QuestionRow/>
    </main>
  )
}

export default QuestionsPage;