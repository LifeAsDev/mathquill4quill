import "../styles/globals.css";
import "katex/dist/katex.min.css";
import "@edtr-io/mathquill/build/mathquill.css";
import "react-quill/dist/quill.snow.css";
import "../../mathquill4quill.css"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
