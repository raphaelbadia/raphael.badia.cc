import { useMedia } from 'react-media';
import { Slide } from 'react-slideshow-image';

const Maiia = () => {
	const isMobile = useMedia({ query: '(max-width: 640px)' });
	return (
		<div className="">
			<div className="maiia p-8">
				<h3 className="text-white text-4xl text-center">Maiia</h3>
				<h4 className="text-white text-xl text-center leading-6">
					La solution d'agenda et de téléconsultation pour les professionels de
					santé
				</h4>
			</div>
			<div className="px-8 py-3">
				<h4 className="blue-title">Contexte</h4>
				<blockquote className=" bg-gray-100 px-4 py-2 text-gray-700">
					Lancé en 2015 par le groupe Cegedim, poids lourd dans le domaine du
					logiciel santé,{' '}
					<a
						href="https://www.docavenue.com/"
						target="_blank"
						className="text-yellow-600 font-bold"
					>
						Docavenue
					</a>{' '}
					est une plateforme de prise de rendez-vous et de téléconsultation en
					ligne. <br />
					Début 2019 et après le rachat du site{' '}
					<a
						href="https://www.rdvmedicaux.com/"
						target="_blank"
						className="text-yellow-600 font-bold"
					>
						RDV médicaux
					</a>
					, Docavenue a décidé de rebrander et de développer un nouveau socle
					technique pour se débarrasser de la dette technique accumulée sur 4
					ans et fusionner les deux sites.
				</blockquote>
			</div>

			<div className="px-8 py-3">
				<h4 className="blue-title">Mission</h4>
				<div>
					<p className="">
						J’ai rejoint Docavenue au début de la refonte et ai contribué à
						mettre en place le storybook qui hébergeait notre librairie de
						composants selon les principes de l’atomic design. J’ai travaillé
						majoritairement sur l’agenda, destiné aux professionnels de santés
						(praticiens et secrétaires).
					</p>
				</div>
				<div>
					<p className="my-3">
						J’ai commencé par la mise en place de labase patient (liste de
						patients avec filtres et recherche, fusion de patients, édition /
						visionage de l’historique des rendez-vous, documents filtrables)
						puis ai mis en place la prise de rendez-vous avancée, un formulaire
						remplissable dans n’importe quel ordre dont les choix affinaient les
						possibilités des autres.
					</p>

					<Slide easing="ease" duration={5000} infinite>
						<div className="each-slide relative">
							<img
								src="images/maiia-bp-search.png"
								className="pointer-events-none"
							/>
							<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
								Recherche avec highlight
							</span>
						</div>
						<div className="each-slide relative">
							<img
								src="images/maiia-bp-fusion.png"
								className="pointer-events-none"
							/>
							<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3 ">
								Fusion de patients similaires
							</span>
						</div>
						<div className="each-slide relative">
							<img
								src="images/maiia-bp-profile.png"
								className="pointer-events-none"
							/>
							<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3 ">
								Profil d'un patient
							</span>
						</div>
						<div className="each-slide relative">
							<img
								src="images/maiia-bp-histo-rdv.png"
								className="pointer-events-none"
							/>
							<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3 ">
								Historique des rendez-vous du patient
							</span>
						</div>
						<div className="each-slide relative">
							<img
								src="images/maiia-prdva-pat.png"
								className="pointer-events-none"
							/>
							<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3 ">
								Prise de RDV avancée, onglet détails patient
							</span>
						</div>
						<div className="each-slide relative">
							<img
								src="images/maiia-prdva-prat.png"
								className="pointer-events-none"
							/>
							<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3 ">
								Prise de RDV avancée, onglet consignes du médecin
							</span>
						</div>
					</Slide>

					{/* <img src="images/maiia-base-patients.gif" />
					<img src="images/maiia-base-patients-2.gif" /> */}
				</div>

				<div>
					<p className="my-3">
						J’ai développé la recherche principale du site qui permet d’accéder
						facilement à la fiche de n’importe quel patient, praticien ou centre
						ainsi que de créer des rendez-vous à la volée.
					</p>
					{isMobile ? (
						<img src="images/maiia-header-search-zoom.png" />
					) : (
						<img src="images/maiia-header-search.png" />
					)}
				</div>

				<div>
					<p className="my-3">
						J’ai conçu toutes les pages de paramétrage avec la contrainte que
						chacune de ces pages soit “switchable” entre le mode “édition du
						centre” et “édition du praticien”, et que les praticiens héritent
						des réglages du centre. Ces pages contenaient:
						<ul class="list-disc">
							<li>
								l’édition du profil public du praticien/centre, avec une preview
								live du résultat affiché sur le site patient
							</li>
							<li>
								la gestion des motifs de consultations (création à partir d'un
								catalogue pré-défini, héritage entre les centres et praticiens,
								personnalisation, tri drag&drop, suppression et réattribution
								des rendez-vous du motif supprimé)
							</li>
							<li>la gestion des resources disponibles dans le centre</li>
							<li>
								la gestion des consignes appliquées aux motifs de consultations
							</li>
							<li>le paramétrage des sms et emails envoyés aux patients</li>
							<li>le paramétrage des consignes destinées aux secrétaires</li>
						</ul>
					</p>
					<Slide easing="ease" duration={5000} infinite>
						<div className="each-slide relative">
							<img
								src="images/maiia-settings-profile-top.png"
								className="pointer-events-none"
							/>
							<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
								Le profil praticien / centre
							</span>
						</div>
						<div className="each-slide relative">
							<img
								src="images/maiia-settings-profile-bottom.png"
								className="pointer-events-none"
							/>
							<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
								Le réglage d'horaires d'ouvertures hérité du centre
							</span>
						</div>
						<div className="each-slide relative">
							<img
								src="images/maiia-settings-motifs.png"
								className="pointer-events-none"
							/>
							<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
								La gestion des motifs de consultation
							</span>
						</div>
						<div className="each-slide relative">
							<img
								src="images/maiia-settings-ressources.png"
								className="pointer-events-none"
							/>
							<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
								Les ressources associables aux motifs
							</span>
						</div>
						<div className="each-slide relative">
							<img
								src="images/maiia-settings-consignes.png"
								className="pointer-events-none"
							/>
							<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
								Les consignes des motifs de consultation
							</span>
						</div>
						<div className="each-slide relative">
							<img
								src="images/maiia-settings-consigne-secretariat.png"
								className="pointer-events-none"
							/>
							<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
								Les consignes du praticien pour les secrétaires
							</span>
						</div>
					</Slide>
				</div>

				<div>
					<p className="my-3">
						J’ai également réalisé la page d’administration de droits des
						secrétaires et autres médecins présents dans le centre. J’ai écrit
						une grande partie de l’agenda avec notamment la vue planning, les
						réglages de l’agenda, l’impression de rdv et de semaine complète, la
						logique d’affichage de la vue semaine / jour et planning journalier,
						la gestion des hovers, la création de rdv, d’absence, de conflits….
					</p>
					<Slide easing="ease" duration={5000} infinite>
						<div className="each-slide relative">
							<img
								src="images/maiia-administration.png"
								className="pointer-events-none"
							/>
							<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
								La page d'administration des droits
							</span>
						</div>
						<div className="each-slide relative">
							<img
								src="images/maiia-agenda-planning-status.png"
								className="pointer-events-none"
							/>
							<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
								La vue planning
							</span>
						</div>
						<div className="each-slide relative">
							<img
								src="images/maiia-agenda-planning-cancel-appointment.png"
								className="pointer-events-none"
							/>
							<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
								La suppression d'un RDV
							</span>
						</div>
						<div className="each-slide relative">
							<img
								src="images/maiia-agenda-semaine-hover.png"
								className="pointer-events-none"
							/>
							<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
								La vue semaine
							</span>
						</div>
						<div className="each-slide relative">
							<img
								src="images/maiia-agenda-semaine-rdv-preview.png"
								className="pointer-events-none"
							/>
							<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
								La preview d'un RDV
							</span>
						</div>
						<div className="each-slide relative">
							<img
								src="images/maiia-agenda-semaine-reglages.png"
								className="pointer-events-none"
							/>
							<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
								Les réglages de l'agenda
							</span>
						</div>
						<div className="each-slide relative">
							<img
								src="images/maiia-agenda-semaine-rdv-creation.png"
								className="pointer-events-none"
							/>
							<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
								Création d'un rdv
							</span>
						</div>
					</Slide>
				</div>

				<div>
					<p className="my-3">
						Et enfin, l’intégralité de l’alpha ayant été réalisé sans maquette
						avec pour seul design les guidelines de la librairie Material-UI,
						j’ai participé à l’intégration des maquettes à leurs sorties pour
						aider mon collègue intégrateur qui était débordé.
					</p>
				</div>
			</div>

			<div className="px-8 py-3">
				<h4 className="blue-title">Technique</h4>
				<ul class="list-disc my-3">
					<li>Implémentation d’une librairie de composants avec storybook</li>
					<li>
						Implémentation d’un système de fusion entre les patients des
						logiciels du Group et les utilisateurs du site patient
					</li>
					<li>
						Implémentation de formulaires dynamique à multiples entrées / avec
						des notions d’héritage en utilisant Formik
					</li>
					<li>Développement React / redux / redux saga</li>
				</ul>
			</div>
		</div>
	);
};

export default Maiia;
