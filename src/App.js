import { useState } from 'react';
import testUtils from 'react-dom/test-utils';
import './App.css';

function App() {

  const [paino, setWeight] = useState(0);
  const [gender, setGender] = useState();
  const [määrä, setPortions] = useState(0);
  const [aika, setTime] = useState(0);
  const [woman, resultW] = useState(0);
  const [man, resultM] = useState(0);

  function calculate(e) {
    e.preventDefault();
    const annostenMäärä = määrä * 0.33
    const poltto = paino / 10
    const polttoJälkeen = paino - (poltto * aika)

  }

  return (
    <div id="container">
      <h3>Alkometri</h3>
      <form>
      <div>
        <label>Sukupuoli</label>
      </div>
      <input type="sukupuoli"
      value={gender}
      onChange={e => setGender(e.target.value)}/>

      <div>
        <label>Paino (kg)</label>
      </div>
      <input type="paino"
         value={paino}
         onChange={e => setWeight(e.target.value)}/>

      <div>
        <label>Annosten määrä</label>
      </div>
      <input type="määrä"
        value={määrä}
        onChange={e => setPortions(e.target.value)}/>

      <div>
        <label>Aika</label>
      </div>
      <input type="aika"
        value={aika}
        onChange={e => setTime(e.target.value)}/>

      <div>
      <button>Laske</button>
      <output>{resultW}</output>
      <output>{resultM}</output>
      </div>
      </form>


    </div>
  );
}

export default App;
