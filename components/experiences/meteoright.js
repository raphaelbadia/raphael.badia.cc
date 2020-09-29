import { useMedia } from 'react-media';
import Slider from '../Slider';
import { Slide } from 'react-slideshow-image';
import BlockQuote from '../BlockQuote';
import ExperienceBody from '../ExperienceBody';
import ExperienceHeader from '../ExperienceHeader';
import Stack from '../Stack';
import SliderImage from '../SliderImage';

const MeteoRight = () => {
	const isMobile = useMedia({ query: '(max-width: 640px)' });
	return (
		<>
			<ExperienceHeader className="meteoright" />
			<ExperienceBody>
				<h4 className="blue-title">Contexte</h4>
				<BlockQuote>
					RB Conseils, société de gestion de patrimoine, souhaitait explorer de
					nouvelles activités avec notamment une idée des dirigeants : créer une
					application permettant de vérifier et renseigner la météo de manière
					collaborative de la même façon que l’application Waze le fait avec les
					embouteillages, avec un degré de précision supérieur aux analyses
					météos trop globales.
				</BlockQuote>

				<h4 className="blue-title">Mission</h4>
				<Stack>
					<p>
						J’ai eu plusieurs casquettes sur ce projet: après avoir étudié la
						demande du client pour comprendre sa vision de l’application, j’ai
						pris en charge la conception UX de l’application, supervisé la
						conception des maquettes et dirigé le développement du produit en
						collaboration avec trois autres freelances.{' '}
					</p>
					<p>
						Le clustering des points a été le défi le plus complexe de ce
						projet, autant côté backend où j’ai dû optimiser soigneusement les
						requêtes qui devenaient lentes avec plus de 1000 points par km, pour
						ne pas renvoyer de payload trop grosse à l’application qui aurait du
						mal en 3G, et également du côté application ou j’ai dû forker des
						librairies react-native de clustering de carte pour les adapter aux
						besoins de l’application.
					</p>
					<Slider slidesToShow={2}>
						<SliderImage src="images/meteoright-1-login.png" />
						<SliderImage src="images/meteoright-2-global.png" />
						<SliderImage src="images/meteoright-3-zoom.png" />
						<SliderImage src="images/meteoright-4-rate.png" />
						<SliderImage src="images/meteoright-5-create.png" />
						<SliderImage src="images/meteoright-6-temperature.png" />
						<SliderImage src="images/meteoright-7-save.png" />
						<SliderImage src="images/meteoright-8-profile.png" />
					</Slider>
				</Stack>
			</ExperienceBody>
		</>
	);
};

export default MeteoRight;
