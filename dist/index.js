(function e(t,r){if(typeof exports==="object"&&typeof module==="object")module.exports=r(require("axios"),require("qs"));else if(typeof define==="function"&&define.amd)define(["axios","qs"],r);else{var s=typeof exports==="object"?r(require("axios"),require("qs")):r(t["axios"],t["qs"]);for(var a in s)(typeof exports==="object"?exports:t)[a]=s[a]}})(window,function(r,s){return function(r){var s={};function a(e){if(s[e]){return s[e].exports}var t=s[e]={i:e,l:false,exports:{}};r[e].call(t.exports,t,t.exports,a);t.l=true;return t.exports}a.m=r;a.c=s;a.d=function(e,t,r){if(!a.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:r})}};a.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};a.t=function(t,e){if(e&1)t=a(t);if(e&8)return t;if(e&4&&typeof t==="object"&&t&&t.__esModule)return t;var r=Object.create(null);a.r(r);Object.defineProperty(r,"default",{enumerable:true,value:t});if(e&2&&typeof t!="string")for(var s in t)a.d(r,s,function(e){return t[e]}.bind(null,s));return r};a.n=function(t){var e=t&&t.__esModule?function e(){return t["default"]}:function e(){return t};a.d(e,"a",e);return e};a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};a.p="";return a(a.s=2)}([function(e,t){e.exports=r},function(e,t){e.exports=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r){if(Object.prototype.hasOwnProperty.call(r,s)){e[s]=r[s]}}}return e};var s=function(){function s(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||false;s.configurable=true;if("value"in s)s.writable=true;Object.defineProperty(e,s.key,s)}}return function(e,t,r){if(t)s(e.prototype,t);if(r)s(e,r);return e}}();var i=r(3);function a(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var o=function(){function e(){a(this,e);this.userEvaluate=""}s(e,[{key:"isMobile",value:function e(){return/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)}},{key:"browserInfo",value:function e(t){var r=navigator.userAgent.toLowerCase();switch(t){case"android":return r.indexOf("android")!==-1;case"iphone":return r.indexOf("iphone")!==-1;case"ipad":return r.indexOf("ipad")!==-1;case"weixin":return r.indexOf("micromessenger")!==-1;case"qq":return r.match(/QQ/i)=="qq";default:return r}}},{key:"isQQ",value:function e(){return this.browserInfo("qq")}},{key:"isWeChat",value:function e(){return this.browserInfo("weixin")}},{key:"isWechat",value:function e(){return this.browserInfo("weixin")}},{key:"isAndroid",value:function e(){return this.deviceInfo("android")}},{key:"isIos",value:function e(){return this.deviceInfo("ios")}},{key:"deviceInfo",value:function e(t){var r=navigator.userAgent;switch(t){case"android":{return r.indexOf("Android")>-1||r.indexOf("Adr")>-1}case"ios":{return r.indexOf("Macintosh")>-1||!!r.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)}}}},{key:"formatChineseCapital",value:function e(t){var r=t;if(parseFloat(r)<0){throw new Error(r+"无效数字");return d}t=parseFloat(t);if(isNaN(t)){return}t=Math.round(t*100);var s=t%100==0?true:false;var a=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"];var o=["分","角","元","拾","佰","仟","万","拾","佰","仟","亿","拾","佰","仟"];var n="",i=void 0,u=void 0,c=void 0,l=0;var d="";if(t==0){return"零元整"}if(t<0){t=-t}t=t.toString();c=t.length;for(var p=0;p<c;p++){i=parseInt(t.charAt(p));u=c-1-p;if(i===0){if(u===2||u===6||u===11){n+=o[u];l=0}else{l++}}else{if(l>0){n+="零";l=0}n=n+a[i]+o[u]}}if(s){n+="整"}return n}},{key:"setPageTitle",value:function e(t){document.title=t;if(this.isIos()&&this.isWeChat()){var r=document.createElement("iframe");r.style.display="none";r.addEventListener("load",function(){setTimeout(function(){document.body.removeChild(r)},9)},false);r.src="/favicon.ico";document.body.appendChild(r)}}},{key:"dateDiff",value:function e(t){if(typeof t==="string"){t=new Date(t.replace(/-/g,"/")).getTime()}var r=1e3*60;var s=r*60;var a=s*24;var o=a*15;var n=a*30;var i=(new Date).getTime();var u=i-t;if(u<0){return""}var c=u/n;var l=u/(7*a);var d=u/a;var p=u/s;var m=u/r;var g=void 0;if(c>=1){g=""+parseInt(c)+"月前"}else if(l>=1){g=""+parseInt(l)+"周前"}else if(d>=1){g=""+parseInt(d)+"天前"}else if(p>=1){g=""+parseInt(p)+"小时前"}else if(m>=1){g=""+parseInt(m)+"分钟前"}else g="刚刚";return g}},{key:"getUserEvaluate",value:function e(t){var r=this;var s=t.resourceId,a=t.resourceType;return i.userEvaluateSrv.getKnowledgeListByLessonId({resourceId:s,resourceType:a}).then(function(e){if(e.code===200&&e.result){r.userEvaluate=n({},e.result,{resourceId:s,resourceType:a})}return e})}},{key:"getEvaluateContent",value:function e(){var r=this;var t=this.userEvaluate,s=t.resourceId,a=t.resourceType,o=t.teacherName;return new Promise(function(t,e){if(r.isEvaluate){return i.userEvaluateSrv.getEvaluateContent({resourceId:s,type:a}).then(function(e){if(e.code===200&&e.result){t(n({},e.result,{teacherName:o}))}})}else{t(r.formatUserEvaluate)}})}},{key:"getDefaultUserEvaluate",value:function e(){var t=this.userEvaluate,r=t.resourceType,s=t.resourceId,a=t.teacherId,o=t.isEvaluate,n=t.teacherName;var i=this.userEvaluate.list.map(function(e){e.gotStatus=0;return e});return{star:0,isEvaluate:o,teacherName:n,type:r,resourceId:s,teacherUserId:a,commentTeacher:"",knowledgeList:i}}},{key:"CPA_SUBJECT_IDS",get:function e(){return[9194,9196,9197,9198,9199,9200,9209,9210,9211,9212,9213,9214,9225,9226,9227,9228,9229,9230,7653,9249,9248,9247,9246,9245,9244]}},{key:"hasEvaluateEntry",get:function e(){return!!(this.userEvaluate&&this.userEvaluate.list&&this.userEvaluate.list.length)}},{key:"isEvaluate",get:function e(){return this.userEvaluate.isEvaluate===2}},{key:"formatUserEvaluate",get:function e(){if(this.hasEvaluateEntry){return this.getDefaultUserEvaluate()}}},{key:"ZHONGJI_SUBJECTS_IDS",get:function e(){return[9187,9188,9189,9206,9207,9208,9233,9232,9241,9242,9243]}},{key:"TAX_SUBJECTS_IDS",get:function e(){return[9187,9188,9189,9206,9207,9208,9233,9232,9241,9242,9243]}}]);return e}();if(typeof window!=="undefined"){window.kyyUtils=new o}t.default=new o},function(e,t,r){"use strict";r.r(t);r.d(t,"commonService",function(){return d});r.d(t,"gptSrv",function(){return w});r.d(t,"knowledgesService",function(){return h});r.d(t,"live",function(){return i});r.d(t,"loginService",function(){return p});r.d(t,"orderService",function(){return m});r.d(t,"questionService",function(){return g});r.d(t,"studyService",function(){return l});r.d(t,"testService",function(){return u});r.d(t,"testdbService",function(){return f});r.d(t,"userEvaluateSrv",function(){return v});var s=r(0);var a=r.n(s);var o=r(1);var n=r.n(o);a.a.defaults.baseURL="",a.a.defaults.withCredentials=!0,a.a.defaults.transformResponse=[function(e){try{e=JSON.parse(e,{arrayFormat:"brackets"})}catch(e){}return e}],a.a.interceptors.request.use(e=>("post"===e.method&&!1===e.json&&("multipart/form-data"!==e.headers["Content-Type"]&&(e.data=n.a.stringify(e.data)),e.headers=Object.assign({"Content-Type":"application/x-www-form-urlencoded"},e.headers)),e));const c=function(e){const t=Object.assign({method:"get",url:"",data:null,cache:!1,params:null},e);return console.log(e),a()(t).then(e=>e.data).catch(e=>{console.log(e),504===e.status&&console.log("网络出错,请检测您的网络是否良好")})};class i{static liveJumpHref(e){return`/new/home/webcast/join/id/${e}`}static getOwnClass(){return c({url:"/api/home/livelists/"})}static getVisitClass(){return c({url:"/api/home/visitclasss/"})}static getVisitLives(e){return c({url:"/api/home/visitLives/"+e})}static getClassGoods(e,t){return c({url:"/api/home/classgoods/"+e+"/p/"+t})}static getLiveLists(e){return c({url:"/api/home/getlivelists/"+e})}static getPrevueLive(){return c({url:"/knew/home/User/prelive"})}static getPlaybackLive(e,t,r){return c({url:"/knew/Home/User/replayLive/?p="+e+"&pageSize=10&sortClassroom="+r+"&sortCourse="+t})}static getUserLiveCourse(){return c({url:"/knew/Home/User/live"})}}class u{static getComplete(e){return c({url:"/new/home/practice/getComplete/id/"+e,cache:!0})}static getOwnLists(){return c({url:"/api/home/ownlists/",cache:!0})}static getLastRecord(){return c({url:"/api/home/lastrecords/",cache:!0})}static getSubjectInfo(e){return c({url:`/new/api/subject/info?id=${e}`,cache:!0})}static getTestLists(e,t){return c({url:"/api/home/testlists/"+e+"/type/1/p/"+t,cache:!0})}static getWorkLists(e){return c({url:"/new/home/practice/work",cache:!0,params:e})}static getWorkNum(e,t){return c({url:`/new/home/practice/workNum?subjectId=${e}&type=${t}`,cache:!0})}static checkGoodsAccess(e,t){return c({url:`/api/home/checkaccess/${e}/p/${t}`})}static getSortInfos(e,t){return c({url:"/api/home/sortinfos/"+e+"/p/"+t,cache:!0})}static getQuestionLists(){return c({url:"/api/home/test/getPracticeLists"})}static getDiscuss(e){return c({url:`/api/home/test/getDiscuss/${e.id}/p/${e.p}`})}static replyDiscuss(e){return c({method:"post",url:"/api/home/test/replyDiscuss",data:e})}static addDiscuss(e){return c({method:"post",url:`/api/home/test/addDiscuss/${e.id}`,data:e})}static getNote(e){return c({url:`/api/home/test/getNote/${e}`})}static addNote(e,t){return c({method:"post",data:t,url:`/api/home/test/addNote/${e}`})}static delNote(e){return c({url:`/api/home/test/delNote/${e}`})}static getOneQuestion(e){return c({url:`/new/home/practice/getOneQuestion/questionId/${e}`})}static getQuestionDiscuss(e,t=1){return c({method:"post",url:"/new/home/practice/get_user_pinglun.html",data:{apiVersion:2,row_number:t,question_id:e}})}static replyQuestionDiscuss(e,t){return c({medthod:"post",url:"",data:{apiVersion:2,interact_id:e,content:t}})}static addQuestionDiscuss(e,t,r){return c({medthod:"post",url:"/new/home/practice/send_pinglun.html",data:{apiVersion:2,question_id:e,subjectId:t,content:r}})}static getQuestionOneDiscuss(e,t){return c({url:`/new/home/practice/getOneDiscuss?questionId=${e}&discussId=${t}`})}}class l{static activeCourse(e){return c({url:`/knew/pc/course/tryActive/?id=${e}`})}static addDiscuss(e){return c({method:"post",url:"/api/home/adddiscuss",data:Object.assign({device:2},e)})}static addAnswerDiscuss(e){return c({method:"post",url:"/api/home/answerdiscuss",data:Object.assign({device:2},e)})}static checkCourseAccess(e){return c({url:`/knew/pc/Course/access?courseId=${e}`})}static checkClassAccess(e){return c({url:`/knew/pc/classroom/checkAccess/classId/${e}`})}static freeJoin(e,t){return c({method:"post",url:"/knew/pc/course/free",data:{id:e,type:t}})}static getClassCourseLists(e){return c({url:`/knew/pc/classroom/getCourseList/classroomId/${e}?device=wap`,cache:!0})}static getCoursewareListByCourseId(e){return c({url:`/knew/pc/course/courseWare?courseId=${e}`,cache:!0})}static getCoursewareListByLessonId(e){return c({url:`/knew/pc/course/courseWare?lessonId=${e}`})}static searchCoursewareList(e){return c({url:`/knew/ntsl/course/fileList?keyword=${e.keyword}&p=${e.p}`})}static checkClassAccess(e){return c({url:`/knew/pc/classroom/checkAccess/classId/${e}`})}static getClassInfo(e){return c({url:`/knew/pc/getClassInfo/${e}`,cache:!0})}static getClassLivePlayback(e){return e=Object.assign({p:1,pageSize:10},e),c({url:`/knew/pc/Classroom/getReplayLiveList/classroomId/${e.classId}/?p=${e.p}&pageSize=${e.pageSize}`})}static getClassInfo(e){return c({url:`/knew/pc/classroom/getClassInfo/classroomId/${e}`,cache:!0})}static getCourseInfo(e){return c({url:`/knew/pc/Course/getLessonListByCourseId/courseId/${e}`,cache:!0})}static getSimpleCourseInfo(e){return c({url:`/knew/pc/course/getCourseInfo/id/${e}`})}static getLessonInfo(e,t){return c({url:`/knew/pc/Course/getLessonInfo/courseId/${e}/lessonId/${t}`,cache:!0})}static getLessonDiscuss(e,t=1){return c({url:`/api/home/lessondiscuss/${e}/p/${t}`})}static getLastStudyRecord(){return c({url:"/knew/api/wap/lastLearning"})}static getThumbs(e){return c({url:`/api/home/getLikesByLessonId/${e}`})}static getClassroomList(){return c({url:"/knew/Pc/Classroom/classroomList",cache:!0})}static getCourseLists(){return c({url:"/knew/pc/course/courseList",cache:!0})}static postStudyRecord(e){return c({method:"post",url:"/knew/pc/course/mark",data:e})}static postThumbs(e){return c({method:"post",url:"/api/home/lessonlike/",data:e})}static postVideoRecord(e,t){return t=parseInt(t),c({url:"/knew/pc/course/saveRecord?video_id="+e+"&current_time="+t})}}class d{static getBannerInfo(e){return c({url:`/api/home/banner/${e}/type/mm`,cache:!0})}static homeLivePrevue(){return c({url:"/knew/api/wap/preLive",cache:!0})}static allCourse(){return c({url:"/knew/Pc/course/getCourse",cache:!0})}static filterCoures(e){return c({url:`/knew/Pc/course/getCourseList/cateId/${e}`,cache:!0})}static wxconfig(e){return c({method:"post",url:"/new/mm/jssdk/getconfig",data:{pageurl:e}})}}class p{static accountLogin(e,t){return c({method:"post",url:"/new/home/login/mLogin",data:{username:e,password:t}})}static checkLogin(){return c({url:"/api/home/checklogin"})}static checkUserExistByMobile(e){return c({url:"/new/home/login/checkUserExistByMobile",params:{mobile:e}})}static devLogin(e){return c({url:"/new/home/login/devGetToken",params:{username:e}})}static sendLoginOrRegisterCode(e){return c({method:"post",url:"/new/home/login/sendCode",data:{mobile:e}})}static sendForgotCode(e){return c({method:"post",url:"/knew/Home/User/sendMsgForChangePw",data:{mobile:e}})}static resetPw(e,t,r,s){return console.log(e,t,r,s),c({method:"post",url:"/knew/Home/User/resetPw",data:{mobile:e,code:t,password:r,password2:s}})}static sendRegisterCode(e){return c({method:"post",url:"/knew/Home/User/sendRegisterCode",data:{mobile:e}})}static mRegister(e,t){return c({method:"post",url:"/knew/Home/User/mRegister",data:{mobile:e,code:t}})}static mobileQuickLogin(e,t){return c({method:"post",url:"/new/home/login/codeLogin",data:{mobile:e,code:t}})}static mobileLogin(e,t){return c({method:"post",url:"/new/home/login/mobileLogin",data:{mobile:e,code:t}})}static quickLogin(e,t){return c({method:"post",url:"/new/home/login/codeLogin",data:{mobile:e,code:t}}).then(e=>(e.code,e))}static accountLogin(e,t){return c({method:"post",url:"/new/home/login/mLogin",data:{username:e,password:t}}).then(e=>(e.code,e))}static chWxUidByCode(e,t,r){return c({method:"post",url:"/new/home/login/chWxUidByCode",data:{mobile:e,code:t,openid:r}}).then(e=>(e.code,e))}static chWxUidByPwd(e,t,r){return c({method:"post",url:"/new/home/login/chWxUidByPwd",data:{username:e,password:t,openid:r}}).then(e=>(e.code,e))}static sendVerifyCode(e){return c({method:"post",url:"/new/home/login/sendCode",data:{mobile:e}})}static resetPw(e,t,r){return c({method:"post",url:"/new/home/login/resetPassword",data:{code:e,newPass:t,newPass2:r}})}static sendRegisterCode(e){return c({method:"post",url:"/knew/Home/User/sendRegisterCode",data:{mobile:e}})}static mRegister(e,t){return c({method:"post",url:"/knew/Home/User/mRegister",data:{mobile:e,code:t}})}static mobileRegister(e){return c({method:"post",url:"/new/home/login/sendCode",data:e})}static checkMobileCode(e){return c({method:"post",url:"/new/home/login/codeLogin",data:e})}static userClassVisitLog(e,t){return c({url:`/api/home/visitclassroom/${e}/type/${t}`})}static logout(){return c({method:"post",url:"/new/home/login/mLogout"})}}class m{static buyAbleGoods(e){return c({url:`/knew/api/wap/buyAbleGoods/courseId/${e}`,cache:!0})}static confirmOrder(e){return c({url:"/new/home/buy/orders",params:e})}static getGoodsInfo(e,t){return c({url:"/new/home/buy/getGoodsInfo",params:{type:e,gid:t}})}}class g{static askQuestion(e){return c({method:"post",url:"/knew/home/user/askQuestion",data:{question_title:e}})}static getQuestionList(e){return c({url:`/knew/home/user/getQuestionList?p=${e}`})}static getQuestionDetail(e){return c({url:`/knew/home/user/questionDetail?question_id=${e}`})}}class h{static getKnowledgeList(e){return c({url:"/new/Home/Practice/getKnowledgeList",params:e})}static getOneKnowledge(e){return c({url:`/new/home/practice/getOneKnowledge?id=${e}`})}static addRelation(e){return c({method:"post",url:"/new/Kernel/Knowledge/addRelation",data:e})}static addRelationByKnow(e){return c({method:"post",url:"/new/Kernel/Knowledge/addRelationByKnow",data:e})}static getRescourseKnows(e){return c({url:"/Knowledge/getRescourceKnows",params:e})}static getRescourceKnows(e){return c({url:"/new/Kernel/Knowledge/getRescourceKnows",params:e})}static delRelation(e){return c({url:"/new/Kernel/Knowledge/delRelation",params:{relationId:e}})}static delRelations(e){return c({method:"post",url:"/new/Kernel/Knowledge/deleteRelations",data:{ids:e}})}static getQuestions(e){return c({url:"/new/kernel/knowledge/getQuestions",params:e})}static getTimu(e){return c({url:"/manage/timu.php",params:e})}static getKnowSubjectList(e){return c({method:"get",url:"/new/Kernel/Knowledge/getKnowSubjectList",params:{knowId:e}})}static searchLessons(e){return c({method:"get",url:"/new/Kernel/Knowledge/getLessons",params:e})}static getCourseListByCate(e){return c({url:"/knew/Ntsl/course/getCourseByCate",params:{topId:e}})}static getKnowledgeResource(e){return c({method:"post",url:"/new/home/practice/getKnowledgeResource",data:{types:[2,3],knowId:e}})}static getRecommendKnows({subjectId:e,pageSize:t=3,page:r}){return c({url:"/new/home/practice/getRecommendKnows",cache:!0,params:{subjectId:e,pageSize:t,p:r}})}static getSubjectKnowledge(e){return c({url:"/new/home/practice/getSubjectKnowledge",params:{subjectid:e.subjectId,page:e.page,pageSize:e.pageSize||11}})}static hasSmartQuestion(e){return c({url:"/new/home/practice/hasSmartQuestion",params:{sid:e}})}}var f=new class{};class w{static getRobot(){return c({url:"/api/v1/comment/getRobot",params:{},custom:arguments[1]})}static getChatGpt({ask:e,scene:t,sceneKey:r}){return c({method:"post",json:!0,url:"/api/v1/comment/getChatGpt",data:{ask:e,scene:t,sceneKey:r},custom:arguments[1]})}}class v{static addEvaluate({star:e,type:t,resourceId:r,teacherUserId:s,commentTeacher:a,knowledgeList:o,knowledgeId:n,got_status:i,sort:u}){return c({method:"post",url:"/api/v1/edu/evaluate/addEvaluate",data:{star:e,type:t,resourceId:r,teacherUserId:s,commentTeacher:a,knowledgeList:o,knowledgeId:n,got_status:i,sort:u},custom:arguments[1]})}static getEvaluateContentList(){return c({url:"/api/v1/edu/evaluate/getEvaluateContentList",params:{},custom:arguments[1]})}static getPlanEvaluateInfo({templateId:e}){return c({url:"/api/v1/edu/evaluate/getPlanEvaluateInfo",params:{templateId:e},custom:arguments[1]})}static addPlanEvaluateInfo({thisTab:e,thisComment:t,nextTab:r,nextComment:s,teacherUserId:a,start:o,tabTeacher:n,commentTeacher:i,examTypeId:u}){return c({method:"post",url:"/api/v1/edu/evaluate/addPlanEvaluateInfo",data:{thisTab:e,thisComment:t,nextTab:r,nextComment:s,teacherUserId:a,start:o,tabTeacher:n,commentTeacher:i,examTypeId:u},custom:arguments[1]})}static getKnowledgeListByLessonId({resourceId:e,resourceType:t}){return c({url:"/api/v1/edu/evaluate/getKnowledgeListByLessonId",params:{resourceId:e,resourceType:t},custom:arguments[1]})}static getEvaluateAllList({resourceId:e,type:t,page:r,pageSize:s}){return c({url:"/api/v1/edu/evaluate/getEvaluateAllList",params:{resourceId:e,type:t,page:r,pageSize:s},custom:arguments[1]})}static getEvaluateContent({resourceId:e,type:t}){return c({url:"/api/v1/edu/evaluate/getEvaluateContent",params:{resourceId:e,type:t},custom:arguments[1]})}}}])});