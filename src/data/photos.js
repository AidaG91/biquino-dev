// Fotos de trabajos optimizadas (src/assets/images/trabajos). Cada foto tiene
// un recorte 4:3 en dos anchos (<slug>-480/-960) y la versión completa para el
// lightbox (<slug>-full). Las parejas antes/después usan <slug>-antes-full y
// <slug>-despues-full.
const files = import.meta.glob("../assets/images/trabajos/*.webp", {
  eager: true,
  import: "default",
});

function url(name) {
  const file = files[`../assets/images/trabajos/${name}.webp`];
  if (!file) throw new Error(`Foto no encontrada: ${name}.webp`);
  return file;
}

// Recorte 4:3 con srcset, para tarjetas.
export function photo(slug) {
  return {
    src: url(`${slug}-960`),
    srcSet: `${url(`${slug}-480`)} 480w, ${url(`${slug}-960`)} 960w`,
  };
}

// Foto completa, sin recortar.
export function fullPhoto(slug) {
  return url(`${slug}-full`);
}

export function beforeAfter(slug) {
  return { before: url(`${slug}-antes-full`), after: url(`${slug}-despues-full`) };
}
