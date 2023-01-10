import React, { useMemo } from "react";
import style from ".././styles/Summary.module.css";
import successImage from ".././assets/images/success.png";
import useFetch from "../hooks/useFetch";
export default function Summary({ score, noq }) {
  const getKeyword = useMemo(() => {
    if ((score / (noq * 5)) * 100 < 50) {
      return "failed";
    } else if ((score / (noq * 5)) * 100 < 75) {
      return "good";
    } else if ((score / (noq * 5)) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  }, [score, noq]);

  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
    "GET",
    {
      Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    }
  );

  const image = result ? result?.photos[0].src.medium : successImage;

  return (
    <div className={style.summary}>
      <div className={style.point}>
        <p className={style.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      {loading && <div className={style.badge}>Loading your badge...</div>}

      {error && <div className={style.badge}>An error occured!</div>}

      {!loading && !error && (
        <div className={style.badge}>
          <img src={image} alt="Success" />
        </div>
      )}
    </div>
  );
}

