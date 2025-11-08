import NavBar from "./screens/components/NavBar"
import Footer from "./screens/components/Footer"
import PostsScreen from "./screens/PostsScreen"

export default function Home() {
  return (
    <>
    <nav>
      <NavBar />
    </nav>
    <main className = "min-h-screen bg-base-50 py-8 px-12 flex flex-col justify-center align-center gap-8">
      {/* Most of the instructions are satisfied through this component: */}
      <PostsScreen /> 
    </main>
    <Footer />
   </>
    )
}
