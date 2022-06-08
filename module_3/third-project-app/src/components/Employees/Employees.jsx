import React, { useState } from "react";

const styles = {
  content: {
    display: "flex",
    border: "1px solid black"
  },
  column: {
    flex: 1,
    minHeight: 70
  }
}

const Employees = ({ fullName, age, salary, occupation }) => {
  const [showMore, setShowMore] = useState(false)

  const detailsContent = () => {
    if (showMore) {
      return (
        <div style={styles.column}>
          <div>
            Age: {age}
          </div>
          <div>
            Salary: {salary}
          </div>
          <div>
            Occupation: {occupation}
          </div>
        </div>
      )
    } else {
      return <div style={styles.column}> Click on 'name and surname' and show more :)</div>
    }
  }


  return (
    <div style={styles.content}>
      <div style={styles.column} onClick={()=>setShowMore(prevState => !prevState)}>
        {fullName}
      </div>
      {detailsContent()}
    </div>
  )
};

export default Employees;
