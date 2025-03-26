
import { useEffect, useRef } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

export function Gallery() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sectionElement = sectionRef.current;
    if (sectionElement) observer.observe(sectionElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, []);

  // Gallery images with captions
  const galleryImages = [
    {
      src: "/project-energy.jpg",
      alt: "Students working on energy monitoring systems",
      caption: "Energy Monitoring Project"
    },
    {
      src: "/project-ai.jpg",
      alt: "AI research and development",
      caption: "AI Innovation Lab"
    },
    {
      src: "/project-robot.jpg",
      alt: "Robotics team with prototype",
      caption: "Robotics Engineering Team"
    },
    {
      src: "/project-civil.jpeg",
      alt: "Sustainable materials research",
      caption: "Sustainable Materials Research"
    },
    {
      src: "/placeholder-image.jpg",
      alt: "Students collaborating on project",
      caption: "Interdisciplinary Collaboration"
    }
  ];

  return (
    <section id="gallery" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div
        ref={sectionRef}
        className="container mx-auto max-w-6xl opacity-0 transition-all duration-1000"
      >
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center px-3 py-1 bg-nitte-gold/10 text-nitte-gold text-sm font-medium rounded-full mb-6">
            Moments
          </span>
          <h2 className="section-title text-nitte-blue">
            Club Gallery
          </h2>
          <p className="section-subtitle">
            Visual highlights from our research projects and events
          </p>
        </div>

        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-1">
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="overflow-hidden rounded-xl group relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end">
                      <p className="text-white p-4 font-medium">{image.caption}</p>
                    </div>
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full aspect-[4/3] object-cover transition-all duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = "/placeholder-image.jpg";
                      }}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative left-0 right-auto mx-2" />
            <CarouselNext className="relative right-0 left-auto mx-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
