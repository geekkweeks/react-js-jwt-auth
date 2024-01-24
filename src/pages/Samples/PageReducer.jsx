import { useReducer } from "react";

const reducer = (state, action) => {
  console.log(action);
  if (action.type === "increment_age") {
    return {
      age: state.age + 1,
    };
  }

  if (action.type === "decrement_age") {
    return {
      age: state.age > 0 ? state.age - 1 : 0,
    };
  }

  throw Error("Unknown action.");
};

const PageReducer = () => {
  const [state, dispatch] = useReducer(reducer, { age: 12 });

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "increment_age" });
        }}
      >
        Increament age
      </button>
      <br />
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "decrement_age" });
        }}
      >
        Decrement age
      </button>

      <p>Your age is {state.age}</p>
    </div>
  );
};

export default PageReducer;
