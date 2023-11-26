<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel {
  protected $commands = [
    Commands\GenerarTurnos::class,
    Commands\GenerarNotis::class, // Agrega esta línea
  ];

  /**
   * Define the application's command schedule.
   */
  protected function schedule(Schedule $schedule): void {
    $schedule->command('turnos:generar')->monthly();
    $schedule->command('notificaciones:generar')->dailyAt(now()); // Agrega esta línea
  }

  /**
   * Register the commands for the application.
   */
  protected function commands(): void {
    $this->load(__DIR__ . '/Commands');

    require base_path('routes/console.php');
  }
}
