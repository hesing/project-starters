import {Component} "angular2/core";

@Component({
	selector: "app",
	template: `
  <div class="container">
    <h1>Root Component</h1>
    <p>My Name is - <strong>{{ name }}</strong>
  </div>`,
	styles: [`
      h1{
        background-color: green;
        color: yellow;
      }
  `]
	// styleUrls: ['src/css/myapp.css']
})


export class MyApp{
  name: "Hemant Kumar Singh";
}
