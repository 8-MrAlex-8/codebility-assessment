// using this as the "main page" for easier remembrance of which
// page is the hero or index page.

import NavBar from "./components/ui/NavBar"
import Footer from "./components/ui/Footer"
import PostsScreen from "./components/PostsScreen"

export default function Hero() {
    return (
    <>
    <nav>
      <NavBar />
    </nav>
    <main className = "min-h-screen bg-base-50 py-8 px-12 flex flex-col justify-center align-center gap-8">
      <PostsScreen />
    </main>
    <Footer />
   </>
    )
}