@extends('layouts.app')

@section('title', 'ERROR 500')

@section('content')
    <div class="error-container">
        <img class="error-image" src="https://i.pinimg.com/736x/8a/f9/10/8af910f93406671e0b8d5a3c7d5413ab.jpg" alt="Error 500">
        <h1 class="error-message-heading">Lo Sentimos...</h1>
        <p class="error-message-text">La página a la que intenta acceder tiene acceso restringido.</p>
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
