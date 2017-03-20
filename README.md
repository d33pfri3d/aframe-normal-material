# A-Frame VR `normal-material` Component

A-Frame VR component for using the `THREE.MeshNormalMaterial` as a material on a component. The `MeshNormalMaterial` is a material that maps the normal vectors to the RGB colors.

It currently has all the defaults for the material as defined in the [Three.js Docs](https://threejs.org/docs/index.html?q=Mater#Reference/Materials/MeshNormalMaterial).

### Installation

Using NPM

```
npm install aframe-normal-material
```

```
require('aframe-normal-material')
```

### I don't want to install a component for this - no problem 

```
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
```

### Usage

[See a Demo](https://shaunmnemonic.github.io/aframe-normal-mesh-component/)

```
<a-box height="5" width="5" depth="5" normal-material></a-box>
```