
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
}
 const plantas = [
   new Plant(
     1,
     "Tomate",
     "Fruto comestible muy popular y versátil en la cocina, rico en licopeno y antioxidantes.",
     ["Comestible", "Medicinal"],
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvw7SVlbhkUYpRVK_f4LZFxVwAdT4hZ4YhMw&s",
     "Riego regular, manteniendo el sustrato húmedo sin encharcar. Evitar mojar las hojas.",
     "Sol directo (mínimo 6 horas diarias).",
     "Crudo en ensaladas, cocinado en salsas, guisos o como base de conservas.",
     "Rico en vitamina C, antioxidante, beneficioso para la piel y sistema inmune.",
     "Sembrar en primavera. Necesita tutorado. Suelo fértil, bien drenado y abonado. Cosechar cuando el fruto esté completamente rojo."
   ),
   new Plant(
     2,
     "Menta",
     "Planta aromática con propiedades digestivas y refrescantes, ideal para infusiones y repelente natural.",
     ["Comestible", "Antimosquitos", "Medicinal"],
     "https://cdn.pixabay.com/photo/2016/08/06/22/15/mint-1571834_960_720.jpg",
     "Riego frecuente, especialmente en épocas calurosas. Evitar que el sustrato se seque.",
     "Sombra parcial o luz indirecta.",
     "Infusión digestiva, hojas frescas en ensaladas o mojitos.",
     "Alivia trastornos digestivos, mejora la respiración y repele mosquitos.",
     "Se planta en primavera. Mejor en maceta por su carácter invasivo. Mantener humedad constante."
   ),
   new Plant(
     3,
     "Albahaca",
     "Hierba aromática esencial en la cocina mediterránea, también actúa como repelente natural.",
     ["Comestible", "Antimosquitos"],
     "https://cdn.pixabay.com/photo/2017/07/10/15/46/basil-2497988_960_720.jpg",
     "Riego regular, evitando encharcamientos.",
     "Sol directo o semisombra.",
     "Ideal para pesto, ensaladas, pizzas o infusiones relajantes.",
     "Propiedades antiinflamatorias, antibacterianas y repelente de insectos.",
     "Sembrar a finales de primavera. Requiere poda regular para estimular crecimiento. Sensible al frío."
   ),
   new Plant(
     4,
     "Romero",
     "Aromática muy resistente que mejora la memoria, la circulación y es excelente en guisos.",
     ["Comestible", "Medicinal"],
     "https://cdn.pixabay.com/photo/2016/04/01/09/14/rosemary-1295441_960_720.jpg",
     "Riego escaso. Tolera la sequía.",
     "Sol directo.",
     "Uso en carnes, pan aromatizado o infusiones.",
     "Estimula la memoria y concentración, digestivo, antiséptico.",
     "Plantar en suelos bien drenados y soleados. No necesita muchos cuidados."
   ),
   new Plant(
     5,
     "Lavanda",
     "Flor aromática usada en relajación, infusiones, y como repelente natural.",
     ["Medicinal", "Antimosquitos"],
     "https://cdn.pixabay.com/photo/2017/07/08/06/54/lavender-2483018_960_720.jpg",
     "Riego moderado. Dejar secar el suelo entre riegos.",
     "Sol directo.",
     "En infusión para dormir o en bolsitas aromáticas.",
     "Relajante, alivia ansiedad y repele insectos.",
     "Plantar en primavera. Suelo seco y bien drenado. Resiste bien el calor."
   ),
   new Plant(
     6,
     "Aloe Vera",
     "Planta suculenta con gran valor medicinal para piel, quemaduras y digestión.",
     ["Medicinal"],
     "https://cdn.pixabay.com/photo/2015/03/30/12/35/aloe-699818_960_720.jpg",
     "Riego muy escaso. Dejar secar completamente entre riegos.",
     "Luz abundante, incluso sol directo.",
     "Gel para quemaduras, cortes, acné o batidos.",
     "Cicatrizante, hidratante, digestivo natural.",
     "Multiplica por hijuelos. Ideal en maceta o jardín seco. No tolera heladas."
   ),
   new Plant(
     7,
     "Hierbabuena",
     "Planta muy similar a la menta, con aroma intenso, útil en cocina y salud digestiva.",
     ["Comestible", "Medicinal"],
     "https://cdn.pixabay.com/photo/2018/07/03/11/02/mint-3519425_960_720.jpg",
     "Riego frecuente, mantener el sustrato húmedo.",
     "Luz indirecta o sombra parcial.",
     "Usos culinarios similares a la menta, también en infusiones.",
     "Favorece digestión, alivia dolores estomacales y resfriados.",
     "Requiere espacio para expandirse. Mejor en maceta. Poda regular."
   ),
   new Plant(
     8,
     "Caléndula",
     "Flor comestible y medicinal, con propiedades antiinflamatorias y uso cosmético.",
     ["Medicinal", "Comestible"],
     "https://cdn.pixabay.com/photo/2020/06/08/06/35/marigold-5273543_960_720.jpg",
     "Riego moderado. No dejar secar completamente.",
     "Sol directo o semisombra.",
     "En infusión o pétalos en ensaladas.",
     "Regeneradora de piel, ideal para cremas, pomadas o infusión antiinflamatoria.",
     "Fácil de sembrar desde semilla. Florece gran parte del año."
   ),
   new Plant(
     9,
     "Capuchina",
     "Planta ornamental y comestible, con propiedades antibacterianas.",
     ["Comestible", "Medicinal", "Decorativa"],
     "https://cdn.pixabay.com/photo/2020/05/13/18/30/nasturtium-5165939_960_720.jpg",
     "Riego moderado. Evitar exceso de agua.",
     "Sol directo o semisombra.",
     "Flores y hojas en ensaladas o infusiones.",
     "Antibiótica natural, fortalece defensas.",
     "Fácil cultivo. Florece todo el verano. Ideal para macetas o bordes."
   ),
   new Plant(
     10,
     "Cilantro",
     "Hierba esencial en cocinas del mundo, digestiva y rica en antioxidantes.",
     ["Comestible", "Medicinal"],
     "https://cdn.pixabay.com/photo/2016/08/09/11/25/coriander-1585232_960_720.jpg",
     "Riego frecuente. No dejar secar el sustrato.",
     "Sol directo o semisombra.",
     "En guacamole, sopas, carnes o ensaladas.",
     "Depurativo, digestivo, rico en vitaminas A y C.",
     "Siembra directa. Ciclo corto. Requiere cosecha frecuente."
   ),
   new Plant(
     11,
     "Perejil",
     "Planta aromática muy usada, rica en hierro y vitamina C.",
     ["Comestible", "Medicinal"],
     "https://cdn.pixabay.com/photo/2016/02/18/22/16/parsley-1209784_960_720.jpg",
     "Riego regular. No dejar secar.",
     "Sombra parcial o sol suave.",
     "Frescura en guisos, ensaladas, jugos o zumos verdes.",
     "Rico en hierro, diurético, fortalece sistema inmune.",
     "Fácil cultivo. Se adapta a maceta o suelo directo."
   ),
   new Plant(
     12,
     "Ajo",
     "Bulbo con fuerte aroma y potentes beneficios antibacterianos y cardiovasculares.",
     ["Comestible", "Medicinal"],
     "https://cdn.pixabay.com/photo/2015/09/01/14/57/garlic-918409_960_720.jpg",
     "Riego moderado hasta que el tallo empiece a secar.",
     "Sol directo.",
     "Cocinado en casi cualquier receta o crudo con aceite.",
     "Antibiótico natural, reduce colesterol, fortalece sistema inmune.",
     "Plantar en otoño. Requiere 6-8 meses hasta cosecha."
   ),
   new Plant(
     13,
     "Cebollino",
     "Aromática tipo cebolla suave, excelente en crudo y muy fácil de cultivar.",
     ["Comestible", "Medicinal"],
     "https://cdn.pixabay.com/photo/2018/04/14/01/18/chives-3318881_960_720.jpg",
     "Riego frecuente sin encharcar.",
     "Luz solar directa o parcial.",
     "En tortilla, crema agria, pan o sopas.",
     "Fuente de vitamina A y C, digestivo.",
     "Crece rápido. Se puede cortar varias veces al año."
   ),
   new Plant(
     14,
     "Citronela",
     "Hierba tropical con fuerte aroma a limón, ideal como antimosquitos natural.",
     ["Antimosquitos", "Medicinal"],
     "https://cdn.pixabay.com/photo/2019/10/04/16/56/lemongrass-4525563_960_720.jpg",
     "Riego abundante pero espaciado. Sustrato húmedo.",
     "Sol directo o semisombra.",
     "En infusiones o macerada como repelente.",
     "Ahuyenta mosquitos eficazmente, reduce ansiedad.",
     "Plantar en clima cálido. Requiere espacio y sol."
   ),
   new Plant(
     15,
     "Salvia",
     "Aromática con propiedades antiinflamatorias y culinarias.",
     ["Comestible", "Medicinal"],
     "https://cdn.pixabay.com/photo/2020/07/10/08/56/sage-5389769_960_720.jpg",
     "Riego moderado. Dejar secar entre riegos.",
     "Sol directo.",
     "En infusiones, guisos y platos de carne.",
     "Reduce inflamaciones, regula la menstruación.",
     "Plantar en primavera. Poda regular. Tolera sequía."
   ),

   new Plant(
     16,
     "Melisa",
     "También conocida como toronjil, es una planta aromática calmante usada en infusiones relajantes.",
     ["Medicinal"],
     "https://cdn.pixabay.com/photo/2016/08/06/22/13/melissa-1571831_960_720.jpg",
     "Riego frecuente, mantener el sustrato húmedo.",
     "Sombra parcial o luz indirecta.",
     "En infusiones para calmar ansiedad o problemas de sueño.",
     "Relajante natural, alivia estrés y trastornos digestivos.",
     "Plantar en primavera. Crece bien en maceta. Poda regular para estimular crecimiento."
   ),
   new Plant(
     17,
     "Ortiga",
     "Planta silvestre rica en nutrientes con usos medicinales y culinarios.",
     ["Comestible", "Medicinal"],
     "https://cdn.pixabay.com/photo/2022/09/30/09/34/nettle-7490585_960_720.jpg",
     "Riego moderado. Prefiere suelos húmedos.",
     "Sombra parcial.",
     "Cocinada como espinacas, en sopas o infusiones.",
     "Depurativa, rica en hierro, buena para el cabello y la piel.",
     "Recolectar con guantes. Brotes tiernos en primavera son comestibles."
   ),
   new Plant(
     18,
     "Manzanilla",
     "Planta medicinal usada comúnmente para infusiones relajantes y digestivas.",
     ["Medicinal"],
     "https://cdn.pixabay.com/photo/2016/08/06/22/08/chamomile-1571824_960_720.jpg",
     "Riego moderado, evitar encharcamientos.",
     "Sol directo.",
     "Infusión calmante para estrés y dolores estomacales.",
     "Antiinflamatoria, calmante, alivia cólicos.",
     "Siembra en primavera. Requiere sol y buena ventilación."
   ),
   new Plant(
     19,
     "Valeriana",
     "Conocida por sus efectos sedantes, ideal para trastornos del sueño y ansiedad.",
     ["Medicinal"],
     "https://cdn.pixabay.com/photo/2020/06/19/20/10/valerian-5316877_960_720.jpg",
     "Riego regular, suelo húmedo pero bien drenado.",
     "Semisombra.",
     "En cápsulas o infusión de la raíz seca.",
     "Sedante natural, combate insomnio y ansiedad.",
     "Plantar en otoño o primavera. Recolectar raíz tras 2 años."
   ),
   new Plant(
     20,
     "Eneldo",
     "Hierba aromática usada en cocina y con propiedades digestivas.",
     ["Comestible", "Medicinal"],
     "https://cdn.pixabay.com/photo/2020/06/18/16/43/dill-5313611_960_720.jpg",
     "Riego regular, especialmente en climas cálidos.",
     "Sol directo.",
     "En pescados, encurtidos y salsas.",
     "Digestivo, alivia flatulencias y cólicos.",
     "Siembra directa. No trasplantar. Ciclo rápido."
   ),
   new Plant(
     21,
     "Milenrama",
     "Planta silvestre con propiedades cicatrizantes y reguladoras.",
     ["Medicinal"],
     "https://cdn.pixabay.com/photo/2021/07/21/16/28/yarrow-6483111_960_720.jpg",
     "Riego escaso. Tolera suelos pobres.",
     "Sol directo.",
     "Infusión para regular el ciclo menstrual.",
     "Antiinflamatoria, cicatrizante, reguladora hormonal.",
     "Plantar en primavera. Muy resistente. Atrae polinizadores."
   ),
   new Plant(
     22,
     "Hisopo",
     "Aromática tradicional usada en infusiones y para aliviar problemas respiratorios.",
     ["Medicinal"],
     "https://cdn.pixabay.com/photo/2016/09/06/23/00/hyssop-1649531_960_720.jpg",
     "Riego moderado. No encharcar.",
     "Sol directo.",
     "Infusión expectorante o como tónico.",
     "Expectorante, antiséptico y digestivo.",
     "Plantar en primavera. Atrayente de abejas."
   ),
   new Plant(
     23,
     "Hinojo",
     "Aromática con sabor anisado, usada en cocina y digestiva.",
     ["Comestible", "Medicinal"],
     "https://cdn.pixabay.com/photo/2020/06/08/06/35/fennel-5273536_960_720.jpg",
     "Riego moderado y constante.",
     "Sol directo.",
     "Tallos y semillas en guisos, ensaladas e infusiones.",
     "Digestivo, calma gases y estimula el apetito.",
     "Siembra directa. Requiere espacio y sol."
   ),
   new Plant(
     24,
     "Milenrama rosa",
     "Variante ornamental de la milenrama, útil en infusiones y para la piel.",
     ["Medicinal", "Decorativa"],
     "https://cdn.pixabay.com/photo/2017/07/08/18/18/yarrow-2484642_960_720.jpg",
     "Riego ligero. Tolera sequía.",
     "Sol directo.",
     "Infusión calmante o en cremas caseras.",
     "Cicatrizante, útil para piel inflamada o acné.",
     "Perenne. Requiere poca agua y poda ligera tras floración."
   ),
   new Plant(25),
 ];
export default plantas;
