import "./Home.css";
import articleImage from "../../assets/Article-Writing-1.jpg";

function Home() {
  return (
    <div className='articleHome'>
      <h1 style={{color:'var(--dark-green)'}}> Your Blog - With us</h1>
      <img src={articleImage} alt="" className="artcleImage" />
      <p className="lead">
      Welcome to our blog application, where every click opens a door to a world of knowledge and inspiration. As you step into our digital realm, you'll find yourself surrounded by a treasure trove of articles, essays, and musings on a variety of topics. From the latest trends in technology to the timeless wisdom of philosophy, there's something here to pique everyone's interest.

But our platform is more than just a repository of information; it's a vibrant community where ideas come to life. Engage with fellow readers through thoughtful discussions and lively debates. Share your insights, ask questions, and connect with like-minded individuals who share your passions and interests.
      </p>
    </div>
  );
}

export default Home;
