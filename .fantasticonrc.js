module.exports = {
  inputDir: './icons-opt', // dossier des SVG optimisés
  outputDir: './dist',
  name: 'euro-icons',
  fontTypes: ['woff', 'woff2'],
  assetTypes: ['css', 'json'],
  prefix: 'esi',
  selector: '.esi',
  normalize: true,
  descent: 200,
  // C'est ici qu'on définit le dossier des templates
  templates: {
    css: './templates/css.hbs',   // Adaptez le nom du fichier si nécessaire
    html: './templates/html.hbs'  // Si vous en avez un pour la preview
  }
};
