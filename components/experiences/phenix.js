import { useMedia } from 'react-media';
import BlockQuote from '../BlockQuote';
import ExperienceBody from '../ExperienceBody';
import ExperienceHeader from '../ExperienceHeader';
import Slider from '../Slider';
import SliderImage from '../SliderImage';
import Stack from '../Stack';

const Phenix = () => {
	const isMobile = useMedia({ query: '(max-width: 640px)' });
	return (
		<>
			<ExperienceHeader className="phenix phenix-small" />
			<ExperienceBody>
				<h4 className="blue-title">Contexte</h4>
				<BlockQuote>
					Engagée pour de meilleures habitudes de consommation, l'entreprise
					sociale Phenix met entre les mains des entreprises, collectivités et
					particuliers des moyens faciles pour passer à l'action et soutenir la
					transition vers l'Economie Circulaire.
					<br />
					<br />
					Après avoir racheté Graapz, startup de l'antigaspi, Phenix a décidé de
					relancer une toute nouvelle version de l’application en React Native.
				</BlockQuote>

				<h4 className="blue-title">Mission</h4>
				<Stack>
					<p>
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
					<Slider slidesToShow={2}>
						<SliderImage
							src="images/phenix-logo.jpg"
							text="Splash screen de l'application"
						/>
						<SliderImage
							src="images/phenix-shops.jpg"
							text="Liste des boutiques"
						/>
						<SliderImage
							src="images/phenix-pickup.jpg"
							text="Empty state du panier vide"
						/>
					</Slider>
				</Stack>

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
			</ExperienceBody>
		</>
	);
};

export default Phenix;
