// import Layout from "../components/Layouts/Layout";
import "../styles/main.scss";
import "../components/Skeleton/skeleton.scss"
export default function MyApp({ Component, pageProps }) {
  const Layout=Component.Layout || EmptyLayout
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
const EmptyLayout=({children})=><>{children}</>