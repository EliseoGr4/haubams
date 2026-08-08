import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import obfuscatorPlugin from 'rollup-plugin-obfuscator'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    // Sépare les grosses dépendances tierces du code applicatif pour un
    // meilleur cache navigateur entre déploiements.
    rollupOptions: {
      plugins: [
        // ─── Obfuscation du code JavaScript en production ────────────────────
        // Rend le code source illisible même pour un développeur expérimenté.
        obfuscatorPlugin({
          // N'obfusque que le code applicatif, pas les dépendances (plus rapide)
          include: ['src/**/*.ts', 'src/**/*.tsx'],
          options: {
            // Compacte le code en une seule ligne
            compact: true,
            // Renomme les variables et fonctions avec des noms aléatoires
            identifierNamesGenerator: 'hexadecimal',
            // Chiffre les chaînes de caractères (URLs, textes...)
            stringArray: true,
            stringArrayEncoding: ['base64'],
            stringArrayThreshold: 0.75,
            // Ajoute du code mort pour perturber l'analyse
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 0.2,
            // Contrôle de débogage : empêche le débogage dans DevTools
            debugProtection: false, // désactivé car peut ralentir le site
            // Rotation des chaînes pour compliquer la désobfuscation
            rotateStringArray: true,
            shuffleStringArray: true,
            // Protège contre l'analyse statique
            transformObjectKeys: true,
            unicodeEscapeSequence: false,
          },
        }),
      ],
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'vendor-motion';
            if (/react-router|react-dom|\/react\//.test(id)) return 'vendor-react';
          }
        },
      },
    },
  },
})
