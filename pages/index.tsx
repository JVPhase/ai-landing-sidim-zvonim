import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Link from 'next/link';
import { ModalContext } from '@/components/ModalProvider';
import { useContext } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { isModalOpen, modalContent, openModal, closeModal } =
    useContext(ModalContext);
  return (
    <div>
      <Head>
        <title>Telemarketing Services</title>
        <meta
          name="description"
          content="Lead generation, appointment setting, and telemarketing services for businesses of all sizes."
        />
      </Head>
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="#advantages">Advantages</Link>
          <Link href="#testimonials">Testimonials</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <h1>Telemarketing Services</h1>
      </header>
      <main>
        <section id="advantages">
          <h2>Advantages of Our Services</h2>
          <div className="grid-container">
            <div className="grid-item">
              <Image
                src="/lead-generation1.png"
                alt="Lead generation"
                width={300}
                height={300}
              />
              <h3>Lead Generation</h3>
              <p>
                Our experienced telemarketers can help you increase sales and
                reach new customers by generating leads for your business.
              </p>
            </div>
            <div className="grid-item">
              <Image
                src="/appointment-setting1.png"
                alt="Appointment setting"
                width={300}
                height={300}
              />
              <h3>Appointment Setting</h3>
              <p>
                We can set appointments for you with potential customers, so you
                can focus on closing deals.
              </p>
            </div>
            <div className="grid-item">
              <Image
                src="/call-center-support1.png"
                alt="Call center support"
                width={300}
                height={300}
              />
              <h3>Call Center Support</h3>
              <p>
                Our call center support services can help you handle high volume
                call traffic and improve customer satisfaction.
              </p>
            </div>
          </div>
        </section>
        <section id="testimonials">
          <h2>Testimonials</h2>
          <blockquote>
            <p>
              &quot;Our telemarketing campaign with this company helped us
              increase sales and reach new customers. We highly recommend their
              services.&quot;
            </p>
            <cite>- John Doe, CEO of XYZ Company</cite>
          </blockquote>
          <blockquote>
            <p>
              &quot;We have been using this company&apos;s telemarketing
              services for several years and have always been impressed with
              their results. They are professional and reliable.&quot;
            </p>
            <cite>- Jane Smith, Marketing Manager of ABC Corporation</cite>
          </blockquote>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              openModal('LOL');
              console.log(e.target);
            }}
          >
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <br />
            <label>
              Phone:
              <input type="tel" name="phone" required />
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
        </section>
        <footer>
          <nav>
            <Link href="/">Home</Link>
            <Link href="#advantages">Advantages</Link>
            <Link href="#testimonials">Testimonials</Link>
            <Link href="#contact">Contact</Link>
          </nav>
          <p>Copyright © 2021 Telemarketing Company</p>
        </footer>
      </main>
    </div>
  );
}
