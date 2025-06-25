import React from "react";

export default function GoogleMap() {
  return (
    <div className="w-full aspect-[4/3] h-96 rounded-3xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26117.24305106855!2d128.8430093791674!3d35.090342431016644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568db2178539bff%3A0xd024543fa8967efd!2z64yA7LC96rCV6rG0KOyjvCk!5e0!3m2!1sko!2skr!4v1750749997534!5m2!1sko!2skr"
        className="w-full h-full border-0 rounded-3xl"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
