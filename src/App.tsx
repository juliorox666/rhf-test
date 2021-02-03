import React, { useState } from "react";
import "./App.css";
import MyForm from "components/MyForm";

const App: React.FC = () => {
  const [userName, setUserName] = useState("");
  return (
    <div className="app">
      <header>
        <div className="app__title">React Hook Form Test</div>
      </header>
      <div className="app__content">
        Nome: {userName}
        <MyForm onSubmitHandler={setUserName} />
      </div>
    </div>
  );
};

export default App;
