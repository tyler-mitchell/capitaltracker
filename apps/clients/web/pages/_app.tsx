import { AppProps } from 'next/app';
import Head from 'next/head';
import '../global.css';
import 'raf/polyfill';

const fixReanimatedIssue = () => {
    // FIXME remove this once this reanimated fix gets released
    // https://github.com/software-mansion/react-native-reanimated/issues/3355
    if (process.browser) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window._frameTimestamp = null;
    }
};

fixReanimatedIssue();

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Solito Example App</title>
                <meta name="description" content="Expo + Next.js with Solito. By Fernando Rojo." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="app">
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default CustomApp;
