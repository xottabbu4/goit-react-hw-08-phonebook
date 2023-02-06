"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[752],{48:function(t,e,n){n.r(e),n.d(e,{default:function(){return L}});var r=n(791),a=n(434),i=n(634),u="NOT_FOUND";var o=function(t,e){return t===e};function c(t,e){var n="object"===typeof e?e:{equalityCheck:e},r=n.equalityCheck,a=void 0===r?o:r,i=n.maxSize,c=void 0===i?1:i,s=n.resultEqualityCheck,l=function(t){return function(e,n){if(null===e||null===n||e.length!==n.length)return!1;for(var r=e.length,a=0;a<r;a++)if(!t(e[a],n[a]))return!1;return!0}}(a),f=1===c?function(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:u},put:function(t,n){e={key:t,value:n}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(t,e){var n=[];function r(t){var r=n.findIndex((function(n){return e(t,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return u}return{get:r,put:function(e,a){r(e)===u&&(n.unshift({key:e,value:a}),n.length>t&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(c,l);function p(){var e=f.get(arguments);if(e===u){if(e=t.apply(null,arguments),s){var n=f.getEntries(),r=n.find((function(t){return s(t.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return p.clearCache=function(){return f.clear()},p}function s(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"===typeof t}))){var n=e.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return e}function l(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var i,u=0,o={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(o=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=o,f=l.memoizeOptions,p=void 0===f?n:f,m=Array.isArray(p)?p:[p],d=s(r),v=t.apply(void 0,[function(){return u++,c.apply(null,arguments)}].concat(m)),h=t((function(){for(var t=[],e=d.length,n=0;n<e;n++)t.push(d[n].apply(null,arguments));return i=v.apply(null,t)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:v,dependencies:d,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),h};return a}var f=l(c),p=function(t){return t.contacts.contacts},m=function(t){return t.contacts.isLoading},d=f([p,function(t){return t.filter}],(function(t,e){if(t)return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),v="ContactList_contactList__UFVCg",h="ContactList_contactItem__ppNQ5",y="ContactList_contactInfo__Sgq6p",_="ContactList_contactItemButton__ZsdZP",x=n(184),g=function(){var t=(0,a.v9)(d),e=(0,a.I0)();if(t)return(0,x.jsx)("ul",{className:v,children:t.map((function(t){return(0,x.jsxs)("li",{className:h,children:[(0,x.jsx)("p",{className:y,children:t.name}),(0,x.jsx)("p",{className:y,children:t.number}),(0,x.jsx)("button",{className:_,type:"button",onClick:function(){var n=(0,i.GK)(t.id);e(n)},children:"Delete"})]},t.id)}))})},b=n(439),j="ContactForm_form__dhl+T",C="ContactForm_formText__qGoZy",N="ContactForm_formInput__GszVU",k="ContactForm_formButton__TN6Jq",F=function(){var t=(0,a.I0)(),e=(0,a.v9)(p),n=(0,r.useState)(""),u=(0,b.Z)(n,2),o=u[0],c=u[1],s=(0,r.useState)(""),l=(0,b.Z)(s,2),f=l[0],m=l[1],d=function(t){"name"===t.target.name&&c(t.target.value),"number"===t.target.name&&m(t.target.value)};return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{children:(0,x.jsxs)("form",{className:j,onSubmit:function(n){n.preventDefault();var r={name:o,number:f},a=e.find((function(t){return t.name===o}));a?alert("Already in list"):(t((0,i.uK)(r)),n.target.reset())},children:[(0,x.jsx)("p",{className:C,children:"Name"}),(0,x.jsx)("input",{className:N,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:d}),(0,x.jsx)("p",{className:C,children:"Number"}),(0,x.jsx)("input",{className:N,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:d}),(0,x.jsx)("button",{className:k,type:"submit",children:"Add contact"})]})})})},w=n(808),A={filterLabel:"Filter_filterLabel__+pnW-",filterText:"Filter_filterText__QGy-k",filterInput:"Filter_filterInput__1Cysk"},I=function(){var t=(0,a.I0)();if(void 0!==(0,a.v9)(p))return(0,x.jsx)("div",{className:A.filterSection,children:(0,x.jsxs)("label",{className:A.filterLabel,children:[(0,x.jsx)("p",{className:A.filterText,children:"Find contacts by name"}),(0,x.jsx)("input",{className:A.filterInput,type:"text",onChange:function(e){var n=(0,w.x)(e.target.value);t(n)}})]})})};function L(){var t=(0,a.I0)(),e=(0,a.v9)(m);return(0,r.useEffect)((function(){t((0,i.yF)())}),[t]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("title",{children:"Phonebook"}),(0,x.jsx)(F,{}),(0,x.jsx)(I,{}),(0,x.jsx)("div",{children:e&&"Request in progress..."}),(0,x.jsx)(g,{})]})}}}]);
//# sourceMappingURL=752.8f8f907b.chunk.js.map