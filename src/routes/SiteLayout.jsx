import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function SiteLayout() {
  return (
    <>
      <ScrollToTop />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            padding: "16px",
          },
          success: {
            style: {
              background: "var(--color-success)",
              color: "white",
            },
            iconTheme: {
              primary: "white",
              secondary: "var(--color-success)",
            },
          },
          error: {
            style: {
              background: "var(--color-error)",
              color: "white",
            },
            iconTheme: {
              primary: "white",
              secondary: "var(--color-error)",
            },
          },
        }}
      />

      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}