import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectType: 'Full-Stack Development',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate reliable dispatch or trigger mailto
    setTimeout(() => {
      setStatus('success');
      const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${formData.firstName} ${formData.lastName}`);
      const body = encodeURIComponent(`Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`);
      
      // Also open user's default client if desired
      window.open(`mailto:${portfolioData.developer.socials.email}?subject=${subject}&body=${body}`, '_blank');
      
      setTimeout(() => {
        setStatus('idle');
        setFormData({ firstName: '', lastName: '', email: '', projectType: 'Full-Stack Development', message: '' });
        onClose();
      }, 2500);
    }, 600);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
          {/* Background watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
            <span className="font-display text-[25vw] uppercase text-white leading-none">
              CONTACT
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-white text-black p-6 sm:p-10 shadow-2xl z-10 rounded-none border-t-4 border-brand-yellow"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-black/10">
              <div>
                <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
                  INITIATE COLLABORATION
                </span>
                <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-tighter mt-1">
                  START A CONVERSATION
                </h3>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 bg-black text-white hover:bg-brand-yellow hover:text-black transition-colors flex items-center justify-center rounded-none"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>

            {status === 'success' ? (
              <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
                <CheckCircle2 size={56} className="text-black" />
                <h4 className="font-display text-2xl uppercase tracking-tight">
                  MESSAGE TRANSMITTED
                </h4>
                <p className="text-neutral-600 text-sm max-w-md">
                  Thank you for reaching out. Your default email client has also been prepared with your inquiry. I will review and reply within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1">
                      FIRST NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="e.g. Rahul"
                      className="w-full bg-[#F5F5F5] border border-black/15 px-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow rounded-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1">
                      LAST NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="e.g. Nair"
                      className="w-full bg-[#F5F5F5] border border-black/15 px-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow rounded-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@company.com"
                      className="w-full bg-[#F5F5F5] border border-black/15 px-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow rounded-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1">
                      INQUIRY DOMAIN
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#F5F5F5] border border-black/15 px-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow rounded-none transition-colors"
                    >
                      <option value="Full-Stack Development">Full-Stack Development</option>
                      <option value="AI Integration & Pipelines">AI Integration & Pipelines</option>
                      <option value="Cloud & DevOps Engineering">Cloud & DevOps Engineering</option>
                      <option value="Freelance Contract">Freelance Contract</option>
                      <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-1">
                    PROJECT DETAILS & TIMELINE *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe what you are looking to build or achieve..."
                    className="w-full bg-[#F5F5F5] border border-black/15 px-3.5 py-2.5 text-sm focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow rounded-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-neutral-500 font-mono">
                    Direct: {portfolioData.developer.socials.email}
                  </span>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="bg-brand-yellow text-black font-display text-sm tracking-widest uppercase font-bold px-8 py-3 hover:bg-[#E5C200] transition-colors flex items-center space-x-2 rounded-none disabled:opacity-50"
                  >
                    <span>{status === 'submitting' ? 'SENDING...' : 'DISPATCH MESSAGE'}</span>
                    <Send size={15} />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
