import { Navbar, Footer } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Articles, WhatsNew, LearnMore } from '../sections';

const Page = () => (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Explore />
    <GetStarted />
    <WhatsNew />
    <LearnMore />
    <Articles />
    <Feedback />
    <Footer />
  </div>
);

export default Page;
