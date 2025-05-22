'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill out all fields.');
      setStatus('error');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/82633b63be6fc9c31a3001177d6bdc56', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'Portfolio Contact Form Submission',
          _replyto: formData.email,
          _blacklist: 'SEO, free, casino, bitcoin, porn',
          _honey: '',
          _next: 'http://localhost:3000/#contact', // Update to your deployed URL in production
        }).toString(),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      setStatus('error');
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <h2 className="text-4xl xs:text-4xl font-heading mb-6 font-bold">Get In Touch</h2>
          <p className="text-lg xs:text-base mb-5">You can find me on:</p>
          <ul className="mb-6">
            <li className="mb-3 flex items-center gap-3">
              <FaLinkedin className="text-primary text-xl xs:text-lg" />
              <a href="https://www.linkedin.com/in/dedi-yanto-776b861b4/" className="text-primary text-lg xs:text-base hover:underline" target="_blank">
                LinkedIn
              </a>
            </li>
            <li className="mb-3 flex items-center gap-3">
              <FaGithub className="text-primary text-xl xs:text-lg" />
              <a href="https://github.com/foxerinc" className="text-primary text-lg xs:text-base hover:underline" target="_blank">
                GitHub
              </a>
            </li>
            <li className="mb-3 flex items-center gap-3">
              <FaInstagram className="text-primary text-xl xs:text-lg" />
              <a href="https://instagram.com/dediy" className="text-primary text-lg xs:text-base hover:underline" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
          <Link
            href="/Dedi Yanto-resume.pdf"
            download
            className="inline-block px-8 py-4 border-2 border-tertiary text-secondary rounded-md text-lg xs:text-base hover:bg-tertiary hover:text-secondary transition-colors"
          >
            Download CV
          </Link>
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input type="hidden" name="_subject" value="Portfolio Contact Form Submission" />
            <input type="hidden" name="_next" value="http://localhost:3000/#contact" />
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <label htmlFor="name" className="text-lg xs:text-base">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-4 bg-[#1a1a1a] border border-border rounded-md text-white font-mono text-base xs:text-sm"
            />
            <label htmlFor="email" className="text-lg xs:text-base">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-4 bg-[#1a1a1a] border border-border rounded-md text-white font-mono text-base xs:text-sm"
            />
            <label htmlFor="message" className="text-lg xs:text-base">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="p-4 bg-[#1a1a1a] border border-border rounded-md text-white font-mono text-base xs:text-sm resize-y"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="self-start px-8 py-4 bg-tertiary text-secondary rounded-md text-lg xs:text-base hover:bg-tertiaryAccent transition-colors disabled:opacity-50"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="text-neon text-base">Message sent successfully! I will get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 text-base">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;