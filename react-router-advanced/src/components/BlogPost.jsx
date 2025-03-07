import { useParams } from 'react-router-dom';

function BlogPost() {
  const { postId } = useParams(); // Access dynamic parameter
  return (
    <div>
      <h2>Blog Post {postId}</h2>
      <p>This is the content of blog post {postId}.</p>
    </div>
  );
}

export default BlogPost;