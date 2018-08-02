<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ben's Portfolio</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="{{ mix('js/app.js') }}"></script>
  </body>
</html>
