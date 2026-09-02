import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Mail, CheckCircle2, Sparkles } from 'lucide-react';
import { useToast } from '../common/Toast';

interface GetNotifiedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetNotifiedModal: React.FC<GetNotifiedModalProps> = ({ isOpen, onClose }) => {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      showToast('Thank you! You have been added to our priority invite list.', 'success');
    }, 500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setEmail('');
    setCompany('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title={isSubmitted ? "You're on the list!" : "Get Notified on Launch"}
      subtitle={isSubmitted ? "We'll notify you as soon as 36Route early access opens." : "Join leading transport managers and companies waiting for 36Route."}
      maxWidth="sm"
    >
      {isSubmitted ? (
        <div className="text-center py-4 space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            We've saved <strong className="text-slate-900">{email}</strong> to our early access roster. Our team will reach out with early invite codes.
          </p>
          <Button variant="outline" size="sm" className="w-full mt-2" onClick={handleReset}>
            Done
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Work Email Address"
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={<Mail className="w-4 h-4" />}
            required
          />

          <Input
            label="Company Name (Optional)"
            placeholder="e.g. Acme Logistics"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />

          <div className="pt-2">
            <Button
              type="submit"
              variant="primary"
              className="w-full py-2.5"
              isLoading={isLoading}
              icon={<Sparkles className="w-4 h-4" />}
            >
              Request Early Access
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
