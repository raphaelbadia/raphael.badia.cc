import { useState } from 'react';
import Head from 'next/head';
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
			<Head>
				<title>Raphaël Badia, consultant React.js freelance</title>
			</Head>
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
								{' '}
								Du service interne à l’extranet d’envergure, je conçois tous mes
								projets avec deux priorités : votre sécurité et la satisfaction
								de vos clients.
							</span>
							<span className="block md:inline">
								{' '}
								Attentif et impliqué, je saurai m’intégrer très rapidement au
								sein de votre équipe
								<span className="hidden md:inline">
									{' '}
									et m’imprégner des enjeux de votre projet pour vous
									accompagner dans sa réalisation technique
								</span>{' '}
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
							PHP (Laravel), <span className="hidden sm:inline">Node (</span>
							Express, Nest<span className="hidden sm:inline">)</span>
						</span>
					</div>
					<div className="flex justify-between">
						<span className="gold-title">Autre</span>
						<span>Git, C, Shell, SQL, C# (Unity), Mongo</span>
					</div>
				</section>

				<section className="mt-6">
					<h2 className="blue-title">Expériences</h2>

					<ExperienceCard
						jobTitle="Développeur Frontend"
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
						jobTitle="Développeur Mobile"
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
						jobTitle="chef de projet fullstack"
						company="Meteoright"
						dates="Novembre 2018 - Février 2019"
						technos={[
							{ label: 'React Native', color: 'blue' },
							{ label: 'Redux', color: 'purple' },
							{ label: 'Laravel', color: 'orange' },
						]}
						description="Conception UX et supervision de trois développeurs dans le cadre du développement d’une application mobile pour le compte de RB Conseils dont l’objectif était de faire un “Waze pour la météo”."
						onMoreDetails={() => handleSeeMoreDetails('meteoright')}
					/>

					<div className="mt-6" />

					<ExperienceCard
						jobTitle="Développeur Fullstack"
						company="Wizards Technologies"
						dates="Juillet 2018 - Septembre 2018"
						technos={[
							{ label: 'Vue', color: 'green' },
							{ label: 'Vuex', color: 'green' },
							{ label: 'Laravel', color: 'orange' },
						]}
						description="Développement frontend et backend en méthode agile, participation au daily scrum et aux users interviews dans le cadre d’un projet pour Safran Landing Systems."
						onMoreDetails={() => handleSeeMoreDetails('safran')}
					/>

					<div className="mt-6" />

					<ExperienceCard
						jobTitle="Fullstack"
						company="Docmeetoo - Prkit"
						dates="Mars 2018 - Juin 2018"
						technos={[
							{ label: 'Vue', color: 'green' },
							{ label: 'Vuex', color: 'green' },
							{ label: 'Laravel', color: 'orange' },
							{ label: 'React', color: 'blue' },
						]}
						description="Implémentation d’un système de vidéoconférence, intégration de maquettes et interventions diverses sur un projet de plateforme médicale en ligne voulant être les premiers à proposer la téléconsultation à leurs clients. Audit de sécurité pour prkit.co."
						onMoreDetails={() => handleSeeMoreDetails('docmeetooprkit')}
					/>

					<div className="mt-6" />

					<ExperienceCard
						jobTitle="Logiciel"
						company="Projet personnel"
						dates="Décembre 2017 - Février 2018"
						technos={[
							{ label: 'C++', color: 'blue' },
							{ label: 'Node', color: 'green' },
						]}
						description="Développement pour mon compte d'un robot d'arbitrage et d'une cryptomonnaie."
						onMoreDetails={() => handleSeeMoreDetails('crypto')}
					/>

					<div className="mt-6" />

					<ExperienceCard
						jobTitle="Chef de projet fullstack"
						company="TheCodingMachine"
						dates="Juillet 2017 - Novembre 2017"
						technos={[
							{ label: 'React', color: 'blue' },
							{ label: 'Node', color: 'green' },
							{ label: 'Ionic', color: 'blue' },
							{ label: 'Angular', color: 'red' },
						]}
						description="Développement d’un générateur de contrats d’assurance pour Ovatio en React-Redux / Node.js et développement d’une application mobile pour les clients d’ABC Salles, leader de la location événementielle."
						onMoreDetails={() => handleSeeMoreDetails('tcm')}
					/>

					<div className="mt-6" />

					<ExperienceCard
						jobTitle="Développeur"
						company="Epitech - 42"
						dates="Septembre 2015 - Juin 2017"
						technos={[
							{ label: 'C', color: 'orange' },
							{ label: 'PHP', color: 'purple' },
							{ label: 'React', color: 'blue' },
							{ label: 'Node', color: 'green' },
							{ label: 'Mongo', color: 'green' },
						]}
						description={`Études à Epitech et 42 au cours desquelles j'ai enchaîné les "Piscines", périodes intense d'apprentissage au cours desquels les étudiants enchaînent les travaux de programmation informatique de 9h à 23h, y compris les weekend.`}
						onMoreDetails={() => handleSeeMoreDetails('epi42')}
					/>

					<div className="mt-6" />

					<ExperienceCard
						jobTitle="Développeur"
						company="Janson de Sailly"
						dates="Avril 2013 - Septembre 2015"
						technos={[
							{ label: 'C', color: 'orange' },
							{ label: 'PHP', color: 'purple' },
							{ label: 'C#', color: 'blue' },
						]}
						description="Parallèlement à mon activité principale décrite ci-dessous, réalisation de plusieurs sites webs en freelance, création d'un traceur de véhicule pour un projet d'école, d'un wallet pour bitcoin en ligne et d'un POC de logiciel de transfer de rushs (fichiers > 100gb)."
						onMoreDetails={() => handleSeeMoreDetails('lycee')}
					/>

					<div className="mt-6" />

					<ExperienceCard
						jobTitle="Développeur PHP et administrateur système"
						company="Travonline.net"
						dates="Février 2012 - Juin 2014"
						technos={[
							{ label: 'PHP', color: 'purple' },
							{ label: 'Linux', color: 'blue' },
						]}
						description="Développement de plugins et de correctifs sur un projet open-source, installation et maintenance de serveurs dédiés, réécriture d'un moteur de jeux MMORTS."
						onMoreDetails={() => handleSeeMoreDetails('travian')}
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
					className="absolute top-0 right-0 m-3 bg-gray-600 flex justify-center rounded-full h-12 w-12 cursor-pointer z-10"
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
