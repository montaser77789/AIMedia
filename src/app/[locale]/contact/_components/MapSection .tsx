// components/MapSection.jsx
import React from "react";

const MapSection = () => {
  return (
    <section id="map" className="map-section">
      <div>
        <div className="row justify-content-center">
          <div className="col-12">
            <div
              className="map-container"
              style={{
                height: "400px",
                border: "2px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.61185077531!2d31.340866256910296!3d30.05961134304527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1744927037315!5m2!1sar!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
