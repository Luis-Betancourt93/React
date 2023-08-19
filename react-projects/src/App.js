import './assets/App.css';
import logo from './assets/logo.svg';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to my world</h1>
      </header>
    </div>
  );
}


export function Page()  {
  return (
    <div className = "page-content">
      <img className= 'logo' src={logo} alt= 'logo' />
      <h1>Fun fact about React</h1>
      <ul className='list'>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
   
  )
} 

