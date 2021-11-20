import React, { useEffect, useState } from "react";
import styles from "./Calculator.module.css";

export default function Calculator() {
  // whenever we need to update the ui when some value of variable changes , we use useState
  const [result, setResult] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setResult(5);
  //   }, 5000);
  // }, []);
  const [operands, setOperands] = useState([]);
  const [operators, setOperators] = useState([]);
  const [operatorClicked, setOperatorClicked] = useState(true);
  const [disableClass, setDisableClass] = useState({});

  // useEffect will be used when we want to do some async task in the background upon some condition.

  // useEffect is consists of 2 parts: 1st is function which will get executed 2nd is the condition on which function will get excuted.
  // condition is written in an array
  // it is similar to setInterval

  let disabledClass = {};

  useEffect(() => {
    if (operatorClicked) {
      setDisableClass({ backgroundColor: "gray", color: "wheat" });
    } else {
      setDisableClass({});
    }
  }, [operatorClicked]);

  const numberHandler = (num) => {
    // setOperands(operands.push(num));

    // setOperators (setState) contains
    setOperands((prevState) => prevState.push(num));
    setOperatorClicked(false);
  };

  const operatorHandler = (op) => {
    setOperators((prevState) => {
      console.log("prevState", prevState);
      console.log("op", op);

      return [...prevState, op];
    });
    setOperatorClicked(true);
  };

  console.log(disabledClass);

  return (
    <>
      <div className={[styles.calcNumRow].join(" ")}>
        <div className={styles.resultBar}>{result}</div>
      </div>
      <div className={styles.calcNumRow}>
        <div onClick={operatorHandler} className={styles.clearBtn}>
          Clear
        </div>
        <div className={[styles.eachBtn, styles.green].join(" ")}>=</div>
        <div className={[styles.eachBtn, styles.red].join(" ")}>/</div>
      </div>
      <div className={styles.calcNumRow}>
        <div onClick={() => numberHandler(7)} className={styles.eachBtn}>
          7
        </div>
        <div onClick={() => numberHandler(8)} className={styles.eachBtn}>
          8
        </div>
        <div onClick={() => numberHandler(9)} className={styles.eachBtn}>
          9
        </div>
        <div className={[styles.eachBtn, styles.red].join(" ")}>*</div>
      </div>
      <div className={styles.calcNumRow}>
        <div onClick={() => numberHandler(4)} className={styles.eachBtn}>
          4
        </div>
        <div onClick={() => numberHandler(5)} className={styles.eachBtn}>
          5
        </div>
        <div onClick={() => numberHandler(6)} className={styles.eachBtn}>
          6
        </div>
        <div className={[styles.eachBtn, styles.red].join(" ")}>-</div>
      </div>

      <div className={styles.calcNumRow}>
        <div onClick={() => numberHandler(1)} className={styles.eachBtn}>
          1
        </div>
        <div onClick={() => numberHandler(2)} className={styles.eachBtn}>
          2
        </div>
        <div onClick={() => numberHandler(3)} className={styles.eachBtn}>
          3
        </div>
        <div
          onClick={() => operatorHandler("+")}
          className={[styles.eachBtn, styles.red].join(" ")}
          style={disableClass}
        >
          +
        </div>
      </div>
    </>
  );
}
