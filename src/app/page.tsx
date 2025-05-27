import HeroSections from "@/components/HeroSections";
import CardsContainer from "@/components/CardsContainer";
import { FeaturesSectionDemo } from "@/components/FeaturesSectionDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import Footer from "@/components/Footer";
import Steps from "@/components/Steps";
import FloatingNavbar from "@/components/FloatingNavbar";

export default function Home() {
	return (
		<>
			{/* <div className="relative w-full flex justify-center items-center">
			</div> */}
			<FloatingNavbar />
			<main className="flex justify-center items-center min-h-screen">
				<HeroSections />
			</main>
			<FeaturesSectionDemo />
			<InfiniteMovingCardsDemo />
			<CardsContainer />
			<Steps />
			<Footer />
		</>
	);
}
