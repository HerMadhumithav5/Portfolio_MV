import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  const contactInfo = [
    { icon: "📧", label: "Email", value: "madhujune2306@gmail.com", link: "mailto:madhujune2306@gmail.com" },
    { icon: "📱", label: "Phone", value: "+91 7200959061", link: "tel:+917200959061" },
    { icon: "📍", label: "Location", value: "Chennai, India", link: null },
    { icon: "🔗", label: "LinkedIn", value: "www.linkedin.com/in/madhumitha-venkatesan-a886532a5", link: "https://linkedin.com/in/madhumitha-venkatesan-a886532a5/" },
    { icon: "🐙", label: "GitHub", value: "github.com/HerMadhumithav5", link: "https://github.com/HerMadhumithav5" }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-indigo-400 text-sm font-mono mb-2 block">GET IN TOUCH</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Let's Work Together</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-[#111317] rounded-lg border border-white/10">
                <span className="text-2xl">{info.icon}</span>
                <div>
                  <p className="text-gray-500 text-xs">{info.label}</p>
                  {info.link ? (
                    <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-300">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-[#111317] rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-medium rounded-lg transition-all duration-300 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-indigo-500 hover:to-indigo-400 shadow-lg shadow-indigo-600/20'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-400 text-sm text-center">Message sent successfully!</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;