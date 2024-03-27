# Naviguer entre pages

### 💡 La bonne manière de naviguer avec Next

## 📝 Tes notes

Detaille ce que tu as appris ici, sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Pour faire des liens en HTML nous utilisons la balise `<a>` exemple

```html
<a href="/login">login</a>
```

- Lorsque l’utilisateur clique sur le lien, le navigateur va demander au serveur de fournir la ressource (charger la nouvelle page).

Avec `React` nous souhaitons avoir une navigation fluide, c’est à dire a ne pas avoir a rechercher la page, on parle de SPA (Single Page Application)

Pour garder ce concept, il faut pouvoir naviguer sans avoir à recharger la au complet.

- Sur les projet React sans Framework on peut utiliser la librairie `react-router-dom` qui contient un composant `Link`

```tsx
import { Link } from "react-router-dom"

<Link to="/login">Login</Link>
```

- Comme Next utilise son propre router, il fournis également son propre composant `Link` qui permet de garder le principe de SPA ainsi que d’autres optimisations / prefetch etc …

```tsx
import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/blog/hello-world">Blog Post</Link>
      </li>
    </ul>
  )
}

export default Home
```

## Exercice

Dans cette exercice nous avons un lien classique `<a>` vers la route `/exercise/account`. Tu vas devoir garder ton site en SPA grâce à Link

Fichiers

- `exercise/about/page`

## Bonus

### 1. 🚀 Gérer la scrollbar

Quand on navigue sur des pages contenant des scrollbar, Next fait par defaut un `scrollToTop`, il nous arrive de vouloir garder la position précédente de la barre. Pour cela il existe un prop `scroll={false}`

```tsx
<Link href="/#hashid" scroll={false}>
  Disables scrolling to the top
</Link>
```

📑 Le lien vers la doc [https://nextjs.org/docs/pages/api-reference/components/link#scroll-1](https://nextjs.org/docs/pages/api-reference/components/link#scroll-1https://nextjs.org/docs/pages/api-reference/components/link#scroll-1)

🐶 Dans cet exercice bonus tu vas devoir gérer correctement la navigation entre la page `/exercise/account` et `/exercise/account/details` qui contienne une scrollbar

Fichiers

- `exercise/account/page`
- `exercise/account/details/page`

###

## Aller plus loin

📑 Le lien vers la doc [https://nextjs.org/docs/pages/api-reference/components/link](https://nextjs.org/docs/pages/api-reference/components/link)

## Ils vont t’aider

- **🐶 Mowgli le Chien** : _Mowgli te guidera dans chaque exercice._
- **🤖 Ash le Robot** : _Ash le Robot te donnera du code utile._
- **🚀 Julia La roquette** : _Julia te donnera des défis supplémentaires._
- **⛏️ Hulk le Marteau** : _Quand du code à supprimer est présent_
- **👨‍✈️ Hugo le chef de projet** : _Va t'aider sur les spécifications du projet_

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack](https://go.mikecodeur.com/cours-next-avis?entry.1912869708=TypeScript%20PRO&entry.1430994900=2.Les%20Fondamentaux&entry.533578441=04%20Les%20Liens).
