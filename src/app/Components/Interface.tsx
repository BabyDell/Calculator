"use client";
import { useReducer, useState } from "react";
import DigitButton from "./DigitButton";
import OperationButton from "./OperandButton";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        //returns new state object
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
  }
}

export default function Interface() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="background bg-slate-800 w-screen h-screen">
      <div className="container w-3/12 ml-auto mr-auto pt-28">
        <div className="output bg-slate-300 mb-2 w-full h-36">
          <div className="prevOutput">
            {previousOperand} {operation}
          </div>
          <div className="currOutput">{currentOperand}</div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <OperationButton operation="AC" dispatch={dispatch} spanTwo={true} />
          <OperationButton operation="DEL" dispatch={dispatch} />
          <OperationButton operation="÷" dispatch={dispatch} />
          <DigitButton digit="7" dispatch={dispatch} />
          <DigitButton digit="8" dispatch={dispatch} />
          <DigitButton digit="9" dispatch={dispatch} />
          <OperationButton operation="X" dispatch={dispatch} />
          <DigitButton digit="4" dispatch={dispatch} />
          <DigitButton digit="5" dispatch={dispatch} />
          <DigitButton digit="6" dispatch={dispatch} />
          <OperationButton operation="-" dispatch={dispatch} />
          <DigitButton digit="1" dispatch={dispatch} />
          <DigitButton digit="2" dispatch={dispatch} />
          <DigitButton digit="3" dispatch={dispatch} />
          <OperationButton operation="+" dispatch={dispatch} />
          <DigitButton digit="0" dispatch={dispatch} />
          <DigitButton digit="." dispatch={dispatch} />
          <OperationButton operation="=" dispatch={dispatch} spanTwo={true} />
        </div>
      </div>
    </div>
  );
}
