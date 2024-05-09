import { ACTIONS } from "./Interface";


export default function DigitButton({ digit = "", spanTwo = false, dispatch }) {
  return (
    <button
      className={
        spanTwo
          ? "col-span-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-24 w-12/12"
          : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-24 w-12/12"
      }
      onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})}
    >
      {digit}
    </button>
  );
}
