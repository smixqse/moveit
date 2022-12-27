import { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css";

function Timer({ time }: { time: [number, number] }) {
  const [minuteLeft, minuteRight] = String(time[0]).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(time[1]).padStart(2, "0").split("");
  return (
    <div className={styles.countdownContainer}>
      <div>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
      <span>:</span>
      <div>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </div>
    </div>
  );
}

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext);

  return (
    <div>
      <Timer time={[minutes, seconds]} />

      {hasFinished ? (
        <button className={styles.countdownButton} disabled>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
