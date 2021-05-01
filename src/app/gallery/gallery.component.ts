import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    $(function () {
      $('#show').on('click', function () {
        $('.card-reveal').slideToggle('slow');
      });

      $('.card-reveal .close').on('click', function () {
        $('.card-reveal').slideToggle('slow');
      });
    });
  }

  show() {
    this.router.navigate(['homepage']);
  }
}
