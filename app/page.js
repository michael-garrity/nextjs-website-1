import { Navbar, Footer } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Articles, WhatsNew, Form } from '../sections';

const Page = () => (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Explore />
    <GetStarted />
    <WhatsNew />
    <Articles />
    <Feedback />
    <Form />
    <Footer />
  </div>
);

export default Page;
