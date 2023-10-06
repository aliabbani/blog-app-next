import Menu from "../components/Menu/Menu";
import CardList from "../components/cardList/CardList";
import styles from "./blogPage.module.css";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;

  const { cat } = searchParams;

  console.log("searchParams", searchParams);
  console.log("page in blog route", page);
  console.log("cat", cat);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
