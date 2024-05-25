# Navigateur et HTTP

La principale fonctionnalité du navigateur est d'aller chercher une ressource sur le serveur et de l'afficher.

## URI

Pour trouver cette ressource il utilise le **Uniform Resource Identifier** (URI), qui permet de trouver la localisation de cette ressource.

Quand on tape une url, le navigateur va la diviser en 3 parties:

- Le protocol (http, ftp...)

- Le nom du serveur (www.google.com)

Pour trouver le serveur, le navigateur doit communiquer avec un **Name Server**, qui va "traduire" le nom du serveur en adresse IP. Grâce à cette adresse IP, le navigateur va pouvoir communiquer avec le serveur. Le plus souvent sur le port 80.

- La ressource (.html, .txt, .json...)

## Protocole HTTP

Le navigateur envoie une requête au serveur, qui va rechercher la ressource et renvoie une réponse avec cette ressource.

Pour ce faire, il utilise l'**Hypertext Transfer Protocol** (HTTP).

Le protocole HTTP utilise des paquets, sorte de conteneur qui enveloppe des milliers de données, pour voyager à travers le réseau. De cette manières il est plus facile de transférer l'information et de ne pas surcharger le réseau.

Ce paquet va contenir des informations sur les données transférées (source, destination, taille...) ce qui va permettre d'envoyer les bonnes données au bon endroit.

## Comment voyagent les paquets ?

Le réseau est constitué de 7 couches (layers) qui suit un modèle: le **modèle d'interconnexion des systèmes ouvert** (OSI).
Ce dernier permet de fournir un langage universel d'interconnexion des réseaux informatiques. Plus on remonte des les couches, plus l'abstraction sera élevée.

Pour prendre l'exemple d'une maison, la couche inférieure constituée des fondations doit suivre des règles très strictes, tandis que le choix de la déco est beaucoup plus permissif.

**Les couches du modèle OSI:**

- La couche physique (Physical Layer)

- La couche de liaison des données (Data Link Layer)

- La couche réseau (Network Layer)

- La couche transport (Transport Layer)

- La couche session (Session Layer)

- La couche présentation (Presentation Layer)

- La couche application (Application Layer)
