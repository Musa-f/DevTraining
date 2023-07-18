<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ArticlesController extends AbstractController
{
    #[Route('/articles', name: 'app_articles')]
    public function index(): Response
    {
       $articles = [ 
            [
                "title" => "Les bienfaits des légumes pour la santé",
                "author" => "Boris",
                "date" => date('d.m.y'),
                "content" => "Les légumes sont un aliment essentiel pour maintenir une alimentation saine et équilibrée. Ils sont riches en vitamines, minéraux et fibres, et ont de nombreux bienfaits pour la santé. Les légumes peuvent aider à prévenir les maladies cardiovasculaires, à réguler la glycémie et à maintenir un poids santé.

                Les légumes sont également riches en antioxydants, qui aident à protéger les cellules contre les dommages causés par les radicaux libres. Les légumes verts comme les épinards et le brocoli sont particulièrement riches en antioxydants.
                
                Les légumes sont également une excellente source de fibres, qui peuvent aider à maintenir la santé digestive. Les fibres aident à prévenir la constipation et à réguler les niveaux de cholestérol.
                
                Enfin, les légumes sont souvent faibles en calories, ce qui les rend idéaux pour les personnes souhaitant perdre du poids ou maintenir un poids santé. Les légumes sont également riches en eau, ce qui peut aider à prévenir la déshydratation et à maintenir une peau saine."
            ],
            [ 
                "title" => "Comment cuisiner les légumes pour une alimentation saine",
                "author" => "Jonh",
                "date" => date('d.m.y'),
                "content" => "Manger des légumes est essentiel pour une alimentation saine, mais il est parfois difficile de trouver des façons de les cuisiner qui soient à la fois délicieuses et saines. Voici quelques conseils pour cuisiner les légumes de manière à ce qu'ils conservent leur valeur nutritive et leur goût.

                Tout d'abord, évitez de faire cuire les légumes trop longtemps. Les légumes perdent rapidement leur valeur nutritive lorsqu'ils sont trop cuits. Il est préférable de les cuire à la vapeur ou de les faire sauter rapidement pour préserver leur goût et leur texture.
                
                Ensuite, ajoutez des épices et des herbes pour donner de la saveur aux légumes. Les épices peuvent donner du goût sans ajouter de calories supplémentaires. Essayez d'utiliser des épices comme le curcuma, le cumin ou le paprika pour donner une touche de saveur à vos légumes.
                
                Enfin, essayez de mélanger les légumes pour créer une variété de saveurs et de textures. Les mélanges de légumes colorés comme les poivrons, les carottes et les courgettes sont non seulement beaux à regarder, mais ils sont également riches en nutriments."
            ],
            [ 
                "title" => "Les légumes locaux : une solution pour une alimentation durable",
                "author" => "Sacha",
                "date" => date('d.m.y'),
                "content" => "Les légumes locaux sont une solution pour une alimentation plus durable. En achetant des légumes produits localement, vous réduisez les émissions de gaz à effet de serre associées au transport des aliments et vous soutenez les agriculteurs locaux.

                De plus, les légumes locaux sont souvent plus frais et plus savoureux que les légumes importés. Les légumes qui ont été transportés sur de longues distances peuvent perdre leur fraîcheur et leur saveur.
                
                Enfin, les légumes locaux sont souvent cultivés de manière plus durable. Les agriculteurs locaux ont souvent des pratiques agricoles plus durables, utilisant moins de pesticides et d'engrais chimiques et mettant l'accent sur la préservation de la biodiversité"
            ]
        ];


        return $this->render('articles/index.html.twig', [
            'articles' => $articles
        ]);
    }
}
