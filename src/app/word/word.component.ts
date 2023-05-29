import { Component } from "@angular/core";

@Component({
    selector: 'app-word',
    // template: '<h1>This is Word Component</h1>',
    templateUrl: './word.component.html',
    // styles: [`
    //     h1 {
    //         color: red;
    //     }
    // `],
    styleUrls: ['./word.component.css']
})

export class WordComponent {
    en = 'Dong Nguyen';
    vi = 'Nguyễn Đông';
    forgot = false;

    toggleForgot() {
        this.forgot = !this.forgot;
    }
}