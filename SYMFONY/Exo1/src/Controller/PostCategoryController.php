<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\PostCategory;
use App\Repository\PostCategoryRepository;

class PostCategoryController extends AbstractController
{
    #[Route('/post/category', name: 'app_post_category')]
    public function index(EntityManagerInterface $entityManager, PostCategoryRepository $postCategoryRepository): Response
    {
        
        //$category1 = $postCategoryRepository->find(1);

        $category = new PostCategory();
        $category->setTitle("Catégorie 1");
        
        //$entityManager->persist($category);
        $entityManager->flush();

        $result = $category->getTitle();
        $id = $category->getId();

        return $this->render('post_category/index.html.twig', [
            /*'resultTitle' => $result,
            'resultId' => $id*/
            //'category1' => $category1,
        ]);
    }
}
