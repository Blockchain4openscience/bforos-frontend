/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {AfterViewInit, Component} from '@angular/core';
import $ from 'jquery';
import {TdMediaService} from '@covalent/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
	title = 'app works!';
	name = 'Bforos';

	routes = [
		{
			title: 'Assets',
			list: [
				{
					displayName: 'Research Objects',
					name: '/ResearchOJ'
				}
			]
		},
		{
			title: 'Participants',
			list: [
				{
					displayName: 'Researchers',
					name: '/Researcher'
				},
				{
					displayName: 'Institutions',
					name: '/Institution'
				}
			]
		},
		{
			title: 'Transactions',
			list: [
				{
					displayName: 'Claim',
					name: '/Claim'
				},
				{
					displayName: 'Collect',
					name: '/Collect'
				},
				{
					displayName: 'Enrich',
					name: '/Enrich'
				},
				{
					displayName: 'Research Object History',
					name: '/ResearchOJHistory'
				}
			]
		}
	];

	assetRoutes = this.routes[0].list;
	participantRoutes = this.routes[1].list;
	transactionRoutes = this.routes[2].list;

	constructor(public mediaService: TdMediaService) {}

	ngAfterViewInit() {
		// $('.nav a').on('click', function () {
		// 	$('.nav').find('.active').removeClass('active');
		// 	$(this).parent().addClass('active');
		// });
		//
		// $('.dropdown').on('show.bs.dropdown', function (e) {
		// 	$(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
		// });
		//
		// $('.dropdown').on('hide.bs.dropdown', function (e) {
		// 	$(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
		// });
		//
		// $('.dropdown-menu li').on('click', function () {
		// 	$(this).parent().parent().addClass('active');
		// });
	}
}
