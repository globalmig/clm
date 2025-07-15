import React from "react";

export default function GoogleMap() {
  return (
    <div className="w-full aspect-[4/3] h-96 rounded-3xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.8028135949876!2d127.30413687586251!3d37.323498272102526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3564aaa88cfe7b51%3A0x66f12873abe83d2b!2z6rK96riw64-EIOq0keyjvOyLnCDrj4TsspnrqbQg64-E7JuF66asIDE1LTMy!5e0!3m2!1sko!2skr!4v1752538062419!5m2!1sko!2skr"
        className="w-full h-full border-0 rounded-3xl"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
