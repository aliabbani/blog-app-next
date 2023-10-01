"use client"

import React from 'react';
import styles from './themeToggle.module.css';
import Image from "next/image";
import Link from "next/link";

const ThemeToggle = () => {
  return (
    <div className={styles.container}>
      <Image src="/moon.png" alt="/" width={14} height={14} />
      <div className={styles.ball}>1</div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  )
}

export default ThemeToggle;