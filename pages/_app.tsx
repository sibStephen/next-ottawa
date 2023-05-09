import { AppProps } from "next/app"

import "styles/globals.css"
import "../components/article/article.css"
// import "../stories/button.css"


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
