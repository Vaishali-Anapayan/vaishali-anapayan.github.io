//import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="secondary" onClick={() => console.log("Clicked")}>
        Hello
      </Button>
      <p>Relevant Courses</p>
    </div>
  );
}

export default App;
