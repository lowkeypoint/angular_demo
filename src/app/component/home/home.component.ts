import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // public ifFlag = false;
  // public switchStatus = 0;
  // public today = new Date();

  // public homeTitle: any[] = ['home', 'diary'];

  public txtData :any = 'default';
  public nowTime = Date();
  public peopleSex :string = '1';

  public diaryInfo :any = {
    theme:this.nowTime,
    moodList:['开心', '难过', '生气'],
    mood: '开心',
    hoppyList:[
      {
        hoppy:'吃饭', 
        status:false
      },
      {
        hoppy:'睡觉',
        status:false
      },
      {
        hoppy:'打豆豆',
        status:false
      }
    ],
    data:this.nowTime
  }

  constructor() { }

  ngOnInit() {
  }

  homeRun() {

    console.log('Home');
  }

  diaryRun() {

    console.log('Diary');
  }

  // keyDown(e) {
  //   if (e.keyCode === 27) {
  //     console.log('esc');
  //   }
  //   if (e.keyCode === 13) {
  //     let domTarget: any = event.target;
  //     domTarget.style.color = "red";
  //   }
  //   console.log(e.keyCode);
  //   console.log(e.target.value);
  // }

  buttonChangeTxt() {
    this.txtData = 'button changed';
  }

  saveDiary(){
    console.log(this.diaryInfo, this.peopleSex);
  }

}

