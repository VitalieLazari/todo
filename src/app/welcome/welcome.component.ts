import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  message = 'Some Welcome Message'
  welcomeMessageFromService : string
  errorMessageFromService : string
  name = ''

  constructor(
    private route: ActivatedRoute, 
    private service: WelcomeDataService) {
      this.name = this.route.snapshot.params['name']
     }

  ngOnInit() {
    console.log(this,this.message)
  }

  getWelcomeMessage () {
      console.log(this.service.executeHelloWordBeanService());
      this.service.executeHelloWordBeanService().subscribe(
        response => this.handleSuccessfulResponse(response),
        error => this.handleErrorResponse(error)
      );
      console.log('last line of getWelcomeMessage')
  }

  getWelcomeMessageWithParameter() {
    console.log(this.name)
    this.service.executeHelloWordBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log('last line of getWelcomeMessage')
}

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error){
    this.errorMessageFromService = "Some error ocurred, please contact support ***-***!";
  }
}
