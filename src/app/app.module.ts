import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { StructComponent } from './struct/struct.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import ParentComponent from './parent.component';
import ChildComponent from './child.component';
import CardComponent from './card.component';
import { LearnPipesComponent } from './learn-pipes/learn-pipes.component';
import roundNumberPipe from './round.pipe';
import IpComponent from './ip.component';
import { HttpClientModule } from '@angular/common/http';
import { IpService } from './ip.service';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    UserFormComponent,
    StructComponent,
    WordsComponent,
    PersonComponent,
    ListPersonComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    LearnPipesComponent,
    IpComponent,
    roundNumberPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [IpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
