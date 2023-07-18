<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ColorController extends AbstractController
{
    #[Route('/color/{color}', name: 'app_color')]
    public function index($color): Response
    {
        if($color == "green"){
            $result = "green";
            $color = "text-success";
        }
        if($color=="red"){
            $result = "red";
            $color = "text-danger";
        }
        
        return $this->render('color/color.html.twig', [
            'color' => $result,
            'colorText' => $color
        ]);
    }

}
