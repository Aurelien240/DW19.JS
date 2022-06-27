        //Mon code Javascript//
        /*
        1. Variables
        2. Conditions
        3. Boucles
        4. Fonctions
        */

        /*
        1. Pourquoi ? Stocker des données EX: Nom d'un jeu ="jeu du plus ou du moins"; 
           Une Variable: le nom de la var et sa valeur.
           Le numérique ne comporte jamais de "".
           Les chaines de caractères contiennent des "".
           Additionnés des nombres possible
           Additionnés une chaine de caractère avec autre chose fait de la concatenation.
        */
       a=10
       b=50
       c="80"
       b=90
       console.error(a+parseInt(c));
       console.error(typeof(c));
       console.error(b);


       SEL=100
       SUCRE=80
       console.error("Nous avons du SEL en Q. de " + SEL + "Nous avons du sucre en quantité de "+ SUCRE)
       
       // Inversé les variables
       // Creer une var temporaire
       temp=SEL
       SEL=SUCRE
       SUCRE=temp
       console.error("Nous avons du SEL en Q. de " + SEL + "Nous avons du sucre en quantité de "+ SUCRE)

       //Exo 2
       /*Y=prompt("Mettez votre âge");
       console.log("L'utilisateur a " + Y + " ans ");
       X=parseInt(Y) + 2
       console.log("L' utilisateur aura " + X + " ans");*/

       //Exo 3
       /*X=prompt("Entrez le prix de l'article");
       console.log("L'article vaut " + X + " euros");
       Y=parseInt(X) * 1.2
       console.log("L'article vaut " + Y + " TTC");*/

       //Exo 4
       var now = new Date();
       var annee   = now.getFullYear();
       var mois    = now.getMonth() + 1;
       var jour    = now.getDate();
       var heure   = now.getHours();
       var minute  = now.getMinutes();
       var seconde = now.getSeconds();

       console.log("Nous sommes le "+jour+"/"+mois+"/"+annee+" et il est "+heure+" heure "+minute+" minutes "+seconde+" secondes" );

