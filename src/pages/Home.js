import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.body}>
        <div className={styles.frame}>
          <div className={styles.trip3}>
            <img className={styles.trip1Icon} alt="" src="/trip-1@2x.png" />
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet consectetur. Sed eleifend pellentesque
              lectus sit netus non facilisis. Luctus ut fringilla blandit
              pellentesque quis venenatis. Augue risus in praesent et. Morbi
              vivamus dictum accumsan morbi sed ullamcorper risus a proin.
            </div>
          </div>
          <div className={styles.trip3}>
            <img className={styles.trip1Icon} alt="" src="/trip-11@2x.png" />
            <div className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet consectetur. Sed eleifend pellentesque
              lectus sit netus non facilisis. Luctus ut fringilla blandit
              pellentesque quis venenatis. Augue risus in praesent et. Morbi
              vivamus dictum accumsan morbi sed ullamcorper risus a proin.
            </div>
          </div>
        </div>
        <div className={styles.frame1}>
          <div className={styles.trip2}>
            <div className={styles.loremIpsumDolor2}>
              Lorem ipsum dolor sit amet consectetur. Sed eleifend pellentesque
              lectus sit netus non facilisis. Luctus ut fringilla blandit
              pellentesque quis venenatis. Augue risus in praesent et. Morbi
              vivamus dictum accumsan morbi sed ullamcorper risus a proin.
            </div>
            <img className={styles.trip2Icon} alt="" src="/trip-2@2x.png" />
          </div>
          <div className={styles.trip1}>
            <img className={styles.trip2Icon} alt="" src="/trip-12@2x.png" />
            <div className={styles.loremIpsumDolor2}>
              Lorem ipsum dolor sit amet consectetur. Sed eleifend pellentesque
              lectus sit netus non facilisis. Luctus ut fringilla blandit
              pellentesque quis venenatis. Augue risus in praesent et. Morbi
              vivamus dictum accumsan morbi sed ullamcorper risus a proin.
            </div>
          </div>
          <div className={styles.frame2}>
            <div className={styles.travelTheWorld}>
              Travel The World Through My Lens
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame3}>
        <a className={styles.header}>
          <img className={styles.headerIcon} alt="" src="/header@2x.png" />
          <div className={styles.menu}>
            <button className={styles.blog}>Home</button>
            <button className={styles.blog}>Blog</button>
            <button className={styles.blog}>About</button>
            <button className={styles.contact}>Contact</button>
          </div>
        </a>
        <div className={styles.frame4}>
          <div className={styles.frame5}>
            <div className={styles.footer}>
              <div className={styles.followMeOn}>Follow Me On My Journey</div>
              <div className={styles.vectorParent}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
                <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
              </div>
            </div>
          </div>
          <div className={styles.about1}>
            <div className={styles.loremIpsumDolor4}>
              Lorem ipsum dolor sit amet consectetur. Scelerisque pretium magnis
              purus arcu leo aliquam eget vel vel. Egestas pellentesque
              ridiculus nulla erat sed faucibus sem egestas nullam. Sed
              tristique diam eget pharetra nisl eget nullam aliquam eget.
              Laoreet adipiscing sit tellus mauris nunc eget varius. Quis augue
              tempor mi mattis tellus. Purus habitasse aliquam pretium sed
              vivamus aenean lacus non. Sed nunc integer integer viverra quis
              odio pellentesque in. Non magna id arcu eget varius fringilla
              fermentum adipiscing morbi. Pretium fermentum donec volutpat
              aliquet faucibus volutpat diam.
            </div>
            <div className={styles.aboutMe}>About Me</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
