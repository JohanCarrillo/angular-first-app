import { Component, OnInit } from '@angular/core';
import { QuotesService } from './quotes.service';

interface IQuote {
  quote: string;
  author: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private quotes: IQuote[] = [];
  currentQuote!: IQuote;
  currentColor: string = 'black';

  constructor(private quotesService: QuotesService) {}

  getQuotes(): void {
    this.quotesService.getQuotes().subscribe((quotesObj) => {
      this.quotes = quotesObj.quotes;
      this.currentQuote = this.quotes[0];
    }); // return array
  }

  ngOnInit(): void {
    this.getQuotes();
    this.getRandomColor();
  }

  getRandomQuote(): void {
    this.currentQuote =
      this.quotes[Math.floor(Math.random() * this.quotes.length)];
    console.log(this.currentQuote);
  }

  getRandomColor(): void {
    this.currentColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    console.log(this.currentColor);
  }

  randomize(): void {
    this.getRandomColor();
    this.getRandomQuote();
  }
}
