<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <title>Ben's Portfolio</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="<?php echo e(mix('js/app.js')); ?>"></script>
  </body>
</html>
