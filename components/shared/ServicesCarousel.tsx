// app/components/ServicesCarousel.tsx
import { Carousel } from 'antd';

const ServicesCarousel = () => {
  return (
    <Carousel autoplay>
      <div>
        <h3 className="text-center text-xl">Service 1</h3>
      </div>
      <div>
        <h3 className="text-center text-xl">Service 2</h3>
      </div>
      <div>
        <h3 className="text-center text-xl">Service 3</h3>
      </div>
      <div>
        <h3 className="text-center text-xl">Service 4</h3>
      </div>
    </Carousel>
  );
};

export default ServicesCarousel;
