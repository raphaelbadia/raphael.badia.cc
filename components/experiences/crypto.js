import { useMedia } from 'react-media';
import { Slide } from 'react-slideshow-image';
import ExperienceHeader from '../ExperienceHeader';

const Crypto = () => {
	const isMobile = useMedia({ query: '(max-width: 640px)' });
	return (
		<div className="">
			<ExperienceHeader
				title="Développement Node / C++"
				className="bg-gray-900"
			/>
			<div className="px-8 py-3">
				<h4 className="blue-title">Contexte</h4>
				<blockquote className=" bg-gray-100 px-4 py-2 text-gray-700">
					Après mon passage chez TheCodingMachine dont j'ai refusé l'offre
					d'embauche, j'ai souhaité être plus actif dans le domaine des
					cryptomonnaies qui m'intéressait grandement depuis 2013, moment ou
					j'avais vécu le crash de l'échange mtgox.
				</blockquote>
			</div>

			<div className="px-8 py-3">
				<div>
					<p className="mb-2">
						J’ai été très actif dans ce secteur lors du rally de fin 2017. J’ai
						commencé par développer un robot d’observation de différences de
						cours entre les plateformes bittrex et binance, puis l’ai fait
						évoluer en robot d’arbitrage.
					</p>
					<p className="mb-2">
						Parallèlement à cela, j’ai forké le dash pour créer ma propre crypto
						monnaie afin de mieux comprendre le fonctionnement interne de
						celles-ci.
					</p>
				</div>
			</div>

			<div className="px-8 py-3">
				<h4 className="blue-title">Principales tâches</h4>
				<ul class="list-disc my-3">
					<li>Écoute de websockets et d’APIs de plateformes financières</li>
					<li>Création d’un algorithme d’arbitrage</li>
					<li>Génération de block genesis</li>
					<li>
						Déploiement d’un réseau de serveurs pour faire tourner la blockchain
					</li>
					<li>
						Déclenchement de “fork” intra-blockchain pour lancer le support de
						masternode
					</li>
				</ul>
			</div>

			<div className="px-8 py-3">
				<h4 className="blue-title">Résultat</h4>
				<p className="">Après y avoir passé trois mois, j'ai conclu que :</p>
				<ul className="list-decimal">
					<li>Je n'aime vraiment pas le C++</li>
					<li>Je suis un très mauvais trader 😅</li>
				</ul>
			</div>
		</div>
	);
};

export default Crypto;
