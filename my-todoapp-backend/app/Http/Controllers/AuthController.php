<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;



class AuthController extends Controller
{
    // Show the login form
    public function showLoginForm()
    {
        return view('auth.login');
    }

    // Handle the login form submission
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication successful, redirect to the dashboard or any other page
            return redirect('/dashboard');
        }

        // Authentication failed, redirect back to the login form with an error message
        return redirect()->route('login')->with('error', 'Invalid credentials');
    }

    // Handle the logout
    public function logout()
    {
        Auth::logout();
        return redirect('/');
    }
}