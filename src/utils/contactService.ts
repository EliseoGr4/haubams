import type { ContactFormData } from '@/types';

/**
 * Couche d'abstraction pour l'envoi du formulaire de contact.
 *
 * ⚠️ Aucun backend n'est connecté pour le moment : cette fonction simule un
 * envoi (délai réseau + résolution). Aucun email n'est réellement envoyé.
 *
 * Pour brancher un vrai service plus tard, remplacer le corps de cette
 * fonction par un appel réel — par exemple :
 *
 *   // API REST maison
 *   const res = await fetch('/api/contact', {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify(data),
 *   });
 *   if (!res.ok) throw new Error('Échec de l'envoi');
 *
 *   // Firebase (Firestore ou Cloud Function)
 *   await addDoc(collection(db, 'contactMessages'), data);
 *
 *   // Service d'emailing (ex. Resend, EmailJS, Formspree)
 *   await emailProvider.send({ to: 'contact@haubanscameroun.com', ...data });
 *
 * Le composant ContactForm n'a besoin d'aucun changement : il n'appelle que
 * `submitContactForm`.
 */
export async function submitContactForm(data: ContactFormData): Promise<{ success: true }> {
  // Simulation d'un aller-retour réseau.
  await new Promise((resolve) => setTimeout(resolve, 900));

  // eslint-disable-next-line no-console
  console.info('[Simulation] Message de contact prêt à être transmis :', data);

  return { success: true };
}
