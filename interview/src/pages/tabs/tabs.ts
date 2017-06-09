import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { InterviewPage } from '../interview/interview';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InterviewPage;
  tab2Root = SettingsPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
