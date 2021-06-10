Le thème choisi pour ce projet est le jeu Rocket League. Le but est ainsi de rendre disponible les données sur les items, mouvements et maps du workshop existants.

Pour mener à bien ce projet, nous avons utilisé Nodejs pour la partie Back, couplé à Vuejs pour la partie Front. Nous avions déjà des bases solides en Node et en Javascript en général, nous avons donc décidé de partir sur ce langage pour consolider nos connaissances et nous améliorer. Concernant Vue, nous connaissions à peine le framework et avons voulu apprendre et découvrir comment l'utiliser. Cela  nous servira par la suite dans nos études ou en entreprise. 


# Installation

- Lancer le script "Setup.bat" qui démarrera les deux serveurs : back et front.
Les deux serveurs tournent sur deux ports différents (3000 pour la partie back, 8080 pour la partie front).
- Si erreur lors du lancement du script : 
    - Lancer un terminal dans le dossier du projet
    - cd back
    - npm install
    - npm run devStart
    - Lancer un second terminal dans le dossier du projet
    - cd front
    - npm run serve

Le site sera alors disponible à l'adresse localhost:8080.


# Liens

Le lien Github est disponible sur la page principale de notre site.

# Controllers développés
Les données de l'API sont disponibles dans le dossier **back/Data**. Chaque fichier JSON répertorie chaque type de données.

Sur l'API, 3 controllers ont été développés : 
- Le 1er référence les moves réalisables sur le jeu Rocket League, avec une vidéo explicative de ce dernier. Les données sont dans le fichier **Data/moves.json**.
- Le second référence les items disponibles sur Rocket League, avec une image donnant un apercu de ce dernier. Les données sont dans le fichier **Data/items.json**.
- Le dernier réference les maps disponibles dans le workshop Steam du jeu. Les données sont disponibles dans le fichier **Data/workshop.json**.

Pour chaque type de donnée, plusieurs actions sont disponibles. Nous pouvons soit récupérer la liste complète de la donnée en question (GET), soit récupérer un objet en particulier (GET), soit ajouter un objet (POST), soit supprimer un objet (DELETE), soit mettre à jour un objet (PUT).

L'API externe que nous avons utilisé est l'API Twitch. Elle renvoie uniquement les streamers actuellement connectés et en train de streamer du Rocket League, et affiche ceux qui ont le plus de viewers, rangés par nombre de viewers jusqu'au 20ème.

L'ajout, mise à jour et suppression de données n'est faisable sur le site uniquement si vous êtes connecté en administrateur. Cependant, le système de session n'a pas encore été terminé, par exemple les routes d'ajout et de suppression sont tout de même accessibles si on les rentre en dur dans la barre de recherche, même si l'utilisateur n'est pas connecté. 
Lorsque connecté en administrateur, au survol d'un item du menu, vous aurez un sous menu permettant d'ajouter une donnée de votre choix. 
Vous aurez également la possibilité de supprimer une donnée, au moyen d'une croix qui apparaît pour les moves et items, une icône de suppression pour les maps workshop.

Les comptes existants sont les suivants : 

**Membre** :
- username : toto
- password : toto

**Administrateur** :
- username : admin
- password : admin

# Perspectives 

Dans le futur (si le projet devait se poursuivre sur un plus long terme), nous aimerions y intégrer un formulaire d'inscription, de nouveaux rôles, y compris des actions possibles si on est uniquement membre(car être uniquement membre ne donne actuellement aucun avantage).
Nous aimerions aussi passer sur une BDD hébergée pour pouvoir mettre en ligne le site, et garder les données sécurisées.

