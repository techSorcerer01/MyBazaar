const AboutAndContact = () => {
    return (
      <section className="bg-blue-50 py-10 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* About Us Section */}
          <div id="about" className="md:w-1/2 mb-8 md:mb-0 self-start">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
           <div className="md:w-[90%]">
                <p className="text-gray-600 leading-relaxed">
                    Welcome to MyBrand! We are passionate about bringing you the best products at unbeatable prices. 
                    Our mission is to provide a seamless and enjoyable shopping experience for every customer.
                </p>

                <p className="text-gray-600 leading-relaxed mt-2">
                    Our team works tirelessly to ensure the highest quality and most innovative offerings. 
                    Discover a wide range of categories, from tech to fashion, and much more!
                </p>
           </div>
           
          </div>
  
          {/* Contact Us Section */}
          <div id="contact" className="md:w-1/2 self-start">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Have questions? We'd love to hear from you! Reach out to us, and our team will respond promptly.
            </p>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  required 
                />
              </div>
              <div className="mb-4">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  required 
                />
              </div>
              <div className="mb-4">
                <textarea 
                  placeholder="Your Message" 
                  rows="4" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  required 
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutAndContact;
  