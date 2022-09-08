import Link from "next/link";
import { client } from "../lib/sanity/client";
import { homeQuery } from "../lib/sanity/homeQuery";

export default function Home({ posts }) {
  return (
    <div className="container">
      <main className="static">
      {/* background image */}
      <div id="banner" className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-center bg-norepeat bg-cover py-10">
      {/* title */}
      <h1 className="top-0 right-0 left-0 font-title text-red-500 text-4xl md:text-7xl text-center py-10 px-10 z-40"> <a href="/">Your Bad Angel <br/> Blog</a><Link href="/merch"><a> and Shop</a></Link></h1>
        {/* posts */}
        <ul className="absolute bottom-0 right-0 left-0 z-40 py-10 px-10 text-2xl text-white font-body">
          {posts.map((p) => (
            <li key={p._id}>
              <Link href={`/posts/${p.slug}`}>
                <a>{p.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
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
