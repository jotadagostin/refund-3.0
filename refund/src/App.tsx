import Button from "./components/button";
import { ButtonSearch } from "./components/buttonSearch";
import { Input } from "./components/input";
import { NavLink } from "./components/navlink";
import { Select } from "./components/select";

function App() {
  return (
    <div className="flex flex-col gap-2 p-1">
      <Button size="md">Send</Button>
      <ButtonSearch size="md" />
      <Input label="Title" placeholder="Placeholder" inputSize="lg" />
      <NavLink>Home</NavLink>
      <NavLink variant="active">Home</NavLink>
      <Select />
    </div>
  );
}

export default App;
