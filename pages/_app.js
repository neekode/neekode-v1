import '../src/styles/globals.css';
import { Provider } from 'react-redux';
import Layout from '../src/components/Layout';
import store from '../src/redux/store';

/* Entry Point into the Application.  */
export default function MyApp({
  Component,
  pageProps
}) {
  return (
    <Provider store={ store }>
      <Layout>
        <Component { ...pageProps } />
      </Layout>
    </Provider>
  );
}
