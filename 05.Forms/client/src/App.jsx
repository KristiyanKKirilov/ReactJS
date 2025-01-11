import "./index.css";
import ControlledForm from "./components/ControlledForm";
import RefDemo from "./components/RefDemo";
import UnControlledForm from "./components/UnControlledForm";
import Register from "./components/Register";

function App() {
  return (
    <>
      <h1 className ="text-3xl font-bold underline">Hello world!</h1>
      <Register/>
      {/* <UnControlledForm /> */}
      {/* <ControlledForm /> */}
      {/* <RefDemo/> */}
    </>
  );
}

export default App;
