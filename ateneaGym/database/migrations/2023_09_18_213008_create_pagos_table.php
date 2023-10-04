<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('pagos', function (Blueprint $table) {
            $table->id();
            $table->integer('dias_disponibles');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('membresia_id');
            $table->foreign('membresia_id')->references('id')->on('membresias')->onDelete('cascade');
            $table->date('fecha_vencimiento');
            $table->string('medio_pago');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists('pagos');
    }
};
