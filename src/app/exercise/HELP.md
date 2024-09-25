# Créer les routes dans ce répertoire

## Exercice

Sur la page d'accueil, le lien "Exercice / About" renvoie vers une erreur 404 car les routes ne sont pas créées (ce qui est normal)

🐶 Crée ta première route `exercise\about` en créant :

- un répertoire
- et un composant React affichant : `Je suis un développeur FullStack Next`

## Bonus

### 1. 🚀 Générer un sous-arbre

Nous allons ici générer un sous-arbre `account` dans `exercise` tel que la route `/exercise/account` soit accessible

🐶 Crée le répertoire `account` dans `exercise` et le composant React associé qui affiche 'Page Account'

🐶 Sur le même principe

- crée la feuille `/exercise/account/details` qui affiche 'Page Détail'
- crée un sous arbre `/exercise/account/profile` contenant 2 feuilles `password` et `reset` tel que
  les routes `/exercise/account/profile/password` et `/exercise/account/profile/reset` soit accessibles et affichent respectivement 'Page Password' et 'Page Reset'

### 2. 🚀 Rendre la route profile accessible

🐶 Fais en sorte que la route `/exercise/account/profile/` soit accessible
