
import Banner from "../components/Banner";
import Header from "../components/Header";
import PostCard from "../components/PostCard";

const styles = {
  wrapper: `mx-auto`,
  postList: `flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-col-3`,
  container: `max-w-7xl flex-1`,
  main: `flex justify-center`,
};

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Banner />
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.postList}>
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>
    </div>
  );
}
