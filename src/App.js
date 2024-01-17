import './App.css';
import { useContext } from 'react';
import SideCarousal from './components/SideCarousal';
import AreaCard from './components/AreaCard';
import PerimeterCard from './components/PerimeterCard';
import AngleCard from './components/AngleCard';
import { validSides } from './math/math'

function App() {


  const text = validSides(side1, side2, side3) ? "" : "Length of any side can't be greater than sum of the other two !"


  return (
    <div className="App">
      <h1 data-testid="side1-length">
        Side 1: {side1}
      </h1>
      <h1 data-testid="side2-length">
        Side 2: {side2}
      </h1>
      <h1 data-testid="side3-length">
        Side 3: {side3}
      </h1>
      <h3 data-testid="validity-check">
        {text}
      </h3>

      <SideCarousal />
      <div style={{ height: "80px" }}></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AreaCard />
        <PerimeterCard />
        <AngleCard />
      </div>
    </div >
  );
}


export default App;
