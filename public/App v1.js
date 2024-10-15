import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1); // state
  const [isOpen, setIsOpen] = useState(false);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleReject() {
    if (step < 3) setStep((s) => step + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !isOpen)}>
        &times;
        {/* to make x marke */}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", clolr: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", clolr: "#fff" }}
              onClick={handleReject}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
