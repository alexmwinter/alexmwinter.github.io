import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Layout } from "@/components/Layout"
import Home from "@/pages/home/Home"
import Blog from "@/pages/blog/Blog"
import PostView from "@/pages/blog/PostView"
import Projects from "@/pages/projects/Projects"
import Tools from "@/pages/tools/Tools"
import Experience from "@/pages/experience/Experience"
import Contact from "@/pages/contact/Contact"

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<PostView />} />
          <Route path="projects" element={<Projects />} />
          <Route path="tools" element={<Tools />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
