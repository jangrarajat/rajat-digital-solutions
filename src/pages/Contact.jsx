export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <form className="space-y-4">
        <input className="w-full p-3 bg-secondary" placeholder="Your Name" />
        <input className="w-full p-3 bg-secondary" placeholder="Business Name" />
        <input className="w-full p-3 bg-secondary" placeholder="Phone Number" />
        <textarea className="w-full p-3 bg-secondary" placeholder="Tell me about your business"></textarea>
        <button className="bg-accent px-6 py-3 rounded">Send</button>
      </form>
    </div>
  );
}
