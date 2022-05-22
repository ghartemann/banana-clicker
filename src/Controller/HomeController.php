<?php

namespace App\Controller;

use App\Model\ClickerManager;
use App\Model\BuffManager;

class HomeController extends AbstractController
{
    /**
     * Display home page
     */
    public function index(): string
    {
        $clickerManager = new ClickerManager;
        $clickers = $clickerManager->selectAll();

        $buffManager = new BuffManager;
        $buffs = $buffManager->selectAll();

        return $this->twig->render('Home/index.html.twig', ["clickers" => $clickers, "buffs" => $buffs]);
    }
}
