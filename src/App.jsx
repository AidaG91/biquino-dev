import { Toaster } from "react-hot-toast";
import AppRouter from "./routes/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          // Estilos generales para todos los toasts
          style: {
            border: "1px solid #713200",
            padding: "16px",
          },
          // Estilos específicos para toasts de éxito
          success: {
            style: {
              background: "#28a745",
              color: "white",
            },
            iconTheme: {
              primary: "white",
              secondary: "#28a745",
            },
          },
          // Estilos específicos para toasts de error
          error: {
            style: {
              background: "#dc3545",
              color: "white",
            },
            iconTheme: {
              primary: "white",
              secondary: "#dc3545",
            },
          },
        }}
      />

      <Header />

      <main>
        <AppRouter />
      </main>

      <Footer />
    </>
  );
}
