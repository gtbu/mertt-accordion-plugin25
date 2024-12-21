CKEDITOR.plugins.add('merttaccordion', {
    lang: ['tr', 'en'],
    icons: 'merttaccordion',
    init: function (editor) {  

      editor.on('contentDom', function(evt) {
        evt.editor.editable().on('click', function (event) {
          if(event.data.$.target.tagName == 'BUTTON'){
            
            let buttonId = event.data.$.target.id;
            if(!buttonId) return;
            
            let id = buttonId.split("macc-button-")[1];
            if(id == undefined) return;
            
            var collapse = editor.editable().$.querySelector(`#collapse-${id}`);
            if (!collapse) {
                console.warn(`Collapse with ID collapse-${id} not found.`);
                return;
            }

            let bs5 = $(editor.editable().$.querySelector(`#${buttonId}`)).attr('data-bs-toggle'); // bs5 check
            if(bs5 != undefined){
              const collapseInstance = new bootstrap.Collapse(collapse, {
                toggle: true
              });
              collapseInstance.toggle();
            }
          }
        });
      });
      editor.addCommand( 'openModal', new CKEDITOR.dialogCommand( 'maccDialog' ) );
      editor.ui.addButton('merttaccordion', {
        label: editor.lang.merttaccordion.accordionAdding,
        command: 'openModal',
        toolbar: 'insert', 
        icon: this.path + 'icons/merttaccordion.png',
      });
      CKEDITOR.dialog.add( 'maccDialog', this.path + 'dialogs/merttaccordion.js' );
}});

