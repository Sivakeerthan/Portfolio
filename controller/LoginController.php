<?php
/**
 * Created by IntelliJ IDEA.
 * User: George
 * Date: 26.08.2018
 * Time: 18:54
 */

class LoginController
{
    public function index()
    {
        $userRepository = new UserRepository();

        $view = new View('login');
        $view->title = 'Benutzer';
        $view->heading = 'Benutzer';
        $view->users = $userRepository->readAll();
        $view->display();
    }
}