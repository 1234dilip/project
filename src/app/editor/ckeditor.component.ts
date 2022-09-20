import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.css']
})
export class CkeditorComponent implements OnInit {
  name = 'ng2-ckeditor';
  ckeConfig: any = CKEDITOR.config;
  mycontent: any = '';

  ckeditorContent: string = '<p>Some html</p>';
  myform: any;
  public config: any;



  constructor() {

  }

  ngOnInit(): void {


    this.config = this.getConfigOfCKEditor();
  }







  getData() {
    console.log("data of instance of many variable", this.ckeditorContent);
  }

  public getConfigOfCKEditor(): any {
    const toolbarGroups = [
      '/',
      { name: 'document', groups: ['mode', 'doctools', 'document'] },
      { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
      { name: 'forms', groups: ['forms'] },
      '/',
      { name: 'clipboard', groups: ['clipboard', 'undo'] },
      { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
      '/',
      { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
      { name: 'links', groups: ['links'] },
      { name: 'styles', groups: ['styles'] },
      { name: 'colors', groups: ['colors'] },
      { name: 'tools', groups: ['tools'] },
      { name: 'others', groups: ['others'] },
      { name: 'about', groups: ['about'] },
      { name: 'insert', groups: ['codesnippet'] }
    ];
    const removeButtons: string = 'Source,Templates,Save,NewPage,Print,Replace,Scayt,SelectAll,Form,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Blockquote,CreateDiv,Language,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,ShowBlocks,About,Checkbox,Find,Preview,Styles,Format,Anchor';

    return {
      toolbarGroups: toolbarGroups,
      removeButtons: removeButtons,
      disableNativeSpellChecker: false,
      ignoreEmptyParagraphValue: true,
      extraPlugins: "codesnippet",
      codeSnippet_theme: 'school_book',
      codeSnippet_languages: { javascript: 'JavaScript', php: 'PHP' }
    };
  }


}
