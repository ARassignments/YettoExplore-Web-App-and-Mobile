import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderTop } from './header-top/header-top';
import { SidebarMenu } from './sidebar-menu/sidebar-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderTop,SidebarMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('yetto-explore');
}
