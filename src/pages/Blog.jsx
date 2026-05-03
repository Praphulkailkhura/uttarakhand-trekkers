import { useParams } from "react-router-dom";
import blogData from "../components/Data/blogData";
import BlogCard from "../components/Blog/BlogCard";
import BlogFaq from "../components/Blog/BlogFaq";

function Blog() {
  const { slug } = useParams();

  const trek = blogData.find((t) => t.slug === slug);

  if (!trek) return <h2>404 - Trek Not Found</h2>;

  return (
    <>
      <BlogCard trek={trek} />
      {trek.faq && <BlogFaq faqs={trek.faq} />}
    </>
  );
}

export default Blog;