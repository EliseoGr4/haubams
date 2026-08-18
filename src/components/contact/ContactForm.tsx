import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { submitContactForm } from '@/utils/contactService';
import type { ContactFormData, ContactFormErrors, ContactSubmissionStatus } from '@/types';

const EMPTY_FORM: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  quality: '',
  company: '',
  subject: '',
  message: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!data.name.trim()) errors.name = 'Merci d\'indiquer votre nom.';
  if (!data.email.trim()) {
    errors.email = 'Merci d\'indiquer votre email.';
  } else if (!EMAIL_PATTERN.test(data.email)) {
    errors.email = 'Cet email ne semble pas valide.';
  }
  if (!data.message.trim()) errors.message = 'Merci de décrire votre demande.';
  return errors;
}

const inputClasses =
  'w-full border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-700/40 transition-colors focus:border-accent-500 focus:outline-none';

export function ContactForm() {
  const [data, setData] = useState<ContactFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<ContactSubmissionStatus>('idle');

  const handleChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');
    try {
      await submitContactForm(data);
      setStatus('success');
      setData(EMPTY_FORM);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 border border-navy-900/10 bg-white px-8 py-14 text-center"
        role="status"
      >
        <CheckCircle2 size={40} className="text-accent-600" />
        <h3 className="font-display text-xl font-bold text-navy-900">Message prêt à être transmis</h3>
        <p className="max-w-md text-sm leading-relaxed text-navy-700/75">
          Votre message a bien été préparé. Notre équipe vous recontactera au{' '}
          <strong className="text-navy-900">+237 678 899 542</strong>.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-2 font-display text-sm font-semibold text-accent-600 hover:text-accent-700"
        >
          Envoyer un autre message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Nom complet" htmlFor="name" error={errors.name} required>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={data.name}
            onChange={handleChange('name')}
            className={inputClasses}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email} required>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={data.email}
            onChange={handleChange('email')}
            className={inputClasses}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
        </Field>

        <Field label="Téléphone" htmlFor="phone">
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={data.phone}
            onChange={handleChange('phone')}
            className={inputClasses}
          />
        </Field>

        <Field label="Qualité / Fonction" htmlFor="quality">
          <input
            id="quality"
            type="text"
            autoComplete="organization-title"
            value={data.quality}
            onChange={handleChange('quality')}
            className={inputClasses}
            placeholder="Ex. Directeur Technique, DG, Chef de projet..."
          />
        </Field>

        <Field label="Entreprise / Établissement" htmlFor="company">
          <input
            id="company"
            type="text"
            autoComplete="organization"
            value={data.company}
            onChange={handleChange('company')}
            className={inputClasses}
          />
        </Field>
      </div>

      <Field label="Sujet" htmlFor="subject">
        <input
          id="subject"
          type="text"
          value={data.subject}
          onChange={handleChange('subject')}
          className={inputClasses}
          placeholder="Ex. Demande de devis, projet de rénovation..."
        />
      </Field>

      <Field label="Message" htmlFor="message" error={errors.message} required>
        <textarea
          id="message"
          rows={5}
          value={data.message}
          onChange={handleChange('message')}
          className={inputClasses}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
      </Field>

      {status === 'error' && (
        <p className="flex items-center gap-2 text-sm text-red-700" role="alert">
          <AlertCircle size={16} />
          Une erreur est survenue. Merci de réessayer, ou de nous appeler directement.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === 'submitting'}
        icon={status === 'submitting' ? <Loader2 size={18} className="animate-spin" /> : <Send size={16} />}
        className="w-full sm:w-auto"
      >
        {status === 'submitting' ? 'Envoi en cours...' : 'Envoyer le message'}
      </Button>

      <p className="text-xs leading-relaxed text-navy-700/55">
        Ce formulaire fonctionne actuellement en simulation : aucun message n&rsquo;est transmis à un
        serveur. Pour une réponse immédiate, contactez-nous directement au{' '}
        <a href="tel:+237678899542" className="underline hover:text-accent-600">
          +237 678 899 542
        </a>
        .
      </p>
    </form>
  );
}

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function Field({ label, htmlFor, error, required, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block font-display text-sm font-semibold text-navy-900">
        {label}
        {required && <span className="text-accent-600"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="mt-1.5 text-xs text-red-700" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
