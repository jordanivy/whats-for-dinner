import { Component, OnInit } from '@angular/core';
import { LyTheme2, shadowBuilder, ThemeVariables } from '@alyle/ui';
import { Router } from '@angular/router';

const styles = (theme: ThemeVariables) => ({
  item: {
    padding: '16px',
    textAlign: 'center',
    background: theme.background.secondary,
    boxShadow: shadowBuilder(1),
    borderRadius: '4px',
    height: '100%'
  }
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  readonly classes = this.theme.addStyleSheet(styles);
  path: string = '';
  constructor(private theme: LyTheme2, private _router: Router) { }

  ngOnInit() {
    this.path = this._router.url;
  }

}
