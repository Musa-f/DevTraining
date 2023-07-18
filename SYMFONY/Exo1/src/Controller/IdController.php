<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class IdController extends AbstractController
{
    #[Route('/id', name: 'app_id')]
    public function index(Request $request): Response
    {
        $req = $request->getClientIp();
        return $this->render('id/id.html.twig', [
            'ip' => $req,
        ]);
    }
}
