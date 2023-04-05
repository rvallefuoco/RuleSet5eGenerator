import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" />
          </label>

          <label>
            <p>STR</p>
            <input name="str" />
          </label>
          <label>
            <p>DEX</p>
            <input name="dex" />
          </label>          
          <label>
            <p>INT</p>
            <input name="int" />
          </label>
          <label>  
            <p>CON</p>
            <input name="con" />
          </label>
          <label>
            <p>WIS</p>
            <input name="wis" />
          </label>
          <label>
            <p>CHA</p>
            <input name="cha" />
          </label>

          <button type="submit">Generate</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
