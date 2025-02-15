## PEC3

### Recursos Básicos

### Acciones Preliminares
De acuerdo con las observaciones de la práctiuca anterior se han hecho las siguientes revisiones:

 - Se eliminó el _cursor pointer_  en las imágenes de portada
 - Se añadió un menú de navegación en el Footer
 - Se solucionó el problema con la etiqueta html en la página index.html




 
##### Bibliografia
- [¿Por qué es importante la velocidad?](https://web.dev/why-speed-matters/)

- [Una reflexión sobre que el cuidar el rendimiento de las aplicaciones es una cuestión de ética:](https://timkadlec.com/remembers/2019-01-09-the-ethics-of-performance/)

- [Auditing Performance](https://web.dev/performance-audit/Links)

- [Critical Rendering Path, un concepto fundamental:](https://web.dev/critical-rendering-path/Links)

- [¿Qué procesos sigue un navegador para "pintar" una página web?](https://web.dev/critical-rendering-path-render-tree-construction/Links)

- [User-centric performance metrics:](https://web.dev/user-centric-performance-metrics/)

- [La documentación de la pestaña Network de las herramientas de desarrollo de Firefox Developer Edition:](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.htmlLinks)

- [La documentación sobre las Core Web Vitals en web.dev](https://web.dev/learn-core-web-vitals/)



### Recomendaciones de PageSpeed Insights

 - Aplicar el conversor de imagenes de integrado en parcel parcel para reducir el tamaño de las imagenes 
 - Eliminar las fuentes no utilizadas en el proyecto

 
 ```html

 //FUENTES
// (** Eliminadas!!) @import url('https://fonts.googleapis.com/css2?family=Ultra&display=swap');
// (** Eliminadas!!) @import url('https://fonts.googleapis.com/css2?family=Orelega+One&family=Tilt+Warp&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

```