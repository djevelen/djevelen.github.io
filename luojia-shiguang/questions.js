// 坐标对应原截图地图区域 (x=300,y=155,w=1140,h=845)。
// x/y 是目标中心；rx/ry 为第一版历史标定值，现不参与判分。
// 当前统一使用 map-rules.js 中约 150 米的圆形判定范围。
// 根据参考图人工标定；示意地图不作为地理测量依据。
window.QUESTION_BANK = [
 {id:'engineering-field',name:'工学部田径场',category:'运动场',x:769,y:78,rx:47,ry:73,note:'地图上方，靠近东湖的纵向田径场。'},
 {id:'912-field',name:'九一二操场',category:'运动场',x:604,y:588,rx:49,ry:86,note:'地图中央偏下的大型田径场，樱花大道以南。'},
 {id:'gui-field',name:'桂园操场',category:'运动场',x:72,y:672,rx:48,ry:76,note:'地图左下方的田径场。'},
 {id:'mei-field',name:'梅园操场',category:'运动场',x:460,y:620,rx:30,ry:22,note:'九一二操场西侧、水塘东北侧的场地。'},
 {id:'songqing',name:'宋卿体育馆',category:'校园建筑',x:195,y:650,rx:38,ry:25,note:'桂园操场东侧，水塘西北侧。'},
 {id:'old-science',name:'老理学院',category:'历史建筑',x:583,y:450,rx:56,ry:28,note:'九一二操场北侧、樱花大道旁的建筑。'},
 {id:'journalism',name:'新闻与传播学院',category:'学院',x:744,y:498,rx:31,ry:37,note:'九一二操场东北侧，人文路东侧。'},
 {id:'law-library',name:'武汉大学法学图书馆',category:'图书馆',x:1014,y:565,rx:42,ry:44,note:'地图右侧的大型建筑区域，九一二操场以东。'},
 {id:'hubin-food',name:'湖滨食堂',category:'校园生活',x:968,y:281,rx:33,ry:28,note:'地图右上区域，湖滨路北侧。'},
 {id:'engineering-food',name:'工学部一食堂',category:'校园生活',x:567,y:135,rx:30,ry:23,note:'工学部田径场西侧，珞珈·工学天地南侧。'},
 {id:'engineering-center',name:'珞珈·工学天地',category:'校园生活',x:570,y:69,rx:37,ry:38,note:'工学部一食堂北侧，田径场西侧。'},
 {id:'urban-design',name:'城市设计学院',category:'学院',x:520,y:339,rx:52,ry:23,note:'地图上半部的建筑群南缘、狮子山以北。'},
 {id:'high-voltage',name:'高电压试验大厅',category:'教学科研',x:375,y:160,rx:51,ry:35,note:'工学部中部，高大建筑群之间，松园南路以北。'},
 {id:'electrical',name:'电气与自动化学院',category:'学院',x:302,y:31,rx:37,ry:29,note:'地图上方偏左的建筑区域。'},
 {id:'maker',name:'创客工场',category:'校园建筑',x:171,y:291,rx:32,ry:34,note:'地图左上区域，世纪广场东南侧。'},
 {id:'century',name:'世纪广场',category:'广场',x:105,y:259,rx:29,ry:18,note:'地图左上区域的道路交汇处。'},
 {id:'river-lab',name:'河流泥沙研究室',category:'教学科研',x:55,y:301,rx:31,ry:29,note:'地图左侧，世纪广场以南的建筑区域。'},
 {id:'wang-statue',name:'王星拱塑像',category:'地标',x:339,y:432,rx:20,ry:20,note:'狮子山西南侧、武汉大学早期建筑附近。'},
 {id:'lion-hill',name:'狮子山',category:'景观',x:405,y:400,rx:33,ry:28,note:'地图中部，樱园北侧的山地绿地。'},
 {id:'sakura-garden',name:'樱园',category:'景观',x:290,y:551,rx:42,ry:34,note:'地图中央偏左，樱花大道以南。'},
 {id:'sakura-castle',name:'武汉大学樱花城堡',category:'历史建筑',x:368,y:504,rx:43,ry:27,note:'狮子山南侧、樱花大道北侧的成排建筑。'},
 {id:'turtle-hill',name:'小龟山',category:'景观',x:800,y:715,rx:52,ry:40,note:'九一二操场东南侧的大片绿地。'},
 {id:'border-institute',name:'中国边界与海洋研究院',category:'教学科研',x:702,y:427,rx:32,ry:29,note:'老理学院东北侧，新闻与传播学院北侧。'},
 {id:'social-security',name:'社会保障研究中心',category:'教学科研',x:726,y:640,rx:23,ry:31,note:'九一二操场东侧、人文路附近。'}
];
