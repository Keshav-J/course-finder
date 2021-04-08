import { Injectable } from '@angular/core';
import { CardItem } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  private cardsCount = (window.innerHeight - 200) / 120;

  constructor() { }

  parseVideoToCardItem(videosList: any[]): CardItem[] {

    const cardList: CardItem[] = [];
    let rating = 5;

    videosList.forEach(video => {
      if (video.type !== 'video' || cardList.length >= this.cardsCount) {
        return;
      }

      cardList.push({
        title: video.title,
        srcName: video.channel,
        srcURL: `https://www.youtube.com/watch?v=${video.id}`,
        rating,
        totalRating: 5
      });

      rating -= [0,0.1][Math.floor(Math.random() * 2)];
    });

    return cardList;
  }

  parseBlogToCardItem(blogsList: any[]): CardItem[] {

    const cardList: CardItem[] = [];

    blogsList.forEach(blog => {
      if (cardList.length >= this.cardsCount) {
        return;
      }

      cardList.push({
        title: blog.title,
        srcName: blog.domain,
        srcURL: blog.url,
        rating: 4.8,
        totalRating: 5
      });
    });

    return cardList;
  }
}
