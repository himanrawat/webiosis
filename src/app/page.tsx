import HeroSections from "@/components/HeroSections";
import CardsContainer from "@/components/CardsContainer";
import { FeaturesSectionDemo } from "@/components/FeaturesSectionDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import Footer from "@/components/Footer";
import Steps from "@/components/Steps";

export default function Home() {
	return (
		<>
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
