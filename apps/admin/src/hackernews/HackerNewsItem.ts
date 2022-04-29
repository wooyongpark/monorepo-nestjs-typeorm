import { Instant, LocalDateTime } from 'js-joda';

export class HackerNewsItem {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  parent: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  get createTime(): LocalDateTime {
    const milliTime = this.time * 1000;
    return LocalDateTime.ofInstant(Instant.ofEpochMilli(milliTime));
  }

  get isFirstItem(): boolean {
    return !this.parent;
  }
}
