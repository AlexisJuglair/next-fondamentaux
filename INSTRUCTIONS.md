# Style et Font

### 💡 Ajouter du Style et des polices

## 📝 Tes notes

Détaille ce que tu as appris ici, sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Il existe plusieurs manières d’ajouter du style dans une application `React`/`Next`, les plus courantes sont via :

- Global Styles
- `CSS` modules
- `Tailwind`
- `Sass`
- CSS-in-JS (`Styled Component`, `emotion` etc ..)

📑 Le lien vers la doc [https://nextjs.org/docs/app/building-your-application/styling](https://nextjs.org/docs/app/building-your-application/styling)

## Exercice

Dans cet exercice tu vas essayer les 3 manières les plus courantes avec Next. Tu vas devoir aller modifier la page `about`.

Dans un premier temps avec le Global Style du fichier `globals.css` nous avons ajouté, une classe qui permet d’agrandir la `font` à `26px`

```css
.title {
  font-size: 26px; /* Définit la taille de la police à 26 pixels */
}
```

Ensuite ajoute un style avec `tailwind` pour que le lien `<Link>` ait un style de bouton

```tsx
'rounded border border-gray-400 bg-white px-4 py-2 font-bold text-gray-800 hover:bg-gray-100'
```

Fichiers

- `exercise/about/page.exercice`

## Bonus

### 1. 🚀 CSS Module

CSS Module permet d’éviter les collisions de noms (contrairement au style global). Pour fonctionner il faut créer un fichier `‘.module.css’` et l’importer. Exemple

```tsx
import styles from './Button.module.css'

export function Button() {
  return (
    <button type="button" className={styles.error}>
      Destroy
    </button>
  )
}
```

Dans cet exercice nous avons repris la classe `title` mais cette fois-ci à 36px

```css
.title {
  font-size: 36px; /* Définit la taille de la police à 26 pixels */
}
```

Applique cette classe sur

```tsx
<p>Je suis un développeur FullStack Next</p>
```

<aside>
💡 Constate qu’il n’y a pas de collision de nom

</aside>

Fichiers

- `exercise/about/page.exercice`

### 2. 🚀 Style Conditionnel

Il arrive souvent dans une application d’avoir besoin d’appliquer du style de manière conditionnelle, par exemple Si Erreur alors j’applique un style de texte rouge. Pour cela il existe un utilitaire qui nous simplifie le travail : [“clsx”](https://www.npmjs.com/package/clsx)

```tsx
import clsx from 'clsx';

export default function OrderStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center',
        {
          'text-red-500': status === 'pending',
          'text-green-500': status === 'paid',
        },
      )}
    >
    // ...
)}
```

Dans cet exercice bonus tu vas devoir adapter la page `About` et appliquer un style conditionnel `text-red-500` si l’utilisateur est un admin sur le texte `Je suis un développeur FullStack Next`.

🤖 Utilise le code ci-dessous pour avoir un admin de manière aléatoire et utilise `isAdmin` pour faire du rendu conditionnel

```tsx
const idAdmin = Math.random() > 0.5
```

Fichiers

- `exercise/about/page.exercice`

## Aller plus loin

📑 Le lien vers la doc [https://www.npmjs.com/package/clsx](https://www.npmjs.com/package/clsx)

## Ils vont t’aider

- **🐶 Mowgli le Chien** : _Mowgli te guidera dans chaque exercice._
- **🤖 Ash le Robot** : _Ash le Robot te donnera du code utile._
- **🚀 Julia La roquette** : _Julia te donnera des défis supplémentaires._
- **⛏️ Hulk le Marteau** : _Quand du code à supprimer est présent_
- **👨‍✈️ Hugo le chef de projet** : _Va t'aider sur les spécifications du projet_

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack](https://go.mikecodeur.com/cours-next-avis?entry.1912869708=Next%20PRO&entry.1430994900=01.Les%20Fondamentaux&entry.533578441=06%20Styling).
