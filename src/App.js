import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/card/Card";
import CardsContainer from "./components/cardsContainer/CardsContainer";
import Header from "./components/header/Header";

const App = () => {
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const getResult = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/features");
        setData(response.data.result);
      } catch (error) {
        setMsg(error.message + " - couldn't load data! ");
      }
    };
    getResult();
  }, []);

  return (
    <div className="font-heebo">
      <Header />
      <CardsContainer>
        {data.map(({ image, title, details, link }) => (
          <Card image={image} title={title} details={details} link={link} />
        ))}
        {msg && <p className="text-primary">{msg}</p>}
      </CardsContainer>
    </div>
  );
};

export default App;
