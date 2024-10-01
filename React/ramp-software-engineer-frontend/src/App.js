import "./styles.css";
import CustomComponent from "./CustomComponent";
export default function App() {
  return (
    <div className="App">
      <CustomComponent input={["one", "two", "three"]} />
    </div>
  );
}
