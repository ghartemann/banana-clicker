drop table if exists clickers;
create table clickers
(
    id               int auto_increment
        primary key,
    name             varchar(30) not null,
    article          varchar(3)  not null,
    display_name     varchar(30) not null,
    img              varchar(20) not null,
    price            bigint      not null,
    multiplier       float       not null,
    price_multiplier float       not null,
    description      text        not null
);

insert into clickers (id, name, article, display_name, img, price, multiplier, price_multiplier, description)
values  (1, 'tierClicker', 'un', 'autoclicker', 'hand.png', 40, 1, 1.15, 'Un curseur qui clique tout seul. En plus on le voit faire. C''est pas formidable, ça ?'),
        (2, 'tierTree', 'un', 'bananier', 'leaf.png', 200, 2, 1.15, 'Un bananier assez banal mais avec un sacré rendemant. Après voilà c''est un arbre, il n''y a pas non plus mille choses à dire dessus.'),
        (3, 'tierMacaque', 'un', 'macaque', 'macaque.png', 2200, 10, 1.15, 'Un macaque qui ramasse des bananes. Le mieux c''est qu''on le paie une misère et qu''il semble aimer ça.'),
        (4, 'tierGorilla', 'un', 'gorille', 'gorilla.png', 11000, 40, 1.15, 'Un gorille qui fait à peu près la même chose que le macaque, mais de façon remarquablement plus efficace et pour une paie remarquablement peu supérieure à celle de son compère.'),
        (5, 'tierPlantation', 'une', 'bananeraie', 'plantation.png', 40000, 100, 1.16, 'Une bananeraie composée d''un certain nombre de bananiers. Et qui donc, de façon assez logique, produit beaucoup plus de bananes. Pourquoi en acheter un quand on peut en acheter toute une collection ? Vous faites bien ce que vous voulez, mais c''est clairement plus avantageux.'),
        (6, 'tierToucan', 'un', 'toucan muet', 'toucan.png', 150000, 300, 1.16, 'Ce toucan ne parle pas, ce qui le rend beaucoup plus agréable qu''un autre qui parlerait. Il effectue ses tâches avec beaucoup de sérieux et de concentration et, pour tout vous dire, on apprécie.'),
        (7, 'tierSloth', 'un', 'paresseux', 'sloth.png', 290000, 500, 1.16, 'Un paresseux qui, paradoxalement, ramasse des bananes avec une rapidité déconcertante. C''est assez peu logique mais que voulez-vous, il faut bien trouver des idées dans le thème.'),
        (8, 'tierRifle', 'un', 'fusil', 'rifle.png', 1000000, 1776, 1.17, 'Un fusil. Pour chasser les bananes sauvages. Ça paraît assez évident.'),
        (9, 'tierBoat', 'un', 'gros bateau', 'boat.png', 2000000, 2500, 1.19, 'Un bateau qui transporte des bananes, pourquoi pas. Mais si on suit le fil rouge de nos précédents achats, est-ce que ce bateau ne devrait pas lui-même produire des bananes ? On a pas la réponse. Ce jeu commence à prendre de grosses libertés vis-à-vis du lore, c''est assez irritant.'),
        (10, 'tierPlane', 'un', 'avion cargo', 'airplane.png', 3000000, 3500, 1.19, 'Un transport très rapide, très efficace et très peu éco-responsable. Mais priverait-on le monde de bananes pour de vulgaires considérations écologiques ? Allons.'),
        (11, 'tierWormhole', 'un', 'trou de ver', 'wormhole.png', 15000000000, 100000, 1.23, 'Allez chercher vos bananes dans une autre galaxie. Le risque d''un effondrement de l''espace-temps est non nul, non négligeable et non improbable, mais l''appel des bananes est plus fort que ces basses considérations.');



drop table if exists buffsBPC;
create table buffsBPC
(
    id               int auto_increment
        primary key,
    name             varchar(50) not null,
    display_name     varchar(50) not null,
    img              varchar(50) not null,
    price            int         not null,
    multiplier       float       not null,
    price_multiplier float       not null,
    description      text        not null
);

