import clsx from "clsx";
import type { NextPage } from "next";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { SiNetlify, SiVercel } from "react-icons/si";

import Layout from "@/layouts/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <main className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold underline">Hello World!</h1>
        <p
          className={clsx(
            "bg-gray-200 dark:bg-gray-700",
            "px-1 rounded-lg text-sm md:text-lg"
          )}
        >
          This is just a starter template, made using Next.js + Typescript +
          Tailwind CSS.
        </p>
        <figure className="flex animate-bounce py-3 my-4 content-center justify-center">
          <Image
            src="https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png"
            alt="Next.jsLogo"
            width={120}
            height={120}
          />
        </figure>
        <div className="text-center my-4 content-center justify-center">
          <code
            className={clsx(
              "bg-gray-200 dark:bg-gray-700",
              "rounded-lg text-sm md:text-lg"
            )}
          >
            npx degit yehezkielgunawan/yehez-nexttailwind-starter [APP_NAME]
          </code>
          <h3>OR</h3>
          <code
            className={clsx(
              "bg-gray-200 dark:bg-gray-700",
              "rounded-lg text-sm md:text-lg"
            )}
          >
            npx create-next-app --example
            https://github.com/yehezkielgunawan/yehez-nexttailwind-starter
            [YOUR_APP_NAME]
          </code>
        </div>
        <a
          href="https://github.com/yehezkielgunawan/yehez-nexttailwind-starter/generate"
          target="_blank"
          rel="noreferrer"
        >
          <button
            type="button"
            className={clsx(
              "py-2 px-4",
              "border-2 border-teal-700 dark:border-teal-400",
              "text-teal-800 dark:text-teal-300",
              "hover:bg-teal-200 dark:hover:bg-teal-600",
              "focus:ring-teal-500 focus:ring-offset-teal-200 w-full transition ease-in duration-200",
              "text-center text-base font-semibold",
              "shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            )}
          >
            Use This Template
          </button>
        </a>
        <div className="flex flex-wrap gap-3 justify-center items-center">
          <a
            href="https://github.com/yehezkielgunawan/yehez-nexttailwind-starter"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className={clsx(
                "flex justify-center items-center",
                "text-lg md:text-xl bg-gray-200 dark:bg-gray-700",
                "p-1 md:p-2.5 rounded-lg font-semibold",
                "hover:bg-gray-100 dark:hover:bg-gray-500"
              )}
            >
              <AiFillGithub size={20} className="mr-1" />
              Open In Github
            </button>
          </a>
          <a
            href="https://vercel.com/import/git?s=https://github.com/yehezkielgunawan/yehez-nexttailwind-starter"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className={clsx(
                "flex justify-center items-center  bg-blue-600",
                "rounded-lg font-semibold hover:bg-blue-400",
                "text-lg md:text-xl text-white p-1 md:p-2.5"
              )}
            >
              <SiVercel size={20} className="mr-1" />
              Deploy To Vercel
            </button>
          </a>
          <a
            href="https://app.netlify.com/start/deploy?repository=https://github.com/yehezkielgunawan/yehez-nexttailwind-starter"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className={clsx(
                "flex justify-center items-center  bg-sky-600",
                "rounded-lg font-semibold hover:bg-sky-400",
                "text-lg md:text-xl text-white p-1 md:p-2.5"
              )}
            >
              <SiNetlify size={20} className="mr-1" />
              Deploy To Netlify
            </button>
          </a>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
