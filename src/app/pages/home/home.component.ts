import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Feature, Principle, Testimonial } from '../../shared/types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  features = signal<Feature[]>([
    {
      icon: 'fas fa-home',
      title: 'Family Friendly Housing',
      description: 'Sustainable and comfortable homes designed with families in mind, using eco-friendly materials and techniques.'
    },
    {
      icon: 'fas fa-seedling',
      title: 'Community Gardens',
      description: 'Shared gardens where families can grow their own organic food, promoting self-sufficiency and healthy living.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Shared Values',
      description: 'A community founded on the principles of voluntaryism, freedom, and mutual respect for all members.'
    },
    {
      icon: 'fas fa-tree',
      title: 'Natural Environment',
      description: 'Located near forests and natural areas, providing children with space to explore and connect with nature.'
    }
  ]);

  principles = signal<Principle[]>([
    {
      icon: 'fas fa-dove',
      title: 'Voluntaryism',
      description: 'All human interactions should be voluntary, free of threats of violence and coercion.'
    },
    {
      icon: 'fas fa-leaf',
      title: 'Healthy Living',
      description: 'Embracing natural foods, physical activity, and mindful practices for optimal health and wellbeing.'
    },
    {
      icon: 'fas fa-users',
      title: 'Family Focused',
      description: 'Creating an environment where families can thrive, with emphasis on conscious parenting and education.'
    }
  ]);

  testimonials = signal<Testimonial[]>([
    {
      name: 'The Johnson Family',
      role: 'Community Members',
      content: 'Joining Librevore Village was the best decision we made for our family. Our children thrive in this natural environment, and the community support is incredible.',
      image: 'assets/images/testimonial-1.jpg'
    },
    {
      name: 'Maria & Thomas',
      role: 'New Members',
      content: 'We were looking for a place where our values of freedom and sustainable living could be practiced daily. Librevore Village exceeded our expectations.',
      image: 'assets/images/testimonial-2.jpg'
    }
  ]);
}
