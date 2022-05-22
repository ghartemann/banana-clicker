<?php

namespace App\Controller;

use App\Model\ClickerManager;
use App\Model\BuffBPCManager;
use App\Model\BuffBPSManager;

class HomeController extends AbstractController
{
    /**
     * Display home page
     */
    public function index(): string
    {
        $clickerManager = new ClickerManager;
        $clickers = $clickerManager->selectAll();

        $buffBPCManager = new BuffBPCManager;
        $buffsBPC = $buffBPCManager->selectAll();

        $buffBPSManager = new BuffBPSManager;
        $buffsBPS = $buffBPSManager->selectAll();

        return $this->twig->render('Home/index.html.twig', ["clickers" => $clickers, "buffsBPC" => $buffsBPC, "buffsBPS" => $buffsBPS]);
    }
}
