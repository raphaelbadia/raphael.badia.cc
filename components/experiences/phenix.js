import { useMedia } from 'react-media';
import { Slide } from 'react-slideshow-image';

const Phenix = () => {
	const isMobile = useMedia({ query: '(max-width: 640px)' });
	return (
		<div className="">
			<div className="flex md:hidden phenix phenix-small h-64 sm:h-56 justify-center content-center"></div>
			<div className="hidden md:flex phenix sm:h-64 justify-center content-center">
				<img src="images/phenix-logo.png" className="sm:h-full w-auto" />
			</div>
			<div className="px-8 py-3">
				<h4 className="blue-title">Contexte</h4>
				<blockquote className=" bg-gray-100 px-4 py-2 text-gray-700">
					Engagée pour de meilleures habitudes de consommation, l'entreprise
					sociale Phenix met entre les mains des entreprises, collectivités et
					particuliers des moyens faciles pour passer à l'action et soutenir la
					transition vers l'Economie Circulaire.
					<br />
					<br />
					Après avoir racheté Graapz, startup de l'antigaspi, Phenix a décidé de
					relancer une toute nouvelle version de l’application en React Native.
				</blockquote>
			</div>

			<div className="px-8 py-3">
				<h4 className="blue-title">Mission</h4>
				<div>
					<p className="">
						Je suis intervenu avant le commencement du projet par Phenix, afin
						de mettre en place l'architecture du projet et tracer le chemin pour
						les développeurs de l'équipe qui n'avaient encore jamais eu
						l'occasion de travailler avec React Native. J'ai installé et
						configuré les différents modules de tracking de la startup (intercom
						/ firebase / analytics), mis en place des exemples de l'architecture
						redux avec les thunks, développé un helper pour la navigation et un
						mini orm autour de la base de donnée Realm. Enfin, j'ai formé le
						lead de l'équipe sur React Native plus en détail pour qu'il puisse
						reprendre le développement de l'application sereinement.
					</p>
					<Slide easing="ease" duration={5000} infinite>
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
					</Slide>
				</div>
			</div>

			<div className="px-8 py-3">
				<h4 className="blue-title">Principales tâches</h4>
				<ul class="list-disc my-3">
					<li>Setup de l’architecture projet React Native</li>
					<li>Mise en place de la connexion serveur avec WSSE</li>
					<li>
						développement d’Helper pour la database Realm (mise en cache des
						datas) et de navigation (changement de vue simplifié avec
						personnalisation des transitions)
					</li>
					<li>Mise en place Architecture Redux</li>
					<li>Intégration de Remote Config (Firebase)</li>
					<li>
						Configuration outils de trackings de l'application / helper
						(Intercom / Firebase / Analytics)
					</li>
				</ul>
			</div>

			<div className="px-8 py-3 mb-5">
				<h4 className="my-3 blue-title">Résultat</h4>
				<p>
					D'après Jeanne de Phenix (
					<a
						href="https://www.malt.fr/profile/raphaelbadia"
						target="_blank"
						className="text-yellow-600 font-bold"
					>
						Voir l'avis sur Malt
					</a>
					)
				</p>
				<img src="images/phenix-resultat.png" />
				<p className="text-gray-700 italic font-light text-xs">
					"Raphaël a fait un super travail sur notre architecture React Native
					(pour une nouvelle application). Très efficace, il a fourni un travail
					professionnel ! Nous recommandons !"
				</p>
			</div>
		</div>
	);
};

export default Phenix;
