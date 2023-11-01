<?php
// Step 1: Require the library from your Composer vendor folder
require_once 'vendor/autoload.php';

use MercadoPago\Client\Payment\PaymentClient;
use MercadoPago\Exceptions\MPApiException;
use MercadoPago\MercadoPagoConfig;

// Step 2: Set production or sandbox access token
MercadoPagoConfig::setAccessToken(config('mercadopago.access_token'));

// Step 3: Initialize the API client
$client = new PaymentClient();

try {

  // Step 4: Create the request array
  $request = [
    "transaction_amount" => 100,
    // "token" => "4002 7686 9439 5619",
    "description" => "description",
    "installments" => 1,
    "payment_method_id" => "visa",
    "payer" => [
      "email" => "user@test.com",
    ]
  ];

  // Step 5: Make the request
  $payment = $client->create($request);
  echo $payment->id;

  // Step 6: Handle exceptions
} catch (MPApiException $e) {
  echo "Status code: " . $e->getApiResponse()->getStatusCode() . "\n";
  echo "Content: " . $e->getApiResponse()->getContent() . "\n";
} catch (\Exception $e) {
  echo $e->getMessage();
}
