import Navbar from './components/navbar';
import Item from './components/item';
import './App.css'

let array = ["Apple","Banana","Apple","Orange","Grape","Apple","Kiwi","Mango","Apple","Peach","Apple","Pear","Apple","Strawberry","Apple","Blueberry","Apple","Raspberry","Apple","Watermelon",];
function App() {

  return (
    <div id="container">
      <Navbar/>
      <Item somu={array} />
    </div>
  )
}

export default App;