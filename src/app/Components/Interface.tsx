import DigitButton from "./DigitButton";
import OperandButton from "./OperandButton";

export default function Interface() {


    
  return (
    <div className="bg-slate-800 w-screen h-screen">
      <div className="container w-3/12 ml-auto mr-auto pt-28">
        <div className="output bg-slate-300 mb-2 w-full h-32">
          <div className="prevOutput"></div>
          <div className="currOutput"></div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <DigitButton digit="AC" spanTwo={true} />
          <DigitButton digit="DEL" />
          <OperandButton operand="÷" />
          <DigitButton digit="7" />
          <DigitButton digit="8" />
          <DigitButton digit="9" />
          <OperandButton operand="X" />
          <DigitButton digit="4" />
          <DigitButton digit="5" />
          <DigitButton digit="6" />
          <OperandButton operand="-" />
          <DigitButton digit="1" />
          <DigitButton digit="2" />
          <DigitButton digit="3" />
          <OperandButton operand="+" />
          <DigitButton digit="0" />
          <DigitButton digit="." />
          <OperandButton operand="=" spanTwo={true} />
        </div>
      </div>
    </div>
  );
}
