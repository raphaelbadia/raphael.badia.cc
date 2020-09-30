import { useMedia } from 'react-media';
import { Slide } from 'react-slideshow-image';
import BlockQuote from '../BlockQuote';
import ExperienceBody from '../ExperienceBody';
import ExperienceHeader from '../ExperienceHeader';
import Stack from '../Stack';

const MeteoRight = () => {
	const isMobile = useMedia({ query: '(max-width: 640px)' });
	return (
		<>
			<ExperienceHeader title="Wizard Technologies" className="safran" />
			<ExperienceBody>
				<h4 className="blue-title">La société</h4>
				<BlockQuote>
					Wizard Technologies est une société composées uniquement de
					développeurs full stack et travaille en collaboration étroite avec une
					société de designers, We Digital Garden. Ensembles, ils forment des
					équipes agiles de type startup mises à la dispositions de grandes
					structures.
				</BlockQuote>

				<h4 className="blue-title">Mission</h4>
				<Stack>
					<p>
						Pour un projet de Safran Landing Systems, au sein d’un équipe
						composée d’un PO, un PM, trois designers et de trois développeurs,
						j’ai participé à la création d’une plateforme destinée aux
						techniciens intervenant sur des avions comportant des pièces créés
						par safran.
					</p>
					<p>
						Cette plateforme permet aux techniciens de trouver la documentation
						et des conseils de réparation en fonction de la pièce défaillante,
						ou de créer un diagnostic à partir de problèmes rencontrés (comme un
						avion qui tire vers la droite en roulant).
					</p>
					<p>
						Le technicien peut ensuite consulter les documents associés à la
						pièce fautive, ou en commander une nouvelle.
					</p>
					<p>
						La plateforme comportait aussi un mode d’urgence, AOG (Aircraft On
						Ground) qui comportait plus de fonctionnalités pour apporter des
						solutions en moins de 4 heures pour les avions rencontrants un
						problème suffisamment sérieux interdisant son envol.
					</p>
				</Stack>

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

				<h4 className="my-3 blue-title">Résultat</h4>
				<Stack>
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
						technologique, il a rapidement produit du code fonctionnel de
						qualité, autonome et performant, je le recommande chaleureusement
						pour toute mission nécessitant expertise technique et adaptabilité."
					</p>
				</Stack>
			</ExperienceBody>
		</>
	);
};

export default MeteoRight;
