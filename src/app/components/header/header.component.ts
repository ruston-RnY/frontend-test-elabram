import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import * as dataHeader from '../../shared/json/dataHeader.json';
import { GlobalService } from 'src/app/shared/service/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public isShowProfil: boolean = false;
  public isShowMenu: boolean = false;
  public isShowSubmissionMenu: boolean = false;
  public dataHeader = dataHeader;
  public currentRoute: any;
  public dataUser: any;

  constructor(private router: Router, private globalService: GlobalService) {}

  ngOnInit(): void {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = this.dataHeader.menus.find(
          (menu: any) => menu.url == event['url']
        );
      }
    });

    this.dataUser = this.globalService.getDataUser();
  }

  openProfil() {
    this.isShowProfil = !this.isShowProfil;
  }

  navigate(url: string) {
    if (url == '/submission') {
      this.isShowSubmissionMenu = !this.isShowSubmissionMenu;
    } else {
      this.router.navigate([url]);
      this.isShowSubmissionMenu = false;
      this.isShowProfil = false;
    }

    this.isShowMenu = false;
  }

  showMenu() {
    this.isShowMenu = !this.isShowMenu;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
