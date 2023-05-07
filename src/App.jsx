import DataBlock from "./Components/DataBlock";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <DataBlock url={import.meta.env.VITE_API_DATA_URL} header={'data component'} />
      <DataBlock url={import.meta.env.VITE_API_ERROR_URL} header={'error component'} />
      <DataBlock url={import.meta.env.VITE_API_LOADING_URL} header={'loading component'} />
    </div>
  );
}