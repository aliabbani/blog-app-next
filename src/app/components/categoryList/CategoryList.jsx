import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/categories", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// };

const CategoryList = async () => {
  // const data = await getData();
  const data = [
    {_id: 1, category:"category", fashion: "fashion", img: "style.png", title: "title1"}, 
    {_id: 2, category:"category", fashion: "food", img: "style.png", title: "title2"}, 
    {_id: 3, category:"category", fashion: "travel", img: "style.png", title: "title3"}, 
    {_id: 4, category:"category", fashion: "culture", img: "style.png", title: "title4"}, 
    {_id: 5, category:"category", fashion: "coding", img: "style.png", title: "title5"},
    {_id: 6, category:"category", fashion: "style", img: "style.png", title: "title6"}
  ]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            // className={`${styles.category} ${styles[item.slug]}`}
            className={`${styles.category} ${styles.fashion}`}
            key={item._id}
          >
            {item.img && (
              <Image
                // src={item.img}
                src="/style.png"
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;