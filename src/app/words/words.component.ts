import { Component } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css'],
})
export class WordsComponent {
  newEn = '';
  newVn = '';
  filterStatus = 'XEM_TAT_CA';
  isShowForm = false;
  arrWords = [
    { id: 1, en: 'action', vi: 'hành động', memorized: true },
    { id: 2, en: 'actor', vi: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vi: 'hoạt động', memorized: true },
    { id: 4, en: 'active', vi: 'chủ động', memorized: true },
    { id: 5, en: 'bath', vi: 'tắm', memorized: false },
    { id: 6, en: 'bedroom', vi: 'phòng ngủ', memorized: true },
  ];
  arrWordsFilter = [...this.arrWords];

  // Them tu moi
  addWord() {
    this.arrWords.unshift({
      id: this.arrWords.length + 1,
      en: this.newEn,
      vi: this.newVn,
      memorized: false,
    });
    this.newEn = '';
    this.newVn = '';
    this.isShowForm = false;
  }
  removeWord(id: number): void {
    const index = this.arrWords.findIndex((word) => word.id === id);
    this.arrWords.splice(index, 1);
  }
  getShowStatus(memorized: boolean): boolean {
    const dkXemtatca = this.filterStatus === 'XEM_TAT_CA';
    const dkXemdanho = this.filterStatus === 'XEM_DA_NHO' && memorized;
    const dkXemchunho = this.filterStatus === 'XEM_CHUA_NHO' && !memorized;
    return dkXemtatca || dkXemdanho || dkXemchunho;
  }

  filterWord() {
    this.arrWordsFilter = this.arrWords.filter((word: any) => {
      if (this.filterStatus === 'XEM_TAT_CA') {
        return word.memorize || !word.memorize;
      }
      if (this.filterStatus === 'XEM_DA_NHO') {
        return word.memorized;
      }
      if (this.filterStatus === 'XEM_CHUA_NHO') {
        return !word.memorized;
      }
    });
  }
}
