'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('images', [
      {
        id: 1,
        name: 'Dauphin',
        path: 'https://www.albawaba.com/sites/default/files/styles/de2e_standard/public/2019-12/shutterstock_1068728774.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Lapin',
        path: 'https://argos-veterinaire.com/wp-content/uploads/2017/04/Fiche-pratique-lapin-v%C3%A9t%C3%A9rinaire-Bordeaux.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Ornithorynque',
        path: 'https://static.nationalgeographic.fr/files/styles/image_1900/public/01-platypus-decline-20180430_3dg1547.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Requin',
        path: 'http://www.sympatico.ca/image/policy:1.1575927:1443637487/Photo-d-un-grand-requin-blanc.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'Dents',
        path: 'https://dr-pourtier-breuil-solene.chirurgiens-dentistes.fr/wp-content/uploads/2018/05/blanchir-dent-apres-min.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        name: 'Branchies',
        path: 'https://www.aquaportail.com/pictures1906/fentes-branchiales-requin-gill-slits-shark.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        name: 'Pattes',
        path: 'https://4.bp.blogspot.com/-XjAKq2vy8Ds/UCJaRjMi3dI/AAAAAAAAAHQ/NR0MDZZZrPY/s640/hd-dog-wallpaper-with-a-dog-on-his-back-on-the-grass-hd-dogs-wallpapers-backgrounds.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        name: 'Allaitement',
        path: 'https://www.woopets.fr/assets/img/005/361/og-image/alimenter-chatte-allaitement.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        name: 'Lamantin',
        path: 'https://www.parczoologiquedeparis.fr/sites/parczoologiquedeparis/files/thumbnails/image/fg4_1685_c_f-g_grandin_mnhn.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        name: 'Baleine',
        path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Humpback_whales_in_singing_position.jpg/1200px-Humpback_whales_in_singing_position.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        name: 'Chèvre',
        path: 'https://jardinage.lemonde.fr/images/dossiers/2018-01/chevre-1-074448.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        name: 'Lion',
        path: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Cecil_the_lion_at_Hwange_National_Park_%284516560206%29.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        name: 'Orque',
        path: 'https://img.over-blog-kiwi.com/0/85/92/01/20150326/ob_b264b8_01-orque.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        name: 'Otarie',
        path: 'https://www.anigaido.com/media/zoo_animaux/101-200/200/otarie-de-californie-1-thomas-pierre-xl.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        name: 'Lionne',
        path: 'https://cdn.pixabay.com/photo/2019/08/18/05/31/lion-4413424_960_720.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17,
        name: 'Lionnes',
        path: 'https://amazon.clikpic.com/michelbury/images/Lionne_profil_en_alerte_avec_2e_lionne.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        name: 'Lionceau',
        path: 'https://www.imagesdoc.com/wp-content/uploads/sites/33/2018/10/Lionceaux-F-G-Grandin.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 19,
        name: 'Cochon d\'inde',
        path: 'https://static.wamiz.fr/images/upload/shutterstock_413075476.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 20,
        name: 'Écureuil',
        path: 'https://france3-regions.francetvinfo.fr/hauts-de-france/sites/regions_france3/files/styles/top_big/public/assets/images/2019/03/19/maxstockfr039720-4145190.jpg?itok=wTMjs7hw',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 21,
        name: 'Rat',
        path: 'https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/actu/societe/invasion-de-rats-a-paris-la-video-effrayante-d-un-eboueur-1444106/23757785-1-fre-FR/Invasion-de-rats-a-Paris-la-video-effrayante-d-un-eboueur.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 22,
        name: 'Tigre',
        path: 'https://www.zoorigin.com/media/images/focus-le-tigre-entre-terreur-et-respect.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 23,
        name: 'Léopard',
        path: 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/8/3/9/839787a428_123678_01-intro-180.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 24,
        name: 'Guépard',
        path: 'https://resize-parismatch.lanmedia.fr/img/var/news/storage/images/paris-match/actu/faits-divers/l-hypothese-du-guepard-651810/6460132-1-fre-FR/L-hypothese-du-guepard.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 25,
        name: 'Jaguar',
        path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Jaguar_full.jpg/1200px-Jaguar_full.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 26,
        name: 'Éléphant',
        path: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Afrikanische_Elefant%2C_Miami2.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 27,
        name: 'Hippopotame',
        path: 'http://test.zoopontscorff.fr/scolaire/wp-content/uploads/sites/3/2019/04/OlivierTHOMAS-89.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 28,
        name: 'Girafe',
        path: 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/c/3/f/c3fd7907dc_98829_girafe-definition.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 29,
        name: 'Veau',
        path: 'https://siena.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2019/09/23/node_441928/1610650/public/2019/09/23/B9721005842Z.1_20190923181128_000%2BGHMEHBPDA.1-0.jpg?itok=zjpS0PZY1569320719',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 30,
        name: 'Renard',
        path: 'https://master.salamandre.net/media/21704/renard-1-1800x1195.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 31,
        name: 'Chien',
        path: 'https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2020/02/28/node_717014/45536711/public/2020/02/28/B9722743626Z.1_20200228110626_000%2BGMAFK84GO.1-0.jpg?itok=0Zxrzx2C1582889191',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 32,
        name: 'Loup',
        path: 'https://www.vie-publique.fr/sites/default/files/en_bref/image_principale/loup.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 33,
        name: 'Koala',
        path: 'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/e/2/9/e291fd71c5_50150206_koala-espece-danger.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 34,
        name: 'Dauphin rose',
        path: 'https://pm1.narvii.com/7059/151483518559d9db6ba2de9150080a000747269dr1-1080-740v2_uhq.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 35,
        name: 'Rhinocéros blanc',
        path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Rhinoc%C3%A9ros_blanc_JHE.jpg/1200px-Rhinoc%C3%A9ros_blanc_JHE.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
    {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('images', null, {});
  }
};
