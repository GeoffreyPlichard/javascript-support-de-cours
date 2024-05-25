# Navigateur et HTTP

La principale fonctionnalité du navigateur est d'aller chercher une ressource sur le serveur et de l'afficher.

Pour trouver cette ressource il utilise le **Uniform Resource Identifier** (URI), qui permet de trouver la localisation de cette ressource.

Quand on tape une url, le navigateur va la diviser en 3 parties:

- Le protocol (http, ftp...)

- Le nom du serveur (www.google.com)

Pour trouver le serveur, le navigateur doit communiquer avec un Name Server, qui va "traduire" le nom du serveur en adresse IP. Grâce à cette adresse IP, le navigateur va pouvoir communiquer avec le serveur. Le plus souvent sur le port 80.

- La ressource (.html, .txt, .json...)
