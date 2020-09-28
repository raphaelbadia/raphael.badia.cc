import { useMedia } from 'react-media';
import { Slide } from 'react-slideshow-image';

const MeteoRight = () => {
	const isMobile = useMedia({ query: '(max-width: 640px)' });
	return (
		<div className="">
			<div className="bg-gray-900 p-8">
				<h3 className="text-white text-4xl text-center">Docmeetoo</h3>
			</div>
			<div className="px-8 py-3">
				<h4 className="blue-title">La société</h4>
				<blockquote className=" bg-gray-100 px-4 py-2 text-gray-700">
					Docmeetoo est une initiative lancée en 2017 par le directeur du
					cabinet médical SELEM pour promouvoir la consultation à distance
					auprès de professionnels qualifiés.
				</blockquote>
			</div>

			<div className="px-8 py-3">
				<h4 className="blue-title">Mission</h4>
				<div>
					<p className="mb-2">
						Je suis intervenu sur un projet déjà existant, développé par des
						prestataires externes basés à Tunis (Tunisie). Je me suis chargé de
						la montée en version du site suivie d’un refactoring pour corriger
						certaines erreurs de conceptions (ex: requêtes SQL dans les
						controllers et les vues).
					</p>
					<p className="mb-2">
						J’ai ensuite entrepris une refonte du frontend à partir de nouvelles
						maquettes, et ai ajouté plusieurs fonctionnalités comme la
						téléconsultation, la prise de RDV et un processus de déploiement du
						site avec docker.
					</p>
				</div>
				<Slide easing="ease" duration={5000} infinite>
					<div className="each-slide relative flex justify-center">
						<img
							src="images/docmeetoo-new-login.png"
							className="pointer-events-none phenix-slide-img"
						/>
						<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
							Page de connexion
						</span>
					</div>
					<div className="each-slide relative flex justify-center">
						<img
							src="images/docmeetoo-newlanding-1.png"
							className="pointer-events-none phenix-slide-img"
						/>
						<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
							Landing page
						</span>
					</div>
					<div className="each-slide relative flex justify-center">
						<img
							src="images/docmeetoo-newlanding-2.png"
							className="pointer-events-none phenix-slide-img"
						/>
						<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
							Landing page (2)
						</span>
					</div>
					<div className="each-slide relative flex justify-center">
						<img
							src="images/docmeetoo-newlanding-3.png"
							className="pointer-events-none phenix-slide-img"
						/>
						<span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
							Landing page (3)
						</span>
					</div>
				</Slide>
			</div>

			<div className="px-8 py-3">
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
			</div>

			<div className="prkit p-8 mt-4">
				<h3 className="text-green-900 text-4xl text-center">PRKit.co</h3>
			</div>
			<div className="px-8 py-3">
				<h4 className="blue-title">La société</h4>
				<blockquote className=" bg-gray-100 px-4 py-2 text-gray-700">
					Prkit est un service permettant aux startups de monter un dossier de
					presse et de l’envoyer pour eux à des journalistes de leur secteur.
				</blockquote>
			</div>

			<div className="px-8 py-3">
				<h4 className="blue-title">Mission</h4>
				<div>
					<p className="mb-2">
						J’y ai fait un audit de sécurité durant lequel j’ai découvert de
						nombreuses failles de sécurité, pour lesquelles j’ai développé des
						correctifs. J’ai créé pour eux un POC pour une refonte du dashboard
						de prkit.co avec React/Redux et Laravel.
					</p>
				</div>
			</div>

			<div className="px-8 py-3">
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
			</div>
		</div>
	);
};

export default MeteoRight;
