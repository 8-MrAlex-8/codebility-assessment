// I isolated the post data in a separate file in the "data" folder 
// for single responsibility.

// including type declarations as practice
type Post = {
    id: number,
    title: string,
    excerpt: string,
    content: string,
    date: string
}

const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first app.",
    content:
      "Next.js is a React framework that enables server-side rendering and generating static websites...",
    date: "2025-04-15",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content:
      "There are multiple ways to style your Next.js application including CSS modules, Tailwind CSS...",
    date: "2025-04-16",
  },
  // new posts added
  {
    id: 3,
    title: "What is Hydration in React?",
    excerpt: "Understanding hydration and why it's important in SSR frameworks.",
    content:
      "Hydration is the process where React takes HTML that was already rendered on the server and attaches JavaScript to it so it becomes interactive again on the browser...",
    date: "2025-04-17",
  },
  {
    id: 4,
    title: "Static vs Server Rendering",
    excerpt: "Which rendering strategy should you choose?",
    content:
      "Next.js supports both static generation and server rendering. Static generation is great for faster load times on pages that rarely change, while server rendering is ideal when data must be fresh on each request...",
    date: "2025-04-18",
  },
];

export default posts