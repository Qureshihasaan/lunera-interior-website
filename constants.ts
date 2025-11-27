import { Product, Service, Testimonial } from './types';

export const APP_NAME = "Lunera";

export const PRODUCTS: Product[] = [
  { id: 1, name: "Velvet Emerald Sofa", price: 2499, category: "Living Room", image: "/veletSofa.jpg" },
  { id: 2, name: "Artisan Gold Lamp", price: 350, category: "Lighting", image: "/goldenLamp.jpg" },
  { id: 3, name: "Marble Coffee Table", price: 1200, category: "Tables", image: "/coffeeTable.jpg" },
  { id: 4, name: "Abstract Sofa", price: 890, category: "Seating", image: "/sofa.jpg" },
  { id: 5, name: "Mid-Century Armchair", price: 1150, category: "Seating", image: "/armChair.jpg" },
  { id: 6, name: "Handwoven Persian Rug", price: 3200, category: "Textiles", image: "rug.jpg" },
];

export const SERVICES: Service[] = [
  { id: 1, title: "Interior Planning", description: "Full-scale architectural planning and layout optimization.", iconName: "Layout" , image: "/planning.jpg" },
  { id: 2, title: "Custom Furnishing", description: "Bespoke furniture design tailored to your specific style.", iconName: "Sofa" , image: "/sofa.jpg" },
  { id: 3, title: "Lighting Design", description: "Atmospheric lighting solutions to elevate every mood.", iconName: "Lamp" , image: "/armChair.jpg" },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Eleanor Rigby", role: "Art Collector", text: "Lunera transformed my gallery space into a living masterpiece. The attention to detail is simply unmatched.", avatar: "https://picsum.photos/id/64/100/100" },
  { id: 2, name: "Julian Casablancas", role: "Architect", text: "As an architect, I value precision. Lunera delivers luxury with an engineer's precision and an artist's soul.", avatar: "https://picsum.photos/id/65/100/100" },
  { id: 3, name: "Sarah Lin", role: "Homeowner", text: "The AI Design Assistant helped me visualize concepts I couldn't articulate. The final result was breathtaking.", avatar: "https://picsum.photos/id/66/100/100" },
];
