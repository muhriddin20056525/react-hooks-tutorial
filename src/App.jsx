import { useEffect, useState } from "react";
import Search from "./components/Search";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        fetch("https://jsonplaceholder.typicode.com/comments")
          .then((res) => res.json())
          .then((data) => setData(data));
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <Search items={data} />
    </div>
  );
}

export default App;
