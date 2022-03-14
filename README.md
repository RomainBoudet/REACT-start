# REACT-start
Understand REACT achitecture and webpack configuration



## Application réactive et déclarative :

* Je m'appuie sur un state (mes données)
* Une logique de rendu propre
* On écoute les événement et intéraction, on redessine toute l'application
* Pour les performances, on délegue a REACT et son Virtual-Dom (comparaison du dom avec un dom conservé en mémoire pour mettre a jour les composants nécéssaire !)

#### Rappel yarn : 
* ``npm init` = `yarn init`
* `npm install` = `yarn install`
* `npm install react --save` = `arn add react`
* `npm uninstall react --save` = `yarn remove react`
* `npm install webpack --save-dev` = `yarn add webpack --dev`


## Webpack :

* install : `npm install webpack webpack-cli  --save-dev` 
* Outil de build : permet de modulariser, transpiller et compresser mon code avec des modules ! (Il ne fait quasi rien tout seul.. plutot chef d'orchestre !)
* gére tous les assets (JS, styles, images)
* Babel : permet de transpiler le code ES6 et ES5 pour les nanigateur qui ne le prennent pas en compte et de transpiller le JSX, via deux modules.
* ESLint : analyse le code et fournit des bonnes pratiques, formatage, etc... (config d'AIRBNB)
* On utilise la syntaxe ES6 `import` et `export` ou `export default` pour importer et exporter (module (ESM)
  * ex : Pour construire nos composant : `import React from 'react';` Pour rendre un composant dans le dom : `import {render} from 'react-dom';`


### Webpack est une dépendance de dev, pas besoin sur le serveur, mais nécéssaire à la production de l'app :

`npm install webpack --save_dev`


Dans mon architecture le dossier 'src' contient la source de mon code, dans lequel je vais coder.
Et le dossier 'dist' qui contient mon code prêt a être envoyer sur le server, mon produit fini et optimiser.
