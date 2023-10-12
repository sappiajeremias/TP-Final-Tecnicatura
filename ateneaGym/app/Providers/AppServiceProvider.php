<?php

namespace App\Providers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot()
    {
        Validator::extend('fecha_vencimiento_posterior', function ($attribute, $value, $parameters, $validator) {
            $inputDate = \Carbon\Carbon::createFromFormat('m/Y', $value);
            $currentDate = \Carbon\Carbon::now();

            return $inputDate->gt($currentDate);
        });
    }
}
