import { Component, OnInit } from '@angular/core';
import { faFacebook,faTwitter,faYoutube,faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer-main-context',
  templateUrl: './footer-main-context.component.html',
  styleUrls: ['./footer-main-context.component.scss']
})
export class FooterMainContextComponent implements OnInit {

  faFacebook=faFacebook;
  faTwitter=faTwitter;
  faYoutube=faYoutube;
  faInstagram=faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}
