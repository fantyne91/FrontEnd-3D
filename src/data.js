
export class Plant {
  constructor(
    id,
    nombre,
    descripcion,
    categoria,
    img,
    riego,
    luz,
    uso,
    beneficios,
    comoPlantar
  ) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.categoria = categoria;
    this.img = img;
    this.riego = riego;
    this.luz = luz;
    this.uso = uso;
    this.beneficios = beneficios;
    this.comoPlantar = comoPlantar;
  }

  // static getRecomendations(plantas) {
  //   return plantas.filter((plant) => plant.categoria.includes("Facil"));
  // }

  // static getHuerto(plantas) {
  //   return plantas.filter((plant) => plant.categoria.includes("Comestible"));
  // }
  // static getMedicinal(plantas) {
  //   return plantas.filter((plant) => plant.categoria.includes("Medicinal"));
  // }
  // static getAntiplagas(plantas) {
  //   return plantas.filter((plant) => plant.categoria.includes("Antiplagas"));
  // }

  static filterCategoria(plantas, search) {
    return plantas.filter((plant) =>
      plant.categoria.includes(search)
    );
  }
}
 export const plantas = [
   new Plant(
     1,
     "Tomate",
     "Fruto comestible muy popular y versátil en la cocina, rico en licopeno y antioxidantes.",
     ["Comestible", "Medicinal"],
     "https://upload.wikimedia.org/wikipedia/commons/3/31/La_palma-rancho_tomate_cherry.JPG",
     "Riego regular, manteniendo el sustrato húmedo sin encharcar. Evitar mojar las hojas.",
     "Sol directo (mínimo 6 horas diarias).",
     "Crudo en ensaladas, cocinado en salsas, guisos o como base de conservas.",
     "Rico en vitamina C, antioxidante, beneficioso para la piel y sistema inmune.",
     [
       "Temporada: Primavera.",
       "Tiempo hasta recolección: 3-4 meses.",
       "Suelo/Maceta: Suelo fértil, bien drenado, abono regular.",
       "Regado: Riego regular, evitando encharcar.",
       "Consejos adicionales: Requiere tutorado.",
     ]
   ),
   new Plant(
     2,
     "Menta",
     "Planta aromática con propiedades digestivas y refrescantes, ideal para infusiones y repelente natural.",
     ["Comestible", "Antiplagas", "Medicinal"],
     "https://live.staticflickr.com/3336/3425984237_5def8118cb_b.jpg",
     "Riego frecuente, especialmente en épocas calurosas. Evitar que el sustrato se seque.",
     "Sombra parcial o luz indirecta.",
     "Infusión digestiva, hojas frescas en ensaladas o mojitos.",
     "Alivia trastornos digestivos, mejora la respiración y repele mosquitos.",
     [
       "Temporada: Primavera.",
       "Tiempo hasta recolección: 2-3 meses.",
       "Suelo/Maceta: Prefiere maceta debido a su crecimiento invasivo.",
       "Regado: Mantener humedad constante.",
       "Consejos adicionales: Evitar la exposición al sol directo durante el calor extremo.",
     ]
   ),
   new Plant(
     3,
     "Albahaca",
     "Hierba aromática esencial en la cocina mediterránea, también actúa como repelente natural.",
     ["Comestible", "Antiplagas"],
     "https://images.pexels.com/photos/7452769/pexels-photo-7452769.jpeg",
     "Riego regular, evitando encharcamientos.",
     "Sol directo o semisombra.",
     "Ideal para pesto, ensaladas, pizzas o infusiones relajantes.",
     "Propiedades antiinflamatorias, antibacterianas y repelente de insectos.",
     [
       "Temporada: Finales de primavera.",
       "Tiempo hasta recolección: 2-3 meses.",
       "Suelo/Maceta: Suelo fértil, bien drenado.",
       "Regado: Riego regular, evitando que se encharque el suelo.",
       "Consejos adicionales: Sensible al frío, poda regular para estimular el crecimiento.",
     ]
   ),
   new Plant(
     4,
     "Romero",
     "Aromática muy resistente que mejora la memoria, la circulación. Repele mosquitos y polillas",
     ["Comestible", "Medicinal", "Facil", "Antiplagas"],
     "https://live.staticflickr.com/2250/2457111340_f176fbdf28_b.jpg",
     "Riego escaso. Tolera la sequía.",
     "Sol directo.",
     "Uso en carnes, pan aromatizado o infusiones.",
     "Estimula la memoria y concentración, digestivo, antiséptico.",
     [
       "Temporada: Primavera.",
       "Tiempo hasta recolección: 3-4 meses.",
       "Suelo/Maceta: Suelo seco, bien drenado.",
       "Regado: Riego escaso.",
       "Consejos adicionales: Tolera la sequía, ideal para lugares cálidos.",
     ]
   ),
   new Plant(
     5,
     "Lavanda",
     "Flor aromática usada en relajación, infusiones, y como repelente natural.",
     ["Medicinal", "Antiplagas", "Facil"],
     "https://live.staticflickr.com/284/31546637321_8477e00641_b.jpg",
     "Riego moderado. Dejar secar el suelo entre riegos.",
     "Sol directo.",
     "En infusión para dormir o en bolsitas aromáticas.",
     "Relajante, alivia ansiedad y repele insectos.",
     [
       "Temporada: Primavera.",
       "Tiempo hasta recolección: 3-4 meses.",
       "Suelo/Maceta: Suelo seco y bien drenado.",
       "Regado: Riego moderado, dejar secar el suelo entre riegos.",
       "Consejos adicionales: Resiste bien el calor.",
     ]
   ),
   new Plant(
     6,
     "Aloe Vera",
     "Planta suculenta con gran valor medicinal para piel, quemaduras y digestión.",
     ["Medicinal", "Facil"],
     "https://live.staticflickr.com/1932/45141727951_2c2be7b348_b.jpg",
     "Riego muy escaso. Dejar secar completamente entre riegos.",
     "Luz abundante, incluso sol directo.",
     "Gel para quemaduras, cortes, acné o batidos.",
     "Cicatrizante, hidratante, digestivo natural.",
     [
       "Temporada: Todo el año.",
       "Tiempo hasta recolección: 1-2 años para una planta madura.",
       "Suelo/Maceta: Suelo arenoso y bien drenado.",
       "Regado: Riego muy escaso, dejar secar entre riegos.",
       "Consejos adicionales: No tolera heladas.",
     ]
   ),
   new Plant(
     7,
     "Hierbabuena",
     "Planta muy similar a la menta, con aroma intenso, útil en cocina y salud digestiva.",
     ["Comestible", "Medicinal"],
     "https://upload.wikimedia.org/wikipedia/commons/7/71/Hierbabuena.34.jpg",
     "Riego frecuente, mantener el sustrato húmedo.",
     "Luz indirecta o sombra parcial.",
     "Usos culinarios similares a la menta, también en infusiones.",
     "Favorece digestión, alivia dolores estomacales y resfriados.",
     [
       "Temporada: Primavera.",
       "Tiempo hasta recolección: 2-3 meses.",
       "Suelo/Maceta: Suelo húmedo y bien drenado.",
       "Regado: Mantener sustrato húmedo.",
       "Consejos adicionales: Requiere poda regular para controlar su expansión.",
     ]
   ),
   new Plant(
     8,
     "Caléndula",
     "Flor comestible y medicinal, con propiedades antiinflamatorias y uso cosmético.",
     ["Medicinal", "Comestible"],
     "https://imgproxy.infoflora.ch/dmoFt5agqxH8ID0xbrL3bA/rs:fill:400:400:1/g:sm/aHR0cHM6Ly93d3cuaW5mb2Zsb3JhLmNoL2VuLy9hc3NldHMvZGJfZG9jL3NwZWNpZXMvdGF4YV9pbWFnZXMvMjAxNy8wOS8yOC8yMDE3MDkyODEwMjIzOC0yN2RkOTZhYS5qcGc.jpg",
     "Riego moderado. No dejar secar completamente.",
     "Sol directo o semisombra.",
     "En infusión o pétalos en ensaladas.",
     "Regeneradora de piel, ideal para cremas, pomadas o infusión antiinflamatoria.",
     [
       "Temporada: Primavera a verano.",
       "Tiempo hasta recolección: 2-3 meses.",
       "Suelo/Maceta: Suelo bien drenado.",
       "Regado: Moderado, evitando el encharcamiento.",
       "Consejos adicionales: Florece gran parte del año.",
     ]
   ),
   new Plant(
     9,
     "Capuchina",
     "Planta ornamental y comestible, con propiedades antibacterianas.",
     ["Comestible", "Medicinal", "Decorativa"],
     "https://live.staticflickr.com/7438/28115760315_fe401073b9_b.jpg",
     "Riego moderado. Evitar exceso de agua.",
     "Sol directo o semisombra.",
     "Flores y hojas en ensaladas o infusiones.",
     "Antibiótica natural, fortalece defensas.",
     [
       "Temporada: Primavera a verano.",
       "Tiempo hasta recolección: 2-3 meses.",
       "Suelo/Maceta: Suelo bien drenado.",
       "Regado: Moderado.",
       "Consejos adicionales: Ideal para macetas o bordes.",
     ]
   ),
   new Plant(
     10,
     "Cilantro",
     "Hierba esencial en cocinas del mundo, digestiva y rica en antioxidantes.",
     ["Comestible", "Medicinal"],
     "https://live.staticflickr.com/1561/24311764256_fecb53865d_b.jpg",
     "Riego frecuente. No dejar secar el sustrato.",
     "Sol directo o semisombra.",
     "Ideal para salsas, guisos o ensaladas.",
     "Ayuda en la digestión, detoxifica el cuerpo.",
     [
       "Temporada: Primavera.",
       "Tiempo hasta recolección: 2 meses.",
       "Suelo/Maceta: Suelo bien drenado.",
       "Regado: Mantener sustrato húmedo.",
       "Consejos adicionales: Requiere temperaturas moderadas.",
     ]
   ),
   new Plant(
     11,
     "Espinaca",
     "Hortaliza de hoja verde rica en hierro, ideal para ensaladas y batidos.",
     ["Comestible", "Medicinal"],
     "https://live.staticflickr.com/7144/6420373241_5fc64f055b_b.jpg",
     "Riego regular, mantener el sustrato húmedo.",
     "Sombra parcial o sol directo.",
     "En ensaladas, cocida o en batidos verdes.",
     "Rica en hierro, vitamina A y C, beneficiosa para la vista y la salud ósea.",
     [
       "Temporada: Otoño a primavera.",
       "Tiempo hasta recolección: 1-2 meses.",
       "Suelo/Maceta: Suelo rico en nutrientes.",
       "Regado: Riego regular.",
       "Consejos adicionales: Requiere temperaturas frescas.",
     ]
   ),
   new Plant(
     12,
     "Ajo",
     "Bulbo con potentes beneficios antibacterianos y cardiovasculares. Muy efectivo contra ácaros y pulgones",
     ["Comestible", "Medicinal", "Antiplagas"],
     "https://images.pexels.com/photos/15820106/pexels-photo-15820106/free-photo-of-vegetales-verduras-fresco-puerro.jpeg",
     "Riego moderado hasta que el tallo empiece a secar.",
     "Sol directo.",
     "Cocinado en casi cualquier receta o crudo con aceite. Pulverizar extracto o infusión sobre cultivos",
     "Antibiótico natural, reduce colesterol, fortalece sistema inmune.",

     [
       "Temporada: Planta en otoño a cosecha en primavera.",
       "Tiempo hasta recolección: 6 meses.",
       "Suelo/Maceta: Suelo rico en nutrientes.",
       "Regado: Riego regular.",
       "Consejos adicionales: Requiere temperaturas frescas.",
     ]
   ),
   new Plant(
     13,
     "Cebollino",
     "Aromática tipo cebolla suave, excelente en crudo y muy fácil de cultivar.",
     ["Comestible", "Medicinal"],
     "https://www.5aldia.es/es/wp-content/uploads/2017/09/ha9g.jpg",
     "Riego frecuente sin encharcar.",
     "Luz solar directa o parcial.",
     "En tortilla, crema agria, pan o sopas.",
     "Fuente de vitamina A y C, digestivo.",

     [
       "Temporada: Primavera a verano.",
       "Tiempo hasta recolección: 1-2 meses.",
       "Suelo/Maceta: Suelo bien drenado.",
       "Regado: Riego frecuente.",
       "Consejos adicionales: Cortar las hojas para promover el crecimiento.",
     ]
   ),
   new Plant(
     14,
     "Citronela",
     "Hierba tropical con fuerte aroma a limón, ideal como antimosquitos natural.",
     ["Antiplagas", "Medicinal"],
     "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Citronella_mucronata_%28R._et_P.%29_D._Don_%28pabloendemico%29.jpg/500px-Citronella_mucronata_%28R._et_P.%29_D._Don_%28pabloendemico%29.jpg",
     "Riego abundante pero espaciado. Sustrato húmedo.",
     "Sol directo o semisombra.",
     "En infusiones o macerada como repelente.",
     "Ahuyenta mosquitos eficazmente, reduce ansiedad.",

     [
       "Temporada: Primavera a verano.",
       "Tiempo hasta recolección: 2-3 meses.",
       "Suelo/Maceta: Suelo bien drenado.",
       "Regado: Riego regular, mantener el suelo húmedo.",
       "Consejos adicionales: Crece mejor en espacios amplios.",
     ]
   ),
   new Plant(
     15,
     "Salvia Elegans",
     "Aromática con propiedades antiinflamatorias y culinarias.",
     ["Comestible", "Medicinal", "Facil"],
     "https://cdn0.ecologiaverde.com/es/posts/3/4/2/salvia_elegans_3243_4_600.webp",
     "Riego moderado. Dejar secar entre riegos.",
     "Sol directo.",
     "En infusiones, guisos y platos de carne.",
     "Reduce inflamaciones, regula la menstruación, antioxidante.",

     [
       "Temporada: Primavera a otoño.",
       "Tiempo hasta recolección: 2-3 meses.",
       "Suelo/Maceta: Suelo bien drenado.",
       "Regado: Riego moderado.",
       "Consejos adicionales: Poda regularmente para estimular el crecimiento.",
     ]
   ),
   new Plant(
     16,
     "Melisa",
     "También conocida como toronjil, es una planta aromática calmante usada en infusiones relajantes.",
     ["Medicinal"],
     "https://www.spicegarden.eu/WebRoot/StoreLES/Shops/62431129/4BE7/A818/093A/D991/C7B2/C0A8/29BB/894B/Melisse.JPG",
     "Riego frecuente, mantener el sustrato húmedo.",
     "Sombra parcial o luz indirecta.",
     "En infusiones para calmar ansiedad o problemas de sueño.",
     "Relajante natural, alivia estrés y trastornos digestivos.",

     [
       "Temporada: Primavera a verano.",
       "Tiempo hasta recolección: 1-2 meses.",
       "Suelo/Maceta: Suelo bien drenado.",
       "Regado: Riego regular.",
       "Consejos adicionales: Crece bien en macetas pequeñas.",
     ]
   ),
   new Plant(
     17,
     "Ortiga",
     "Planta silvestre rica en nutrientes con usos medicinales y culinarios.",
     ["Comestible", "Medicinal"],
     "https://www.lagradaonline.com/actualidad/wp-content/uploads/2025/02/la-planta-de-ortiga-tiene-muchos-beneficios-1.jpg",
     "Riego moderado. Prefiere suelos húmedos.",
     "Sombra parcial.",
     "Cocinada como espinacas, en sopas o infusiones.",
     "Depurativa, rica en hierro, buena para el cabello y la piel.",

     [
       "Temporada: Primavera a verano.",
       "Tiempo hasta recolección: 1-2 meses.",
       "Suelo/Maceta: Suelo rico en nutrientes.",
       "Regado: Riego regular.",
       "Consejos adicionales: Usar guantes al recolectar.",
     ]
   ),
   new Plant(
     18,
     "Manzanilla",
     "Planta medicinal usada comúnmente para infusiones relajantes y digestivas.",
     ["Medicinal"],
     "https://bs.plantnet.org/image/o/9e00d061b7d5dcc4a47f8ae536364c75ee156e07",
     "Riego moderado, evitar encharcamientos.",
     "Sol directo.",
     "Infusión calmante para estrés y dolores estomacales.",
     "Antiinflamatoria, calmante, alivia cólicos.",

     [
       "Temporada: Primavera a verano.",
       "Tiempo hasta recolección: 1-2 meses.",
       "Suelo/Maceta: Suelo bien drenado.",
       "Regado: Riego moderado.",
       "Consejos adicionales: Evitar encharcamientos.",
     ]
   ),
   new Plant(
     19,
     "Valeriana",
     "Conocida por sus efectos sedantes, ideal para trastornos del sueño y ansiedad.",
     ["Medicinal"],
     "https://tyt.lt/_data/i/upload/2010/01/30/20100130232501-cc1d2f0d-me.jpg",
     "Riego regular, suelo húmedo pero bien drenado.",
     "Semisombra.",
     "En cápsulas o infusión de la raíz seca.",
     "Sedante natural, combate insomnio y ansiedad.",

     [
       "Temporada: Primavera a otoño.",
       "Tiempo hasta recolección: 2-3 años.",
       "Suelo/Maceta: Suelo bien drenado.",
       "Regado: Riego regular.",
       "Consejos adicionales: Recolectar la raíz después de 2 años.",
     ]
   ),
   new Plant(
     20,
     "Eneldo",
     "Hierba aromática usada en cocina y con propiedades digestivas.",
     ["Comestible", "Medicinal"],
     "https://live.staticflickr.com/7823/45809612934_e7b386ae36_b.jpg",
     "Riego regular, especialmente en climas cálidos.",
     "Sol directo.",
     "En pescados, encurtidos y salsas.",
     "Digestivo, alivia flatulencias y cólicos.",

     [
       "Temporada: Primavera a verano.",
       "Tiempo hasta recolección: 1-2 meses.",
       "Suelo/Maceta: Suelo bien drenado.",
       "Regado: Riego regular.",
       "Consejos adicionales: Siembra directa.",
     ]
   ),

   new Plant(
     21,
     "Milenrama",
     "Planta silvestre con propiedades cicatrizantes y reguladoras.",
     ["Medicinal"],
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnyfMFbW3wzRZf_glCN1Wca8oABBzklr1TQA&s",
     "Riego escaso. Tolera suelos pobres.",
     "Sol directo.",
     "Infusión para regular el ciclo menstrual.",
     "Antiinflamatoria, cicatrizante, reguladora hormonal.",

     [
       "Temporada: Primavera a otoño.",
       "Tiempo hasta recolección: 2-3 años.",
       "Suelo/Maceta: Suelo bien drenado.",
       "Regado: Riego escaso.",
       "Consejos adicionales: Recolectar la raíz después de 2 años.",
     ]
   ),
   new Plant(
     22,
     "Hisopo",
     "Aromática tradicional usada en infusiones y para aliviar problemas respiratorios.",
     ["Medicinal"],
     "https://live.staticflickr.com/136/325840597_5fb6710619_c.jpg",
     "Riego moderado. No encharcar.",
     "Sol directo.",
     "Infusión expectorante o como tónico.",
     "Expectorante, antiséptico y digestivo.",

     [
       "Temporada: Primavera a verano.",
       "Tiempo hasta recolección: 1 año.",
       "Suelo/Maceta: Suelo bien drenado.",
       "Regado: Riego moderado.",
       "Consejos adicionales: Recoger las hojas antes de la floración.",
     ]
   ),
   new Plant(
     23,
     "Hinojo",
     "Aromática con sabor anisado, usada en cocina y digestiva.",
     ["Comestible", "Medicinal"],
     "https://live.staticflickr.com/3286/2600413158_e67cbfe078_b.jpg",
     "Riego moderado y constante.",
     "Sol directo.",
     "Tallos y semillas en guisos, ensaladas e infusiones.",
     "Digestivo, calma gases y estimula el apetito.",

     [
       "Temporada: Primavera a otoño.",
       "Tiempo hasta recolección: 2 años.",
       "Suelo/Maceta: Suelo bien drenado.",
       "Regado: Riego moderado.",
       "Consejos adicionales: No enterrar demasiado el bulbo.",
     ]
   ),
   new Plant(
     24,
     "Milenrama rosa",
     "Variante ornamental de la milenrama, útil en infusiones y para la piel.",
     ["Medicinal", "Decorativa", "Facil"],
     "https://upload.wikimedia.org/wikipedia/commons/d/db/Milenrama_en_rosa_-_Achillea_millefolium_%2814666018670%29.jpg",
     "Riego ligero. Tolera sequía.",
     "Sol directo.",
     "Infusión calmante o en cremas caseras.",
     "Cicatrizante, útil para piel inflamada o acné.",

     [
       "Temporada: Primavera a otoño.",
       "Tiempo hasta recolección: 2-3 años.",
       "Suelo/Maceta: Suelo bien drenado.",
       "Regado: Riego ligero.",
       "Consejos adicionales: Puede necesitar poda tras floración.",
     ]
   ),
   new Plant(
     29,
     "Pimiento",
     "Verdura popular en múltiples platos, desde guisos hasta ensaladas.",
     ["Comestible"],
     "https://upload.wikimedia.org/wikipedia/commons/5/59/Pimiento_morr%C3%B3n_%28Capsicum_annuum%29.jpg",
     "Riego moderado, constante y sin encharcar.",
     "Sol directo. Necesita calor.",
     "Asado, crudo en ensaladas, relleno o en sofritos.",
     "Fuente de vitamina C y antioxidantes.",

     [
       "Temporada: Primavera a verano.",
       "Tiempo hasta recolección: 70-90 días.",
       "Suelo/Maceta: Suelo rico y bien drenado.",
       "Regado: Riego moderado.",
       "Consejos adicionales: Asegurar una exposición solar óptima.",
     ]
   ),
   new Plant(
     30,
     "Cebolla",
     "Base de muchos platos. Se puede cultivar incluso en macetas profundas.",
     ["Comestible"],
     "https://live.staticflickr.com/7394/12310912623_67a2bd8aef_b.jpg",
     "Riego ligero al inicio, luego espaciado.",
     "Sol directo. Le gusta el clima templado.",
     "Cruda en ensaladas, caramelizada, en guisos, caldos y sofritos.",
     "Rica en quercetina y compuestos antioxidantes.",

     [
       "Temporada: Primavera a otoño.",
       "Tiempo hasta recolección: 3-4 meses.",
       "Suelo/Maceta: Suelo bien drenado.",
       "Regado: Riego ligero.",
       "Consejos adicionales: Evitar riego excesivo al final del ciclo.",
     ]
   ),
   new Plant(
     32,
     "Zanahoria",
     "Raíz comestible dulce y crujiente. Muy fácil de cultivar.",
     ["Comestible", "Huerto urbano"],
     "https://images.pexels.com/photos/1306559/pexels-photo-1306559.jpeg",
     "Riego regular y moderado. No encharcar.",
     "Sol directo o semisombra.",
     "En crudo, cocida, en purés o postres.",
     "Rica en betacarotenos, mejora la visión y el sistema inmune.",

     [
       "Temporada: Primavera a otoño.",
       "Tiempo hasta recolección: 2-3 meses.",
       "Suelo/Maceta: Suelo suelto y profundo.",
       "Regado: Riego regular, en germinación siempre húmedo.",
       "Consejos adicionales: Mantener el suelo libre de piedras.",
     ]
   ),
   new Plant(
     33,
     "Rúcula",
     "Hortaliza de hoja con sabor ligeramente picante. Crece rápido y en poco espacio.",
     ["Comestible", "Maceta", "Balcon"],
     "https://upload.wikimedia.org/wikipedia/commons/9/90/RuculaDSC7702.jpg",
     "Riego regular, mantener humedad sin encharcar.",
     "Semisombra o sol suave.",
     "En ensaladas, pizzas, bocadillos o pesto.",
     "Rica en vitamina K, C y compuestos antiinflamatorios.",

     [
       "Temporada: Primavera a otoño.",
       "Tiempo hasta recolección: 4-6 semanas.",
       "Suelo/Maceta: Suelo bien drenado o maceta ancha.",
       "Regado: Riego regular.",
       "Consejos adicionales: Cosecha las hojas cuando estén tiernas.",
     ]
   ),
   new Plant(
     34,
     "Espinaca",
     "Verdura de hoja muy nutritiva. Perfecta para cultivo en espacios reducidos.",
     ["Comestible", "Maceta", "Balcon"],
     "https://live.staticflickr.com/7144/6420373241_5fc64f055b_b.jpg",
     "Riego moderado, suelo siempre ligeramente húmedo.",
     "Semisombra o sol parcial.",
     "Salteada, en ensaladas o batidos verdes.",
     "Alto contenido en hierro, ácido fólico y antioxidantes.",

     [
       "Temporada: Otoño a primavera.",
       "Tiempo hasta recolección: 1-2 meses.",
       "Suelo/Maceta: Suelo bien drenado o maceta profunda min 20cm",
       "Regado: Riego moderado, resiste el frío.",
       "Consejos adicionales: Ideal para cultivo en climas frescos.",
     ]
   ),
   new Plant(
     35,
     "Lechuga",
     "Clásica verdura de hoja fácil de cultivar incluso en jardineras.",
     ["Comestible", "Maceta", "Balcon"],
     "https://images.pexels.com/photos/28524414/pexels-photo-28524414/free-photo-of-cabeza-de-lechuga-pe-de-alface.jpeg",
     "Riego frecuente pero sin encharcar. Evitar sequías.",
     "Sol suave o semisombra.",
     "En ensaladas o como base para wraps y bocadillos.",
     "Rica en agua y fibra, ligera y digestiva.",

     [
       "Temporada: Primavera a otoño.",
       "Tiempo hasta recolección: 1-2 meses.",
       "Suelo/Maceta: Suelo bien drenado o jardinera mínimo 20cm profundidad.",
       "Regado: Riego frecuente.",
       "Consejos adicionales: Evitar exposición prolongada al sol directo.",
     ]
   ),
   new Plant(
     36,
     "Rábano",
     "Raíz pequeña, de cultivo rápido y perfecta para principiantes.",
     ["Comestible", "Maceta", "Balcon", "Facil"],
     "https://images.pexels.com/photos/775207/pexels-photo-775207.jpeg",
     "Riego constante, suelo húmedo pero no encharcado.",
     "Sol directo o semisombra.",
     "Crudo en ensaladas, encurtido o como snack.",
     "Bajo en calorías, rico en vitamina C y potasio.",

     [
       "Temporada: Primavera a otoño.",
       "Tiempo hasta recolección: 25-40 días.",
       "Suelo/Maceta: Suelo bien drenado, ligero o maceta mínimo 15cm profundidad.",
       "Regado: Riego constante.",
       "Consejos adicionales: Mantener el suelo húmedo, pero evitar el encharcamiento. Ideal para siembra sucesiva.",
     ]
   ),

   new Plant(
     38,
     "Tomate cherry",
     "Variedad compacta de tomate ideal para balcones, muy productiva en maceta.",
     ["Comestible", "Maceta", "Balcón", "Facil"],
     "https://bs.plantnet.org/image/o/dec8d16e601a42861f22a32764f7aee065db127e",
     "Riego abundante y regular. No mojar hojas.",
     "Sol directo mínimo 6h/día.",
     "Crudos en ensaladas, brochetas o salsas frescas.",
     "Fuente de licopeno, antioxidante beneficioso para el corazón.",

     [
       "Temporada: Primavera a verano.",
       "Tiempo hasta recolección: 60-85 días.",
       "Suelo/Maceta: Suelo bien drenado y fértil o maceta profunda 30cm mínimo.",
       "Regado: Riego regular, evitando mojar las hojas.",
       "Consejos adicionales: Usa un tutor para que las plantas crezcan rectas. Asegura que la planta reciba al menos 6 horas de sol al día.",
     ]
   ),

   new Plant(
     39,
     "Pimiento italiano",
     "Planta compacta y productiva. Muy usada en cocina mediterránea.",
     ["Comestible", "Maceta", "Balcón", "Facil"],
     "https://live.staticflickr.com/7277/8075064178_6e0fef4e20_b.jpg",
     "Riego regular, sin encharcar. Más riego en floración.",
     "Sol directo.",
     "A la plancha, en guisos, rellenos o crudos.",
     "Rico en vitamina C y antioxidantes.",

     [
       "Temporada: Primavera a verano.",
       "Tiempo hasta recolección: 70-90 días.",
       "Suelo/Maceta: Suelo bien drenado, fértil o maceta produnda y amplia.",
       "Regado: Evitar el encharcamiento. Aumentar el riego durante la floración.",
       "Consejos adicionales: El pimiento necesita mucho calor y sol para crecer correctamente. Usa un tutor si es necesario y retira las primeras flores para fomentar más frutos.",
     ]
   ),

   new Plant(
     41,
     "Perejil",
     "Aromática resistente, ideal para jardineras y pequeños espacios.",
     ["Comestible", "Aromática", "Balcón", "Facil"],
     "https://images.pexels.com/photos/10048317/pexels-photo-10048317.jpeg",
     "Riego frecuente y uniforme.",
     "Semisombra o sol parcial.",
     "Como condimento en casi cualquier plato.",
     "Fuente de hierro y vitamina C.",

     [
       "Temporada: Primavera a otoño.",
       "Tiempo hasta recolección: 60-90 días.",
       "Suelo/Maceta: Suelo ligeramente ácido y bien drenado o maceta de 20cm.",
       "Regado: Riego frecuente, evitando el encharcamiento.",
       "Consejos adicionales: El perejil puede crecer lentamente al principio. Siembra continua para asegurar una cosecha constante.",
     ]
   ),

   new Plant(
     42,
     "Pimiento de Padrón",
     "Variedad gallega de pequeño tamaño, famosa por su sabor suave o picante sorpresa.",
     ["Comestible", "Balcón", "Facil"],
     "https://live.staticflickr.com/8468/28833211806_d9521403f9_b.jpg",
     "Riego moderado. Más frecuente en floración y fruto.",
     "Sol directo mínimo 6h/día.",
     "Fritos en sartén con sal gruesa. También en tortillas o acompañamientos.",
     "Fuente de antioxidantes y vitaminas A y C. Ayuda a la digestión.",

     [
       "Temporada: Primavera a verano.",
       "Tiempo hasta recolección: 60-75 días.",
       "Suelo/Maceta: Suelo bien drenado y rico en nutrientes o maceta 20cm.",
       "Regado: Moderado, más frecuente durante la floración y cuando el fruto aparece.",
       "Consejos adicionales: El pimiento de Padrón se desarrolla bien en climas cálidos. Recuerda cosechar los frutos pequeños para mantener la planta productiva.",
     ]
   ),
 ];

