import AppRouter from "./routes/AppRouter";
import Header from "./components/Header";
import Footer from './components/Footer'; 

export default function App() {
  return (
    <>
      <Header />
      
      <main>
        <AppRouter />
      </main>

      <Footer /> 
    </>
  );
}
