import styled, { createGlobalStyle } from "styled-components"
import { Reset } from "styled-reset"
import Header from "./components/organisms/Header";
import QuestionsPage from "./components/organisms/QuestionsPage";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&family=Noto+Serif+KR:wght@200..900&display=swap');
body {
  background: #2d2d2d;
  color: #fff;
  font-family: "Noto Sans KR", sans-serif;
}
$`;

function App() {
  return (
    <div>
      <Reset/>
      <GlobalStyle/>
      <Header/>
      <QuestionsPage/>
    </div>
  );
}

export default App;
