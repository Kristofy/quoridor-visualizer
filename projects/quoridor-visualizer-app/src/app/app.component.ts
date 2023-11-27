import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as base64 from 'base64-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isBinary = new FormControl(true);
  public matchLog: string | ArrayBuffer = '';

  onFileSelected(event: Event) {
    const file: File = (event.target as unknown as { files: File[] }).files[0];
    if (file) {
      const reader = new FileReader();
      if (this.isBinary.value) {
        reader.readAsArrayBuffer(file);
      } else {
        reader.readAsText(file, 'utf8');
      }
      reader.onload = (event) => {
        const content = event.target?.result;
        if (content) {
          this.matchLog = content;
        }
      };
      reader.onerror = (error) => {
        console.error(error);
      };
    }
  }

  setBase64() {
    this.matchLog = base64.toByteArray(
      (document.getElementById('base64Input') as unknown as { value: string }).value,
    );
  }
}
