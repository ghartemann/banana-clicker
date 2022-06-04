////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// PATCHNOTE AND ROADMAP

document.getElementById("version").innerHTML = "v0.8.9";

function patchNote() {
  alert(
    "CHANGELOG\n\n" +
      "v0.8.9\n" +
      "* Correction de nombreux bugs d'affichage\n" +
      "* Ajout de trois nouveaux buffs (engrais, bulldozer et mégaphone)\n\n" +
      "v0.8.7\n" +
      "* Retour du panel d'infos, maintenant plus joli (accessible via le ? en haut à gauche)\n\n" +
      "v0.8.5\n" +
      "* Ajout de la bananeraie, du bateau, de l'avion, du toucan, du paresseux et du fusil\n" +
      "* Correction de bugs mineurs\n\n" +
      "v0.8.2\n" +
      "* Correction de nombreux bugs\n" +
      "* Known bug: l'achat par lot de 10 ne fonctionne pas parfaitement bien\n\n" +
      "v0.8.0\n" +
      "* Ajout de la fonction SAUVEGARDE AUTO\n" +
      "* Énorme refactorisation du code (ça vous fait une belle jambe)\n" +
      "* Corrections de bugs\n\n" +
      "v0.7.7\n" +
      "* Possibilité d'acheter les clickers par lots de 10" +
      "* Nombreux fixes au CSS\n\n" +
      "v0.7.0\n" +
      "* Ambiance sonore !\n" +
      "* Ajout de stats\n" +
      "* Fixes\n\n" +
      "v0.6.0\n" +
      "* Gros changements d'organisation visuelle\n" +
      "* Des tooltips informent maintenant de l'action des clickers (ceux des buffs suivront)\n\n" +
      "v0.5.3\n" +
      "* Animation des curseurs quand ils cliquent\n" +
      "* Encore plus responsive\n\n" +
      "v0.5.0\n" +
      "* Responsive™\n" +
      "* Ajout d'animations sur les boutons\n" +
      "* Nombreux fixes de CSS\n\n" +
      "v0.4.6\n" +
      "* Ajout du macaque\n\n" +
      "v0.4.5\n" +
      "* Beaucoup, beaucoup d'améliorations du CSS, maintenant un peu plus responsive\n\n" +
      "v0.4.0\n" +
      "* Ajout de curseurs visuels à l'achat d'un clicker (assez fier du résultat)\n\n" +
      "v0.3.1\n" +
      "* Ajout du méga curseur (1000 clics)\n" +
      "* Refactorisation et nombreux fixes\n\n" +
      "v0.3.0\n" +
      "* Migration vers PHP (simple MVC)\n" +
      "* Améliorations visuelles en masse\n\n" +
      "v0.2.0\n" +
      "* Ajout des buffs\n" +
      "* Ajout du calcul de bpc\n\n" +
      "v0.1.5\n" +
      "* Ajout des gorilles\n" +
      "* Ajout des bananiers\n\n" +
      "v0.1.1\n" +
      "* Calcul du bps pleinement fonctionnel"
  );
}

function roadMap() {
  alert(
    "ROADMAP\n\n" +
      "* WIP : Ajout de nombreux autres clickers et buffs\n" +
      "* Migration sous Symfony\n" +
      "* Ajout d'une fonctionnalités achievements (inutiles mais ça fait toujours plaisir)\n" +
      "* Profil utilisateur et sauvegarde des données en BDD\n" +
      "* Export et import de sauvegardes\n" +
      "* Rendre le changelog et la roadmap plus jolies\n" +
      "* Devenir millionnaire grâce à la publicité"
  );
}

function unreleased() {
  alert("Le jeu sauvegarde maintenant tout seul, à chaque seconde.");
}
