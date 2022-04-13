import './App.css';

function App() {
  return (
    <div className="App">
      <div className="flex flex-col md:flex-row">
        <div className="mx-10 bg-green-300">Elemento 1</div>
        <div className="mx-10 bg-violet-500">Elemento 2</div>
        <div className="mx-10 bg-orange-500">Elemento 3</div>
        <div className="mx-10 bg-blue-500">Elemento 4</div>
        <button className="border-2 border-blue-900 p-3 bg-violet-900 text-white hover:bg-yellow-600 hover:scale-2 rounded-lg shadow-lg">Click here!!</button>
        <button className="border-2 border-blue-900 p-3 bg-violet-900 text-white hover:bg-yellow-600 hover:scale-2 rounded-lg shadow-lg">Boton numero 2!!</button>

      </div>
       
    </div>
  );
}

export default App;
