<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DateController extends AbstractController
{
    #[Route('/time/now', name: 'app_date')]
    public function index(): Response
    {
        $date = date("d M Y");;
        $heure = date("H:i:s");

        return $this->render('date/date.html.twig', [
            'affichageHeure' => $heure,
            'affichageDate' => $date,
        ]);
    }
}
