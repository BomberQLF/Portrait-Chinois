//Q1. Dans le même dossier que votre page web, créez un fichier data.js contenant un code Javascript qui crée une nouvelle variable contenant un tableau appelé analogies, qui contient la liste des analogies que vous avez choisies pour votre portrait, par exemple « une couleur », « un film », etc.//
//Ammener tous mes éléments à l'action//
//Film d'action + Fruit = Grenade + Objet = arme (car on en prend soin et elle peut se protéger seule) + Couleur=Vert et Rouge pour la Légion//


var analogies = ["un fruit", "un film", "un objet", "un sport", "une couleur", "un pays", "un chant"];


//Q7. Ajoutez dans le fichier data.js la création d’une nouvelle variable contenant un tableau appelé valeursAnalogies, qui contient la liste des valeurs des analogies que vous avez choisies pour votre portrait. Par exemple si la première case de votre tableau analogies contient "une couleur", la première case de votre tableau valeursAnalogies peut contenir la valeur "la couleur orange".


var valeursAnalogies = [" une grenade", " American Sniper", " des jumelles", " le judo", " rouge", " la France", " Sous le soleil brûlant d'Afrique"];


//Q9. Ajoutez dans votre code du fichier data.js un code Javascript permettant de créer une variable data qui contient un tableau dont chaque case contient un objet ayant deux propriétés :
//analogie qui contient le nom de chaque analogie (par exemple "une couleur")
//valeurAnalogie qui contient la valeur que vous avez choisie pour cette analogie  (par exemple "la couleur orange").
// var data = [ 
//     {
//         "analogie" : "un fruit",
//         "valeursAnalogie" : "une grenade",
//         "argumentation" : "La grenade, en tant que fruit, représente la force cachée derrière une peau solide, montrant ainsi la robustesse et la vitalité de ce dernier. Étant issu d'une famille militaire, la grenade peut également être apperçu comme une arme à la fois offensive et défensive."
//     },
//     {
//         "analogie" : "un film",
//         "valeursAnalogie" : "American Sniper",
//         "réalisateur" : "Clint Eastwood",
//         "date" : "18 Février 2015",
//         "argumentation" : "American Sniper serait mon choix de film car il capture la détermination, la bravoure, la réalité de la guerre mais également la complexité d'un sniper sur le terrain. Dans ce film plus que captivant, la vie de Chris Kyle est retracé de ses débuts en tant que Cowboy jusqu'à ce qu'il devienne le tireur d'élite le plus redoutable de l'armée américaine."
//     },
//     {
//         "analogie" : "un objet",
//         "valeursAnalogie" : "des jumelles",
//         "argumentation" : "J'opterai pour des jumelles car je suis une personne qui est très obeservatrice. Elles permettent de voir le monde avec un nouvel angle et offrent une perspective différente sur les choses."
//     },
//     {
//         "analogie" : "un sport",
//         "valeursAnalogie" : "le judo",
//         "argumentation" : "J'ai choisi ce sport car c'est un art martial que j'ai exercé pendant une longue durée. C'est un sport qui implique la cohésion d'équipe, la stratégie, le dépassement de soi, la force et la discipline. Ce sport m'a permi de devenir confiant et à l'aise dans tout type de situation critique auxquelles je pourrais être confronté."
//     },
//     {
//         "analogie" : "une couleur",
//         "valeursAnalogie" : "rouge",
//         "argumentation" : "La rouge est une couleur vibrante et passionnée, c'est une teinte qui pour moi, évoque souvent la force, l'energie et la détermination, elle se rapproche beaucoup de mon caractère et de mes centres d'intêret."
//     },
//     {
//         "analogie" : "un pays",
//         "valeursAnalogie" : "la France",
//         "argumentation" : "Je choisirais d'être la France, mon pays, un endroit où j'ai été éduqué, où j'ai grandi, et où je me sens profondément lié, que ce soit par mes origines ou par mon attachement. C'est un lieu pour lequel je serais prêt à me battre et à donner le meilleur de moi-même."
//     },
//     {
//         "analogie" : "un chant",
//         "valeursAnalogie" : "Sous le soleil brûlant d'Afrique",
//         "argumentation" : "Le Chant de la Légion Étrangère est une chanson emblématique qui évoque la bravoure, le courage et le dévouement des membres de la Légion Étrangère; lorsque j'écoute chant, j'en ai des frissons."
//     }
// ];

//Q11. Complétez votre code du fichier data.js et votre code Javascript pour charger dans le code HTML de chaque bloc correspondant à chaque analogie des informations supplémentaires en plus du nom de l’analogie et de la valeur de l’analogie. Il vous est conseillé d’inclure pour chaque analogie au moins les éléments supplémentaires suivants (les deux premiers sont évoqués dans le descriptif du projet de la SAÉ, le troisième correspond aux bonnes pratiques de respect de la législation française sur la propriété intellectuelle, un des éléments que j’évaluerai dans le critère « respect des conventions ») :

//un texte explicatif à propos de votre choix de cette analogie dans votre portrait ;

//l’URL d’un fichier multimédia illustrant l’analogie ;

//des informations éventuelles sur la propriété intellectuelle relative au fichier multimédia si vous ne l’avez pas créé vous-même : nom de l’auteur ou autrice, date de création, lieu de conservation, licence d’utilisation ; faites figurer uniquement les informations pertinentes et contactez-moi sur Discord en cas de doute ou question.


//Q12. Enregistrez votre fichier data.js dans un nouveau fichier analogies.json situé dans le même dossier, et gardez uniquement dans ce fichier analogies.json le contenu de la variable data. Attention, ce fichier ne doit rien contenir d’autre : pas de var, pas de nom de variable, pas d’espace ni de retour à la ligne avant ou après le contenu de la variable data.

//Q13. Chargez le contenu de votre fichier JSON dans une variable data en utilisant fetch en Javascript.

