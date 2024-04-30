import Link from "next/link";

const Homepage = () => {
  return (
    <div>
      <h1 className="text-5xl">HomePage</h1>
      <br></br>
      <Link href="/about" className="btn">
        About Page Here
      </Link>
    </div>
  );
};
export default Homepage;
