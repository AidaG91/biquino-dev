import AppRouter from "./routes/AppRouter";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AppRouter />
      </main>

      {/* Aquí irá el Footer <Footer /> */}
    </>
  );
}
