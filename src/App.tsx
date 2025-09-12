import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert>My Alert</Alert>
      <Button color="secondary" onClick={() => console.log("Clicked")}>
        Hello
      </Button>
    </div>
  );
}

export default App;
