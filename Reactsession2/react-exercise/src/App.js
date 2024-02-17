import Avatar from "./Avatar";
import Profil from "./Profil";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Avatar name="Lin Lanying " imageID="1bX5QH6" size={100} surName="Ying" />
      <Profil gender="male" origin="African"/>
      </header>
    </div>
  );
}

export default App;
