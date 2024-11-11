import Link from 'next/link'
import styles from './page.module.css'
import clsx from 'clsx'

const Page = () => {
  const isAdmin = Math.random() > 0.5
  return (
    <div>
      {/* 🐶 Applique le style global `.title` sur l'élément <p> */}
      <p className={clsx(styles.title, {'text-red-500': isAdmin})}>
        Je suis un développeur FullStack Next
      </p>
      {/* 🐶 Applique le style `tailwind` sur le composant `<Link>` pour le transformer en bouton*/}
      <div className="mt-4">
        <Link
          className="rounded border border-gray-400 bg-white px-4 py-2 font-bold text-gray-800 hover:bg-gray-100"
          href="/exercise/account"
        >
          Account
        </Link>
      </div>
      {/* 🐶 Tu peux wrapper d'une `div` avec 'mt-4' pour ajouter un margin top sur le button*/}

      {/* 🐶 Pense à regarder l'exercice bonus*/}
    </div>
  )
}

export default Page
