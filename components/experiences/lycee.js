import { useMedia } from 'react-media';
import { Slide } from 'react-slideshow-image';

const Lycee = () => {
	const isMobile = useMedia({ query: '(max-width: 640px)' });
	return (
		<div className="">
			<div className="bg-gray-900 p-8">
				<h3 className="text-4xl text-white text-center">
					<span className="">Janson de Sailly</span>
				</h3>
			</div>
			<div className="px-8 py-3">
				<h4 className="blue-title">Contexte</h4>
				<blockquote className=" bg-gray-100 px-4 py-2 text-gray-700">
					Parallèlement à mon activité principale (Travianby.us), j’ai exploré
					d’autres domaines dans la programmation.
				</blockquote>
			</div>

			<div className="px-8 py-3">
				<h4 className="blue-title">Mission</h4>
				<div>
					<p className="mb-2">
						L’expérience que j’avais accumulé en PHP m’a permis de faire
						quelques contrats via la plateforme freelancer.com: ajout de
						fonctionnalité à wecovermusic.com (un service de streaming vidéo
						concurrentiel de VEVO), ainsi qu’aptoservices.fr, une plateforme de
						mise en relation entre particuliers pour se rendre des services
						rémunérés. J’ai ensuite découvert le C# en programmant de petits
						jeux sur Unity 3D.
					</p>
					<p className="mb-2">
						Souhaitant relever plus de challenges techniques pour aller au delà
						de la création de “simples” sites web, j’ai créé un site permettant
						de recevoir et envoyer des bitcoins en utilisant le protocole RPC
						pour communiquer avec un daemon bitcoin, et le tout hébergé sur le
						réseau TOR.
					</p>
					<p className="mb-2">
						Peu après, pour mon projet de terminale, j’ai découvert l’embarqué
						en concevant un traqueur de véhicule. Dans un petit boitier, j’ai
						fait tenir un micro-contrôleur couplé à une antenne GPS et une
						antenne 3G, et ai codé (en C) un programme qui envoyait
						régulièrement la position du système à une API (codée en PHP). Pour
						visualiser la position du véhicule, j’ai codé une application mobile
						(en C#, avec Unity) qui permettait de régler l’interval de
						signalisation, et d’ouvrir un lien google maps avec la position du
						véhicule pour destination. J’ai reçu un 18/20 coefficient 12 pour
						mon travail, ce qui m’a permis de frôler la mention très bien au
						baccalauréat.
					</p>
					<p className="mb-2">
						Et suite à une discussion avec un réalisateur qui ne trouvait pas de
						solution pour transférer ses rushes 4K (jusqu’à 500 gigas par
						fichier) à ses collaborateurs, j’ai codé un PoC en C# pour
						transférer d’énormes fichiers entre collaborateurs via le protocole
						bittorrent. Cette méthode a été reprise un an plus tard par{' '}
						<a
							className="text-yellow-600 font-bold"
							href="https://www.resilio.com/sync-business/"
							target="_blank"
						>
							resilio
						</a>
						.
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
						Développement PHP avec le framework codeigniter 3, d’API JSON avec
						Laravel et Silex (le microframework de Symfony)
					</li>
					<li>Communication avec une api RPC</li>
					<li>Développement embarqué en C</li>
					<li>Développement en C# avec le moteur Unity3D</li>
					<li>
						Privatisation des flux torrents pour garantir la sécurité entre les
						interlocuteurs du transfert de données
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Lycee;
