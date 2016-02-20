import {Component} "angular2/core";
import {Child} "./child/child";

@Component({
	selector: "app",
	template: `
	<h1 class="red">Heloo Papaa</h1>
	<child></child>
	`,
	directives: [Child],
	styleUrls: [ 'src/css/myapp.css']
})

export class MyApp{

}