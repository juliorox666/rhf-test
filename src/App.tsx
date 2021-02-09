import React from "react";
import "./App.css";
import MyForm from "components/MyForm";

const App: React.FC = () => {
  return (
    <div className="app">
      <header>
        <div className="app__title">React Hook Form Test</div>
      </header>
      <div className="app__content">
        <MyForm onSubmitHandler={(data) => JSON.stringify(data)} />
      </div>
    </div>
  );
};

export default App;
