import { useMedia } from 'react-media';
import { Slide } from 'react-slideshow-image';
import BlockQuote from '../BlockQuote';
import ExperienceBody from '../ExperienceBody';
import ExperienceHeader from '../ExperienceHeader';
import Stack from '../Stack';

const Travian = () => {
	const isMobile = useMedia({ query: '(max-width: 640px)' });
	return (
		<>
			<ExperienceHeader title="Travonline.net" className="bg-gray-900" />
			<ExperienceBody>
				<h4 className="blue-title">Contexte</h4>
				<BlockQuote>
					Fan d’un jeu de stratégie en temps réel depuis 2008, j’ai découvert
					début 2012 une communauté de développeur qui avaient créé un clone du
					jeu en question pour en faire des serveurs privés. J’ai appris les
					langages PHP / HTML / CSS ainsi que le SQL en autodidacte sur “Le site
					du Zéro” afin de pouvoir participer au développement de ce projet et
					le traduire en français.
				</BlockQuote>

				<h4 className="blue-title">Mission</h4>
				<Stack>
					<p>
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
					<p>
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
				</Stack>

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

				<h4 className="my-3 blue-title">Résultat</h4>
				<Stack>
					<p>Plus de 26 millions de page vues en un peu plus d'un an.</p>
					<img src="images/travian-resultat.png" />
				</Stack>
			</ExperienceBody>
		</>
	);
};

export default Travian;
