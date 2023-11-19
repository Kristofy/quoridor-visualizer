import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public matchLog: string | ArrayBuffer = '';

  onFileSelected(event: Event) {
    const file: File = (event.target as unknown as { files: File[] }).files[0];
    if (file) {
      const reader = new FileReader();
      if (file.name.endsWith('.bin')) {
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
}
