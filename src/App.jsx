import { Toaster } from "react-hot-toast";
import AppRouter from "./routes/AppRouter";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            border: "1px solid #713200",
            padding: "16px",
          },
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
