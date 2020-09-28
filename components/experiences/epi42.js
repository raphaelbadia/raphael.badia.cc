import { useMedia } from 'react-media';
import { Slide } from 'react-slideshow-image';

const Phenix = () => {
	const isMobile = useMedia({ query: '(max-width: 640px)' });
	return (
		<div className="">
			<div className="bg-gray-900 p-8">
				<h3 className="text-4xl text-white text-center">
					<span className="">Epitech</span> - <span>42</span>
				</h3>
			</div>
			<div className="px-8 py-3">
				<h4 className="blue-title">Contexte</h4>
				<blockquote className=" bg-gray-100 px-4 py-2 text-gray-700">
					Étant convaincu que pour apprendre, la pratique fonctionne mieux que
					la théorie, j’ai intégré Epitech dont la pédagogie par projet a
					résonné avec mes expériences passées.
					<br />
					<br />
					Je suis arrivé 6ème sur 600 élèves à l’issue de la “piscine”, période
					intensive (6 semaines de 9h à 23h, 7j / 7) durant laquelle j’ai été
					formé au C via des exercices et des minis-projets. J’ai terminé mon
					année avec 65 crédits sur 60, suite à quoi j’ai décidé de quitter
					epitech pour rejoindre l’école 42, qui proposait le même programme
					qu’Epitech avec encore plus de défis à relever.
					<br />
					<br />À travers ces deux écoles, j’ai effectué près d’une trentaine de
					projet couvrant différentes notions de programmation.
				</blockquote>
			</div>

			<div className="px-8 py-3">
				<h4 className="blue-title">Programmation système</h4>
				<ul class="list-disc my-3">
					<li>
						Réécriture des principales fonctions de la libC (librairie standard
						du C)
					</li>
					<li>Réécriture de la fonction printf</li>
					<li>
						Développement d’un programme en ligne de commande pour sélectionner
						plusieurs fichiers et les piper à un autre programme
					</li>
					<li>
						réalisation d’un interpréteur de commande UNIX (shell) de type bash
					</li>
					<li>Développement d’un mini chat via les signaux UNIX</li>
					<li>
						développement d'un compilateur et d'une machine virtuelle en suivant
						des spécifications
					</li>
				</ul>
			</div>

			<div className="px-8 py-3">
				<h4 className="blue-title">Programmation graphique</h4>
				<ul class="list-disc my-3">
					<li>Développement d’un visualisateur de carte à points en 3D</li>
					<li>
						Développement d’un logiciel de visualisation de fractale
						(Mandelbrot, Julia)
					</li>
					<li>
						Développement d'un jeu interactif en 3D (similaire à Wolfenstein)
						via la technique du raycasting
					</li>
				</ul>
			</div>

			<div className="px-8 py-3">
				<h4 className="blue-title">Programmation algorithmique</h4>
				<ul class="list-disc my-3">
					<li>Résolution de sudoku</li>
					<li>
						Développement d’un programme qui trouve la plus grande zone libre
						dans une map remplie d’obstacles
					</li>
					<li>
						Développement d’un Tetris dans le terminal utilisant la librairie
						ncurses
					</li>
					<li>
						Développement d’un programme permettant de jouer avec mon IA au jeu
						des allumettes
					</li>
					<li>
						Création d’un algorithme de résolution de graphe pour “faire
						traverser une fourmilière par une colonie de X fourmis”
					</li>
					<li>
						Développement d’un programme (IA) dans le cadre d’un jeu de plateau
						tour par tour dont l’objectif est d’être le dernier à poser des
						pièces
					</li>
					<li>
						Développement d’une IA pour conduire une voiture détectant les
						obstacles via un LIDAR
					</li>
					<li>
						Génération et solution de labyrinthe parfait et imparfait avec
						parcours en profondeur, en largeur, implémentation de A*
					</li>
				</ul>
			</div>

			<div className="px-8 py-3">
				<h4 className="blue-title">Programmation Web</h4>
				<ul class="list-disc my-3">
					<li>
						Développement d’un site de partage de photos (PHP orienté objet,
						javascript sans framework)
					</li>
					<li>
						Développement d’un site de rencontre (node.js, express, vue, Mongo)
					</li>
					<li>
						Réalisation d’un site de streaming vidéo téléchargées via le
						protocole bit torrent. (Node, express, React)
					</li>
					<li>Détection et exploitation de failles dans un site web</li>
				</ul>
			</div>

			<div className="px-8 py-3">
				<h4 className="blue-title">Autre</h4>
				<ul class="list-disc my-3">
					<li>Installation de système Archlinux</li>
					<li>Assemblage de cable ethernet</li>
					<li>Connexion de VM à travers des réseaux locaux</li>
					<li>Scripting bash</li>
					<li>Création de Dockerfiles, mise en place de swarms</li>
					<li>Piscine C++</li>
				</ul>
			</div>
		</div>
	);
};

export default Phenix;
