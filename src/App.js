import { useState } from 'react';
import testUtils from 'react-dom/test-utils';
import './App.css';

function App() {

  const [paino, setWeight] = useState(0);
  const [gender, setGender] = useState('male');
  const [pullot, setPortions] = useState(0);
  const [aika, setTime] = useState(0);
  const [tulos, setResult] = useState(0);


  function handleSubmit(e) {
    e.preventDefault();

    const litrat = pullot * 0.33;
    const grammat = litrat * 8 * 4.5;
    const polttaa = paino / 10;
    const jäljelläGrammat = grammat - polttaa * aika;
    let alkoHolipitoisuus = 0;
    if (gender === 'male') {
       alkoHolipitoisuus = jäljelläGrammat / (paino * 0.7);
    } else {
      alkoHolipitoisuus = jäljelläGrammat / (paino * 0.6);
    }

    if (alkoHolipitoisuus < 0 || isNaN(alkoHolipitoisuus)) {
      setResult(0);
    } else {
      setResult(alkoHolipitoisuus);
    }

  }

  return (
    <div id="container">
      <h3>Alkometri</h3>
      <form onSubmit={handleSubmit}>

      <div>
        <label>Paino (kg)</label>
      
      <input type="paino" type="number" min="1"
         value={paino}
         onChange={(e) => setWeight(e.target.value)}/>
      </div>
      <div>
        <label>Annosten määrä</label>
      <select type="number" name="pullot"
        value={pullot}
        onChange={(e) => setPortions(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="7">14</option>
          <option value="7">15</option>
        </select>
        </div>

      <div>
        <label>Aika</label>
      <select type="aika"
        value={aika}
        onChange={(e) => setTime(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="7">14</option>
          <option value="7">15</option>
          <option value="1">16</option>
          <option value="2">17</option>
          <option value="3">18</option>
          <option value="4">19</option>
          <option value="5">20</option>
          <option value="6">21</option>
          <option value="7">22</option>
          <option value="8">23</option>
          <option value="9">24</option>
      </select>
      </div>
      <div>
        <label>Sukupuoli</label>
        <input type="radio" name="sukupuoli" value="male" defaultChecked onChange={(e) => setGender(e.target.value)}/>
        <label>Mies</label>
        <input type="radio" name="sukupuoli" value="female" onChange={(e) => setGender(e.target.value)}/>
        <label>Nainen</label>
      </div>

      <div>
        <output>{tulos.toFixed(1)}</output>
      </div>

      <button>Laske</button>
      
      
    </form>
    </div>
    
  );
}

export default App;
