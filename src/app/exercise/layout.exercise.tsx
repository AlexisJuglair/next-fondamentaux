import React from 'react'
// 🤖 Ajoute les imports suivants, ils seront utiles pour le Layout

import Image from 'next/image'
import Link from 'next/link'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    // 🐶 Par défaut, pour l'exercice nous retournons `{children}`
    // Ce qui revient à ne pas avoir de layout
    // ⛏️ Supprime la ligne ci-dessous, nous allons la remplacer par un layout

    // 🐶 Par la suite nous allons créer le Layout

    // 🤖 Décommente les lignes ci-dessous pour qu'elles contiennent
    // - Un `<main>` avec un `header` et un `footer`
    // Nous avons repris le layout de l'exercice précédent

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200  lg:p-4 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none dark:from-black dark:via-black">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">
        {children}
      </div>

      <div className="text-center">
        <p>Footer exercice</p>
        <p className="item-center flex space-x-4">
          <Link href="/exercise/account/details" scroll={false}>
            Detail
          </Link>
          <Link href="/exercise/account/profile" scroll={false}>
            Profile
          </Link>
          <Link href="/exercise/account/profile/password" scroll={false}>
            Password
          </Link>
        </p>
      </div>
    </main>

    // 🐶 Pense à ajouter le children `{children}` là où tu le souhaites dans le Layout
  )
}
