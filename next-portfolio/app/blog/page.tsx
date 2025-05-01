
import NavWeb from "../_nav/page";
import Intro from "./Intro";
import Blog from "./Blog";
import NavBlog from "./NavBlog";


export default function Page() {

  return (
    <>
      <main>
        <NavWeb />
        <div className={`mt-[45px]`}>
          <div className="flex">
            <Intro />
            <Blog />
            <NavBlog />
          </div>
        </div>
      </main>
    </>
  );
}
