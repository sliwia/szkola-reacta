import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { Input, Button, Textarea } from "./components/Form"
import Card from "./components/Card";
import Menu from "./components/Menu";
import MenuItem from "./components/MenuItem";
import Employees from "./components/Employees";

const employeesMockData = [
  {
    fullName: 'Jan Kowalski',
    age: 30,
    occupation: 'tester',
    salary: '$2000'
  },
  {
    fullName: 'Pawel Kowalczyk',
    age: 20,
    occupation: 'student',
    salary: '$500'
  }
]

function App() {
  return (
    <div style={{padding: 10}}>
      <Button icon={<FontAwesomeIcon icon={faCoffee} />} label='My button' bgColor='grey' color='white' />
      <br />
      <br />
      <Input bgColor='lightgrey' color="black" borderSize='1px' borderRadius='4px' borderColor="blue" />
      <br />
      <br />
      <Textarea bgColor='lightgrey' color="black" borderSize='1px' borderRadius='4px' borderColor="purple" />
      <br />
      <br />
      <Card
        title="Shrim and Chorizo Paella"
        intro="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like." showMore content="Method: Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes"
      />
      <br />
      <br />
      <Menu>
        <MenuItem label="Link 1" />
        <MenuItem label="Link 2" />
        <MenuItem isActive label="Link 3" />
      </Menu>
      <br />
      <br />
      {employeesMockData.map((value, index) =>
        <Employees
          key={`employer-${index}`}
          fullName={value.fullName}
          age={value.age}
          occupation={value.occupation}

        />)
      }
    </div>
  );
}

export default App;
