export default function Home() {
  return (
    <div>
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          I Help Local Businesses Get Online & Grow
        </h1>
        <p className="text-gray-400 max-w-2xl mb-6">
          Websites • Google Maps • Local SEO for Small Businesses
        </p>
        <div className="flex gap-4">
          <a href="tel:+91XXXXXXXXXX" className="bg-accent px-6 py-3 rounded">Call Now</a>
          <a href="https://wa.me/91XXXXXXXXXX" className="border border-accent px-6 py-3 rounded">WhatsApp</a>
        </div>
      </section>

      <section className="py-20 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Is Your Business Invisible on Google?</h2>
        <p className="text-gray-400">Customers search online before visiting shops. If you're not online, you're losing them.</p>
      </section>
    </div>
  );
}
