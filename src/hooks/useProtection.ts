import { useEffect } from 'react';

/**
 * Hook de protection du site contre la copie non autorisée.
 * - Désactive le clic droit
 * - Bloque les raccourcis clavier (F12, Ctrl+U, Ctrl+S, Ctrl+A, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C)
 * - Détecte l'ouverture des DevTools et affiche un avertissement
 *
 * Copyright © 2026 Haubans. Tous droits réservés.
 */
export function useProtection() {
  useEffect(() => {
    // ─── 1. Bloquer le clic droit ────────────────────────────────────────────
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // ─── 2. Bloquer les raccourcis clavier dangereux ─────────────────────────
    const handleKeyDown = (e: KeyboardEvent) => {
      const blockedKeys = [
        // Outils de développement
        'F12',
        // Vue source
        ...(e.ctrlKey ? ['u', 'U'] : []),
        // Sauvegarder la page
        ...(e.ctrlKey ? ['s', 'S'] : []),
        // Sélectionner tout
        ...(e.ctrlKey ? ['a', 'A'] : []),
        // Imprimer (peut capturer le contenu)
        ...(e.ctrlKey ? ['p', 'P'] : []),
      ];

      // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C (DevTools)
      if (e.ctrlKey && e.shiftKey && ['i', 'I', 'j', 'J', 'c', 'C'].includes(e.key)) {
        e.preventDefault();
        return;
      }

      if (blockedKeys.includes(e.key)) {
        e.preventDefault();
      }
    };

    // ─── 3. Détection DevTools via taille fenêtre ────────────────────────────
    const detectDevTools = () => {
      const threshold = 160;
      const widthDiff = window.outerWidth - window.innerWidth;
      const heightDiff = window.outerHeight - window.innerHeight;

      if (widthDiff > threshold || heightDiff > threshold) {
        // DevTools probablement ouvert – on efface le contenu affiché
        document.body.innerHTML =
          '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#0f172a;color:#f8fafc;font-family:sans-serif;font-size:1.2rem;text-align:center;padding:2rem;">' +
          '<div><h1 style="font-size:2rem;margin-bottom:1rem;">⛔ Accès refusé</h1>' +
          '<p>Les outils de développement sont désactivés sur ce site.</p>' +
          '<p style="color:#94a3b8;font-size:0.9rem;margin-top:1rem;">Copyright © 2026 Haubans. Tous droits réservés.</p></div></div>';
      }
    };

    // ─── 4. Attacher les listeners ───────────────────────────────────────────
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    // Vérification périodique des DevTools (toutes les 2 secondes)
    const devToolsInterval = setInterval(detectDevTools, 2000);

    // ─── 5. Nettoyage au démontage ───────────────────────────────────────────
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      clearInterval(devToolsInterval);
    };
  }, []);
}
