<?php

namespace App\Exceptions;

use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;

class Handler extends ExceptionHandler {
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];
    public function render($request, Throwable $exception) {
        if ($exception instanceof ModelNotFoundException || $exception instanceof NotFoundHttpException) {
            return response()->view('errors.404', [], 404);
            // o puedes devolver una respuesta JSON si lo prefieres
            // return response()->json(['error' => 'Recurso no encontrado'], 404);
        }

        if ($exception instanceof AuthorizationException) {
            return response()->view('errors.403', [], 403);
            // o puedes devolver una respuesta JSON si lo prefieres
            // return response()->json(['error' => 'Acceso no autorizado'], 403);
        }

        return parent::render($request, $exception);
    }
    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void {
        $this->reportable(function (Throwable $e) {
            //
        });
    }
}
