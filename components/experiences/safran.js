import { useMedia } from 'react-media';
import { Slide } from 'react-slideshow-image';

const MeteoRight = () => {
	const isMobile = useMedia({ query: '(max-width: 640px)' });
	return (
		<div className="">
			<div className="safran p-8">
				<h3 className="text-white text-4xl text-center">Wizard technologies</h3>
			</div>
			<div className="px-8 py-3">
				<h4 className="blue-title">La société</h4>
				<blockquote className=" bg-gray-100 px-4 py-2 text-gray-700">
					Wizard Technologies est une société composées uniquement de
					développeurs full stack et travaille en collaboration étroite avec une
					société de designers, We Digital Garden. Ensembles, ils forment des
					équipes agiles de type startup mises à la dispositions de grandes
					structures.
				</blockquote>
			</div>

			<div className="px-8 py-3">
				<h4 className="blue-title">Mission</h4>
				<div>
					<p className="mb-2">
						Pour un projet de Safran Landing Systems, au sein d’un équipe
						composée d’un PO, un PM, trois designers et de trois développeurs,
						j’ai participé à la création d’une plateforme destinée aux
						techniciens intervenant sur des avions comportant des pièces créés
						par safran.
					</p>
					<p className="mb-2">
						Cette plateforme permet aux techniciens de trouver la documentation
						et des conseils de réparation en fonction de la pièce défaillante,
						ou de créer un diagnostic à partir de problèmes rencontrés (comme un
						avion qui tire vers la droite en roulant).
					</p>
					<p className="mb-2">
						Le technicien peut ensuite consulter les documents associés à la
						pièce fautive, ou en commander une nouvelle.
					</p>
					<p className="mb-2">
						La plateforme comportait aussi un mode d’urgence, AOG (Aircraft On
						Ground) qui comportait plus de fonctionnalités pour apporter des
						solutions en moins de 4 heures pour les avions rencontrants un
						problème suffisamment sérieux interdisant son envol.
					</p>
				</div>
			</div>

			<div className="px-8 py-3">
				<h4 className="blue-title">Principales tâches</h4>
				<ul class="list-disc my-3">
					<li>
						Développement du tunnel de prédiction du problème en fonction des
						“symptômes” du problème
					</li>
					<li>
						Création de migrations et de seeds pour générer des bases de données
						de tests pour faciliter le développement
					</li>
					<li>Branchement au système de ticket de Safran</li>
					<li>Intégration de mail</li>
					<li>User interviews</li>
					<li>Rituels agiles</li>
				</ul>
			</div>

			<div className="px-8 py-3 mb-5">
				<h4 className="my-3 blue-title">Résultat</h4>
				<p>
					D'après Gaël, PDG de Wizards Technologies (
					<a
						href="https://www.malt.fr/profile/raphaelbadia"
						target="_blank"
						className="text-yellow-600 font-bold"
					>
						Voir l'avis sur Malt
					</a>
					)
				</p>
				<img src="images/safran-feedback.png" />
				<p className="text-gray-700 italic font-light text-xs">
					"Raphaël s'est très vite intégré à l'équipe et a l'environnement
					technologique, il a rapidement produit du code fonctionnel de qualité,
					autonome et performant, je le recommande chaleureusement pour toute
					mission nécessitant expertise technique et adaptabilité."
				</p>
			</div>
		</div>
	);
};

export default MeteoRight;
