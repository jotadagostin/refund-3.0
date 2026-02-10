import Button from "./components/button";
import { ButtonSearch } from "./components/buttonSearch";

function App() {
  return (
    <div className="flex flex-col gap-2 p-1">
      <Button size="md">Send</Button>
      <ButtonSearch size="md" />
    </div>
  );
}

export default App;
