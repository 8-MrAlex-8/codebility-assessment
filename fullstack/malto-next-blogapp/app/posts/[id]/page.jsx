import Link from "next/link";
import posts from "../../data/PostData.ts";
import NoPostFoundScreen from "./screens/NoPostFoundScreen.tsx";

// Notes:
// (1) We set this as an async/await function because, in App Router,
// 'params' can be a Promise. We need 'await' for resolution
// before usage. Also, not doing so returns a warning when testing, and
// the output isn't what the desired output is.
//
// (2) Destructuring "params" is more efficient than manually
// extracting params from 'props'.

const SomePage = async ({ params }) => {
  const { id } = await params; // unwrap if params is a Promise
  const post = posts.find((p) => p.id.toString() === id); // gets the instance of a Post object if id exists in the data file.

  // ui for the existent or non-existent post.
  return (
    <>
      <h1>{post ? post.title : <NoPostFoundScreen />}</h1>
      <Link
        href="/"
        className="underline underline-offset-4 hover:text-blue-800"
      >
        Back to Home
      </Link>
    </>
  );
};

export default SomePage;
