Angular start
===================

Ce projet fournit une architecture Angular vierge dont on peut se servir pour démarrer un projet angular.
Sa particularité est d'être basé sur Ecmascript5 plutôt que TypeScript et d'utiliser Webpack pour gérer 
les dépendances. Il est destiné à ceux qui ne souhaitent pas avoir à apprendre TypeScript pour démarrer 
en Angular.

----------

Installation
---------------
L'installation du projet se fait en deux étapes

1. En ligne de commande, le placer dans le répertoire du projet.

    cd /chemin/vers/mon/répertoire

2. Installer les dépendances Javascript grâce à npm.

    npm install

3. Lancer le serveur de dev. Ceci aura pour effet de regrouper tout le code Javascript dans un seul fichier bundle/app.js, d'ouvrir une fenêtre dans le navigateur qui se rafraichira automatiquement à tout changement du code.

    npm start
