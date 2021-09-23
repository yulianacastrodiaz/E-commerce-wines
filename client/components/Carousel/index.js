import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const index = () => {
  return (
    <div className="-mt-2 pb-10">
      <Carousel autoPlay infiniteLoop emulateTouch showStatus={false} showArrows={false} showThumbs={false}  width=''>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0215/7051/9140/files/ahorra_por_botella_dskp_01505780-9ae1-4cac-8cd0-16dd90b88b2a_1400x.jpg?v=1631898705" />
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0215/7051/9140/files/Club_Viners_Desktop_1400x.jpg?v=1629770680" />
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0215/7051/9140/files/ahorra_por_botella_dskp_01505780-9ae1-4cac-8cd0-16dd90b88b2a_1400x.jpg?v=1631898705" />
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0215/7051/9140/files/We_Love_Trivento_Desktio_1400x.jpg?v=1629840667" />
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0215/7051/9140/files/Envios_a_todo_el_pais_Desktop_1400x.jpg?v=1629228657" />
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0215/7051/9140/files/6X5_dskp_eb4162c6-5e5b-4c87-b003-df7538320cde_1400x.jpg?v=1631902519" />
        </div>
      </Carousel>
    </div>
  );
};

export default index;
