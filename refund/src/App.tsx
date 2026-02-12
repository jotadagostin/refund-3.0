import Button from "./components/button";
import { ButtonSearch } from "./components/buttonSearch";
import { Input } from "./components/input";

function App() {
  return (
    <div className="flex flex-col gap-2 p-1">
      <Button size="md">Send</Button>
      <ButtonSearch size="md" />
      <Input label="Title" placeholder="Placeholder" inputSize="lg" />
    </div>
  );
}

export default App;
