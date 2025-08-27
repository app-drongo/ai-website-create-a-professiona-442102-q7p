import Pageheader2 from '@/components/Pageheader2';
import Contactcontact from '@/components/Contactcontact';
import Cta2 from '@/components/Cta2';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section id="section-0" className="scroll-mt-16">
        <Pageheader2 />
      </section>
      <section id="section-1" className="scroll-mt-16">
        <Contactcontact />
      </section>
      <section id="section-2" className="scroll-mt-16">
        <Cta2 />
      </section>
    </main>
  );
}