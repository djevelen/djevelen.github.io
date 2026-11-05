// 原截图 50 米比例尺约 40 像素；坐标仍采用原地图 1140 × 845。
// AI 去字图只作示意，因此米数为近似值，不能用于导航测距。
(function(root){
 const pixelsPerMeter=40/50, toleranceMeters=150;
 const rules={pixelsPerMeter,toleranceMeters,radius:pixelsPerMeter*toleranceMeters,
  distanceMeters:(q,p)=>Math.hypot(p.x-q.x,p.y-q.y)/pixelsPerMeter,
  hit:(q,p)=>!!p && Math.hypot(p.x-q.x,p.y-q.y)<=pixelsPerMeter*toleranceMeters+1e-9,
  referenceIds:['engineering-field','century','hubin-food','old-science','songqing','912-field','law-library']
 };
 if(typeof module==='object'&&module.exports)module.exports=rules;
 else root.MAP_RULES=rules;
})(globalThis);
