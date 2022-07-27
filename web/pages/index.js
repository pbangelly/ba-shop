import Link from "next/link";
import { client } from "../lib/sanity/client";
import { homeQuery } from "../lib/sanity/homeQuery";

export default function Home({ posts }) {
  return (
    <div class="container">
      <main>
      <h1>Your Bad Angel<Link href="/merch"><a>Blog and Shop</a></Link></h1>
        <hr />
        <ul>
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
