import logo from './logo.svg';
import './App.css';
import Profile from './Profil/Profile';
import pic from "../src/MYPICTURE.jpg"


function App() {
  
  return (
    <div className="App">
      
    <Profile FullName="mostfa hmida" 
     bio="19 years old" 
     profession="beginner developer">
       <img src={pic} style={{width:"50%", border:"1px solid blacknpm",borderRadius:"20px"
  }} alt='ME'></img></Profile> 
    
    </div>
  );
}

export default App;
