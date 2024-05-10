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
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false
        }
      }
      if (payload.digit === "0" && state.currentOperand === "0") return state;
      if (payload.digit === "." && state.currentOperand.includes("."))
        return state;
      return {
        //returns new state object
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      } 

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        }
      }

      if (state.previousOperand == null) {

        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      

      return {
        ...state,
        previousOperand: evalute(state),
        operation: payload.operation,
        currentOperand: null,
      };

    case ACTIONS.CLEAR:
      return {};
    case ACTIONS.EVALUATE:
      if ( state.previousOperand == null || state.currentOperand == null || state.currentOperand == null) return state;

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evalute(state),
      }
  }

}

function evalute({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(curr)) return "";
  let computation = 0;
  switch (operation) {
    case "+":
      computation = previousOperand + currentOperand;
      break;
    case "-":
      computation = previousOperand - currentOperand;
      break;
    case "+":
      computation = previousOperand / currentOperand;
      break;
    case "x":
      computation = previousOperand * currentOperand;
      break;
  }

  return computation.toString();
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
          <button
            className={
              "col-span-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded h-24 w-12/12"
            }
            onClick={() => dispatch({ type: ACTIONS.CLEAR, payload: {} })}
          >
            AC
          </button>
          <OperationButton operation="DEL" dispatch={dispatch} />
          <OperationButton operation="÷" dispatch={dispatch} />
          <DigitButton digit="7" dispatch={dispatch} />
          <DigitButton digit="8" dispatch={dispatch} />
          <DigitButton digit="9" dispatch={dispatch} />
          <OperationButton operation="x" dispatch={dispatch} />
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
          <button
            className={
              "col-span-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded h-24 w-12/12"
            }
            onClick={() => dispatch({ type: ACTIONS.EVALUATE})}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
