import { Navbar, Footer } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Articles, WhatsNew, LearnMore, Form } from '../sections';

const Page = () => (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Explore />
    <GetStarted />
    <WhatsNew />
    <Form />
    <LearnMore />
    <Articles />
    <Feedback />
    <Footer />
  </div>
);

export default Page;
