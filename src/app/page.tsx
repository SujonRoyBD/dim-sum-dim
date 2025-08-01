import Banner from "@/components/home/Banner/Banner";
import OurStory from "@/components/home/OurStory/OurStory";
import TastTradition from "@/components/home/Tast-Traditon/TastTradition";

export default function Home() {
  return (
   <div>
    <section>
      <Banner/>
    </section>
    <section>
     <OurStory/>
    </section>
    <section>
     <TastTradition/>
    </section>
   </div>
  );
}
