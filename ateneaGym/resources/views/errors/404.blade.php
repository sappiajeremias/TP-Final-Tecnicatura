@extends('layouts.app')

@section('title', 'ERROR 404')

@section('content')
    <div class="error-container">
        <img class="error-image" src="https://i.pinimg.com/564x/8a/da/ef/8adaef9fb826709568e265c731d25ad0.jpg" alt="Error 404">
        <h1 class="error-message-heading">Lo Sentimos...</h1>
        <p class="error-message-text">No hemos podido encontrar la pagina que buscas.</p>
        {{-- <button class="btn go-back-btn">Go Back</button> --}}
    </div>

    <style>
     
        .error-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #FFFFFF;
            box-shadow: 0 0 6px #bbbbbb;
            width: calc(100% - 10px);
            margin: auto;
            padding: 20px;
        }

        .error-image {
            width: auto;
            max-width: calc(100% - 40px);
        }

        .error-message-heading {
            font-family: 'PT Serif', serif;
            font-family: 'Roboto', sans-serif;
            font-size: 30px;
            margin-bottom: 8px;
            /* letter-spacing: 1.5px; */
        }

        .error-message-text {
            font-family: 'PT Serif', serif;
            font-family: 'Roboto', sans-serif;
            font-size: 20px;
            /* letter-spacing: 0.5px; */
            line-height: 24px;
            text-align: center;
        }
    </style>
@endsection
