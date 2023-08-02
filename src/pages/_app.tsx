import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Layout from "@/components/layout/Layout";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Cafecito</title>
			</Head>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				theme={{
					colorScheme: "light",
					primaryColor: "violet",
					fontFamily: inter.style.fontFamily,
				}}
			>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</MantineProvider>
		</>
	);
}

