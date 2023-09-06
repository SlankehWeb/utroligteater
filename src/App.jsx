import AppRouter from "./components/approuter/approuter";
import Footer from "./components/global/footer/footer";
import NavBar from "./components/global/navbar/navbar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AppRouter/>
      <Footer/>
    </div>
  );
}

export default App;
