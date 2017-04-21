 const SecondButton={
  effects:[
    {name:"3D Noise"},//if you add new control (poi, fov, waves etc) don't forget add this into pages src\sideBar\secondSideBarBlocks.js into "dummy.node" propety and page src\mainBlock\mainBlock.js  createBlockEffects "workBlockSet" property
    {name:"Blur"},
    {name:"Chromatic Aberrations"},
    {name:"Chrome Spheres"},
    {name:"Circular Waves"},
    {name:"Color Gradients"},
    {name:"Escher Droste"},
    {name:"Flat Mirror"},
    {name:"Graphix"},
    {name:"Hyperbolix"},
    {name:"Magnifying Glass"},
    {name:"Mettle Mantra VR"},
    {name:"Meridian Waves"},
    {name:"Mobius Raw"},
    {name:"Mobius Rotate"},
    {name:"Mobius Zoom"},
    {name:"Radiate"},
    {name:"Repeater"},
    {name:"Rotator"},
    {name:"Spiraler"},
    {name:"Stretcher"}
  ],
  commonControls:[
    {name:"Point Control", effectName:"Point Control", fullname:"Point Control", shortName:"point"},
    {name:"Angle Control", effectName:"Angle Control", fullname:"Angle Control", shortName:"angle"},
    {name:"Slider Control", effectName:"Slider Control", fullname:"Slider Control",shortName:"slider"}
  ],
  distributor:[
    {name:"Cube"},
    {name:"Sphere"},
    {name:"Random"}
  ],
  presets:[],//We push object {name: "SomeName"} from presets folder via window.cep.fs.readdir and window.cep.fs.readFile API
  multiplier:[
    {name:"Multiplier", id:"multiplier-one", shortName:"multiplier"}
  ]

};

export default SecondButton;
