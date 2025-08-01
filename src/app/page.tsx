import Banner from "@/components/home/Banner/Banner";
import ContactUs from "@/components/home/Contact-Us/ContactUs";
import DiveInto from "@/components/home/DiveInto/DiveInto";
import OurStory from "@/components/home/OurStory/OurStory";
import TalkTown from "@/components/home/Talk-Town/TalkTown";
import TastTradition from "@/components/home/Taste-Traditon/TasteTradition";

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
    <section>
     <DiveInto/>
    </section>
    <section>
      <TalkTown/>
    </section>
    <section>
      <ContactUs/>
    </section>
   </div>
  );
}
