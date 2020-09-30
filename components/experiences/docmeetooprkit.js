import { useMedia } from 'react-media';
import { Slide } from 'react-slideshow-image';
import BlockQuote from '../BlockQuote';
import ExperienceBody from '../ExperienceBody';
import ExperienceHeader from '../ExperienceHeader';
import Slider from '../Slider';
import SliderImage from '../SliderImage';
import Stack from '../Stack';

const MeteoRight = () => {
	const isMobile = useMedia({ query: '(max-width: 640px)' });
	return (
		<>
			<ExperienceHeader
				title="Docmeetoo"
				className="docmeetoo"
			></ExperienceHeader>
			<ExperienceBody>
				<h4 className="blue-title">La société</h4>
				<BlockQuote>
					Docmeetoo est une initiative lancée en 2017 par le directeur du
					cabinet médical SELEM pour promouvoir la consultation à distance
					auprès de professionnels qualifiés.
				</BlockQuote>

				<h4 className="blue-title">Mission</h4>
				<Stack>
					<p>
						Je suis intervenu sur un projet déjà existant, développé par des
						prestataires externes basés à Tunis (Tunisie). Je me suis chargé de
						la montée en version du site suivie d’un refactoring pour corriger
						certaines erreurs de conceptions (ex: requêtes SQL dans les
						controllers et les vues).
					</p>
					<p>
						J’ai ensuite entrepris une refonte du frontend à partir de nouvelles
						maquettes, et ai ajouté plusieurs fonctionnalités comme la
						téléconsultation, la prise de RDV et un processus de déploiement du
						site avec docker.
					</p>
					<Slider>
						<SliderImage
							src="images/docmeetoo-new-login.png"
							text="Page de connexion"
						/>
						<SliderImage
							src="images/docmeetoo-newlanding-1.png"
							text="Landing page"
						/>
						<SliderImage
							src="images/docmeetoo-newlanding-2.png"
							text="Landing page (2)"
						/>
						<SliderImage
							src="images/docmeetoo-newlanding-3.png"
							text="Landing page (3)"
						/>
					</Slider>
				</Stack>

				<h4 className="blue-title">Principales tâches</h4>
				<ul class="list-disc my-3">
					<li>Montée en version du framework (PHP Laravel 4 -> 5)</li>
					<li>
						Audit des différentes solutions vidéos (tokbox, NextMo, Twilio)
					</li>
					<li>
						Implémentation d’un système de vidéoconférence (twilio SDK) pour la
						téléconsultation
					</li>
					<li>Broadcasting d’events</li>
					<li>
						Développement d’un chat pour la communication praticien - patient
						avec Socket.io
					</li>
					<li>Intégrations de maquettes</li>
					<li>
						Écriture de Dockerfile et de docker-compose pour le déploiement du
						site
					</li>
				</ul>
			</ExperienceBody>

			<ExperienceHeader className="prkit"></ExperienceHeader>

			<ExperienceBody>
				<h4 className="blue-title">La société</h4>
				<BlockQuote>
					Prkit est un service permettant aux startups de monter un dossier de
					presse et de l’envoyer pour eux à des journalistes de leur secteur.
				</BlockQuote>

				<h4 className="blue-title">Mission</h4>
				<p className="mb-2">
					J’y ai fait un audit de sécurité durant lequel j’ai découvert de
					nombreuses failles de sécurité, pour lesquelles j’ai développé des
					correctifs. J’ai créé pour eux un POC pour une refonte du dashboard de
					prkit.co avec React/Redux et Laravel.
				</p>

				<h4 className="blue-title">Principales tâches</h4>
				<ul class="list-disc my-3">
					<li>Démonstration puis prévention d’attaques XSS et CSRF</li>
					<li>
						Injections SQL, prise de contrôle du serveur via des failles dans le
						système d’upload
					</li>
					<li>Développement d’un dashboard CRUD</li>
					<li>
						Ajout d’une fonctionnalité de génération du kit de presse en pdf
					</li>
				</ul>
			</ExperienceBody>
		</>
	);
};

export default MeteoRight;
