import Image from "next/image";
import BannerLogo from "../static/banner.png";

const styles = {
  content: "max-w-7xl flex flex-1 items-center justify-between",
  wrapper:
    "h-max-[10rem] flex items-center justify-center bg-[#FCC017] border-y border-black",
  innerDiv: "space-y-5 px-10 flex=[3]",
  heading: "max-w-xl text-[6rem] font-mediumSerif",
  para: "text-2xl",
  accentedButton: "bg-black text-white py-2 px-4 rounded-full",
  bannerImage: "hidden h-32 md-inline-flex object-contain flex-1",
};

const Banner = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.innerDiv}>
            <h1 className={styles.heading}>Stay Curious.</h1>
            <h3 className={styles.para}>
              Discover stories , thinking and expertise from writers on any
              topic.
            </h3>
            <button className={styles.accentedButton}>Start Reading</button>
          </div>
          <Image
            className={styles.bannerImage}
            src={BannerLogo}
            height={400}
            width={500}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
