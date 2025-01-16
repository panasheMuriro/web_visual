let illo = new Zdog.Illustration({
    // set canvas with selector
   
    element: '.zdog-canvas',
    zoom: 1,
    dragRotate: true,
    
  });
  
  // add circle
  new Zdog.Ellipse({
    addTo: illo,
    diameter: 80,
    stroke: 20,
    color: '#636',
    dragRotate: true,
  });



  function animate() {
    // rotate illo each frame
    illo.rotate.y += 0.01;
    illo.updateRenderGraph();
    // animate next frame
    requestAnimationFrame( animate );
  }
  // start animation
  animate();



  let pentagon = new Zdog.Polygon({
    addTo: illo,
    radius: 100,
    sides: 6,
    stroke: 20,
    color: '#EA0',
  });

  
  
  // update & render
  illo.updateRenderGraph();