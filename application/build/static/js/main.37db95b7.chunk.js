(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){e.exports=a(200)},119:function(e,t,a){},125:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},188:function(e,t,a){},191:function(e,t,a){},197:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),c=a.n(o),l=a(8),s=a(9),i=a(11),u=a(10),m=a(12),d=a(207),h=a(203),g=a(113),p=a(24),f=a.n(p),y=a(28),E=a.n(y),v=a(19),b=a.n(v),C=a(14),O=a.n(C),j=a(70),T=a.n(j),k=a(71),S=a(16),w=a.n(S),N=(a(119),a(73),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.categoryName,a=e.amount;return r.a.createElement(f.a.Item,{className:"total-section"},r.a.createElement(E.a,null,r.a.createElement(b.a,null,r.a.createElement(O.a,{xs:9},t),r.a.createElement(O.a,{className:"category-subtotal"},Math.round(a)))))}}]),t}(n.Component)),R=a(49),_=a(22),x=a.n(_),A=a(33),I=a.n(A),M=a(50),D={saveToken:function(e){return localStorage.setItem("token",e)},getToken:function(){return localStorage.getItem("token")},removeToken:function(){return localStorage.removeItem("token")},header:function(){return Object(M.a)({},"X-Auth-Token",localStorage.getItem("token"))}},V=(a(125),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={targetType:"transaction_id",targetValue:a.props.transaction.transaction_id},a.setTransactionIdRule=function(e){a.setState({targetType:"transaction_id",targetValue:a.props.transaction.transaction_id})},a.setNameRule=function(e){a.setState({targetType:"name",targetValue:a.props.transaction.name})},a.setNameContainsRule=function(e){a.setState({targetType:"name_contains",targetValue:void 0})},a.setCategoryRule=function(e){a.setState({targetType:"category_id",targetValue:a.props.transaction.category_id})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.targetType,n="name_contains"===t?e.target.nameContainsValue.value:a.state.targetValue,r=JSON.stringify({target_type:t,target_value:n,category:a.props.selectedCategory}),o=Object(R.a)({},{"Content-Type":"application/json"},D.header());fetch("/api/category_rules",{method:"POST",headers:o,body:r}).then(function(e){return e.json()}).then(function(e){a.props.setSuccess("Rule successfully created"),a.props.getSummaryData()}).catch(function(e){return a.props.setError("There was an issue creating the rule")}),a.props.handleClose()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.show,a=e.transaction,n=e.selectedCategory,o=e.handleClose;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{show:t,onHide:o},r.a.createElement(x.a.Header,null,r.a.createElement(x.a.Title,null,"Create New Rule")),r.a.createElement(x.a.Body,null,"Assign the category ",r.a.createElement("b",null,n)," to the following:"),r.a.createElement(w.a,{onSubmit:this.handleSubmit},r.a.createElement(x.a.Body,null,r.a.createElement("div",{className:"category-rule-option"},r.a.createElement(w.a.Check,{defaultChecked:!0,type:"radio",label:"Only this transaction",name:"ruleOption",id:"formHorizontalRadios1",onClick:this.setTransactionIdRule})),r.a.createElement("div",{className:"category-rule-option"},r.a.createElement(w.a.Check,{type:"radio",label:"Transaction name matching: ",name:"ruleOption",id:"formHorizontalRadios1",onClick:this.setNameRule}),r.a.createElement("b",null,a.name)),r.a.createElement("div",{className:"category-rule-option"},r.a.createElement(w.a.Check,{type:"radio",label:"Transaction names containing: ",name:"ruleOption",id:"formHorizontalRadios2",onClick:this.setNameContainsRule}),r.a.createElement(w.a.Control,{name:"nameContainsValue",placeholder:a.name})),r.a.createElement("div",{className:"category-rule-option"},r.a.createElement(w.a.Check,{type:"radio",label:"Categories matching: ",name:"ruleOption",id:"formHorizontalRadios3",onClick:this.setCategoryRule}),r.a.createElement("b",null,a.category.join(" > ")))),r.a.createElement(x.a.Footer,null,r.a.createElement(I.a,{variant:"secondary",onClick:o},"Close"),r.a.createElement(I.a,{variant:"primary",type:"submit"},"Save Changes")))))}}]),t}(n.Component)),H=(a(161),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={targetType:"transaction_id",targetValue:a.props.transaction.transaction_id},a.setTransactionIdRule=function(e){a.setState({targetType:"transaction_id",targetValue:a.props.transaction.transaction_id})},a.setNameRule=function(e){a.setState({targetType:"name",targetValue:a.props.transaction.name})},a.setNameContainsRule=function(e){a.setState({targetType:"name_contains",targetValue:void 0})},a.setCategoryRule=function(e){a.setState({targetType:"category",targetValue:a.props.transaction.assignedCategory})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.targetType,n="name_contains"===t?e.target.nameContainsValue.value:a.state.targetValue;if(t&&n){var r=JSON.stringify({target_type:t,target_value:n,tag:a.props.selectedTag}),o=Object.assign({"Content-Type":"application/json"},D.header());fetch("/api/tag_rules",{method:"POST",headers:o,body:r}).then(function(e){return e.json()}).then(function(e){a.props.setSuccess("Rule successfully created"),a.props.getSummaryData()}).catch(function(e){return a.props.setError("There was an issue creating the rule")})}a.props.handleClose()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.show,a=e.transaction,n=e.selectedTag,o=e.handleClose;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{show:t,onHide:o},r.a.createElement(x.a.Header,null,r.a.createElement(x.a.Title,null,"Create New Rule")),r.a.createElement(x.a.Body,null,"Assign the tag ",r.a.createElement("b",null,n)," to the following:"),r.a.createElement(w.a,{onSubmit:this.handleSubmit},r.a.createElement(x.a.Body,null,r.a.createElement("div",{className:"tag-rule-option"},r.a.createElement(w.a.Check,{defaultChecked:!0,type:"radio",label:"Only this transaction",name:"ruleOption",id:"formHorizontalRadios1",onClick:this.setTransactionIdRule})),r.a.createElement("div",{className:"tag-rule-option"},r.a.createElement(w.a.Check,{type:"radio",label:"Transaction name matching: ",name:"ruleOption",id:"formHorizontalRadios2",onClick:this.setNameRule}),r.a.createElement("b",null,a.name)),r.a.createElement("div",{className:"tag-rule-option"},r.a.createElement(w.a.Check,{type:"radio",label:"Transaction names containing: ",name:"ruleOption",id:"formHorizontalRadios3",onClick:this.setNameContainsRule}),r.a.createElement(w.a.Control,{name:"nameContainsValue",placeholder:a.name})),r.a.createElement("div",{className:"tag-rule-option"},r.a.createElement(w.a.Check,{type:"radio",label:"Assigned category matching: ",name:"ruleOption",id:"formHorizontalRadios4",onClick:this.setCategoryRule}),r.a.createElement("b",null,a.assignedCategory))),r.a.createElement(x.a.Footer,null,r.a.createElement(I.a,{variant:"secondary",onClick:o},"Close"),r.a.createElement(I.a,{variant:"primary",type:"submit"},"Save Changes")))))}}]),t}(n.Component)),L=a(69),F=a.n(L),z=(a(162),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={openCategoryEdit:!1,openTagEdit:!1,selectedCategory:void 0,selectedTag:void 0},a.renderCategoryEdit=function(e){return function(e,t){["select-option","create-option"].includes(t.action)&&a.setState({openCategoryEdit:!0,selectedCategory:e.value})}},a.renderTagEdit=function(e){return function(e,t){["select-option","create-option"].includes(t.action)&&a.setState({openTagEdit:!0,selectedTag:e[0].value})}},a.handleCategoryClose=function(){a.setState({openCategoryEdit:!1})},a.handleTagClose=function(){a.setState({openTagEdit:!1})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.transaction,a=e.allCategories,n=e.allTags,o=e.setError,c=e.setSuccess,l=e.accountId,s=e.getSummaryData,i=this.state,u=i.openCategoryEdit,m=i.openTagEdit,d=i.selectedCategory,h=i.selectedTag,g=t.tags.map(function(e){return{label:e,value:e}});return r.a.createElement(f.a.Item,{className:"transaction-row"},r.a.createElement(E.a,null,r.a.createElement(b.a,null,r.a.createElement(O.a,{xs:5,className:"category-transactions-name"},t.name),r.a.createElement(O.a,{xs:2,className:"category-transactions-name"},r.a.createElement(F.a,{options:a,defaultValue:d,onChange:this.renderCategoryEdit(t)})),r.a.createElement(O.a,{xs:3,className:"category-transactions-name"},r.a.createElement(F.a,{isMulti:!0,onChange:this.renderTagEdit(t),defaultValue:g,options:n})),r.a.createElement(O.a,{className:"category-transactions"},Math.round(t.amount))),r.a.createElement(V,{transaction:t,selectedCategory:d,show:u,handleClose:this.handleCategoryClose,setError:o,setSuccess:c,accountId:l,getSummaryData:s}),r.a.createElement(H,{transaction:t,selectedCategory:d,selectedTag:h,show:m,handleClose:this.handleTagClose,setError:o,setSuccess:c,accountId:l,getSummaryData:s})))}}]),t}(n.Component)),B=(a(183),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).sortTransactions=function(e){return e.slice().sort(function(e,t){return t.amount-e.amount})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.transactions;return r.a.createElement(f.a,null,this.sortTransactions(t).map(function(t){return r.a.createElement(z,Object.assign({key:t.transaction_id,transaction:t},e.props))}))}}]),t}(n.Component)),P=a(108),J=a.n(P),W=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.open,a=this.props.category;return r.a.createElement("div",null,r.a.createElement("div",{onClick:function(){return e.setState({open:!t})}},r.a.createElement(N,{categoryName:a.category,amount:a.amount})),r.a.createElement(J.a,{in:t},r.a.createElement("div",null,r.a.createElement(B,Object.assign({transactions:a.transactions},this.props)))))}}]),t}(n.Component),U=(a(184),function(e,t){var a=q(t,"transaction_id"),n=q(t,"name"),r=q(t,"name_contains"),o=q(t,"category_id");return e.map(function(e){return G(e,a,n,r,o)})}),K=function(e,t,a){return e.map(function(e){var n=X(e.tags,t);return Object.assign(e,{show:a?!n:n})})},Q=function(e,t){var a=t.filter(function(e){return"transaction_id"===e.target_type}),n=$(a,"transaction_id"),r=t.filter(function(e){return"name"===e.target_type}),o=$(r,"name"),c=t.filter(function(e){return"name_contains"===e.target_type}),l=$(c,"name_contains"),s=t.filter(function(e){return"category"===e.target_type}),i=$(s,"category");return e.map(function(e){var t=n[e.transaction_id]||[],a=o[e.name]||[],r=Object.keys(l).flatMap(function(t){return e.name.toLowerCase().includes(t.toLowerCase())?l[t]:[]}),c=i[e.assignedCategory]||[],s=Array.from(new Set(t.concat(a).concat(r).concat(c)));return Object.assign(e,{tags:s})})},X=function(e,t){return e.filter(function(e){return t.includes(e)}).length>0},Y=function(e,t,a){return e.filter(function(e){return e.target_type===t}).reduce(function(e,t){return e[t.target_value]=t[a],e},{})},$=function(e,t){return Y(e,t,"tags")},q=function(e,t){return Y(e,t,"category")},G=function(e,t,a,n,r){return Object.assign(e,{assignedCategory:Z(e,t,a,n,r)})},Z=function(e,t,a,n,r){if(t.hasOwnProperty(e.transaction_id))return t[e.transaction_id];if(a.hasOwnProperty(e.name))return a[e.name];for(var o=0,c=Object.keys(n);o<c.length;o++){var l=c[o];if(e.name.toLowerCase().includes(l.toLowerCase()))return n[l]}return r.hasOwnProperty(e.category_id)?r[e.category_id]:e.category.length>0?e.category[0]:"N/A"},ee=function(e){var t=e.filter(function(e){return e.show}).reduce(function(e,t){return e.hasOwnProperty(t.assignedCategory)?(e[t.assignedCategory].amount+=t.amount,e[t.assignedCategory].transactions.push(t)):e[t.assignedCategory]={amount:t.amount,transactions:[t]},e},{});return Object.keys(t).map(function(e){return{category:e,amount:t[e].amount,transactions:t[e].transactions}})},te=function(e,t,a,n,r){var o=U(e,t),c=Q(o,a);return K(c,n,r)},ae={months:["January","February","March","April","May","June","July","August","September","October","November","December"]},ne=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={error:null,success:null,selectTags:["exclude"],shouldExcludeTags:!0,currentYear:2019},a.sortCategories=function(e){return e.slice().sort(function(e,t){return t.amount-e.amount})},a.setError=function(e){return a.setState({error:e})},a.setSuccess=function(e){return a.setState({success:e})},a.handleActiveTagChange=function(e){return a.setState({selectTags:e.map(function(e){return e.value})})},a.updateMonth=function(e,t){e.value!==a.props.currentMonth&&a.props.updateMonth(e.value)},a.toggleShouldExcludeTags=function(e){"exclude"===e.target.id?a.setState({shouldExcludeTags:!0}):a.setState({shouldExcludeTags:!1})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.accountId,n=t.summaryData,o=t.getSummaryData,c=t.currentMonth;if(n){var l=n.tags,s=n.categories,i=n.tagRules,u=n.categoryRules,m=n.transactions;0===s.length&&m.length>0&&o();var d=this.state,h=d.error,g=d.success,p=d.selectTags,y=d.shouldExcludeTags,v=te(m,u,i,p,y),C=ee(v),j=C.map(function(e){return e.amount}).reduce(function(e,t){return e+t},0),S=ae.months.map(function(e){return{value:e,label:e}});return r.a.createElement("div",{className:"summary-container"},r.a.createElement(E.a,null,r.a.createElement(b.a,{className:"action-alerts"},r.a.createElement(O.a,{xs:12},h&&r.a.createElement(T.a,{variant:"danger"},h),g&&r.a.createElement(T.a,{variant:"success"},g))),r.a.createElement(b.a,{className:"summary-controller"},r.a.createElement(O.a,{xs:12},r.a.createElement(f.a,null,r.a.createElement(f.a.Item,{className:"controller-section"},r.a.createElement(E.a,null,r.a.createElement(b.a,{className:"date-tag-select"},r.a.createElement(O.a,{xs:1},r.a.createElement("div",null,"Date")),r.a.createElement(O.a,{xs:3},r.a.createElement(k.a,{className:"active-date",label:"some label",defaultValue:S.find(function(e){return e.value===c}),options:S,onChange:this.updateMonth}))),r.a.createElement(b.a,{className:"date-tag-select"},r.a.createElement(O.a,{xs:1},r.a.createElement("div",null,"Tags")),r.a.createElement(O.a,{xs:3},r.a.createElement(k.a,{className:"active-tags",isMulti:!0,tags:!0,value:p.map(function(e){return{value:e,label:e}}),options:l.map(function(e){return{value:e,label:e}}),onChange:this.handleActiveTagChange}))),r.a.createElement(b.a,{className:"toggle-tags"},r.a.createElement(O.a,{xs:3},r.a.createElement(w.a.Check,{defaultChecked:!0,type:"radio",label:"Exclude tags",name:"excludeTags",id:"exclude",onClick:this.toggleShouldExcludeTags})),r.a.createElement(O.a,{xs:3},r.a.createElement(w.a.Check,{type:"radio",label:"Only show tags",name:"excludeTags",id:"notExclude",onClick:this.toggleShouldExcludeTags})))))))),r.a.createElement(b.a,null,r.a.createElement(O.a,{xs:12},r.a.createElement(f.a,null,this.sortCategories(C).map(function(t){return r.a.createElement(W,{key:t.category,category:t,allCategories:s.map(function(e){return{value:e,label:e}}),allTags:l.map(function(e){return{value:e,label:e}}),setError:e.setError,setSuccess:e.setSuccess,accountId:a,getSummaryData:o})}),r.a.createElement(f.a.Item,{className:"total-section entire-total"},r.a.createElement(E.a,null,r.a.createElement(b.a,null,r.a.createElement(O.a,{xs:9},"Total"),r.a.createElement(O.a,{className:"category-subtotal"},Math.round(j))))))))))}return r.a.createElement("div",null,"Loading data...")}}]),t}(n.Component),re={loadTransactions:function(e,t){var a=ae.months.indexOf(t)+1;return fetch("/api/transactions?month=".concat(a),{headers:D.header()}).then(function(e){return e.json()}).catch(function(e){console.warn("loadTransaction failed: "),console.warn(e)})},loadCategoryRules:function(e){return fetch("/api/category_rules",{headers:D.header()}).then(function(e){return e.json()}).catch(function(e){console.warn("loadCategoryRules failed: "),console.warn(e)})},loadTagRules:function(e){return fetch("/api/tag_rules",{headers:D.header()}).then(function(e){return e.json()}).catch(function(e){console.warn("loadTagRules failed: "),console.warn(e)})},loadCategories:function(e){return fetch("/api/categories",{headers:D.header()}).then(function(e){return e.json()}).catch(function(e){console.warn("loadCategories failed: "),console.warn(e)})},loadTags:function(e){return fetch("/api/tags",{headers:D.header()}).then(function(e){return e.json()}).catch(function(e){console.warn("loadTags failed: "),console.warn(e)})}},oe=a(208),ce=a(205),le=a(204),se=(a(188),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).homeHandler=function(){return a.props.history.push("/")},a.logoutHandler=function(){return a.props.history.push("/logout")},a.accountHandler=function(){return a.props.history.push("/account")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(ce.a,{className:"walet-navbar",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(ce.a.Brand,{href:"#",onClick:this.homeHandler},"Walet"),r.a.createElement(ce.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(ce.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(le.a,{className:"mr-auto"}),r.a.createElement(le.a,null,r.a.createElement(le.a.Link,{onClick:this.accountHandler},"Account"),r.a.createElement(le.a.Link,{className:"logout",onClick:this.logoutHandler},"Logout"))))}}]),t}(n.Component)),ie=Object(oe.a)(se),ue=function(e){var t=function(t){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(i.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={accountId:null},t.handleError=function(e){t.setState({accountId:null}),D.removeToken(),t.props.history.push("/login")},t}return Object(m.a)(a,t),Object(s.a)(a,[{key:"componentWillMount",value:function(){var e=this;fetch("/api/validate/account",{headers:D.header()}).then(function(e){return e.json()}).then(function(t){return e.setState({accountId:t.result})}).catch(this.handleError)}},{key:"render",value:function(){return this.state.accountId?r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,null),r.a.createElement(e,Object.assign({},this.props,{accountId:this.state.accountId}))):r.a.createElement(ie,null)}}]),a}(n.Component);return Object(oe.a)(t)},me=ue(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={transactions:void 0,categoryRules:void 0,tagRules:void 0,tags:void 0,categories:void 0,currentMonth:ae.months[(new Date).getMonth()]},a.updateMonth=function(e){a.setState({currentMonth:e},function(){return a.getSummaryData(e)})},a.getSummaryData=function(){var e=a.props.accountId;return Promise.all([re.loadTransactions(e,a.state.currentMonth),re.loadCategoryRules(e),re.loadTagRules(e),re.loadTags(e),re.loadCategories(e)]).then(function(e){var t=Object(g.a)(e,5),n=t[0],r=t[1],o=t[2],c=t[3],l=t[4];a.setState({transactions:n.result,categoryRules:r.result,tagRules:o.result,tags:c.result.slice().sort(),categories:l.result.slice().sort()})}).catch(function(e){console.error("failed loading summary data"),console.error(e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getSummaryData()}},{key:"render",value:function(){var e=this.props.accountId,t=this.state,a=t.transactions,n=t.tags,o=t.categories,c=t.tagRules,l=t.categoryRules,s=a&&n&&o&&c&&l?{transactions:a,tags:n,categories:o,tagRules:c,categoryRules:l}:void 0;return r.a.createElement(ne,{accountId:e,summaryData:s,getSummaryData:this.getSummaryData,updateMonth:this.updateMonth,currentMonth:this.state.currentMonth})}}]),t}(n.Component)),de=(a(191),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={authRedirectUrl:void 0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/auth/login").then(function(e){return e.json()}).then(function(t){return e.setState({authRedirectUrl:t.result})}).catch(function(e){return console.error("failed to retrieve authentication url")})}},{key:"render",value:function(){var e=this.state.authRedirectUrl;return r.a.createElement("div",{className:"login-section"},r.a.createElement("div",{className:"login-logo"},"Walet"),e&&r.a.createElement("a",{href:e},r.a.createElement(I.a,{variant:"primary",size:"lg",block:!0},"Login")))}}]),t}(n.Component)),he=a(206),ge=function(){return D.removeToken(),r.a.createElement(he.a,{to:"/"})},pe=a(110),fe=function(){return Object(pe.parse)(window.location.search,{ignoreQueryPrefix:!0})},ye=function(){var e=fe().jwt;return D.saveToken(e),r.a.createElement(he.a,{to:"/"})},Ee=a(37),ve=a.n(Ee),be=a(41),Ce=a.n(be),Oe=a(111),je=a.n(Oe),Te=(a(197),ue(function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={accounts:[]},a.handleOnSuccess=function(e,t){var n={publicToken:e},r=Object(R.a)({},{"Content-Type":"application/json"},D.header());fetch("/api/plaid_accounts",{headers:r,method:"POST",body:JSON.stringify(n)}).then(function(e){return a.refreshAccounts()})},a.handleOnExit=function(){console.log("customer exited")},a.refreshAccounts=function(){return fetch("/api/plaid_accounts",{headers:D.header()}).then(function(e){return e.json()}).then(function(e){return a.setState({accounts:e.result})})},a.formatInstitution=function(e){return e.split("_").map(function(e){return ve.a.upperFirst(e)}).join(" ")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.state.accounts.length||this.refreshAccounts()}},{key:"formatAccountDescription",value:function(e){var t=e.official_names.map(function(e){return ve.a.upperFirst(ve.a.toLower(e))}),a=e.names.map(function(e){return ve.a.upperFirst(ve.a.toLower(e))}).filter(function(e){return!t.includes(e)});return ve.a.compact(t.concat(a)).join(", ")}},{key:"render",value:function(){var e=this,t=this.state.accounts;return r.a.createElement(E.a,null,r.a.createElement(b.a,null,r.a.createElement(O.a,{xs:12},r.a.createElement("h2",null,"Accounts"),r.a.createElement(je.a,{clientName:"walet",env:"development",product:["auth","transactions"],publicKey:"d9f0a56826f5d4249fdad6f82c89d4",onExit:this.handleOnExit,onSuccess:this.handleOnSuccess},"Connect Bank"))),r.a.createElement("div",{className:"linked-accounts"},t.map(function(t){return r.a.createElement(b.a,{key:t.item_id,className:"account-row"},r.a.createElement(Ce.a,{style:{width:"40rem"}},r.a.createElement(Ce.a.Body,null,r.a.createElement(Ce.a.Title,null,e.formatInstitution(t.institution_id)),r.a.createElement(Ce.a.Text,null,e.formatAccountDescription(t)),r.a.createElement(Ce.a.Link,{href:"#"},"Remove"))))})))}}]),t}(n.Component))),ke=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{exact:!0,path:"/",component:me}),r.a.createElement(h.a,{exact:!0,path:"/account",component:Te}),r.a.createElement(h.a,{exact:!0,path:"/login",component:de}),r.a.createElement(h.a,{exact:!0,path:"/logout",component:ge}),r.a.createElement(h.a,{exact:!0,path:"/auth",component:ye}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e,t,a){}},[[114,1,2]]]);
//# sourceMappingURL=main.37db95b7.chunk.js.map