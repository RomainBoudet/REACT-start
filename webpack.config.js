/* Toutes les options de config de webpack ! Ce fichier est lu quand on lance le script start avec webpack ! */

const path= require('path');

module.exports = {


    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/, // pour les fichier en js
                use:'babel-loader', // utilise alors ce module 
            }
        ]
    },
    devServer: {
         static: {
          directory: path.join(__dirname, 'dist'),
        }, 
        open: true,
        //compress: true,
        port: 3000,
      },

}