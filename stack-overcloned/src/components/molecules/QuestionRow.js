import styled from "styled-components";

const StyledQuestionRow = styled.div`
background-color: rgba(255,255,255,.05);
padding: 15px 15px 10px;
display: grid;
grid-template-columns: repeat(3, 50px) 1fr;
border-top: 1px solid #555;
`;

const QuestionStat = styled.div`
text-align: center;
font-size: 1.2rem;
color: #aaa;
margin-top: 5px;
span {
  font-size: .7rem;
  display: block;
  margin-top: 6px;
}
`;

const QuestionTitleArea = styled.div`
padding: 0 30px;
`;

const QuestionLink = styled.a`
text-decoration: none;
color: #3ca4ff;
font-size: 1.1rem;
display: block;
margin-bottom: 5px;
`;

const Tag = styled.span`
display: inline-block;
margin-right: 5px;
background-color: #3e4a52;
color: #9cc3db;
padding: 7px;
border-radius: 4px;
font-size: 0.9rem;
`;

const WhoAndWhen = styled.div`
color: #aaa;
display: inline-block;
font-size: .8rem;
float: right;
padding: 10px 0;
`;

const UserLink = styled.a`
color: #3ca4ff;
`;

function QuestionRow() {
  return (
    <StyledQuestionRow>
      <QuestionStat>0<span>투표</span></QuestionStat>
      <QuestionStat>1<span>답변</span></QuestionStat>
      <QuestionStat>2<span>조회</span></QuestionStat>
      <QuestionTitleArea>
        <QuestionLink href="">자바스크립트로 따옴표로 파싱 어떻게 해요?</QuestionLink>
        <Tag>자바스크립트</Tag>
        <Tag>파싱</Tag>
        <Tag>따옴표</Tag>
        <Tag>문자열</Tag>
        <WhoAndWhen>
          2분 전에
          <UserLink>김뚝딱</UserLink>
          이가 질문함
        </WhoAndWhen>
      </QuestionTitleArea>
    </StyledQuestionRow>
  )
}

export default QuestionRow;