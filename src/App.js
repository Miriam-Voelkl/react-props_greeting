import "./styles.css";

export default function App() {
  return (
    <>
      <Greeting name="Anja" />
      <Greeting name="Niklas" />
    </>
  );
}

function Greeting({ name }) {
  return <h1>Hello, {name == "Niklas" ? "Coach" : name}!</h1>;
}
