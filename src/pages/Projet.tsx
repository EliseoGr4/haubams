import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Building2, Mail, Phone, User, MapPin, Calendar, FileText, Briefcase, DollarSign } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";

const PROJECT_TYPES = [
  "Conception architecturale",
  "Renovation / modernisation",
  "Genie civil",
  "Electricite et systemes",
  "Radioprotection",
  "Climatisation et VMC",
  "Cloisons et amenagements",
  "Plafonds acoustiques",
  "Protection electrostatique",
  "Videosurveillance",
  "Maintenance et SAV",
  "Autre",
];

const BUDGET_RANGES = [
  "Moins de 5 000 000 FCFA",
  "5 000 000 – 20 000 000 FCFA",
  "20 000 000 – 50 000 000 FCFA",
  "50 000 000 – 100 000 000 FCFA",
  "Plus de 100 000 000 FCFA",
  "A definir",
];

interface FormState {
  firstName: string;
  lastName: string;
  quality: string;
  organization: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  budget: string;
  targetDate: string;
  description: string;
}

const INITIAL: FormState = {
  firstName: "", lastName: "", quality: "", organization: "",
  email: "", phone: "", projectType: "", location: "",
  budget: "", targetDate: "", description: "",
};

export default function Projet() {
  useSEO({
    title: "Votre projet",
    description: "Presentez votre projet a Haubans SARL — ingenierie hospitaliere au Cameroun. Remplissez le formulaire pour que notre equipe vous contacte.",
  });

  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.firstName.trim()) e.firstName = "Requis";
    if (!form.lastName.trim()) e.lastName = "Requis";
    if (!form.email.trim()) e.email = "Requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email invalide";
    if (!form.phone.trim()) e.phone = "Requis";
    if (!form.description.trim()) e.description = "Requis";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((err) => ({ ...err, [e.target.name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); return; }
    // TODO: connecter a une API/backend
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <PageHeader eyebrow="Votre projet" title="Votre demande a ete enregistree" />
        <section className="py-28">
          <Container size="narrow" className="text-center">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }}>
              <CheckCircle size={64} className="mx-auto text-accent-500" />
              <h2 className="mt-6 font-display text-2xl font-bold text-navy-900">Merci pour votre message !</h2>
              <p className="mt-4 text-base leading-relaxed text-navy-700/80">
                Notre equipe a bien recu votre demande et vous contactera dans les meilleurs delais
                pour echanger sur votre projet.
              </p>
            </motion.div>
          </Container>
        </section>
      </>
    );
  }

  const Field = ({ label, icon: Icon, error, children }: { label: string; icon: React.ElementType; error?: string; children: React.ReactNode }) => (
    <div>
      <label className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-navy-900">
        <Icon size={14} className="text-accent-500" />
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );

  const inputClass = (err?: string) =>
    `w-full border px-4 py-3 text-sm font-body bg-white text-navy-900 placeholder-navy-700/40 focus:outline-none focus:border-accent-500 transition-colors ${err ? "border-red-400" : "border-navy-900/20"}`;

  return (
    <>
      <PageHeader
        eyebrow="Haubans SARL"
        title="Parlons de votre projet"
        description="Presentez-nous votre besoin. Notre equipe d'ingenierie hospitaliere vous recontacte pour etudier ensemble la meilleure solution."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.8fr]">
            {/* Colonne info */}
            <motion.aside
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-lg font-bold text-navy-900">Pourquoi nous contacter ?</h2>
                <p className="mt-3 text-sm leading-relaxed text-navy-700/80">
                  Haubans SARL accompagne les etablissements de sante dans tous leurs projets
                  d'ingenierie hospitaliere, de la conception a la maintenance.
                </p>
              </div>
              {[
                { title: "Analyse gratuite de votre besoin", desc: "Notre equipe etudie votre projet et vous propose une approche adaptee." },
                { title: "Reponse sous 48h", desc: "Nous nous engageons a vous recontacter rapidement pour echanger sur votre projet." },
                { title: "Expertise hospitaliere", desc: "+5 ans d'experience dans les infrastructures de sante au Cameroun." },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-accent-500 pl-4">
                  <h3 className="font-display text-sm font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-navy-700/75">{item.desc}</p>
                </div>
              ))}
            </motion.aside>

            {/* Formulaire */}
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onSubmit={handleSubmit}
              noValidate
              className="space-y-6"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Prenom *" icon={User} error={errors.firstName}>
                  <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Jean" className={inputClass(errors.firstName)} />
                </Field>
                <Field label="Nom *" icon={User} error={errors.lastName}>
                  <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Dupont" className={inputClass(errors.lastName)} />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Qualite / Fonction" icon={Briefcase} error={errors.quality}>
                  <input name="quality" value={form.quality} onChange={handleChange} placeholder="ex. Directeur Technique" className={inputClass()} />
                </Field>
                <Field label="Etablissement / Organisation" icon={Building2} error={errors.organization}>
                  <input name="organization" value={form.organization} onChange={handleChange} placeholder="Hopital General de Douala" className={inputClass()} />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Email *" icon={Mail} error={errors.email}>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="vous@exemple.com" className={inputClass(errors.email)} />
                </Field>
                <Field label="Telephone *" icon={Phone} error={errors.phone}>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+237 6XX XXX XXX" className={inputClass(errors.phone)} />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Type de projet" icon={FileText}>
                  <select name="projectType" value={form.projectType} onChange={handleChange} className={inputClass()}>
                    <option value="">Selectionnez...</option>
                    {PROJECT_TYPES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </Field>
                <Field label="Localisation du projet" icon={MapPin}>
                  <input name="location" value={form.location} onChange={handleChange} placeholder="Douala, Yaounde..." className={inputClass()} />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Budget estimatif" icon={DollarSign}>
                  <select name="budget" value={form.budget} onChange={handleChange} className={inputClass()}>
                    <option value="">Selectionnez...</option>
                    {BUDGET_RANGES.map((b) => <option key={b}>{b}</option>)}
                  </select>
                </Field>
                <Field label="Date souhaitee" icon={Calendar}>
                  <input type="date" name="targetDate" value={form.targetDate} onChange={handleChange} className={inputClass()} />
                </Field>
              </div>

              <Field label="Description du projet *" icon={FileText} error={errors.description}>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Decrivez votre projet, vos besoins, les contraintes particulieres..."
                  className={inputClass(errors.description)}
                />
              </Field>

              <p className="text-xs text-navy-700/50">
                * Champs obligatoires. Vos donnees sont utilisees uniquement pour traiter votre demande.
              </p>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-accent-500 px-8 py-4 font-display text-sm font-bold text-white transition-colors hover:bg-accent-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-500"
              >
                <Send size={16} />
                Envoyer ma demande
              </button>
            </motion.form>
          </div>
        </Container>
      </section>
    </>
  );
}
