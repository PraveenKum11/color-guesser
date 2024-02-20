import { useEffect, useState } from 'react';
import styles from './App.module.css';

const randomHexColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

enum ResultStatus {
  CORRECT,
  INCORRECT,
}

function App() {

  const [answerColor, setAnswerColor] = useState<string>('');
  const [colorOptions, setColorOptions] = useState<string[]>([]);
  const [resultStatus, setResultStatus] = useState<ResultStatus | undefined>(undefined);

  const colorSetup = () => {
    const color = randomHexColor();
    setAnswerColor(color);
    setColorOptions([color, randomHexColor(), randomHexColor()].sort(() => Math.random() - 0.5))
  }

  useEffect(() => {
    colorSetup();
  }, []);

  const handleColorSelection = (color: string) => {
    if (color === answerColor) {
      // Display correct and get the next one.
      setResultStatus(ResultStatus.CORRECT);
      colorSetup();
    } else {
      // Display incorrect.
      setResultStatus(ResultStatus.INCORRECT);
    }
  }

  return (
    <div className={styles.app}>
      <div style={{ backgroundColor: answerColor }} className={styles.colorBox}></div>

      <div className={styles.options}>
        {colorOptions.map((color) => {
          return (
            <button className={styles.button} key={color} onClick={() => handleColorSelection(color)}>{color}</button>
          );
        })}
      </div>

      {resultStatus === ResultStatus.CORRECT && <p className={`${styles.result} ${styles.correct}`}>Correct</p>}
      {resultStatus === ResultStatus.INCORRECT && <p className={`${styles.result} ${styles.incorrect}`}>Incorrect</p>}
    </div >
  )

}

export default App
