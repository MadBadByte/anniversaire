# Carte d'anniversaire interactive

Un projet complet pour créer des cartes d'anniversaire personnalisées avec animation de bougies.

## Fonctionnalités
- Animation de bougies qui s'éteignent progressivement
- Personnalisation facile du prénom et des messages
- Design responsive (mobile et desktop)
- Gestion des erreurs (images manquantes)
- Une seule police système utilisée

## Personnalisation

### 1. Changer le prénom
1. Ouvrez `js/config.js`
2. Modifiez les champs :
```javascript
person: {
    name: "NouveauPrénom",          // Prénom à afficher
    framesPath: "img/frames/nouveauprenom/", // Chemin vers les images
    congratsTitle: "Titre personnalisé",     // Titre du message
    congratsText: "Texte personnalisé"       // Texte du message
}
```

### 2. Ajouter des images
1. Dupliquez le dossier `img/frames/template/`
2. Renommez-le avec le prénom (ex: `img/frames/pierre/`)
3. Ajoutez 4 images nommées `1.jpg` à `4.jpg`

### 3. Modifier les paramètres
Dans `js/config.js`, modifiez :
```javascript
gameSettings: {
    minClicks: 3,          // Nombre de clics avant animation
    blowInterval: 800      // Vitesse d'extinction (ms)
}
```

## Structure du projet
```
anniversaire/
├── index.html            # Page principale
├── css/                  # Styles
├── js/                   # Scripts
├── fonts/                # Polices
├── img/                  # Images
│   ├── frames/           # Images des gâteaux
│   └── icons/            # Icônes
└── README.md             # Ce fichier
```

## Conseils
- Utilisez des images de même taille pour un rendu optimal
- Testez sur différents navigateurs
- Pour envoyer par mail, compressez le dossier en .zip