<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('ejercicio_rutinas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('ejercicio_id');
            $table->foreign('ejercicio_id')->references('id')->on('ejercicios')->onDelete('cascade');
            $table->unsignedBigInteger('rutina_id');
            $table->foreign('rutina_id')->references('id')->on('rutinas')->onDelete('cascade');
            $table->integer('repeticiones');
            $table->integer('series');
            $table->integer('peso')->nullable();
            $table->string('adicional')->nulleable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists('ejercicio_rutinas');
    }
};
