---
authorid: 2
translatorid: 1
title: 01. Laravel orienté domaine
date: "2019-11-12T22:32:03.284Z"
lol: "coucou frere"
---

WARNING WARNIG TODO ADD HEADER REDIRECT TO STICHER + MENTION HEAVILY ITS HIS WORK, 

GIVE CREDIT 

AVOID CONFUSION WITH MY OWN BRAND

> Les humains pensent par catégories, et notre code devrait le refléter.

Tout d'abord, je n'ai pas inventé le terme "domaine" - je le tiens du célèbre paradigme de programmation DDD qui signifie "domain driven design". D'après le dictionnaire Oxford, un "domaine" peut être décrit comme une "sphère spécifique d'activité ou de connaissance".

Mon utilisation du mot "domaine" ne sera pas exactement identique à la définition d'un domaine en DDD, bien qu'il y ai plusieurs similarités. If vous êtes familier du DDD, vous découvrirez ces similarités au fur et à mesure de la lecture. J'ai souligné de mon mieux toute différence lorsque c'était approprié.

Donc, les domaines. Vous pourriez également les appeler "groupes", "modules" - certaines personnes les appellent des "services". Quelque soit le nom que vous préfériez, les domaines décrivent une portion des problématiques métier que vous essayez de résoudre.

Attendez... Je viens de réaliser que je viens d'utiliser le première terme "corporate" de ce livre : la "problématique métier". Tout au long de ce livre, vous remarquerez que j'ai fait de mon mieux pour mettre à l'écart les aspects théoriques et métier : je suis développeur, et je préfère garder les choses pratiques. Donc un nom plus simple pour ce terme serait "le projet".

Prenons un exemple : une application qui permet de gérer les réservations d'un hôtel. Il faut gérer les clients, les réservations, les factures, les inventaires de l'hôtel, etc.

Les frameworks modernes vous disent de prendre des concepts similaires et de les ranger à des endroits séparés dans votre codebase : les controllers avec les controllers, les models avec les models - vous connaissez la suite.

Mais est-ce qu'un client vous a déjà demandé de "travailler sur les controllers", ou de "peaufiner le dossier des models" ? Non : ils vous demandent de travailler sur la facturation, la gestion client, la réservation...

Ce sont ces groupes que j'appelle domaines. Leur objectif est de grouper des concepts qui devraient être ensemble dans votre application. Bien que cela puisse sembler banal à première vue, c'est plus compliqué que ce que vous pourriez penser. C'est pour ça qu'une partie de ce livre se concentrera sur une liste de règles et de bonnes pratiques pour vous aider à garder votre code propre et bien rangé.