# Layout et routes

### 💡 Comprendre les `Layout`

## 📝 Tes notes

Détaille ce que tu as appris ici, sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Lorsque l’on navigue sur un site, il y a souvent une structure commune (exemple, `menu`, `footer`, etc …) et du contenu qui change. Comme nous ne voulons pas avoir à tout recréer à chaque route, il est possible d’utiliser un `Layout`.

- Un `Layout` est une interface partagée entre plusieurs routes
- Un `Layout` est un composant qui affiche un composant enfant `children`

```tsx
const Layout = ({children}) => {
  return (
    <div>
      <h1>Mon site</h1>
      {children}
      <footer>2024</footer>
    </div>
  )
}
```

📑 Le lien vers la doc [https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts)

## Exercice

Précédemment nous avons créé les routes

- `/exercise/about`
- `/exercise/account/details`
- `/exercise/account/profile`
- `/exercise/account/profile/password`
- `/exercise/account/profile/reset`

🐶 Dans cet exercice tu vas devoir créer un `Layout` commun à toutes ces routes

Fichiers

- `exercise/layout`

## Bonus

### 1. 🚀 Nested Layout

Il est possible d’imbriquer les `Layout`, dans cet exercice tu vas devoir créer un `Layout` imbriqué pour les routes qui se situent dans `profile`.

- Comme il s’agit d’une zone (profile) où l’utilisateur doit faire attention, tu vas devoir ajouter un titre `“Zone Danger”` et un background orange

Fichiers

- `exercise/account/profile/layout`

## Aller plus loin

📑 Le lien vers la doc [https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts)

## Ils vont t’aider

- **🐶 Mowgli le Chien** : _Mowgli te guidera dans chaque exercice._
- **🤖 Ash le Robot** : _Ash le Robot te donnera du code utile._
- **🚀 Julia La roquette** : _Julia te donnera des défis supplémentaires._
- **⛏️ Hulk le Marteau** : _Quand du code à supprimer est présent_
- **👨‍✈️ Hugo le chef de projet** : _Va t'aider sur les spécifications du projet_

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack](https://go.mikecodeur.com/cours-next-avis?entry.1912869708=Next%20PRO&entry.1430994900=01.Les%20Fondamentaux&entry.533578441=05%20Les%20Layouts).
