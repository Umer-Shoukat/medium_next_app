import Image from "next/image";
import Logo from "../static/logo.png";
import { FiBookmark } from "react-icons/fi";
import Link from "next/link";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const styles = {
  wrapper: `flex items-center max-w-[46rem] h-[10rem] gap-[1rem] cursor-pointer`,
  authorContainer: `flex  gap-[.4rem]`,
  authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  authorImage: `object-cover`,
  authorName: `font-semibold`,
  title: `font-bold text-2xl`,
  briefing: `text-[#787878]`,
  detailsContainer: `flex items-center justify-between text-[#787878]`,
  articleDetails: `my-2 text-[.8rem]`,
  bookmarkContainer: `cursor-pointer`,
  category: `bg-[#F2F3F2] p-1 rounded-full`,
  postDetails: `flex-[2.5] flex flex-col`,
  thumbnailContainer: `flex-1`,
};

const PostCard = ({ post }) => {
  const [authorData, setAuthorData] = useState(null);

  const getAuthorData = async () => {
    console.log(
      (await getDoc(doc(db, "users", post.data.author))).data(),
      ":fire"
    );
    setAuthorData((await getDoc(doc(db, "users", post.data.author))).data());
  };

  useEffect(() => {
    getAuthorData();
  }, []);

  console.log(post.data.author);
  return (
    <>
      <Link href={`/post/${post.id}`}>
        <div className={styles.wrapper}>
          <div className={styles.postDetails}>
            <div className={styles.authorContainer}>
              <div className={styles.authorImageContainer}>
                <Image
                  src={`https://res.cloudinary.com/demo/image/fetch/${authorData?.imageurl}`}
                  width={20}
                  height={40}
                />
              </div>
              <div className={styles.authorName}> {authorData?.name} </div>
            </div>

            <h1 className={styles.title}>{post.data.title}</h1>
            <div className={styles.briefing}>{post.data.brief}</div>
            <div className={styles.detailsContainer}>
              <span className={styles.articleDetails}>
                {new Date(post.data.postedOn).toLocaleString("en-US", {
                  day: "numeric",
                  month: "short",
                })}{" "}
                . {post.data.postLength} min read .
                <span className={styles.category}>{post.data?.category}</span>{" "}
              </span>
              <span className={styles.bookmarkContainer}>
                <FiBookmark className="h-5 w-5" />
              </span>
            </div>
          </div>

          <div className={styles.thumbnailContainer}>
            <Image
              height={100}
              width={100}
              src={`https://res.cloudinary.com/demo/image/fetch/${post.data?.bannerimage}`}
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default PostCard;
