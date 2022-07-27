import Link from "next/link";
import { client } from "../lib/sanity/client";
import { homeQuery } from "../lib/sanity/homeQuery";

export default function Home({ posts }) {
  return (
    <div className="w-full">
      <main>
      <h1 className="bg-gradient-to-r from-indigo-600 to-fuchsia-400 text-2xl md:text-6xl text-center text-white py-10"> <a href="/">Your Bad Angel Blog</a><Link href="/merch"><a> and Shop</a></Link></h1>
        <hr />
        <ul className="py-10 px-10 text-xl">
          {posts.map((p) => (
            <li key={p._id}>
              <Link href={`/posts/${p.slug}`}>
                <a>{p.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getStaticProps({ }) {
  const posts = await client.fetch(homeQuery);

  return {
    props: {
      posts,
    },
  };
}
