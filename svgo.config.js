/**
 * SVGO config — SAFE for icon fonts (Fantasticon)
 * Objectifs :
 * - préserver la viewBox (indispensable pour les fonts)
 * - éviter les transforms problématiques
 * - nettoyer sans casser les paths
 */

module.exports = {
  multipass: true,

  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // CRITIQUE pour Fantasticon / fonts
          removeViewBox: false,

          // On laisse SVGO optimiser mais sans surprises
          convertTransform: true,
        },
      },
    },

    // Les fonts n’aiment pas width/height fixes
    {
      name: 'removeDimensions',
      active: true,
    },

    // Nettoyage utile mais sans impact sur les glyphes
    {
      name: 'cleanupIds',
      active: true,
    },
    {
      name: 'collapseGroups',
      active: true,
    },

    // Optimisation des paths (raisonnable)
    {
      name: 'convertPathData',
      active: true,
    },
  ],
};
