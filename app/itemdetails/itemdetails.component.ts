import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ItemsService } from '../items.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Item } from '../app.component';

@Component({
  selector: 'app-itemdetails',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './itemdetails.component.html',
  styleUrl: './itemdetails.component.scss',
})
export class ItemdetailsComponent {
  everyitem!: any;
  isLoading: boolean = true;
  msg = '';
  constructor(
    public ItemService: ItemsService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string; // From URL
    this.ItemService.getItemById(id)
      .then((data) => {
        this.everyitem = data;
        this.isLoading = false;
        // this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        //   this.everyrecipe.image
        // );
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong';
      });
  }
}
