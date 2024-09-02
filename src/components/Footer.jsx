

const Footer = () => {
  function handleSubscription(event) {
    event.preventDefault();
    const email = event.target.elements[0].value;
  
    // Example: Replace with actual email sending logic
    console.log(`Subscribe email: ${email}`);
  
    // Optionally, you can use an API like SendGrid to send the email
    // Or connect to a backend service that handles email subscriptions
  }
  
  return (
    <footer className="bg-gray-900 text-white p-10">
    <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      <nav>
        <h6 className="font-semibold mb-4">Services</h6>
        <a className="block text-sm hover:underline">Branding</a>
        <a className="block text-sm hover:underline">Design</a>
        <a className="block text-sm hover:underline">Marketing</a>
        <a className="block text-sm hover:underline">Advertisement</a>
      </nav>
      <nav>
        <h6 className="font-semibold mb-4">Company</h6>
        <a className="block text-sm hover:underline">About us</a>
        <a className="block text-sm hover:underline">Contact</a>
        <a className="block text-sm hover:underline">Jobs</a>
        <a className="block text-sm hover:underline">Press kit</a>
      </nav>
      <nav>
        <h6 className="font-semibold mb-4">Legal</h6>
        <a className="block text-sm hover:underline">Terms of use</a>
        <a className="block text-sm hover:underline">Privacy policy</a>
        <a className="block text-sm hover:underline">Cookie policy</a>
      </nav>
      <form onSubmit={handleSubscription}>
        <h6 className="font-semibold mb-4">Newsletter</h6>
        <div className="flex">
          <input
            type="email"
            placeholder="username@site.com"
            className="p-2 rounded-l-md text-black w-full focus:outline-none"
            required
          />
          <button type="submit" className="bg-pink-500 p-2 rounded-r-md hover:bg-pink-600">Subscribe</button>
        </div>
      </form>
    </div>
    <div className="text-center mt-6">
      <p>© 2024 Myntra. All rights reserved. | Developed by Shubham Ashish</p>
    </div>
  </footer>
  

  );
};

export default Footer;
