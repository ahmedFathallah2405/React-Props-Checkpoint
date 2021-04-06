import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile';

function App() {
  const alertMyInput=name=>alert(name);
  const styleObject ={fontFamily:'Times New Roman', fontWeight: 'bold',backgroundColor: "khaki"}
  return (
    <div className="App" style={styleObject}>
      <Profile fullName= 'Ahmed Fathallah' bio='Im a Gemini guy' profession='Im a Student' alertMyInput={alertMyInput}>

        <img src='../myProfile.jpg' alt='myProfile' style={{ border: "1px solid #ddd", borderRadius: '4px',
       width: "500px", }} />
       
      </Profile>
    </div>
  );
}

export default App;
