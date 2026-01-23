import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Briefcase, Code, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const chatOptions = [
  {
    id: 'project',
    icon: Code,
    title: 'Discuss a Project',
    description: 'Have a project idea? Let\'s talk!',
  },
  {
    id: 'freelance',
    icon: Briefcase,
    title: 'Freelance Inquiry',
    description: 'Looking for freelance help?',
  },
  {
    id: 'job',
    icon: Mail,
    title: 'Job Opportunity',
    description: 'Hiring? I\'d love to hear more.',
  },
];

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    formData.append('access_key', "63bdf69a-101c-4cf8-8b77-aa089610ebeb");
    
    // Add subject from selected option
    if (selectedOption) {
      formData.append('subject', `Chat: ${chatOptions.find(opt => opt.id === selectedOption)?.title}`);
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      
      const data = await res.json();
      
      if (data.success) {
        setIsSubmitted(true);
        setEmail('');
        setMessage('');
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error('Error:', data);
      }
    } catch (error) {
      console.error('Submit failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    setSelectedOption(null);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-foreground text-background shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] bg-background rounded-2xl shadow-2xl border border-border overflow-hidden max-h-[500px]"
          >
            {/* Header */}
            <div className="bg-foreground text-background p-4">
              <h3 className="font-display font-semibold">Let's Connect</h3>
              <p className="text-sm text-background/70">How can I help you?</p>
            </div>

            {/* Content */}
            <div className="p-4 overflow-y-auto">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-display font-semibold mb-2">Message Sent!</h4>
                    <p className="text-sm text-muted-foreground">
                      I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : selectedOption ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <button
                      type="button"
                      onClick={handleBack}
                      className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>
                    
                    <div>
                      <label className="text-sm font-medium mb-1 block">Email</label>
                      <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-1 block">Message</label>
                      <textarea
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={4}
                        className="w-full px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none text-sm"
                        placeholder={`Tell me about your ${selectedOption}...`}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="accent" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="options"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-2"
                  >
                    {chatOptions.map((option) => (
                      <motion.button
                        key={option.id}
                        onClick={() => setSelectedOption(option.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all text-left group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors flex-shrink-0">
                            <option.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-sm leading-tight">{option.title}</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {option.description}
                            </p>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
