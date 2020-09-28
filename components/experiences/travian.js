import { useMedia } from 'react-media';
import { Slide } from 'react-slideshow-image';

const Travian = () => {
	const isMobile = useMedia({ query: '(max-width: 640px)' });
	return (
		<div className="">
			{/* <div className="flex md:hidden phenix phenix-small h-64 sm:h-56 justify-center content-center"></div>
			<div className="hidden md:flex phenix sm:h-64 justify-center content-center">
				<img src="images/phenix-logo.png" className="sm:h-full w-auto" />
			</div> */}
			<div className="bg-gray-900 p-8">
				<h3 className="text-4xl text-white text-center">
					<span className="">Travonline.net</span>
				</h3>
			</div>
			<div className="px-8 py-3">
				<h4 className="blue-title">Contexte</h4>
				<blockquote className=" bg-gray-100 px-4 py-2 text-gray-700">
					Fan d’un jeu de stratégie en temps réel depuis 2008, j’ai découvert
					début 2012 une communauté de développeur qui avaient créé un clone du
					jeu en question pour en faire des serveurs privés. J’ai appris les
					langages PHP / HTML / CSS ainsi que le SQL en autodidacte sur “Le site
					du Zéro” afin de pouvoir participer au développement de ce projet et
					le traduire en français.
				</blockquote>
			</div>

			<div className="px-8 py-3">
				<h4 className="blue-title">Mission</h4>
				<div>
					<p className="mb-2">
						En mai 2012, j’ai lancé un site avec ma propre version qui contenait
						de petits correctifs de bugs et d’optimisations (comme passer du
						moteur MyISAM à ImmoDB, caching de ressources). Au cours des mois
						suivants, j’ai optimisé le moteur du jeu en utilisant les
						transactions SQL pour éviter des problèmes de duplication de données
						quand le serveur était surchargé, réduit le nombre de requêtes SQL
						jusqu'à 80% sur certaines pages, et me suis formé sur linux, apache,
						nginx et iptables afin de pouvoir faire tourner mon jeu sur des
						serveurs dédiés plus performants.
					</p>
					<p className="mb-2">
						En 2013, j’ai co-fondé un nouveau collectif de développeurs, DAFED,
						au sein duquel j’ai participé à la réécriture totale du moteur de
						jeu en PHP 5.4, orienté objet et centré autour d’un système de queue
						(FIFO). Cette refonte m’a permis de gérer un traffic plus important
						(avec des pics d’affluence de 300 joueurs en simultané), ce qui a
						fait décoller mon site et généré 26 millions de page vue en 1 an.
						Parallèlement à la gestion de mes serveurs, j’ai publié gratuitement
						une version obfusquée de mon travail, ce qui m’a attiré de nouveaux
						clients qui souhaitaient personaliser leur propre serveur de jeu.
					</p>
					{/* <Slide easing="ease" duration={5000} infinite>
						<div className="each-slide relative flex justify-center">
							<img
								src="images/phenix-logo.jpg"
								className="pointer-events-none phenix-slide-img"
							/>
							<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
								Splash screen de l'application
							</span>
						</div>
						<div className="each-slide relative flex justify-center">
							<img
								src="images/phenix-shops.jpg"
								className="pointer-events-none phenix-slide-img"
							/>
							<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3 ">
								Liste des boutiques
							</span>
						</div>
						<div className="each-slide relative flex justify-center">
							<img
								src="images/phenix-pickup.jpg"
								className="pointer-events-none phenix-slide-img"
							/>
							<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3 ">
								Empty state du panier vide
							</span>
						</div>
					</Slide> */}
				</div>
			</div>

			<div className="px-8 py-3">
				<h4 className="blue-title">Principales tâches</h4>
				<ul class="list-disc my-3">
					<li>
						Développement en PHP procédural puis orienté object avec
						l’architecture MVC
					</li>
					<li>Protections contre les XSS </li>
					<li>
						Mise en place de cache pour les ressources coûteuse et souvent
						demandées (ex: classement joueurs)
					</li>
					<li>Mise en place de serveur mail</li>
					<li>Installation et maintenance de serveurs dédiés</li>
					<li>Répartition de la charge (load balancer)</li>
					<li>
						Création d’un système de queues pour le moteur de gestion des
						évènements, transactions SQL
					</li>
					<li>
						Utilisation de cron jobs pour les évènements programmés du jeu
						(respawn de créatures, distributions des médailles…)
					</li>
					<li>
						Scripts de migration de schéma de la base, ainsi que de seeding
					</li>
					<li>Intégration de l’API de paiement de Paypal et Paygol (SMS)</li>
				</ul>
			</div>

			<div className="px-8 py-3 mb-5">
				<h4 className="my-3 blue-title">Résultat</h4>
				<p>
					Plus de 20 000 euros de chiffre d'affaire, avec 26 millions de page
					vues en un peu plus d'un an.
				</p>
				<img src="images/travian-resultat.png" />
			</div>
		</div>
	);
};

export default Travian;
