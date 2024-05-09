import { ACTIONS } from "./Interface";

export default function OperationButton({ operation = "", spanTwo = false, dispatch}) {
  return (
    <button
      className={
        spanTwo
          ? "col-span-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded h-24 w-12/12"
          : "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded h-24 w-12/12"
      }
      onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})}
    >
      {operation}
    </button>
  );
}
