# ![plugin image](https://raw.githubusercontent.com/merterr/mertt-accordion-plugin/refs/heads/main/icons/merttaccordion.png) mertt-accordion-plugin
Bootstrap 5 Accordion Plugin for CKEditor 4 by Merter Gulbahar

## Demo

https://codesandbox.io/p/devbox/3lk5nt

## Usage

1. Clone mertt-accordion-plugin repository.
2. Go to your CKEditor4 folder and add the "mertt-accordion-plugin" to **plugins** folder.
3. Open "config.js" file of CKEditor4 and change it as in the code below.

 ```js
   CKEDITOR.editorConfig = function (config) {
   config.contentsCss = [
    "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.0/css/bootstrap.min.css",
   ];
    config.extraPlugins = 'merttaccordion';
    config.allowedContent = true;
   }
```

4. Finally don't forget to add Bootstrap 5 and Jquery support on your project.
