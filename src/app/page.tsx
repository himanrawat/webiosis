import HeroSections from "@/components/HeroSections";
import CardsContainer from "@/components/CardsContainer";
import { FeaturesSectionDemo } from "@/components/FeaturesSectionDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			<main className="flex justify-center items-center min-h-screen">
				<HeroSections />
			</main>
			<FeaturesSectionDemo />
			<InfiniteMovingCardsDemo />
			<CardsContainer />
			<Footer />
		</>
	);
}
