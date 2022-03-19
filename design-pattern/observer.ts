import { Subject } from 'rxjs';

const news = new Subject();

const tv1 = news.subscribe(v => console.log(v + 'via Den TV'));

news.next('Breaking news: ');
news.next('The war is over ');