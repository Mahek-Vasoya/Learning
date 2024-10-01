import "./styles.css";
import LastSeen from "./LastSeen";
export default function App() {
  const dateTime = [
    "2022-01-07T12:04:27Z",
    "2022-02-12T08:16:15Z",
    "2022-03-27T08:04:02Z",
    "2022-05-27T00:52:53Z",
    "2022-06-02T00:35:34Z",
    "2022-06-01T02:53:52Z",
    "2022-04-30T11:11:24Z"
  ];
  return (
    <div className="App">
      {dateTime.map((dt) => (
        <LastSeen dateTime={dt} />
      ))}
    </div>
  );
}
