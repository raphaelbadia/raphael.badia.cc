import { useMedia } from 'react-media';
import { Slide } from 'react-slideshow-image';
import BlockQuote from '../BlockQuote';
import ExperienceBody from '../ExperienceBody';
import ExperienceHeader from '../ExperienceHeader';
import Slider from '../Slider';
import SliderImage from '../SliderImage';
import Stack from '../Stack';

const TheCodingMachine = () => {
	const isMobile = useMedia({ query: '(max-width: 640px)' });
	return (
		<div className="">
			<ExperienceHeader className="tcm" />

			<ExperienceBody>
				<h4 className="blue-title">La société</h4>
				<BlockQuote>
					TheCodingMachine est une ESN spécialisée dans le développement web sur
					mesure, sur les principaux framework PHP et JS. Acteur de l’Open
					Source, elle a publié plus de 200 paquets et est très fière de
					contribuer chaque jour au développement de la communauté PHP.
					<br />
					<br />
					La société se concentre sur l’accompagnement technique de toute type
					de projet : plateforme web, intranets, extranets et applications
					mobiles et compte plus de 300 projets à son actif. Elle compte
					plusieurs clients prestigieux : abc salles, Sncf, cinéma Pathé. Elle
					s’appuie sur une communauté de développeurs indépendants basé dans le
					monde entier pour pouvoir délivrer plus rapidement ses
					fonctionnalités.
				</BlockQuote>

				<h4 className="blue-title">Mission</h4>
				<Stack>
					<p>
						J’y ai développé mes compétences en React et Node sur un projet
						d’extranet pour une société d’assurance (Ovatio), et également des
						compétences en Angular (Ionic) dans une équipe Agile composée de 4
						personnes en créant une application mobile pour les clients
						professionnels d’ABC Salles, le leader français de la location
						évènementielle.
					</p>
					<p>
						Dès mon premier jour on m’a placé sur le projet Ovatio : j’y ai
						implémenté les pages permettant de gérer les assureurs, les
						apporteurs d’affaires, générer un contrat d’assurance et de
						l’envoyer par mail… Mes responsables ont constaté que je m’étais
						plongé dans le code rapidement et était devenu autonome très
						rapidement dans le projet, et m’on transféré vers l’équipe qui
						gérait le plus gros client de la boîte : ABC Salles.
					</p>
					<p>
						Il s’agit du premier site français proposant la location de salles
						pour des événements comme des mariages, des meetings politiques, des
						concerts… On m’y a confié le développement d’une application mobile
						destinée aux propriétaires de salles pour leurs permettre d’ajouter,
						modifier et trier les informations et photos de leurs salles,
						traiter les demandes d’informations et créer des devis.
						L’application étant codée avec Ionic, qui utilisait Cordova, j’ai dû
						relever de nombreux défis de compatibilité entre la webview
						d’android et celle d’iOS, dans un écosystème tout jeune et rempli de
						bugs qui demandait de forker les plugins existants pour patcher les
						problèmes. La version 1 est sortie en janvier 2018 et a été la
						première application de TheCodingMachine utilisant Ionic 3 à sortir.
					</p>
					<Slider>
						<SliderImage
							src="images/tcm-list.jpeg"
							text="Liste des demandes de contact"
						/>
						<SliderImage
							src="images/tcm-photos.jpeg"
							text="Liste des photos d'une salle"
						/>
						<SliderImage src="images/tcm-fiche.jpeg" text="Fiche d'une salle" />
						<SliderImage
							src="images/tcm-contact.jpeg"
							text="Détail d'une demande d'information"
						/>
						<SliderImage
							src="images/tcm-menu.jpeg"
							text="Menu burger de l'application"
						/>
					</Slider>
				</Stack>

				<h4 className="blue-title">Principales tâches</h4>
				<ul class="list-disc my-3">
					<li>Développement de composants angular 4</li>
					<li>Intégration de maquettes compatibles android et iOS</li>
					<li>
						Mise en place de notifications push et d’authentification via
						réseaux sociaux
					</li>
					<li>
						Optimisation de requêtes très lourdes qui n’étaient pas pensé pour
						le mobile (c’était avant 4G){' '}
					</li>
					<li>
						Mise en place de scripts pour récupérer les logs de l’application en
						cours de développement pour faciliter le debugging
					</li>
					<li>Bases de données relationnelles</li>
					<li>
						Développement de composants et de pages avec React, react-router et
						redux à partir de wireframes
					</li>
					<li>Code review</li>
					<li>Rituels agiles</li>
				</ul>

				<h4 className="my-3 blue-title">Résultat</h4>
				<Stack>
					<p>
						Une proposition de CDI que j'ai décliné, et d'après Pierre de TCM (
						<a
							href="https://www.linkedin.com/in/raphael-badia/"
							target="_blank"
							className="text-yellow-600 font-bold"
						>
							Voir l'avis sur Linkedin
						</a>
						)
					</p>
					<img src="images/tcm-bravo.png" />
					<p className="text-gray-700 italic font-light text-xs">
						"Il a exercé ses fonctions avec enthousiasme, dynamisme, motivation,
						efficacité et était particulièrement apprécié par ses collègues."
					</p>
				</Stack>
			</ExperienceBody>
		</div>
	);
};

export default TheCodingMachine;
