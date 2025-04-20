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
      title: 'Bar Landscape View',
      description: 'Beautiful view of the mountains and sea from Bar, Montenegro.',
      imageUrl: 'assets/images/gallery/landscape-1.jpg',
      alt: 'Landscape view of Bar, Montenegro'
    },
    {
      id: 2,
      title: 'Forest Trails',
      description: 'Natural forest trails near the Librevore Village location.',
      imageUrl: 'assets/images/gallery/forest-1.jpg',
      alt: 'Forest trails in Montenegro'
    },
    {
      id: 3,
      title: 'Community Garden Example',
      description: 'Example of how our community gardens will be organized.',
      imageUrl: 'assets/images/gallery/garden-1.jpg',
      alt: 'Community garden example'
    },
    {
      id: 4,
      title: 'Eco-friendly Housing',
      description: 'Concept design for our sustainable housing.',
      imageUrl: 'assets/images/gallery/house-1.jpg',
      alt: 'Eco-friendly housing concept'
    },
    {
      id: 5,
      title: 'Local Produce',
      description: 'Fresh, organic fruits and vegetables that can be grown in our climate.',
      imageUrl: 'assets/images/gallery/produce-1.jpg',
      alt: 'Local organic produce'
    },
    {
      id: 6,
      title: 'Natural Water Sources',
      description: 'Clean, natural water sources available near our location.',
      imageUrl: 'assets/images/gallery/water-1.jpg',
      alt: 'Natural water source'
    },
    {
      id: 7,
      title: 'Community Gathering Space',
      description: 'Concept for our shared community gathering area.',
      imageUrl: 'assets/images/gallery/community-1.jpg',
      alt: 'Community gathering space'
    },
    {
      id: 8,
      title: 'Family Activities',
      description: 'Families enjoying outdoor activities together.',
      imageUrl: 'assets/images/gallery/family-1.jpg',
      alt: 'Family outdoor activities'
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
