import 'stream-chat-react/dist/css/index.css';
import '../styles/globals.css'
import '../styles/CustomPreview.css'
import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router'
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const progress = new ProgressBar({
      size: 4,
      color: "#16a085",
      className: "bar-of-progress",
      delay: 100,
    });
  
    Router.events.on("routeChangeStart", progress.start);
    Router.events.on("routeChangeComplete", progress.finish);
    Router.events.on("routeChangeError", progress.finish);
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
