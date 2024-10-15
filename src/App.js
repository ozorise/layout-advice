import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}
function Steps() {
  const [step, setStep] = useState(1); // state
  const [isOpen, setIsOpen] = useState(false);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleReject() {
    if (step < 3) setStep((s) => step + 1);
  }

  return (
    <div>
      <button className="absolute top-4 right-4 border-0 bg-transparent cursor-pointer text-4xl text-inherit hover:text-indigo-600 top-4 right-[20px]" onClick={() => setIsOpen((is) => !isOpen)}>
        &times;
        {/* to make x marke */}
      </button>
      {isOpen && (
        <div className="bg-stone-100 w-full max-w-[600px] rounded-lg py-7 px-8 sm:px-16 md:px-24 my-24 mx-auto">
        <div className="flex justify-between">
          <div className={step >= 1 ?"numpers" : "numperfalse"}>1</div>
      
          <div className={step >= 2 ? "numpers" : "numperfalse"}>2</div>
      
          <div className={step >= 3 ? "numpers" : "numperfalse"}>3</div>
        </div>
      
        <StepMassage step={step}>{messages[step - 1]}</StepMassage>
      
        <div className="flex justify-between">
          <Button bgColor="#7650f2" textcolor="#fff" onClick={handlePrevious}>
            <span className="text-xs sm:text-sm">👈</span> previous
          </Button>
          <Button bgColor="#7650f2" textcolor="#fff" onClick={handleReject}>
            Next <span className="text-xs sm:text-sm">👉</span>
          </Button>
        </div>
      </div>
      )}
    </div>
  );
}

function StepMassage({ step, children }) {
  return (
    <div className="text-center text-[20px] my-[40px] mx-0 font-bold flex item-center flex-col ">
      <h3> Step {step} : </h3>
      {children}
    </div>
  );
}
function Button({ textcolor, bgColor, onClick, children }) {
  return (
    <button
  
      style={{ backgroundColor: bgColor, color: textcolor }}
      className="rounded-xl cursor-pointer py-[10px] px-[15px] font-bold  text-sm focus:outline-none focus:ring focus:ring-purple-600 focus:ring-offset-2 transition-all duration-300 "
      onClick={onClick}
    >
      {children}
    </button>
  );
}



// text @ font sizw @ font @ text-center @m @p @display @responsive desinge flex @items-center @justfy-betwen @grid @h-screen @grid-rows-[] @overflow-scroll
// style button @hover:@transition-color @duration @focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2   

// style Forlm Element rounded-full border border-stone-200 py-2 text-sm transition-all duration-300 (3s)

//style checkbox Element  h-6 w-6 accent-yellow-400