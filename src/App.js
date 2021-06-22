import logo from './logo.svg';
import Navbar from './Navbar';
import Form from './Form';

function App() {
  const name ='Highlight';
  const a =1;
  return (
    <div className="App">
     <Navbar/>
        <p>
          Hi {name}, your are number {a}
        </p>
        <Form/>
    </div>
  );
}

export default App;
