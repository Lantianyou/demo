import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";

const LocalStorageDemo = dynamic(() => import("../components/localStorage"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <p>
          Get started by editing <code>pages/index.js</code>
        </p>
        <div>
          <a href="https://nextjs.org/docs">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <Link href="/memo">React useMemo demo hook</Link>

          <Link href="/localStorage">React useLocalStorage demo hook</Link>
          <LocalStorageDemo />

        </div>
      </main>
    </>
  );
}
