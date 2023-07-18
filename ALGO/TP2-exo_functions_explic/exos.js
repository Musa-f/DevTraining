/*

pikachu(1,1)

Je crée la variable a et je mets 1 dedans.
Je crée la variable b et je mets 1 dedans.
Je crée la variable result et je mets 0 dedans.
Début de la boucle : je crée i et je mets 0 dedans

    Est-ce que i (0) < a (1) ? Oui
    J'incrémente result (0) de b (1) -> result passe à 1
    J'incrémente i (0) de 1 -> i passe à 1
    Est-ce que i (1) < a (1) ? Non

Le boucle est terminée
La réponse est : result (1)

--------------

pikachu(1,4)

Je crée la variable a et je mets 1 dedans.
Je crée la variable b et je mets 4 dedans.
Je crée la variable result et je mets 0 dedans.
Début de la boucle : je crée i et je mets 0 dedans

    Est-ce que i (0) < a (1) ? Oui
    J'incrémente result (0) de b (4) -> result passe à 4
    J'incrémente i (0) de 1 -> i passe à 1
    Est-ce que i (1) < a (1) ? Non

Le boucle est terminée
La réponse est : result (4)

--------------

plafond(2,3)

Je crée la variable a et je mets 2 dedans.
Je crée la variable b et je mets 3 dedans.
Je crée la variable result et je mets 0 dedans.
Début de la boucle : je crée i et je mets 0 dedans

    Est-ce que i (0) < a (2) ? Oui
    J'affecte result (0) de b (3) -> result passe à 3
    J'incrémente i (0) de 1 -> i passe à 1
    
    Est-ce que i (1) < a (2) ? Oui
    J'affecte result (0) de b (3) -> result passe à 3
    J'incrémente i (1) de 1 -> i passe à 2

    Est-ce que i (2) < a (2) ? Non

Le boucle est terminée
La réponse est : result (3)


--------------

plafond(3,2)

Je crée la variable a et je mets 3 dedans.
Je crée la variable b et je mets 2 dedans.
Je crée la variable result et je mets 0 dedans.
Début de la boucle : je crée i et je mets 0 dedans

    Est-ce que i (0) < a (3) ? Oui
    J'affecte result (0) de b (2) -> result passe à 2
    J'incrémente i (0) de 1 -> i passe à 1
    
    Est-ce que i (1) < a (3) ? Oui
    J'affecte result (0) de b (2) -> result passe à 2
    J'incrémente i (1) de 1 -> i passe à 2

    Est-ce que i (2) < a (2) ? Oui
    J'affecte result (0) de b (2) -> result passe à 2
    J'incrémente i (2) de 1 -> i passe à 3

    Est-ce que i (3) < a(3) ? Non

Le boucle est terminée car result est égal à b
La réponse est : result (2)

--------------

tableur(1,1)

Je crée la variable a et je mets 1 dedans.
Je crée la variable b et je mets 1 dedans.
Je crée la variable result et je mets 0 dedans.
Début de la boucle : je crée i et je mets 0 dedans

    Est-ce que i (0) < a (1) ? Oui

    J'incrémente result (0) de b (1) -> result passe à 1
    J'incrémente i (0) de 1 -> i passe à 1
    Est-ce que i (1) < ou = a (1) ? Oui

    J'incrémente result (1) de b (1) -> result passe à 2
    J'incrémente i (1) de 1 -> i passe à 2
    Est-ce que i (2) < ou = a (1) ? Non

Le boucle est terminée
La réponse est : result (2)

--------------

tableur(4,1)

Je crée la variable a et je mets 4 dedans.
Je crée la variable b et je mets 1 dedans.
Je crée la variable result et je mets 0 dedans.
Début de la boucle : je crée i et je mets 0 dedans

    Est-ce que i (0) < a (4) ? Oui

    J'incrémente result (0) de b (1) -> result passe à 1
    J'incrémente i (0) de 1 -> i passe à 1
    Est-ce que i (1) < ou = a (4) ? Oui

    J'incrémente result (1) de b (1) -> result passe à 2
    J'incrémente i (1) de 1 -> i passe à 2
    Est-ce que i (2) < ou = a (4) ? Oui

    J'incrémente result (2) de b (1) -> result passe à 3
    J'incrémente i (2) de 1 -> i passe à 3
    Est-ce que i (3) < ou = a (4) ? Oui

    J'incrémente result (3) de b (1) -> result passe à 4
    J'incrémente i (3) de 1 -> i passe à 4
    Est-ce que i (4) < ou = a (4) ? Oui

    J'incrémente result (4) de b (1) -> result passe à 5
    J'incrémente i (4) de 1 -> i passe à 5
    Est-ce que i (5) < ou = a (4) ? Non

Le boucle est terminée
La réponse est : result (5)

--------------

lol(0,7)

Je crée la variable a et je mets 0 dedans.
Je crée la variable b et je mets 7 dedans.
Je crée la variable result et je mets 0 dedans.
Début de la boucle : je crée i et je mets 0.5 dedans

    Est-ce que i (0.5) < a (0) ? Non


Le boucle est terminée
La réponse est : result (0)

--------------

lol(2,3) 

Je crée la variable a et je mets 2 dedans.
Je crée la variable b et je mets 3 dedans.
Je crée la variable result et je mets 0 dedans.
Début de la boucle : je crée i et je mets 0 dedans

    Est-ce que i (0) < a (2) ? Oui

    J'incrémente result (0) de b (3) -> result passe à 3
    J'incrémente i (0) de 0.5 -> i passe à 0.5
    Est-ce que i (0.5) < a (2) ? Oui

    J'incrémente result (3) de b (3) -> result passe à 6
    J'incrémente i (0.5) de 0.5 -> i passe à 1
    Est-ce que i (1) < a (2) ? Oui

    J'incrémente result (6) de b (3) -> result passe à 9
    J'incrémente i (1) de 0.5 -> i passe à 1.5
    Est-ce que i (1.5) < a (2) ? Oui

    J'incrémente result (9) de b (3) -> result passe à 12
    J'incrémente i (1.5) de 0.5 -> i passe à 2
    Est-ce que i (2) < a (2) ? Non

Le boucle est terminée
La réponse est : result (12)

--------------

wolverine(1,3)

Je crée la variable a et je mets 1 dedans.
Je crée la variable b et je mets 3 dedans.
Je crée la variable result et je mets 0 dedans.
Début de la boucle : je crée i et je mets 0 dedans

    Est-ce que i (0) < a (1) ? Oui

        Je crée j et je mets 0 dedans
        Est-ce que j (0) < b(3) ? Oui

        J'incrémente result (0) de 1 -> result vaut 1
        J'incrémente j (0) de 1 -> j passe à 1
        Est-ce que j(1) < b(3) ? Oui

        J'incrémente result (1) de 1 -> result vaut 2
        J'incrémente j(1) de 1 -> j passe à 2
        Est-ce que j(2) < b(3) ? Oui

        J'incrémente result(2) de 1 -> result vaut 3
        J'incrémente j(2) de 1 -> j passe à 3
        Est-ce que j(3) < b(3) ? Non

    J'incrémente i(0) de 1 -> i vaut 1
    Est-ce que i(1) < a(1) ? Non

Le boucle est terminée
La réponse est : result (3)

--------------

wolverine(2,0)

Je crée la variable a et je mets 2 dedans.
Je crée la variable b et je mets 0 dedans.
Je crée la variable result et je mets 0 dedans.
Début de la boucle : je crée i et je mets 0 dedans

    Est-ce que i (0) < a (2) ? Oui

    J'incrémente result (0) de result(0) -> result passe à 0
    J'incrémente i (0) de 1 -> i passe à 1
    Est-ce que i (1) < a (2) ? Oui

    J'incrémente result (0) de result(0) -> result passe à 0
    J'incrémente i(1) de 1 -> i passe à 2
    Est-ce que i (2) < a(2) ? Non

Le boucle est terminée
La réponse est : result (0)

--------------

ventilateur(2,3)

Je crée la variable a et je mets 2 dedans.
Je crée la variable b et je mets 3 dedans.
Je crée la variable result et je mets 0 dedans.
Début de la boucle : je crée i et je mets a dedans

    Est-ce que i (a) < a (2) ? Non

Le boucle est terminée
La réponse est : result (0)

--------------

ventilateur(4,5)

Je crée la variable a et je mets 2 dedans.
Je crée la variable b et je mets 3 dedans.
Je crée la variable result et je mets 0 dedans.
Début de la boucle : je crée i et je mets a dedans

    Est-ce que i (a) < a (4) ? Non

Le boucle est terminée
La réponse est : result (0)

--------------

bob(1,1,1)

Je crée la variable a et je mets 1 dedans.
Je crée la variable b et je mets 1 dedans.
Je crée la variable c et je mets 1 dedans.
Je crée la variable result et je mets 0 dedans.
Début de la boucle : je crée i et je mets 0 dedans

    Est-ce que i (0) < a (1) ? Oui

        Je crée j et je mets 0 dedans
        Est-ce que j (0) < b (1) ? Oui

            Je crée k et je mets 0 dedans
            Est-ce que k (0) < c (1) ? Oui

            J'incrémente result (0) de 1 -> result passe à 1
            J'incrémente k (0) de 1 -> k passe à 1
            Est-ce que k(1) < c (1) ? Non

        J'incrémente j (0) de 1 -> j passe à 1
        Est-ce que j (1) < b (1) ? Non

    J'incrémente i(0) de 1 -> i passe à 1
    Est ce que i (1) < a(1) ? Non

Le boucle est terminée
La réponse est : result (1)

--------------

bob(2,1,3)

Je crée la variable a et je mets 2 dedans.
Je crée la variable b et je mets 1 dedans.
Je crée la variable c et je mets 3 dedans.
Je crée la variable result et je mets 0 dedans.
Début de la boucle : je crée i et je mets 0 dedans

    Est-ce que i (0) < a (2) ? Oui

        Je crée la variable j et je mets 0 dedans
        Est-ce que j (0) < b(1) ? Oui

            Je crée k et je mets 0 dedans 
            Est-ce que k (0) < c(3) ? Oui

            J'incrémente result (0) de 1 -> result passe à 1
                J'incrémente k (0) de 1 -> k passe à 1
                Est-ce que k(1) < c (3) ? Oui

            J'incrémente result (1) de 1 -> result passe à 2
                J'incrémente k(1) de 1 -> k passe à 2
                Est-ce que k(2) < c (3) ? Oui

            J'incrémente result (2) de 1 -> result passe à 3
                J'incrémente k(2) de 1 -> k passe à 3
                Est-ce quue k(3) < c(3) ? Non

        J'incrémente j(0) de 1 -> j passe à 1
        Est-ce que j(1) < b(1) ? Non

    J'incrémente i(0) de 1 -> i passe à 1
    Est-ce que i(1) < a(2) ? Oui

        Est-ce que j(0) < b(1) ? Oui

            Je crée k et je mets 0 dedans
            Est-ce que k (0) < c(3) ? Oui

            J'incrémente result (0) de 1 -> result passe à 1
                J'incrémente k (0) de 1 -> k passe à 1
                Est-ce que k(1) < c (3) ? Oui

            J'incrémente result (1) de 1 -> result passe à 2
                J'incrémente k(1) de 1 -> k passe à 2
                Est-ce que k(2) < c (3) ? Oui

            J'incrémente result (2) de 1 -> result passe à 3
                J'incrémente k(2) de 1 -> k passe à 3
                Est-ce que k(3) < c(3) ? Non

        Je crée la variable j et je mets 0 dedans
        J'incrémente j(0) de 1 -> j passe à 1
        Est-ce que j(1) < b(1) ? Non

    J'incrémente i(1) de 1 -> i passe à 2
    Est-ce que i(2) < a(2) ? Non

Le boucle est terminée
La réponse est : result (6)

--------------

calcul(0)

Je crée la variable a et je mets 0 dedans.
Je crée la variable aaa et je mets 1 dedans.
Début de la boucle : je crée i et je mets 2 dedans

    Est-ce que i (2) ⩽ a (0) ? Non

Le boucle est terminée
La réponse est : aaa (1)

--------------

calcul(4)

Je crée la variable a et je mets 4 dedans.
Je crée la variable aaa et je mets 1 dedans.
Début de la boucle : je crée i et je mets 2 dedans

    Est-ce que i (2) ⩽ a (4) ? Oui

    J'incrémente aaa(1) * i(2) -> aaa vaut 2
    J'incrémente i (2) de 1 -> i passe à 3
    Est-ce que i (3) ⩽ a (4) ? Oui

    J'incrémente aaa(2) * i(3) -> aaa vaut 6
    J'incrémente i (3) de 1 -> i passe à 4
    Est-ce que i (4) ⩽ a (4) ? Oui

    J'incrémente aaa(6) * i(4) -> aaa vaut 24
    J'incrémente i (4) de 1 -> i passe à 5
    Est-ce que i(5) ⩽ a (4) ? Non

Le boucle est terminée
La réponse est : result (24)

--------------

calcul(6)

Je crée la variable a et je mets 6 dedans.
Je crée la variable aaa et je mets 1 dedans.
Début de la boucle : je crée i et je mets 2 dedans

    Est-ce que i (2) ⩽ a (6) ? Oui

    J'incrémente aaa(1) * i(2) -> aaa vaut 2
    J'incrémente i (2) de 1 -> i passe à 3
    Est-ce que i (3) ⩽ a (6) ? Oui

    J'incrémente aaa(2) * i(3) -> aaa vaut 6
    J'incrémente i (3) de 1 -> i passe à 4
    Est-ce que i (4) ⩽ a (6) ? Oui

    J'incrémente aaa(6) * i(4) -> aaa vaut 24
    J'incrémente i (4) de 1 -> i passe à 5
    Est-ce que i(5) ⩽ a (6) ? Oui

    J'incrémente aaa(24) * i(5) -> aaa vaut 120
    J'incrémente i (5) de 1 -> i passe à 6
    Est-ce que i(6) ⩽ a(6) ? Oui

    J'incrémente aaa(120) * i(6) -> aaa vaut 720
    J'incrémente i(6) de 1 -> i passe à 7
    Est-ce que i(7) ⩽ a(6) ? Non

Le boucle est terminée
La réponse est : result (720)

--------------

python(0)

Je crée la variable a et je mets 0 dedans.
Je crée la variable monResultat

    Si a (0) est < à 2
    Mon résult égal à 1

La réponse est : result (1)

--------------

erogahtyp(1)

Je crée la variable a et je mets 1 dedans.
Je crée la variable x 
Début de la boucle : 

    Est-ce que a(1) est divisible par 2 ? Non

        Alors je fais 3*a + 1 - > j'obtiens 4

Le boucle est terminée
La réponse est : x (4)


*/








/*exemple 

--------------

f(x,x)

Je crée la variable a et je mets x dedans.
Je crée la variable b et je mets x dedans.
Je crée la variable result et je mets x dedans.
Début de la boucle : je crée i et je mets x dedans

    Est-ce que i (x) < a (x) ? Oui
    J'incrémente result (0) de b (4) -> result passe à 4
    J'incrémente i (0) de 1 -> i passe à 1

    Est-ce que i (x) < a (x) ? Non

Le boucle est terminée
La réponse est : result (x)

*/