insert into buffsBPC (id, name, display_name, img, price, multiplier, price_multiplier, description)
values  (1, 'buffCursor', 'Meilleur curseur', 'cursor.png', 100, 1, 1.19, 'Votre curseur mais en mieux afin de cliquer toujours plus efficacement.'),
        (2, 'buffMegaCursor', 'Curseur encore plus fort', 'cursor2.png', 10000, 10, 1.19, 'Votre curseur mais en vraiment, vraiment mieux. Y a pas à dire, ça fait toute la différence.'),
        (3, 'buffSolidCursor', 'Curseur en béton armé', 'solidcursor.png', 100000, 100, 1.19, 'Votre curseur est remplacé par une version en béton armé. On a pas vraiment compris comment ça marchait ni pourquoi il était plus productif que les autres mais vous n''allez pas vous en plaindre, hein ?');



drop table if exists buffsBPS;
create table buffsBPS
(
    id               int auto_increment
        primary key,
    name                varchar(50)    not null,
    display_name        varchar(50)    not null,
    img                 varchar(50)    not null,
    type                varchar(3)     not null,
    price               int            not null,
    multiplier          float          not null,
    multiplier_percent  varchar(3)     not null,
    price_multiplier    float          not null,
    `modifies`          varchar(50)    not null,
    modifies_name       varchar(50)    not null,
    description         text           not null
);

insert into buffsBPS (id, name, display_name, img, type, price, multiplier, multiplier_percent, price_multiplier, `modifies`, modifies_name, description)
values  (1, 'buffFertilizer', 'Sac d''engrais Monsanto', 'fertilizer.png', 'BPS', 2000, 1.3, '30%', 1.15, 'Tree', 'bananier', 'Du bon engrais Monsanto chargé de pesticides pour rendre vos bananiers plus grands, plus forts, plus productifs et plus intelligents. Un outil idéal – si le risque élevé de cancer de la gorge, des intestins ou du colon vous importe peu.'),
        (2, 'buffMotorcycle', 'Uberiser les macaques', 'motorcycle.png', 'BPS', 10000, 1.2, '20%', 1.15, 'Macaque', 'macaque', 'En plus de leur travail habituel, on fournit des scooters aux macaques qui peuvent ainsi livrer des bananes avec un statut d''auto-entrepreneur assez favorable d''un point de vue financier. Pour vous.'),
        (3, 'buffCPU', 'Robotiser les gorilles', 'cpu.png', 'BPS', 33333, 1.1, '10%', 1.15, 'Gorilla', 'gorille', 'Les gorilles c''est bien, mais les robots-gorilles c''est mieux. Les progrès remarquables en matière de bioingéniérie et de robotisation vous permettent de rendre vos gorilles encore plus efficaces. Supprimer l''animal, le remplacer par la machine. Deutsche Qualität.'),
        (4, 'buffBulldozer', 'Déforestation massive', 'bulldozer.png', 'BPS', 85000, 1.1, '10%', 1.15, 'Plantation', 'bananeraie', 'Arracher des arbres centenaires et les remplacer par des bananiers. Sur des kilomètres carrés. Vous voulez des bananes ou sauver la planète ? Alors.'),
        (5, 'buffGag', 'Baillonner les toucans', 'gag.png', 'BPS', 1000000, 1.15, '15%', 1.16, 'Toucan', 'toucan', 'Ces toucans sont théoriquement muets mais il suffirait d''un pour risquer de syndicaliser tout ce petit monde. Avec ces baillons, on s''assure en amont que la question ne se posera jamais.'),
        (6, 'buffMegaphone', 'Réveiller les paresseux', 'megaphone.png', 'BPS', 1500000, 1.15, '15%', 1.15, 'Sloth', 'paresseux', 'Ils sont productifs, certes, mais il ne faut quand même pas exagérer. Hurler vos ordres dans ce mégaphone dernier cri (!!) ne manquera pas de remettre au travail cette masse salariale trop peu efficace.'),
        (7, 'buffLaser', 'Pointeur laser', 'laser.png', 'BPS', 5000000, 1.15, '15%', 1.16, 'Rifle', 'fusil', 'Gagnez en précision avec le pointer laser. Aucune banane ne saura vous échapper. Essayez toutefois d''éviter de tirer sur les locaux qui défendent leurs terres, c''est pas dingue d''un point de vue marketing.'),
        (8, 'buffIceberg', 'Faire fondre la banquise', 'melting.png', 'BPS', 10000000, 1.15, '15%', 1.17, 'Boat', 'bateau', 'Rapprocher votre production de la côte, ou rapprocher la côte de votre production ? En faisant fondre ce qu''il reste de banquise, le niveau des océans augmente et vous fait économiser de précieux kilomètres (améliorant ainsi votre productivité).');
