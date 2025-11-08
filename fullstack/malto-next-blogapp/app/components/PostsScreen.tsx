import PostCard from "./ui/PostCard"
import posts from "../data/PostData"

const PostsScreen = () => {
    return (
        <>
        <section>
        <h2 className = "text-2xl font-bold self-start">All Posts</h2>
        <p>Read what the world has to say.</p>
      </section>
      <div className = "flex flex-wrap justify-center items-center gap-4">
        {posts.map((post: any) => {
          return(
            <PostCard key = {post.id} title = {post.title} excerpt = {post.excerpt}/>
          )
        })}      
      </div>
      </>
    )
}

export default PostsScreen;