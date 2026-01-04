module.exports = {
  inputDir: './icons-opt',
  outputDir: './dist',
  name: 'euro-icons',
  fontTypes: ['woff', 'woff2'],
  assetTypes: ['css', 'json'],
  prefix: 'esi',
  selector: '.esi',
  normalize: true,
  descent: 200,
  templates: {
    css: './templates/css.hbs' // Vérifiez que le fichier s'appelle bien css.hbs
  }
};
