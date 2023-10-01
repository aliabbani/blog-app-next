import React from 'react';
import styles from './authLinks.module.css';
import Link from 'next/link';

const AuthLinks = () => {
  const status = "ntauthenticated"
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">login</Link>
      ) : (
        <>
        <Link href="/write">Write</Link>
        <span className={styles.link}>Logout</span>
        </>
      )
      }
    </>
  )
}

export default AuthLinks;