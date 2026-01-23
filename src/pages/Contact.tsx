import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/SectionHeading';
import { FadeIn } from '@/components/AnimatedText';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Download, 
  Send, 
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'dhivyanagaraj2720@gmail.com',
    href: 'mailto:dhivyanagaraj2720@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/dhivya',
    href: 'https://github.com/Dhivya-2023',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/dhivya27',
    href: 'https://www.linkedin.com/in/dhivya27',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India',
    href: null,
  },
];

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  const formData = new FormData(e.currentTarget as HTMLFormElement);
  formData.append('access_key', "63bdf69a-101c-4cf8-8b77-aa089610ebeb"); // Use env var

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });
    
    const data = await res.json();
    
    if (data.success) {
      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      console.error('Error:', data);
      // Optional: Add error toast here
    }
  } catch (error) {
    console.error('Submit failed:', error);
  } finally {
    setIsSubmitting(false);
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pb-0">
        <div className="container-custom">
          <FadeIn>
            <span className="text-sm font-medium text-primary mb-4 block text-center">
              Get in Touch
            </span>
          </FadeIn>
          <SectionHeading
            title="Let's Work Together"
            subtitle="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding pt-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <FadeIn>
                <h2 className="text-2xl font-display font-bold mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  Whether you have a question, want to start a project, or simply want to connect, 
                  feel free to reach out. I'm always open to discussing new opportunities.
                </p>
              </FadeIn>

              {/* Contact Methods */}
              <div className="space-y-4 mb-10">
                {contactMethods.map((method, index) => (
                  <FadeIn key={method.label} delay={index * 0.1}>
                    <motion.div
                      className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <method.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground block">{method.label}</span>
                        {method.href ? (
                          <a
                            href={method.href}
                            target={method.href.startsWith('http') ? '_blank' : undefined}
                            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <span className="font-medium">{method.value}</span>
                        )}
                      </div>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>

              {/* Download Resume */}
              <FadeIn delay={0.4}>
               <Button variant="heroOutline" size="lg" className="gap-2" asChild>
  <a href="/Dhivya_resume.pdf" download="Dhivya_N_Resume.pdf">
    <Download className="w-5 h-5" />
    Download Resume
  </a>
</Button>

              </FadeIn>

              {/* Or Book a Meeting */}
              <FadeIn delay={0.5}>
                <div className="mt-8 p-6 bg-card rounded-2xl border border-border">
                  <h3 className="font-semibold mb-2">Prefer a call?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Schedule a 30-minute video call to discuss your project in detail.
                  </p>
                  <Button variant="heroOutline" asChild>
                    <Link to="/book-meeting">
                      Book a Meeting
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <FadeIn delay={0.2}>
              <div className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-2xl font-display font-bold mb-6">Send a Message</h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-xl mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thanks for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium mb-2 block">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-sm font-medium mb-2 block">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-medium mb-2 block">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
