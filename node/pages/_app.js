import "@/styles/globals.css";
import { RidoProvider } from "../context/ridoContext";

export default function App({ Component, pageProps }) {
  return (
    <RidoProvider>
      <Component {...pageProps} />
    </RidoProvider>
  );
}
