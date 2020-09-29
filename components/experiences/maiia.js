import { useMedia } from 'react-media';
import { Slide } from 'react-slideshow-image';
import ExperienceHeader from '../ExperienceHeader';
import ExperienceBody from '../ExperienceBody';
import Link from '../Link';
import Stack from '../Stack';
import BlockQuote from '../BlockQuote';
import Slider from '../Slider';
import SliderImage from '../SliderImage';

const Maiia = () => {
	const isMobile = useMedia({ query: '(max-width: 640px)' });
	return (
		<>
			<ExperienceHeader
				title="Maiia"
				subtitle="La solution d'agenda et de téléconsultation pour les professionels de
					santé"
				className="maiia"
			/>
			<ExperienceBody>
				<h4 className="blue-title">Contexte</h4>
				<BlockQuote>
					<Stack>
						<p>
							Lancé en 2015 par le groupe Cegedim, poids lourd dans le domaine
							du logiciel santé,{' '}
							<Link href="https://www.docavenue.com/">Docavenue</Link> est une
							plateforme de prise de rendez-vous et de téléconsultation en
							ligne.
						</p>
						<p>
							Début 2019 et après le rachat du site{' '}
							<Link href="https://www.rdvmedicaux.com/">RDV médicaux</Link>,
							Docavenue a décidé de rebrander et de développer un nouveau socle
							technique pour se débarrasser de la dette technique accumulée sur
							4 ans et fusionner les deux sites.
						</p>
					</Stack>
				</BlockQuote>

				<h4 className="blue-title">Mission</h4>
				<Stack>
					<p>
						J’ai rejoint Docavenue au début de la refonte et ai contribué à
						mettre en place le storybook qui hébergeait notre librairie de
						composants selon les principes de l’atomic design. J’ai travaillé
						majoritairement sur l’agenda, destiné aux professionnels de santés
						(praticiens et secrétaires).
					</p>
					<p>
						J’ai commencé par la mise en place de labase patient (liste de
						patients avec filtres et recherche, fusion de patients, édition /
						visionage de l’historique des rendez-vous, documents filtrables)
						puis ai mis en place la prise de rendez-vous avancée, un formulaire
						remplissable dans n’importe quel ordre dont les choix affinaient les
						possibilités des autres.
					</p>
					<Slider>
						<SliderImage
							src="images/maiia-bp-search.png"
							text="Recherche avec highlight"
						/>
						<SliderImage
							src="images/maiia-bp-fusion.png"
							text="Fusion de patients similaires"
						/>
						<SliderImage
							src="images/maiia-bp-profile.png"
							text="Profil d'un patient"
						/>
						<SliderImage
							src="images/maiia-bp-histo-rdv.png"
							text="Historique des rendez-vous du patient"
						/>
						<SliderImage
							src="images/maiia-prdva-pat.png"
							text="Prise de RDV avancée, onglet détails patient"
						/>
						<SliderImage
							src="images/maiia-prdva-prat.png"
							text="Prise de RDV avancée, onglet consignes du médecin"
						/>
					</Slider>
					<p>
						J’ai développé la recherche principale du site qui permet d’accéder
						facilement à la fiche de n’importe quel patient, praticien ou centre
						ainsi que de créer des rendez-vous à la volée.
					</p>
					{isMobile ? (
						<img src="images/maiia-header-search-zoom.png" />
					) : (
						<img src="images/maiia-header-search.png" />
					)}
					<div>
						<p>
							J’ai conçu toutes les pages de paramétrage avec la contrainte que
							chacune de ces pages soit “switchable” entre le mode “édition du
							centre” et “édition du praticien”, et que les praticiens héritent
							des réglages du centre.
						</p>
						Ces pages contenaient :
						<ul className="list-disc">
							<li>
								l’édition du profil public du praticien/centre, avec une preview
								live du résultat affiché sur le site patient
							</li>
							<li>
								la gestion des motifs de consultations (création à partir d'un
								catalogue pré-défini, héritage entre les centres et praticiens,
								personnalisation, tri drag & drop, suppression et réattribution
								des rendez-vous du motif supprimé)
							</li>
							<li>la gestion des resources disponibles dans le centre</li>
							<li>
								la gestion des consignes appliquées aux motifs de consultations
							</li>
							<li>le paramétrage des sms et emails envoyés aux patients</li>
							<li>le paramétrage des consignes destinées aux secrétaires</li>
						</ul>
					</div>
					<Slider>
						<SliderImage
							src="images/maiia-settings-profile-top.png"
							text="Le profil praticien / centre"
						/>
						<SliderImage
							src="images/maiia-settings-profile-bottom.png"
							text="Le réglage d'horaires d'ouvertures hérité du centre"
						/>
						<SliderImage
							src="images/maiia-settings-motifs.png"
							text="La gestion des motifs de consultation"
						/>
						<SliderImage
							src="images/maiia-settings-ressources.png"
							text="Les ressources associables aux motifs"
						/>
						<SliderImage
							src="images/maiia-settings-consignes.png"
							text="Les consignes des motifs de consultation"
						/>
						<SliderImage
							src="images/maiia-settings-consigne-secretariat.png"
							text="Les consignes du praticien pour les secrétaires"
						/>
					</Slider>
					<p>
						J’ai également réalisé la page d’administration de droits des
						secrétaires et autres médecins présents dans le centre. J’ai écrit
						une grande partie de l’agenda avec notamment la vue planning, les
						réglages de l’agenda, l’impression de rdv et de semaine complète, la
						logique d’affichage de la vue semaine / jour et planning journalier,
						la gestion des hovers, la création de rdv, d’absence, de conflits….
					</p>
					<Slider>
						<SliderImage
							src="images/maiia-administration.png"
							text="La page d'administration des droits"
						/>
						<SliderImage
							src="images/maiia-agenda-planning-status.png"
							text="La vue planning"
						/>
						<SliderImage
							src="images/maiia-agenda-planning-cancel-appointment.png"
							text="La suppression d'un RDV"
						/>
						<SliderImage
							src="images/maiia-agenda-semaine-hover.png"
							text="La vue semaine"
						/>
						<SliderImage
							src="images/maiia-agenda-semaine-rdv-preview.png"
							text="La preview d'un RDV"
						/>
						<SliderImage
							src="images/maiia-agenda-semaine-reglages.png"
							text="Les réglages de l'agenda"
						/>
						<SliderImage
							src="images/maiia-agenda-semaine-rdv-creation.png"
							text="Création d'un rdv"
						/>
					</Slider>
					<p>
						Et enfin, l’intégralité de l’alpha ayant été réalisé sans maquette
						avec pour seul design les guidelines de la librairie Material-UI,
						j’ai participé à l’intégration des maquettes à leurs sorties pour
						aider mon collègue intégrateur qui était débordé.
					</p>
				</Stack>

				<h4 className="blue-title">Principales tâches</h4>
				<ul className="list-disc my-3">
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
			</ExperienceBody>
		</>
	);
};

export default Maiia;
