import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'The way to get started is to quit talking and begin doing','Nickita Nicks', 'Nick',new Date(2021,1,29)),
    new Quote(5, 'What we think, we become.','Weslet Mayor','Nick',new Date(2021,5,8)),
    new Quote(3, 'Never regret anything that made you smile.','Brookes Kimberly','Nick',new Date(2020,9,9)),
    new Quote(4, 'Love For All, Hatred For None.','Pope Francis','Nick',new Date(2020,6,7)),
    new Quote(5, 'Die with memories, not dreams.','Carmelo Anthony','Nick',new Date(2021,5,8)),
  ];
  upVote(index: any) {

    this.quotes[index].upvote++;
  }

  downVote(index:any) {

    this.quotes[index].downvote++;
  }
  addNewQuote(quote: any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.date = new Date(quote.date)
    this.quotes.push(quote)
  }
  toggleDetails(index: any) {
    this.quotes[index].description = !this.quotes[index].description;
  }
  delete(deleteThis: boolean, index: number) {
    if (deleteThis) {
      let confirmDelete = confirm(
        'Are you sure you want to delete this quote?'
      );
      if (confirmDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  highestUpVote() {
    let highestUpVoteQuote = new Quote(0, '', '', '', new Date());
    for (let i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i].upvote > highestUpVoteQuote.upvote) {
        highestUpVoteQuote = this.quotes[i];
      }
    }
    if (highestUpVoteQuote.upvote > 0) {
      return highestUpVoteQuote;
    } else {
      return;
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
