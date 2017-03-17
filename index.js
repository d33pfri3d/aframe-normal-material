if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

AFRAME.registerComponent('normal-material', {

	multiple: true,

  init: function (){
    var material = new THREE.MeshNormalMaterial();
    var geometry = this.el.getObject3D('mesh').geometry;
    this.el.setObject3D('mesh', new THREE.Mesh(geometry, material));
  },

  remove: function(){
    this.el.removeObject3D('mesh');
  }

});