import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoGallery } from '../../shared/types';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  photos = signal<PhotoGallery[]>([
    {
      id: 1,
      title: 'Farm House',
      description: 'Existing farm house on the land that will be renovated to meet our sustainable living standards.',
      imageUrl: 'assets/images/gallery/farm-house-01.jpg',
      alt: 'Rural farm building at Librevore Village'
    },
    {
      id: 2,
      title: 'Farm House',
      description: 'Existing farm house on the land that will be renovated to meet our sustainable living standards.',
      imageUrl: 'assets/images/gallery/farm-house-02.jpg',
      alt: 'Rural farm building at Librevore Village'
    },
    {
      id: 3,
      title: 'Farm House',
      description: 'Existing farm house on the land that will be renovated to meet our sustainable living standards.',
      imageUrl: 'assets/images/gallery/farm-house-03.jpg',
      alt: 'Rural farm building at Librevore Village'
    },
    {
      id: 4,
      title: 'Farm House',
      description: 'Existing farm house on the land that will be renovated to meet our sustainable living standards.',
      imageUrl: 'assets/images/gallery/farm-house-05.jpg',
      alt: 'Rural farm building at Librevore Village'
    },
    {
      id: 5,
      title: 'Traditional Farm House',
      description: 'Existing farm house on the land that will be renovated to meet our sustainable living standards.',
      imageUrl: 'assets/images/gallery/farm-house-04.jpg',
      alt: 'Rural farm building at Librevore Village'
    },
    {
      id: 6,
      title: 'Housing Area',
      description: 'This is the area where houses is planned, side by side with road behind and access directly onto the grassy field.',
      imageUrl: 'assets/images/gallery/garden-01.jpg',
      alt: 'Housing area in Librevore Village'
    },
    {
      id: 8,
      title: 'Housing Area',
      description: 'This is the area where houses is planned, side by side with road behind and access directly onto the grassy field.',
      imageUrl: 'assets/images/gallery/garden-03.jpg',
      alt: 'Housing area in Librevore Village'
    },
    {
      id: 7,
      title: 'Community Garden Space',
      description: 'Area at Librevore Village designated for our shared gardening activities and food production.',
      imageUrl: 'assets/images/gallery/garden-02.jpg',
      alt: 'Community garden space at Librevore Village'
    },

    {
      id: 9,
      title: 'Farm land in winter time',
      description: 'There are no snows in the winter, but the land is still beautiful.',
      imageUrl: 'assets/images/gallery/garden-04.jpg',
      alt: 'Flourishing garden plot at Librevore Village'
    },
    {
      id: 10,
      title: 'Permaculture Garden',
      description: 'Potential productive vegetable garden at Librevore Village demonstrating our food self-sufficiency approach.',
      imageUrl: 'assets/images/gallery/garden-05.jpg',
      alt: 'Potential vegetable garden at Librevore Village'
    },
    {
      id: 11,
      title: 'Permaculture Garden',
      description: 'Potential productive vegetable garden at Librevore Village demonstrating our food self-sufficiency approach.',
      imageUrl: 'assets/images/gallery/garden-06.jpg',
      alt: 'Potential vegetable garden at Librevore Village'
    },
    {
      id: 12,
      title: 'Permaculture Garden',
      description: 'Sustainable permaculture garden at Librevore Village implemented for long-term food production.',
      imageUrl: 'assets/images/gallery/garden-07.jpg',
      alt: 'Permaculture garden at Librevore Village'
    },
    {
      id: 13,
      title: 'Traditional Stone Well',
      description: 'This is a well on the property that currently delivers what all year around',
      imageUrl: 'assets/images/gallery/well.jpg',
      alt: 'Traditional stone well at Librevore Village'
    },
    {
      id: 14,
      title: 'Village Ruins',
      description: 'One of the multiple ruins in the existing village where Librevore Village is located.',
      imageUrl: 'assets/images/gallery/village-ruin-01.jpg',
      alt: 'Village ruin structures at Librevore Village'
    }, 
    {
      id: 15,
      title: 'Village Ruins',
      description: 'One of the multiple ruins in the existing village where Librevore Village is located.',
      imageUrl: 'assets/images/gallery/village-ruin-02.jpg',
      alt: 'Village ruin structures at Librevore Village'
    },
    {
      id: 16,
      title: 'Natural Walking Path',
      description: 'One of many beautiful trails within Librevore Village that connect different areas of our community.',
      imageUrl: 'assets/images/gallery/path.jpg',
      alt: 'Natural walking path at Librevore Village'
    },
    {
      id: 17,
      title: 'Scenic Valley View',
      description: 'Breathtaking landscape within Librevore Village showing the natural beauty of our location.',
      imageUrl: 'assets/images/gallery/valley.jpg',
      alt: 'Scenic valley view at Librevore Village'
    },
    {
      id: 18,
      title: 'Montenegro Mountain Landscape',
      description: 'Majestic mountains of Montenegro providing a stunning backdrop near our sustainable village.',
      imageUrl: 'assets/images/gallery/mountains.jpg',
      alt: 'Mountain landscape in Montenegro'
    },
    {
      id: 19,
      title: 'Skadar Lake',
      description: 'Beautiful freshwater lake in Montenegro located within driving distance from Librevore Village.',
      imageUrl: 'assets/images/gallery/lake-01.jpg',
      alt: 'Serene lake view in Montenegro'
    },
    {
      id: 20,
      title: 'Pristine Lake Shore',
      description: 'Natural shoreline of one of Montenegro\'s beautiful lakes up north in the country.',
      imageUrl: 'assets/images/gallery/lake-02.jpg',
      alt: 'Pristine lake shore in Montenegro'
    },
    {
      id: 21,
      title: 'Adriatic Sea View',
      description: 'Stunning view of the Adriatic Sea from Montenegro\'s beautiful coastline, a short trip from Librevore Village.',
      imageUrl: 'assets/images/gallery/sea.jpg',
      alt: 'Adriatic Sea view from Montenegro'
    },
    {
      id: 22,
      title: 'Historic Stari Bar',
      description: 'The ancient fortress town in Montenegro near Librevore Village, showcasing the region\'s rich history.',
      imageUrl: 'assets/images/gallery/stari-bar.jpg',
      alt: 'Historic Stari Bar fortress in Montenegro'
    },
    {
      id: 23,
      title: 'Montenegro Beach',
      description: 'Beautiful coastal area of Montenegro just a short distance from Librevore Village, perfect for day trips.',
      imageUrl: 'assets/images/gallery/beach.jpg',
      alt: 'Montenegro beach on the Adriatic coast'
    }
  ]);

  selectedPhoto = signal<PhotoGallery | null>(null);

  showPhotoDetails(photo: PhotoGallery): void {
    this.selectedPhoto.set(photo);
  }

  closePhotoDetails(): void {
    this.selectedPhoto.set(null);
  }
}
