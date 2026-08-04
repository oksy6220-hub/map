document.addEventListener('DOMContentLoaded', () => {
  const svgObject = document.getElementById('svg-map');

  svgObject.addEventListener('load', () => {
    const svg = svgObject.contentDocument;

    const regions = svg.querySelectorAll('path');

    regions.forEach(region => {
      region.style.cursor = 'pointer';

      region.addEventListener('mouseenter', () => {
        region.style.fill = '#00AEEF';
      });

      region.addEventListener('mouseleave', () => {
        region.style.fill = '#F3F3F3';
      });
    });
  });
});
