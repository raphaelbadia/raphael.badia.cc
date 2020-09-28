import { useMedia } from 'react-media';
import { Slide } from 'react-slideshow-image';

const MeteoRight = () => {
	const isMobile = useMedia({ query: '(max-width: 640px)' });
	return (
		<div className="">
			<div className="flex md:hidden meteoright meteoright-small h-64 sm:h-56 justify-center content-center"></div>
			<div className="hidden md:flex meteoright sm:h-64 justify-center content-center">
				<img src="images/meteoright-logo.png" className="sm:h-full w-auto" />
			</div>
			<div className="px-8 py-3">
				<h4 className="blue-title">Contexte</h4>
				<blockquote className=" bg-gray-100 px-4 py-2 text-gray-700">
					RB Conseils, société de gestion de patrimoine, souhaitait explorer de
					nouvelles activités avec notamment une idée des dirigeants : créer une
					application permettant de vérifier et renseigner la météo de manière
					collaborative de la même façon que l’application Waze le fait avec les
					embouteillages, avec un degré de précision supérieur aux analyses
					météos trop globales.
				</blockquote>
			</div>

			<div className="px-8 py-3">
				<h4 className="blue-title">Mission</h4>
				<div>
					<p className="">
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
					<Slide easing="ease" duration={5000} infinite>
						<div className="each-slide relative flex justify-center">
							<img
								src="images/meteoright-1-login.png"
								className="pointer-events-none phenix-slide-img"
							/>
							{/* <span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
								Splash screen de l'application
							</span> */}
						</div>
						<div className="each-slide relative flex justify-center">
							<img
								src="images/meteoright-2-global.png"
								className="pointer-events-none phenix-slide-img"
							/>
							{/* <span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
								Splash screen de l'application
							</span> */}
						</div>
						<div className="each-slide relative flex justify-center">
							<img
								src="images/meteoright-3-zoom.png"
								className="pointer-events-none phenix-slide-img"
							/>
							{/* <span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
								Splash screen de l'application
							</span> */}
						</div>
						<div className="each-slide relative flex justify-center">
							<img
								src="images/meteoright-4-rate.png"
								className="pointer-events-none phenix-slide-img"
							/>
							{/* <span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
								Splash screen de l'application
							</span> */}
						</div>
						<div className="each-slide relative flex justify-center">
							<img
								src="images/meteoright-5-create.png"
								className="pointer-events-none phenix-slide-img"
							/>
							{/* <span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
								Splash screen de l'application
							</span> */}
						</div>
						<div className="each-slide relative flex justify-center">
							<img
								src="images/meteoright-6-temperature.png"
								className="pointer-events-none phenix-slide-img"
							/>
							{/* <span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
								Splash screen de l'application
							</span> */}
						</div>
						<div className="each-slide relative flex justify-center">
							<img
								src="images/meteoright-7-save.png"
								className="pointer-events-none phenix-slide-img"
							/>
							{/* <span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
								Splash screen de l'application
							</span> */}
						</div>
						<div className="each-slide relative flex justify-center">
							<img
								src="images/meteoright-8-profile.png"
								className="pointer-events-none phenix-slide-img"
							/>
							{/* <span className="absolute bottom-0 right-0 left-0 text-blue-700 bg-blue-100 opacity-75 font-semibold text-sm p-3">
								Splash screen de l'application
							</span> */}
						</div>
					</Slide>
				</div>
			</div>
		</div>
	);
};

export default MeteoRight;
