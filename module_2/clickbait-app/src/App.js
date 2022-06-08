import React from "react"

const colors = {
  lightGray: '#f7f7f7',
  gray: '#dddddd',
  darkBlue: '#003c96'
}

const styles = {
  boxContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: colors.gray,
    padding: "5px",
    borderBottom: `1px solid ${colors.lightGray}`
  },
  mainTitle: {
    color: colors.darkBlue,
    textTransform: "uppercase"
  },
  text: {
    fontStyle: "italic",
    fontWeight: 500
  }
}

const postsMockData = [
  {
    id: 1,
    title: 'Pilne: Co to był za dzień!',
    intro: 'Tego świat jeszcze nie widział'
  },
  {
    id: 2,
    title: 'Wszyscy zazdroszą Polakom!',
    intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił'
  },
  {
    id: 3,
    title: 'Adam Małysz Zgolił wąs',
    intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy'
  }
]

const parseString = (stringValue) => {
  if (stringValue.length > 25) {
    return `${stringValue.slice(0,25)}...`
  } else { return stringValue}
}

const BlogTitle = ({title, intro}) =>
  <div style={styles.boxContent}>
    <h2 style={styles.mainTitle}>{title}</h2>
    <p style={styles.text}>{parseString(intro)}</p>
  </div>

function App() {
  return (
    <>
      {postsMockData.map(value => <BlogTitle key={`post-${value.id}`} title={value.title} intro={value.intro} />)}
    </>
  );
}

export default App;
