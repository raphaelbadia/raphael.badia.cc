import { useState } from 'react';
import ExperienceCard from '../components/ExperienceCard';
import Nav from '../components/nav';
import Tag from '../components/Tag';
import Tags from '../components/Tags';
import { Dialog } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';

const NullComponent = () => null;

export default function IndexPage() {
	const [DetailsComponent, setDetailsComponent] = useState(null);

	const handleSeeMoreDetails = async (companyName) => {
		const NewComponent = (
			await import(`../components/experiences/${companyName}.js`)
		).default;
		console.log(NewComponent);
		setDetailsComponent(() => NewComponent);
	};

	const closeDetailsDialog = () => {
		setDetailsComponent(null);
	};

	return (
		<>
			<div className="bg-white max-w-screen-lg p-4 lg:mx-auto print:mx-auto">
				<header className="flex flex-col text-blue-900 font-semibold">
					<div className="justify-between hidden sm:flex">
						<span>0647475300</span>
						<span className="">Raphaël Badia</span>
						<span>raphael@badia.cc</span>
					</div>
					<h1 className="text-5xl sm:text-4xl lg:text-5xl text-center sm:mt-4 mb-2">
						Consultant <span className="hidden sm:inline">full stack</span>{' '}
						React / Node
					</h1>
				</header>

				{/* <!-- Photo and text --> */}
				<section className="sm:inline-flex">
					<div className="flex justify-evenly items-center sm:flex-shrink-0 sm:mr-4 lg:mr-10">
						<img src="/images/avatar.jpg" className="h-48 w-48 rounded-full" />
						<div className="flex flex-col pl-3 text-lg text-right sm:hidden">
							<span className="font-semibold text-2xl">Raphaël Badia</span>
							<span>0647475300</span>
							<span>raphael@badia.cc</span>
						</div>
					</div>
					<div className="mt-5 text-gray-700 bg-gray-100 rounded p-3 text-center sm:mt-0 sm:flex-shrink sm:text-left lg:px-6 lg:py-5 lg:text-lg print:text-lg">
						<p>
							Passionné de web depuis l’âge de 15 ans, je suis spécialisé dans
							la création d’applications web pour de grands comptes.
							<span className="hidden md:inline">
								Du service interne à l’extranet d’envergure, je conçois tous mes
								projets avec deux priorités : votre sécurité et la satisfaction
								de vos clients.
							</span>
							<span className="block md:inline">
								Attentif et impliqué, je saurai m’intégrer très rapidement au
								sein de votre équipe
								<span className="hidden md:inline">
									et m’imprégner des enjeux de votre projet pour vous
									accompagner dans sa réalisation technique
								</span>
								tout en étant force de proposition sur d’autres sujets tels que
								l’UX et le backend.
							</span>
						</p>
					</div>
				</section>

				<section className="mt-6">
					<h2 className="blue-title">Compétences techniques</h2>
					<div className="flex justify-between">
						<span className="gold-title">Front-end</span>
						<span>
							React
							<span className="hidden sm:inline"> et son écosystème</span>,
							React Native, Vue
						</span>
					</div>
					<div className="flex justify-between">
						<span className="gold-title">Back-end</span>
						<span className="text-right">
							PHP (Laravel), Node (Express, Nest)
						</span>
					</div>
					<div className="flex justify-between">
						<span className="gold-title">Autre</span>
						<span>Git, C, Shell, SQL, C# (Unity), Mongo</span>
					</div>
				</section>

				<section className="mt-6">
					<h2 className="blue-title">Expériences récentes</h2>

					<ExperienceCard
						jobTitle="frontend engineer"
						company="Maiia"
						dates="Avril 2019 - Juillet 2020"
						technos={[
							{ label: 'React', color: 'blue' },
							{ label: 'Redux (Sagas)', color: 'purple' },
							{ label: 'Next', color: 'gray' },
							{ label: 'Storybook', color: 'pink' },
							{ label: 'Cypress', color: 'green' },
						]}
						description="Création d’une “librairie de composants” en atomic design pour la refonte du logiciel médical de Docavenue, puis développement dudit logiciel vers lequel sont migrés les clients du groupe Cegedim (70000 praticiens & secrétaires). Écriture de tests et d’exemples d’utilisation pour chaque composant, formation des développeurs internes pour la passation du projet."
						onMoreDetails={() => handleSeeMoreDetails('maiia')}
					/>

					<div className="mt-6" />

					<ExperienceCard
						jobTitle="Mobile Developer"
						company="Phenix"
						dates="Mars 2019"
						technos={[
							{ label: 'React Native', color: 'blue' },
							{ label: 'Redux', color: 'purple' },
						]}
						description="Préparation de l'architecture de la future application pour le projet de refonte de Phenix, startup dans l'anti-gaspillage. Mise en place des meilleures pratiques, développement d'un micro ORM pour la base de données Realm et formation de l'équipe interne à React Native."
						onMoreDetails={() => handleSeeMoreDetails('phenix')}
					/>

					<div className="mt-6" />

					<ExperienceCard
						jobTitle="Lead developer"
						company="Glowstone"
						dates="Octobre 2018 - Mars 2019"
						technos={[
							{ label: 'React Native', color: 'blue' },
							{ label: 'Redux', color: 'purple' },
							{ label: 'Laravel', color: 'orange' },
						]}
						description="Conception UX et supervision de trois développeurs dans le cadre du développement d’une application mobile pour le compte de RB Conseils dont l’objectif était de faire un “Waze pour la météo”."
					/>

					<div className="mt-6" />

					<ExperienceCard
						jobTitle="Développeur Fullstack"
						company="Wizards Technologies"
						dates="Été 2018"
						technos={[
							{ label: 'Vue', color: 'green' },
							{ label: 'Vuex', color: 'green' },
							{ label: 'Laravel', color: 'orange' },
						]}
						description="Développement frontend et backend en méthode agile, participation au daily scrum et aux users interviews dans le cadre d’un projet pour Safran Landing Systems."
					/>

					<div className="mt-6" />

					<ExperienceCard
						jobTitle="Développeur Fullstack"
						company="Docmeetoo"
						dates="Janvier 2018 - Juin 2018"
						technos={[
							{ label: 'Vue', color: 'green' },
							{ label: 'Vuex', color: 'green' },
							{ label: 'Laravel', color: 'orange' },
						]}
						description="Implémentation d’un système de vidéoconférence, intégration de maquettes et interventions diverses sur un projet de plateforme médicale en ligne voulant être les premiers à proposer la téléconsultation à leurs clients."
					/>

					<div className="mt-6" />

					<ExperienceCard
						jobTitle="Chef de projet fullstack"
						company="TheCodingMachine"
						dates="2017"
						technos={[
							{ label: 'React', color: 'blue' },
							{ label: 'Node', color: 'green' },
							{ label: 'Ionic', color: 'blue' },
							{ label: 'Angular', color: 'red' },
						]}
						description="Développement d’un générateur de contrats d’assurance pour Ovatio en React-Redux / Node.js et développement d’une application mobile pour les clients d’ABC Salles, leader de la location événementielle."
					/>
				</section>
			</div>
			<Dialog
				isOpen={!!DetailsComponent}
				onDismiss={closeDetailsDialog}
				aria-label="edit"
				className="overflow-scroll"
			>
				<button
					className="absolute top-0 right-0 m-3 bg-gray-600 flex justify-center rounded-full h-12 w-12 cursor-pointer"
					onClick={closeDetailsDialog}
				>
					<VisuallyHidden>Fermer</VisuallyHidden>
					<span aria-hidden className="text-3xl text-white">
						×
					</span>
				</button>
				{DetailsComponent && <DetailsComponent />}
			</Dialog>
		</>
	);
}
