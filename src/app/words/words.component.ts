import { Component } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent {
  arrWords = [
    {id: 1, en: 'action', vi: 'hành động', memorized: true},
    {id: 2, en: 'actor', vi: 'diễn viên', memorized: false},
    {id: 3, en: 'activity', vi: 'hoạt động', memorized: true},
    {id: 4, en: 'active', vi: 'chủ động', memorized: true},
    {id: 5, en: 'bath', vi: 'tắm', memorized: false},
    {id: 6, en: 'bedroom', vi: 'phòng ngủ', memorized: true},
  ]
}
