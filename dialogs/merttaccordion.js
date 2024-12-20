
  CKEDITOR.dialog.add( 'maccDialog', function( editor ) {
    return {
        title: editor.lang.merttaccordion.title,
        minWidth: 400,
        minHeight: 200,
        contents: [
            {
                id: 'tab-basic',
                elements: [
                    {
                        type: 'text',
                        id: 'accordionNumber',
                        label: editor.lang.merttaccordion.accordionNumber,
                        validate:  CKEDITOR.dialog.validate.notEmpty( editor.lang.merttaccordion.accordionNumberWarningText )
                    }
                ]
            }
        ],
        onOk: function() {
            var dialog = this;
            var number = dialog.getValueOf( 'tab-basic', 'accordionNumber' ) ;
            if(!isNaN(number) && !number == "" && number > 0){
                result = createBootstrap5Accordion(number);
                editor.insertHtml(result);
            }else{
                alert(editor.lang.merttaccordion.errorText);
                return;
            }
        }
    };
});


function createBootstrap5Accordion(number){
        let accTimeStamp = Date.now();
        let accordionHtml = `
          <div class="accordion" id="merttaccordion-${accTimeStamp}">
        `;
        let accordionIds = [];
        for(let i=0;i< number; i++){
            let indexTimeStamp = Date.now() +i;
            accordionIds.push(indexTimeStamp);
            let item = `
            <div class="accordion-item">
              <h2 class="accordion-header" id="heading-${indexTimeStamp}">
                <button class="accordion-button"  data-bs-target="#collapse-${indexTimeStamp}" data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapse-${indexTimeStamp}"
                 type="button" id="macc-button-${indexTimeStamp}" >
                  Sample Header ${i+1}
                </button>
              </h2>
              <div id="collapse-${indexTimeStamp}" class="accordion-collapse collapse" aria-labelledby="heading-${indexTimeStamp}"  data-bs-parent="#merttaccordion-${accTimeStamp}">
                <div class="accordion-body">
                  Sample Item Contents ${i+1}
                </div>
              </div>
            </div>
            `;
            accordionHtml += item;
        }

        accordionHtml += `</div>`;
        return accordionHtml;
      
}
