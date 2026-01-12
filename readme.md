# Osuny

[Documentation officielle sur developers.osuny.org](https://developers.osuny.org/docs/website/)

This project is tested with BrowserStack.

# Style spécifique du site Gaîté Lyrique

## Afficher un bloc dans le hero (entête)

Cas concret : [page "salle immersive"](https://www.gaitelyrique.osuny.site/infos-pratiques/le-lieu/salle-immersive/)

Cela fonctionne pour trois natures éditoriales :

### Les actualités

Pour afficher un bloc chapitre à côté de l'image d'entête.

#### Comment faire ?

Dans le bloc concerné (uniquement "chapitre") :

- cliquer sur "Réglages avancés ;
- ajouter la class `in-hero`.

### Les pages enfant de "Le lieu" (ex: Grande Salle)

Pour afficher un bloc chapitre à côté de l'image d'entête.

#### Comment faire ?

Dans le bloc concerné (uniquement "chapitre" et "titre") :

- cliquer sur "Réglages avancés ;
- ajouter la class `in-hero`.

### Les événements

Pour afficher un bloc chapitre ou des organisations à la suite de l'image, dans la sidebar.

#### Comment faire ?

Dans le bloc concerné (uniquement "chapitre" et "organisation") :

- cliquer sur "Réglages avancés ;
- ajouter la class `in-sidebar`.

## Icônes des fichiers de téléchargement

Par défaut, les fichiers à télécharger sont signalés par un symbole universel.
Deux exceptions existent sur la Gaîté :
- un picto avec une coupe de fin et une bouteille ([pour la carte](https://www.gaitelyrique.osuny.site/infos-pratiques/restauration/)) ;
- un picto avec deux personnes ([pour les publics](https://www.gaitelyrique.osuny.site/infos-pratiques/#responsabilite-bienveillance)).

### Comment faire ?
Pour afficher ces icônes, il faut éditer le bloc "fichiers" : 

- cliquer sur "Réglages avancés";
- pour l'icône avec la bouteille : ajouter la class `icon-menu`;
- pour celle avec les personnes : ajouter la class `icon-public`.

## Masquer l'image d'entête dans certaines pages

Cas concret : [page "Le Lieu"](https://www.gaitelyrique.osuny.site/infos-pratiques/le-lieu/)

On souhaite utiliser l'image dans les blocs, mais ne pas l'afficher dans l'entête de la page.

#### Comment faire ?

Pour cela, il faut éditer la page et sous le slug ajouter la class `hero_without_image`.
Pour plus de détails, se référer à l'issue [#77](https://github.com/osunyorg/gaitelyrique-www/issues/77#issuecomment-3640803013).
