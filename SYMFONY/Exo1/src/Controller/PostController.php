<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Post;
use App\Repository\PostRepository;
use App\Repository\PostCategoryRepository;
use Symfony\Component\HttpFoundation\JsonResponse;

class PostController extends AbstractController
{
    #[Route('/post', name: 'app_post')]
    public function index(EntityManagerInterface $entityManager, PostRepository $postRepository, PostCategoryRepository $PostCategoryRepository): Response
    {
        $selectAll = $postRepository->find(1);
        //$newTitle1 = $selectAll->setTitre("vdfdvd");
        $message1 = $selectAll->getMessage();
        $date1 = $selectAll->getDatePublication();

        $post = new Post();
        $post->setTitre("Nouveau titre");
        $post->setMessage($message1);
        $post->setDatePublication($date1);
        $post->setCategory($PostCategoryRepository->find(23));

        //Suppression d'une ligne
        //$delete = $postRepository->find(6);
        //$entityManager->remove($delete);

        //$entityManager->persist($post);
        $entityManager->flush();

        //$selectAllEntity = $postRepository->findAll();
        $selectAllEntity = $PostCategoryRepository->findOneBy(["id"=>23]);
        $selectAllEntity = $selectAllEntity->getPosts();

        //return new JsonResponse (var_dump($selectAllEntity));
        return $this->render('post/index.html.twig', [
            'all' => $selectAllEntity,
        ]);
    }
}
