import React, { useState } from "react";

const styles = {
  content: {
    width: 300,
    display: "flex",
    padding: "10px 0",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    fontSize: 12,
    borderRadius: "4px",
    boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"

  },
  title: {
    fontSize: 14,
    fontWeight: 400
  },
  introText: {
    textAlign: "center"
  },
  picture: {
    width: "100%",
    height: 100,
    backgroundImage: "url(https://picsum.photos/100/200)",
    backgroundPosition: "center bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
}

const Card = ({ title, intro}) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <div style={styles.content}>
      <h1 style={styles.title}>{title}</h1>
      <div style={styles.picture} />
      <p style={styles.introText}>{showMore ? intro : `${intro.slice(0, 25)}...`}</p>
      <button onClick={()=>setShowMore(prevState => !prevState)}>{showMore ? 'Show less' : 'Show more'}</button>
    </div>
  )
}

export default Card;
