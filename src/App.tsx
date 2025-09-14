//import Alert from "./components/Alert";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Button color="secondary" onClick={() => console.log("Clicked")}>
        Hello
      </Button>
      <p>Relevant Courses</p>
      <Card></Card>
    </div>
  );
}

export default App;
