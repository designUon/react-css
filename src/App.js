import logo from "./logo.svg";
import "./App.css";
import CounterComp from "./features/counter/CounterComp";
import InputForm from "./features/inputform/InputForm";
import StyleComp from "./features/styleComponent/StyleComp";
import StyleButton from "./features/styleComponent/StyleButton";
import MyButton from "./features/styleComponent/MyButton";
import CommonButton from "./features/styleComponent/CommonButton";
import SpecialButton from "./features/styleComponent/SpecialButton";

function App() {
  return (
    <div className="App">
      <CounterComp />
      <InputForm />
      {/* <StyleComp/> */}
      <StyleComp>스타일드 컴포넌트</StyleComp>

      {/* <StyleButton color='red'>버튼</StyleButton> */}
      <StyleButton
        color="red"
        bgcolor="pink"
        fontsize="3"
        onClick={(e) => {
          e.preventDefault();
          console.log("이벤트");
        }}
      >
        버튼1
      </StyleButton>

      <hr/>

      <MyButton
        c="blue"
        bc="lightgray"
        fs="2"
        pd="10px 10px"
        onClick={(e) => {
          e.preventDefault();
          alert("이벤트");
        }}
      >
        버튼2
      </MyButton>

      <CommonButton color="red">CommonButton</CommonButton>
      <SpecialButton/>
    </div>
  );
}

export default App;
