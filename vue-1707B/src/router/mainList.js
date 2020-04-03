const mainList = [
  {path:'',redirect:'markdown'},
  {title:'markdown组件',path:'markdown',component:()=>import('../views/markdown')},
  {title:'表格组件',path:'gridview',component:()=>import('../views/gridview')},
  {title:'拖拽组件',path:'drag',component:()=>import('../views/drag')},
  {title:'模态组件',path:'modal',component:()=>import('../views/modal')},
  {title:'树状组件',path:'tree',component:()=>import('../views/tree')},
];


export default mainList