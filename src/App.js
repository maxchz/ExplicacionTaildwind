import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <input type="email"/>
        <input type="file"/>
        <input/>
        <input/>
        <input type="text" required/>
        <button type="submit">Submit</button>
        <select required defaultValue={0}> 
          <option disabled value={0}> Selecciones una opcion</option>
          <option> opcion 1</option>
          <option> opcion 2</option>

        </select>


      </form>
     
      
       
    </div>
  );
}

export default App;
