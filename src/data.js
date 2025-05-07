
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

  getRecomendations() {
    return `Para cuidar ${this.nombre}, asegúrate de ${this.riego} y proporcionarle ${this.luz}. Puedes usarla ${this.uso}. Beneficios: ${this.beneficios}. Cómo plantar: ${this.comoPlantar}`;
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
     ["Comestible", "Medicinal", "Facil"],
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
     ["Medicinal", "Antimosquitos", "Facil"],
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
     ["Medicinal", "Facil"],
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
     ["Comestible", "Medicinal", "Facil"],
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
   new Plant(
     29,
     "Pimiento",
     "Verdura popular en múltiples platos, desde guisos hasta ensaladas.",
     ["Comestible", "Huerto urbano"],
     "https://cdn.pixabay.com/photo/2016/08/03/01/07/bell-pepper-1568009_960_720.jpg",
     "Riego moderado, constante y sin encharcar.",
     "Sol directo. Necesita calor.",
     "Asado, crudo en ensaladas, relleno o en sofritos.",
     "Fuente de vitamina C y antioxidantes.",
     "Sembrar en primavera en tierra rica y bien drenada. Requiere temperaturas cálidas (mínimo 20 °C). Germina en 7-15 días y se trasplanta cuando tenga 4-6 hojas. Poda ligera para estimular el crecimiento de frutos."
   ),

   new Plant(
     30,
     "Cebolla",
     "Base de muchos platos. Se puede cultivar incluso en macetas profundas.",
     ["Comestible", "Huerto clásico"],
     "https://cdn.pixabay.com/photo/2016/03/05/19/02/onions-1238332_960_720.jpg",
     "Riego ligero al inicio, luego espaciado.",
     "Sol directo. Le gusta el clima templado.",
     "Cruda en ensaladas, caramelizada, en guisos, caldos y sofritos.",
     "Rica en quercetina y compuestos antioxidantes.",
     "Plantar en surcos separados unos 15 cm. No enterrar demasiado el bulbo. Cosechar cuando las hojas se doblen y amarilleen. Secar bien antes de almacenar. Evitar riego excesivo en la fase final para evitar podredumbre."
   ),

   new Plant(
     31,
     "Tomate",
     "Una de las hortalizas más cultivadas. Versátil y sabrosa.",
     ["Comestible", "Huerto popular"],
     "https://cdn.pixabay.com/photo/2016/04/01/10/12/tomatoes-1293884_960_720.jpg",
     "Riego constante, mejor por goteo. Evitar mojar las hojas.",
     "Sol directo. Necesita al menos 6 h de sol diario.",
     "En ensaladas, salsas, zumos o asados.",
     "Rico en licopeno, antioxidantes y vitaminas A y C.",
     "Sembrar en semillero a fines del invierno y trasplantar cuando mida unos 15 cm. Necesita tutores o soporte vertical. Poda de chupones (brotes entre tallo y rama) para concentrar la energía en los frutos. Cosechar cuando estén bien rojos y firmes."
   ),

   new Plant(
     32,
     "Zanahoria",
     "Raíz comestible dulce y crujiente. Muy fácil de cultivar.",
     ["Comestible", "Huerto urbano"],
     "https://cdn.pixabay.com/photo/2018/08/08/10/44/carrots-3590733_960_720.jpg",
     "Riego regular y moderado. No encharcar.",
     "Sol directo o semisombra.",
     "En crudo, cocida, en purés o postres.",
     "Rica en betacarotenos, mejora la visión y el sistema inmune.",
     "Tierra suelta, profunda y sin piedras para que la raíz crezca recta. Siembra directa, no trasplante. Mantener húmedo hasta la germinación (7-21 días). Aclareo para dejar espacio entre plantas. Cosechar entre 70 y 100 días."
   ),
   new Plant(
     33,
     "Rúcula",
     "Hortaliza de hoja con sabor ligeramente picante. Crece rápido y en poco espacio.",
     ["Comestible", "Maceta", "Balcón"],
     "https://cdn.pixabay.com/photo/2017/06/08/10/42/arugula-2385626_960_720.jpg",
     "Riego regular, mantener humedad sin encharcar.",
     "Semisombra o sol suave.",
     "En ensaladas, pizzas, bocadillos o pesto.",
     "Rica en vitamina K, C y compuestos antiinflamatorios.",
     "Ideal para maceta ancha pero poco profunda. Sembrar directamente, germina en pocos días. Puedes cortar hojas jóvenes y seguir cosechando varias semanas. Evita calor extremo que acelera la floración."
   ),

   new Plant(
     34,
     "Espinaca",
     "Verdura de hoja muy nutritiva. Perfecta para cultivo en espacios reducidos.",
     ["Comestible", "Maceta", "Balcón"],
     "https://cdn.pixabay.com/photo/2017/04/17/10/32/spinach-2238779_960_720.jpg",
     "Riego moderado, suelo siempre ligeramente húmedo.",
     "Semisombra o sol parcial.",
     "Salteada, en ensaladas o batidos verdes.",
     "Alto contenido en hierro, ácido fólico y antioxidantes.",
     "Siembra directa en maceta profunda (mínimo 20 cm). Resiste bien el frío. Cosecha hojas exteriores cuando tengan buen tamaño. Crece rápido y se adapta bien a espacios pequeños si se mantiene húmeda y ventilada."
   ),

   new Plant(
     35,
     "Lechuga",
     "Clásica verdura de hoja fácil de cultivar incluso en jardineras.",
     ["Comestible", "Maceta", "Balcón"],
     "https://cdn.pixabay.com/photo/2016/06/18/17/42/lettuce-1460606_960_720.jpg",
     "Riego frecuente pero sin encharcar. Evitar sequías.",
     "Sol suave o semisombra.",
     "En ensaladas o como base para wraps y bocadillos.",
     "Rica en agua y fibra, ligera y digestiva.",
     "Ideal en jardineras de 20 cm de profundidad. Siembra directa o trasplante. Puedes recolectar hojas exteriores poco a poco o cortar la planta entera. Mantén el sustrato húmedo y evita el calor excesivo que causa floración prematura."
   ),

   new Plant(
     36,
     "Rábano",
     "Raíz pequeña, de cultivo rápido y perfecta para principiantes.",
     ["Comestible", "Maceta", "Balcón"],
     "https://cdn.pixabay.com/photo/2016/05/04/20/08/radish-1374782_960_720.jpg",
     "Riego constante, suelo húmedo pero no encharcado.",
     "Sol directo o semisombra.",
     "Crudo en ensaladas, encurtido o como snack.",
     "Bajo en calorías, rico en vitamina C y potasio.",
     "Se adapta bien a macetas de al menos 15 cm de profundidad. Siembra directa cada pocas semanas para cosecha continua. Germina en 3-7 días y se cosecha en 25-40 días. Ideal para cultivar junto a otras verduras de ciclo más largo."
   ),

   new Plant(
     38,
     "Tomate cherry",
     "Variedad compacta de tomate ideal para balcones, muy productiva en maceta.",
     ["Comestible", "Maceta", "Balcón"],
     "https://cdn.pixabay.com/photo/2018/06/03/16/51/tomato-3456854_960_720.jpg",
     "Riego abundante y regular. No mojar hojas.",
     "Sol directo mínimo 6h/día.",
     "Crudos en ensaladas, brochetas o salsas frescas.",
     "Fuente de licopeno, antioxidante beneficioso para el corazón.",
     "Maceta profunda (30 cm mínimo). Usa tutor o jaula para sostenerlo. Polinización manual en balcones ayuda a la producción. Requiere abono cada 15 días y buena exposición solar."
   ),

   new Plant(
     39,
     "Pimiento italiano",
     "Planta compacta y productiva. Muy usada en cocina mediterránea.",
     ["Comestible", "Maceta", "Balcón"],
     "https://cdn.pixabay.com/photo/2014/04/10/11/06/chili-320278_960_720.jpg",
     "Riego regular, sin encharcar. Más riego en floración.",
     "Sol directo.",
     "A la plancha, en guisos, rellenos o crudos.",
     "Rico en vitamina C y antioxidantes.",
     "Maceta profunda y amplia. Necesita calor y sol. Usa tutor. Retira las primeras flores para estimular producción. Asegura buen drenaje y riega solo cuando la tierra esté seca en superficie."
   ),

   new Plant(
     41,
     "Perejil",
     "Aromática resistente, ideal para jardineras y pequeños espacios.",
     ["Comestible", "Aromática", "Balcón"],
     "https://cdn.pixabay.com/photo/2014/04/10/11/06/parsley-320278_960_720.jpg",
     "Riego frecuente y uniforme.",
     "Semisombra o sol parcial.",
     "Como condimento en casi cualquier plato.",
     "Fuente de hierro y vitamina C.",
     "Maceta de al menos 20 cm de profundidad. Siembra directa o trasplante. Cosecha hojas exteriores cuando estén bien formadas. Crece lentamente al principio pero se mantiene varios meses si se cuida."
   ),
   new Plant(
     42,
     "Pimiento de Padrón",
     "Variedad gallega de pequeño tamaño, famosa por su sabor suave o picante sorpresa.",
     ["Comestible", "Huerto urbano", "Balcón"],
     "https://cdn.pixabay.com/photo/2015/07/02/10/07/pimientos-828888_960_720.jpg",
     "Riego moderado. Más frecuente en floración y fruto.",
     "Sol directo mínimo 6h/día.",
     "Fritos en sartén con sal gruesa. También en tortillas o acompañamientos.",
     "Fuente de antioxidantes y vitaminas A y C. Ayuda a la digestión.",
     "Maceta de al menos 30 cm de profundidad. Prefiere climas cálidos. Necesita tutor si crece mucho. Cosechar verdes y pequeños (5-8 cm). Usar abono orgánico o compost cada 2 semanas. Importante buen drenaje y exposición solar constante."
   ),
 ];
export default plantas;
