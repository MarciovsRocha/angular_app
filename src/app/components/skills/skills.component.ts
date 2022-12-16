import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  /* TODO - 
    list all contetn of asset/icon/skills/ instead of listing then 
  */
  public skills_icons: Array<string> = [
    'angular-icon.svg'
    , 'azure-icon.svg'
    , 'c-sharp.svg'
    , 'git-icon.svg'
    , 'gitea.svg'
    , 'github-icon.svg'
    , 'microsoft-sql-server-icon.svg'
    , 'python-icon.svg'
    , 'sybase-icon.svg'
    , 'sklearn-icon.svg'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
