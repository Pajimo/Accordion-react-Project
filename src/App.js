import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [qna, setQna] = useState(data);
  return (
    <main>
      <div className="container">
        <header>
          <h3>Questions and answers about Login</h3>
        </header>
        {qna.map(({ id, title, info }) => {
          return (
            <div key={id}>
              <div className="question">
                <h4>{title}</h4>{" "}
                <p>
                  <SingleQuestion info={info} />
                </p>{" "}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default App;
