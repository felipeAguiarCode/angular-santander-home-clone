import { Component, OnInit } from '@angular/core';
import { FeaturesService } from 'src/app/services/features.service';


@Component({
	selector: 'app-carousel-items',
	templateUrl: './carousel-items.component.html',
	styleUrls: ['./carousel-items.component.css']
})
export class CarouselItemsComponent implements OnInit {
	items: { description: string; icon: string }[] = [];
	visibleItems: { description: string; icon: string }[] = [];
	activeIndex: number = 0;

	constructor(private service: FeaturesService) { }

	async ngOnInit() {
		this.getFeatures();
		console.log(this.items)
	}

	getFeatures() {
		this.service.getFeature().subscribe(result => {
			this.items = result.features;
			this.updateVisibleItems();
		})
	}

	async updateVisibleItems() {
		this.visibleItems =
			this.items.slice(this.activeIndex, this.activeIndex + 3);
	}

	moveLeft() {
		if (this.activeIndex > 0) {
			this.activeIndex--;
			this.updateVisibleItems();
		}
	}

	moveRight() {
		if (this.activeIndex < this.items.length - 3) {
			this.activeIndex++;
			this.updateVisibleItems();
		}
	}
}
