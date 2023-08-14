import React from 'react';
import Head from 'next/head';
import styles from './styles/Login.module.css';
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import GitHubButton from "./login-button";


export const dynamic = 'force-dynamic';
export default async function Login() {
    const supabase = createServerComponentClient<Database>({ cookies });

    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (session) {
        redirect("/");
    }

    return (
      <div className="flex-1 flex justify-center items-center">
        <Head>
          <title>Twitter Museum Login</title>
        </Head>


        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to the <a href="https://best-twitter-museum.vercel.app">Best Twitter Museum!</a>
          </h1>

          <p className={styles.description}>
            Tribute{' '}
          </p>

          <h2 className={styles.title} >
            Happening now
          </h2>

          <div className={styles.grid}>
            <a className={styles.card}>
              <h3>Login &rarr;</h3>
              <p>GitHub OAuth</p>

            </a>

            <div className={styles.githubButtonContainer}>
              <GitHubButton />
            </div>

          </div>

        </main>
        
        <footer className={styles.footer}>
          <a href="https://next.new" target="_blank" rel="noopener noreferrer">
            Created with&nbsp;<b>next.new</b>&nbsp;⚡️
          </a>
            <a href="https://supabase.com/" target="_blank" rel="noopener noreferrer">
            &amp; &nbsp;<b>Supabase</b>&nbsp;💚
            </a>
        </footer>

        
      </div>
    );
}

