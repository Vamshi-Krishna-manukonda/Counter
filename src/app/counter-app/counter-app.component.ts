import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { HttpClient } from '@angular/common/http';
import { NotificationSeviceService } from '../notification-sevice.service';
@Component({
  selector: 'app-counter-app',
  templateUrl: './counter-app.component.html',
  styleUrls: ['./counter-app.component.css']
})
export class CounterAppComponent implements OnInit {

  constructor(private counterServ: CounterService, private http: HttpClient, private notiserv: NotificationSeviceService) {

  }
  CounterData: any = [];
  lengthOfData: any;
  UpdatedCount: any;
  incrementCountData: any;
  DecrementcountData: any;
  counterId: any = [];
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.counterServ.getApiCounterData().pipe().subscribe(data => {
      this.CounterData = data;
      this.lengthOfData = this.CounterData.length;
    }, error => {
      this.notiserv.warn("something went wrong");
    })
  }
  AddData() {
    const CounterObject = {
      "id": this.generateId(),
      "count": 0,
      "increment": "increment",
      "decrement": "decrement",
      "delete": "delete"
    }
    this.counterServ.createcounterData(CounterObject).pipe().subscribe(response => {
      if (response) {
        this.notiserv.success('Row Created');

      }
      else {
        this.notiserv.warn('something went wrong');
      }
      this.getData();
    }, error => {
      this.notiserv.warn("something went wrong");
    })


  }
  resetData() {
    this.CounterData.forEach((countId: any) => {
      this.counterId.push(countId.id);

    })
    this.counterServ.removeCounterObject(this.counterId).subscribe(datae => {
      if (datae) {
        alert("All data is about to delete");
      }
    }, error => {
      this.notiserv.warn("something went wrong");
    })
    this.getData();
  }
  Increment(data: any) {
    this.CounterData.forEach((resp: any) => {
      if (data.id === resp.id) {
        console.log(resp);
        this.incrementCountData = resp.count;
        this.incrementCountData++;
      }
    })

    const CounterObject = {
      "id": data.id,
      "count": this.incrementCountData,
      "increment": "increment",
      "decrement": "decrement",
      "delete": "delete"
    }
    this.counterServ.UpdateCount(data.id, CounterObject).pipe().subscribe(datares => {
      console.log(datares);
      if (datares) {
        this.notiserv.success('Count Updated Successfully');
      }
      else {
        this.notiserv.warn('something went wrong');
      }
      this.getData();
    },
      error => {
        this.notiserv.warn("something went wrong");
      });

  }
  decrement(data: any) {
    this.CounterData.forEach((resp: any) => {
      if (data.id === resp.id) {
        this.DecrementcountData = resp.count;
        this.DecrementcountData--;
      }
      const CounterObject = {
        "id": data.id,
        "count": this.DecrementcountData,
        "increment": "increment",
        "decrement": "decrement",
        "delete": "delete"
      }
      this.counterServ.UpdateCount(data.id, CounterObject).pipe().subscribe(datares => {
        if (datares) {
          this.notiserv.success('Count Updated Successfully');
        }
        else {
          this.notiserv.warn('something went wrong');
        }
        this.getData();

      }, error => {
        this.notiserv.warn("something went wrong");
      });
    })
  }
  delete(data: any) {
    this.counterServ.removeCounterObject(data.id).subscribe(deleteresp => {
      // console.log(deleteresp);
      this.getData();
      alert("Are You sure Data about to delete ");

    })
  }
  generateId(): string {
    // Generate a unique ID (for demonstration, using a simple UUID)
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });

  }
}
