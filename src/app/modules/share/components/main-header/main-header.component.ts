import { Component, OnInit } from '@angular/core';
import { faFacebook,faTwitter,faYoutube,faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  faFacebook=faFacebook;
  faTwitter=faTwitter;
  faYoutube=faYoutube;
  faInstagram=faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}
