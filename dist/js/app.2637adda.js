(function(n){function t(t){for(var i,a,o=t[0],c=t[1],u=t[2],d=0,f=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(n[i]=c[i]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var n,t=0;t<r.length;t++){for(var e=r[t],i=!0,o=1;o<e.length;o++){var c=e[o];0!==s[c]&&(i=!1)}i&&(r.splice(t--,1),n=a(a.s=e[0]))}return n}var i={},s={app:0},r=[];function a(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=n,a.c=i,a.d=function(n,t,e){a.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},a.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,t){if(1&t&&(n=a(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)a.d(e,i,function(t){return n[t]}.bind(null,i));return e},a.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return a.d(t,"a",t),t},a.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;r.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},"0898":function(n,t,e){"use strict";var i=e("f41e"),s=e.n(i);s.a},"0da3":function(n,t,e){"use strict";var i=e("824b"),s=e.n(i);s.a},"176e":function(n,t,e){},2236:function(n,t,e){"use strict";var i=e("176e"),s=e.n(i);s.a},"3e2d":function(n,t,e){},4367:function(n,t,e){},"56d7":function(n,t,e){"use strict";e.r(t);var i={};e.r(i),e.d(i,"setVersion",(function(){return v})),e.d(i,"setEnvironments",(function(){return h})),e.d(i,"setEnvironment",(function(){return p})),e.d(i,"setEnvironmentLoading",(function(){return m})),e.d(i,"setInstanceLoading",(function(){return g})),e.d(i,"setInstanceStateStatus",(function(){return _})),e.d(i,"setError",(function(){return b})),e.d(i,"setIsLoading",(function(){return E}));var s={};e.r(s),e.d(s,"fetchVersion",(function(){return $})),e.d(s,"fetchAllEnvironmentsSummary",(function(){return j})),e.d(s,"fetchAllEnvironmentsDetails",(function(){return k})),e.d(s,"refresh",(function(){return A})),e.d(s,"fetchEnvironmentDetails",(function(){return D})),e.d(s,"startEnvironment",(function(){return z})),e.d(s,"stopEnvironment",(function(){return M})),e.d(s,"startInstance",(function(){return T})),e.d(s,"stopInstance",(function(){return F})),e.d(s,"clearError",(function(){return P}));var r={};e.r(r),e.d(r,"isAppLoading",(function(){return U})),e.d(r,"isEnvironmentLoading",(function(){return B})),e.d(r,"isInstanceLoading",(function(){return R})),e.d(r,"isEnvironmentStateRunning",(function(){return H})),e.d(r,"isEnvironmentStateStopped",(function(){return N})),e.d(r,"isEnvironmentStateMixed",(function(){return G})),e.d(r,"isEnvironmentStateChanging",(function(){return J}));e("e623"),e("e379"),e("5dc8"),e("37e1");var a=e("2b0e"),o=e("1881"),c=e.n(o),u=e("2f62"),l=e("e37d"),d=(e("4de4"),e("d81d"),e("ade3")),f=e("5530"),v=function(n,t){n.version=t},h=function(n,t){n.environments=t.envList},p=function(n,t){var e=t.id,i=t.data;n.environments=n.environments.map((function(n){return n.id===e?i:n}))},m=function(n,t){var e=t.id,i=t.flag;n.environmentsLoading=Object(f["a"])(Object(f["a"])({},n.environmentsLoading),{},Object(d["a"])({},e,i))},g=function(n,t){var e=t.id,i=t.flag;n.instancesLoading=Object(f["a"])(Object(f["a"])({},n.instancesLoading),{},Object(d["a"])({},e,i))},_=function(n,t){var e=t.id,i=t.status,s=t.envId;n.environments=n.environments.map((function(n){if(n.id!==s)return n;var t=n.instances.map((function(n){return n.id!==e?n:Object(f["a"])(Object(f["a"])({},n),{},{state:i})})),r=t.filter((function(n){return"running"===n.state})).length,a=r===n.total_instances?"running":0===r?"stopped":"mixed";return Object(f["a"])(Object(f["a"])({},n),{},{instances:t,running_instances:r,state:a})}))},b=function(n,t){n.error=t},E=function(n,t){n.isLoading=t},L=(e("d3b7"),e("bc3a")),S=e.n(L),I=S.a.create({baseURL:"/api/v1"}),w=I,C={getVersion:function(){return w.get("/version").then((function(n){return n.data}))},getConfig:function(){return w.get("/config").then((function(n){return n.data}))},refresh:function(){return w.post("/refresh").then((function(n){return n.data}))}},y={fetchAllEnvironmentsDetails:function(){return w.get("/env/details").then((function(n){return n.data}))},fetchAllEnvironmentsSummary:function(){return w.get("/env/summary").then((function(n){return n.data}))},fetchEnvironmentDetails:function(n){return w.get("/env/".concat(n,"/details")).then((function(n){return n.data}))},fetchEnvironmentSummary:function(n){return w.get("/env/".concat(n,"/summary")).then((function(n){return n.data}))},startEnvironment:function(n){return w.post("/env/".concat(n,"/start")).then((function(n){return n.data}))},stopEnvironment:function(n){return w.post("/env/".concat(n,"/stop")).then((function(n){return n.data}))}},x={startInstance:function(n){return w.post("/instance/".concat(n,"/start")).then((function(n){return n.data}))},stopInstance:function(n){return w.post("/instance/".concat(n,"/stop")).then((function(n){return n.data}))}},O=function(n){var t="Unexpected error occured";return n&&n.response&&n.response.data&&(t=n.response.data.error||t),t},$=function(n){var t=n.commit;C.getVersion().then((function(n){return t("setVersion",n.version)})).catch((function(n){return t("setError",O(n))}))},j=function(n){var t=n.commit;y.fetchAllEnvironmentsSummary().then((function(n){return t("setEnvironments",n)})).catch((function(n){return t("setError",O(n))}))},k=function(n){var t=n.commit;t("setIsLoading",!0),y.fetchAllEnvironmentsDetails().then((function(n){return t("setEnvironments",n)})).catch((function(n){return t("setError",O(n))})).finally((function(){return t("setIsLoading",!1)}))},A=function(n){var t=n.commit;y.fetchAllEnvironmentsDetails().then((function(n){return t("setEnvironments",n)})).catch((function(n){return t("setError",n.response.data.error)}))},D=function(n,t){var e=n.commit;e("setEnvironmentLoading",{id:t,flag:!0}),y.fetchEnvironmentDetails(t).then((function(n){return e("setEnvironment",{id:t,data:n})})).catch((function(n){return e("setError",O(n))})).finally((function(){return e("setEnvironmentLoading",{id:t,flag:!1})}))},z=function(n,t){var e=n.dispatch,i=n.commit;i("setEnvironmentLoading",{id:t,flag:!0}),y.startEnvironment(t).then((function(){return e("fetchEnvironmentDetails",t)})).catch((function(n){i("setError",O(n)),i("setEnvironmentLoading",{id:t,flag:!1})}))},M=function(n,t){var e=n.dispatch,i=n.commit;i("setEnvironmentLoading",{id:t,flag:!0}),y.stopEnvironment(t).then((function(){return e("fetchEnvironmentDetails",t)})).catch((function(n){i("setError",O(n)),i("setEnvironmentLoading",{id:t,flag:!1})}))},T=function(n,t){var e=n.commit,i=t.id,s=t.envId;e("setInstanceLoading",{id:i,flag:!0}),x.startInstance(i).then((function(){return e("setInstanceStateStatus",{id:i,status:"running",envId:s})})).catch((function(n){e("setError",O(n)),e("setInstanceStateStatus",{id:i,status:"stopped",envId:s})})).finally((function(){e("setInstanceLoading",{id:i,flag:!1})}))},F=function(n,t){var e=n.commit,i=t.id,s=t.envId;e("setInstanceLoading",{id:i,flag:!0}),x.stopInstance(i).then((function(){return e("setInstanceStateStatus",{id:i,status:"stopped",envId:s})})).catch((function(n){e("setError",O(n)),e("setInstanceStateStatus",{id:i,status:"running",envId:s})})).finally((function(){e("setInstanceLoading",{id:i,flag:!1})}))},P=function(n){var t=n.commit;t("setError","")},U=(e("7db0"),function(n){return n.isLoading}),B=function(n){return function(t){return!0===n.environmentsLoading[t]}},R=function(n){return function(t){return!0===n.instancesLoading[t]}},V=function(n,t,e){var i=n.environments.find((function(n){return n.id===t}));return!!i&&i.state===e},H=function(n){return function(t){return V(n,t,"running")}},N=function(n){return function(t){return V(n,t,"stopped")}},G=function(n){return function(t){return V(n,t,"mixed")}},J=function(n){return function(t){return V(n,t,"changing")}};a["a"].use(l["a"]),a["a"].use(u["a"]);var W=new u["a"].Store({state:{environments:[],version:"",error:"",environmentsLoading:{},instancesLoading:{},isLoading:!1},mutations:i,actions:s,getters:r}),q=W,K=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"appbody"},[e("Header",{attrs:{version:n.version}}),e("button",{staticClass:"refresh-btn",on:{click:n.refresh}},[e("clr-icon",{class:[n.shouldSpinIcon?"spin-icon":""],attrs:{shape:"sync",size:"16"}})],1),e("EnvironmentList",{attrs:{environments:n.environments}}),e("Snackbar",{attrs:{message:n.error}}),e("v-dialog")],1),e("div",{staticClass:"footer"})])},Q=[],X=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("header",[n._m(0),e("nav",[e("span",{staticClass:"version-container"},[n._v(n._s(n.versionLabel))]),e("a",{attrs:{target:"_blank",href:"https://github.com/gbolo/aws-power-toggle"}},[n._v("GitHub")])])])},Y=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"brand-container"},[e("span",{attrs:{role:"img","aria-label":"AWS Power-Toggle logo"}},[n._v("🔌✨")]),e("div",{staticClass:"divider"}),e("span",[n._v("AWS Power-Toggle")])])}],Z={name:"Header",props:{version:String},data:function(){return{refreshing:!1}},computed:{versionLabel:function(){return this.version?/^\d/.test(this.version)?"v".concat(this.version):this.version:""}}},nn=Z,tn=(e("2236"),e("2877")),en=Object(tn["a"])(nn,X,Y,!1,null,"4a5c4d57",null),sn=en.exports,rn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("ul",{staticClass:"environment-list__filter-list"},n._l(n.itemFilters,(function(t,i){return e("li",{key:i},[e("a",{class:[t.selected?"selected":""],on:{click:function(t){return n.toggleFilter(i)}}},[n._v(n._s(t.value))])])})),0),e("div",{staticClass:"environment-list__container"},n._l(n.filteredEnvs,(function(n){return e("Environment",{key:n.Name,attrs:{env:n}})})),1)])},an=[],on=(e("45fc"),function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"env"},[e("div",{staticClass:"env__header"},[e("span",{staticClass:"env__name"},[n._v(n._s(n.env.name))]),e("StatusBadge",{attrs:{text:n.env.state}})],1),e("table",{staticClass:"env__details-table"},[e("tr",[e("td",[e("div",{staticClass:"env__details"},[e("clr-icon",{attrs:{shape:"cloud",size:"24"}}),e("span",[n._v(n._s(n.env.region))])],1)]),e("td",[e("div",{staticClass:"env__details"},[e("clr-icon",{attrs:{shape:"cluster",size:"24"}}),e("span",[n._v(n._s(n.env.running_instances)+"/"+n._s(n.env.total_instances))])],1)])]),e("tr",[e("td",[e("div",{staticClass:"env__details"},[e("clr-icon",{attrs:{shape:"cpu",size:"24"}}),e("span",[n._v(n._s(n.env.total_vcpu)+" cores")])],1)]),e("td",[e("div",{staticClass:"env__details"},[e("clr-icon",{attrs:{shape:"memory",size:"24"}}),e("span",[n._v(n._s(n.env.total_memory_gb)+" GB")])],1)])]),n.env.bills_accrued&&n.env.bills_saved?e("tr",[e("td",[e("div",{staticClass:"env__details"},[e("clr-icon",{attrs:{shape:"lightbulb",size:"24"}}),e("span",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"in USD",expression:"'in USD'",modifiers:{bottom:!0}}]},[n._v("$"+n._s(n.env.bills_accrued)+" used")])],1)]),e("td",[e("div",{staticClass:"env__details"},[e("clr-icon",{attrs:{shape:"bolt",size:"24"}}),e("span",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"in USD",expression:"'in USD'",modifiers:{bottom:!0}}]},[n._v("$"+n._s(n.env.bills_saved)+" saved")])],1)])]):n._e()]),e("clr-icon",{class:["chevron",this.showInstanceList?"rotate-m180":""],attrs:{shape:"angle-double",size:"20",dir:"down",icon:"angle-double-down"},on:{click:n.toggleInstanceList}}),e("InstanceList",{attrs:{show:n.showInstanceList,instances:n.env.instances,envId:n.env.id}}),n.isLoading?e("div",{staticClass:"btn-container"},[e("clr-icon",{attrs:{shape:"hourglass",size:"24"}})],1):[n.isChanging?e("div",{staticClass:"btn-container"},[e("clr-icon",{class:["refresh-icon",n.shouldSpinIcon?"spin-icon":""],attrs:{shape:"sync",size:"24"},on:{click:function(t){return n.refresh(n.env.id)}}})],1):e("div",{staticClass:"btn-container"},[n.isRunning?n._e():e("button",{class:["button","start",n.isMixed?"mixed":""],on:{click:function(t){return n.start(n.env.id)}}},[n._v("Start")]),n.isStopped?n._e():e("button",{class:["button","stop",n.isMixed?"mixed":""],on:{click:function(t){return n.stop(n.env.id)}}},[n._v("Stop")])])]],2)}),cn=[],un=(e("b0c0"),function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("span",{class:["status-badge",n.bgClass]},[n._v(n._s(n._f("capitalize")(n.text)))])}),ln=[],dn=(e("fb6a"),e("25f0"),{name:"StatusBadge",props:{text:String},filters:{capitalize:function(n){return n?n.toString().charAt(0).toUpperCase()+n.slice(1):""}},computed:{bgClass:function(){if(!this.text)return"";switch(this.text.toLowerCase()){case"running":return"status__on";case"stopped":return"status__off";case"changing":return"status__changing";case"mixed":return"status__mixed";default:}return"status__default"}}}),fn=dn,vn=(e("0da3"),Object(tn["a"])(fn,un,ln,!1,null,"c8b75ae0",null)),hn=vn.exports,pn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("transition",{attrs:{name:"expand"}},[n.show?e("ul",{staticClass:"instance-list"},n._l(n.instances,(function(t,i){return e("li",{key:i},[e("Instance",{attrs:{instance:t,envId:n.envId}})],1)})),0):n._e()])},mn=[],gn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"instance"},[e("div",{staticClass:"container"},[e("span",[n._v(n._s(n.instance.name))]),n.isUnknownState?n._e():e("ToggleButton",{attrs:{disabled:n.isLoading,value:n.isOn,sync:!0,color:"#09af00",width:40,height:20},on:{change:n.toggleInstance}})],1),e("div",{staticClass:"container"},[e("span",{staticClass:"instance__type"},[n._v(n._s(n.instance.instance_type))]),e("span",[e("clr-icon",{attrs:{shape:"cpu",size:"24"}}),n._v(" "+n._s(n.instance.vcpu)+" "),e("clr-icon",{attrs:{shape:"memory",size:"24"}}),n._v(" "+n._s(n.instance.memory_gb)+" ")],1)])])},_n=[],bn=e("911b"),En={name:"Instance",components:{ToggleButton:bn["a"]},props:{envId:String,instance:Object},computed:{isUnknownState:function(){return"running"!==this.instance.state.toLowerCase()&&"stopped"!==this.instance.state.toLowerCase()},isLoading:function(){return this.$store.getters.isInstanceLoading(this.instance.id)}},data:function(){return{isOn:"running"===this.instance.state.toLowerCase()}},methods:{toggleInstance:function(n){var t=n.value,e=this.instance.id,i=this.envId;this.isOn=t,t?this.$store.dispatch("startInstance",{id:e,envId:i}):this.$store.dispatch("stopInstance",{id:e,envId:i})}},watch:{instance:function(){this.isOn="running"===this.instance.state.toLowerCase()}}},Ln=En,Sn=(e("0898"),Object(tn["a"])(Ln,gn,_n,!1,null,"12895c4c",null)),In=Sn.exports,wn={name:"InstanceList",components:{Instance:In},props:{envId:String,instances:Array,show:Boolean}},Cn=wn,yn=(e("f37f"),Object(tn["a"])(Cn,pn,mn,!1,null,"1ef0c150",null)),xn=yn.exports,On={name:"Environment",components:{StatusBadge:hn,InstanceList:xn},data:function(){return{showInstanceList:!1,showInstanceListItems:!1,shouldSpinIcon:!1}},props:{env:Object},computed:{isRunning:function(){return this.$store.getters.isEnvironmentStateRunning(this.env.id)},isStopped:function(){return this.$store.getters.isEnvironmentStateStopped(this.env.id)},isMixed:function(){return this.$store.getters.isEnvironmentStateMixed(this.env.id)},isChanging:function(){return this.$store.getters.isEnvironmentStateChanging(this.env.id)},isLoading:function(){return this.$store.getters.isEnvironmentLoading(this.env.id)}},watch:{isLoading:function(n,t){var e=this;n||!0!==t?n&&!1===t&&(this.shouldSpinIcon=!0):setTimeout((function(){e.shouldSpinIcon=!1}),750)}},methods:{toggleInstanceList:function(){this.showInstanceList=!this.showInstanceList},start:function(n){this.$store.dispatch("startEnvironment",n)},stop:function(n){var t=this;this.$modal.show("dialog",{title:"Are you sure?",text:"This action will stop all running instances of environment ".concat(this.env.name,"."),buttons:[{title:"Cancel",default:!0},{title:"Stop",handler:function(){t.$store.dispatch("stopEnvironment",n),t.$modal.hide("dialog")}}]})},refresh:function(n){this.$store.dispatch("fetchEnvironmentDetails",n)}}},$n=On,jn=(e("c5db"),Object(tn["a"])($n,on,cn,!1,null,"798f262d",null)),kn=jn.exports,An={name:"EnvironmentList",components:{Environment:kn},props:{environments:Array},data:function(){return{itemFilters:[{field:"state",value:"Running",selected:!0},{field:"state",value:"Stopped",selected:!0},{field:"state",value:"Changing",selected:!0},{field:"state",value:"Mixed",selected:!0}]}},computed:{enabledFilters:function(){return this.itemFilters.filter((function(n){return n.selected}))},filteredEnvs:function(){var n=this;return this.environments.filter((function(t){return n.enabledFilters.some((function(n){return"string"===typeof n.value?(t[n.field]||"").toLowerCase()===n.value.toLowerCase():t[n.field]===n.value}))}))}},methods:{toggleFilter:function(n){this.itemFilters[n].selected=!this.itemFilters[n].selected}}},Dn=An,zn=(e("eaa2"),Object(tn["a"])(Dn,rn,an,!1,null,"5c3b37ba",null)),Mn=zn.exports,Tn=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{class:[n.message.length?"show":""],attrs:{id:"snackbar"}},[e("span",{staticClass:"message"},[n._v(n._s(n.message))]),e("button",{staticClass:"x-btn",on:{click:n.clearError}},[e("clr-icon",{attrs:{shape:"window-close",size:"22"}})],1)])},Fn=[],Pn={name:"Snackbar",props:{message:String},methods:{clearError:function(){this.$store.dispatch("clearError")}}},Un=Pn,Bn=(e("d324"),Object(tn["a"])(Un,Tn,Fn,!1,null,"174a819c",null)),Rn=Bn.exports,Vn={name:"app",components:{EnvironmentList:Mn,Header:sn,Snackbar:Rn},data:function(){return{shouldSpinIcon:!1}},computed:{environments:function(){return this.$store.state.environments},version:function(){return this.$store.state.version},error:function(){return this.$store.state.error},isLoading:function(){return this.$store.state.isLoading}},watch:{isLoading:function(n,t){var e=this;n||!0!==t?n&&!1===t&&(this.shouldSpinIcon=!0):setTimeout((function(){e.shouldSpinIcon=!1}),750)}},created:function(){this.$store.dispatch("fetchAllEnvironmentsDetails"),this.$store.dispatch("fetchVersion")},methods:{refresh:function(){this.$store.dispatch("fetchAllEnvironmentsDetails")}}},Hn=Vn,Nn=(e("5c0b"),Object(tn["a"])(Hn,K,Q,!1,null,null,null)),Gn=Nn.exports;a["a"].use(c.a,{dialog:!0}),a["a"].config.productionTip=!1,new a["a"]({store:q,render:function(n){return n(Gn)}}).$mount("#app")},"5c0b":function(n,t,e){"use strict";var i=e("9c0c"),s=e.n(i);s.a},"824b":function(n,t,e){},"9c0c":function(n,t,e){},c5db:function(n,t,e){"use strict";var i=e("4367"),s=e.n(i);s.a},d324:function(n,t,e){"use strict";var i=e("3e2d"),s=e.n(i);s.a},de0c:function(n,t,e){},de1a:function(n,t,e){},eaa2:function(n,t,e){"use strict";var i=e("de1a"),s=e.n(i);s.a},f37f:function(n,t,e){"use strict";var i=e("de0c"),s=e.n(i);s.a},f41e:function(n,t,e){}});
//# sourceMappingURL=app.2637adda.js.map