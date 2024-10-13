import{r as c,j as i}from "./index-DdNaUTch.js";const b=c.memo(({order:e,todo:t,todosToShow:n,setTodos:s})=>{const o= d=>{s(n.map(r=>r.id===d?{...r,isImportant:!r.isImportant}:r))},m= d=>{s(n.map(r=>r.id===d?{...r,isDone:!r.isDone}:r))},u= d=>{let r=!0;if(d.isImportant&&(r=confirm("This is an important task! Are you sure you want to delete it?")),r){const v=n.filter(l=>l.id!==d.id);s(v)}};return i.jsxs("div",{className:"todo-item_wrapper","data-testid":"todo-item",children:[i.jsxs("div",{className:"todo-item_info",children:[i.jsxs("span",{className:"todo-item_info__order",children:[e+1,"."]}),i.jsx("span",{className:t.isDone?"todo-item_info__title done":"todo-item_info__title",onClick:()=>m(t.id),title:t.title,children:t.title})]}),i.jsxs("div",{className:"todo-item_actions",children:[i.jsx("button",{onClick:()=>o(t.id),className:t.isImportant?"todo-item_actions__important checked":"todo-item_actions__important",children:"!"}),i.jsx("button",{className:"todo-item_actions__remove",onClick:()=>u(t),children:"🗑"})]})]})});var a=[];for(var h=0; h<256; ++h)a.push((h+256).toString(16).slice(1));function g(e, t=0){return(a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]).toLowerCase()}var p,y=new Uint8Array(16);function N(){if(!p&&(p=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!p))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return p(y)}var D=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const j={randomUUID:D};function f(e, t, n){if(j.randomUUID&&!t&&!e)return j.randomUUID();e=e||{};var s=e.random||(e.rng||N)();return s[6]=s[6]&15|64,s[8]=s[8]&63|128,g(s)}const I=({setTodos:e})=>{const[t,n]=c.useState(""),s= o=>{if(o.trim().length>=3){const m={id:f(),title:o.trim(),isDone:!1,isImportant:!1};e(u=>[m,...u]),n("")}};return i.jsxs("div",{className:"todo-input",children:[i.jsx("input",{className:"todo-input_input",placeholder:"What needs to be done?",value:t,onChange: o=>n(o.target.value),onKeyDown: o=>o.key==="Enter"&&s(t)}),i.jsx("button",{className:t.trim().length<3?"todo-input_btn inert":"todo-input_btn",onClick:t.trim().length>=3?()=>s(t):()=>alert("Todo title should be 3 or more letters length"),children:">"})]})},x=c.memo(({title:e,isActive:t,cb:n})=>i.jsx("button",{className:t?"filter-button active":"filter-button",onClick:n,children:e})),T=c.memo(({todos:e,setTodosToShow:t})=>{const[n,s]=c.useState({all:!0,active:!1,important:!1,done:!1}),o= l=>{s(_=>_[l]?{all:!0,active:!1,important:!1,done:!1}:{all:!1,active:!1,important:!1,done:!1,[l]:!_[l]})},m=()=>{n.all&&t([...e]),n.active&&t([...e].filter(l=>!l.isDone)),n.important&&t([...e].filter(l=>l.isImportant)),n.done&&t([...e].filter(l=>l.isDone))};c.useEffect(()=>{m()},[n]);const u=c.useCallback(()=>{o("all")},[]),d=c.useCallback(()=>{o("active")},[]),r=c.useCallback(()=>{o("important")},[]),v=c.useCallback(()=>{o("done")},[]);return i.jsxs("div",{className:"filters-section",children:[i.jsx("div",{className:"filters-section_counter",children:i.jsxs("span",{children:[e==null?void 0:e.map(l=>!l.isDone).filter(l=>l).length," left"]})}),i.jsxs("div",{className:"filters-section_filters",children:[i.jsx(x,{title:"All",isActive:n.all,cb:u}),i.jsx(x,{title:"Active",isActive:n.active,cb:d}),i.jsx(x,{title:"Important",isActive:n.important,cb:r}),i.jsx(x,{title:"Done",isActive:n.done,cb:v})]})]})}),k=[{id:f(),title:"Create your first todo",isDone:!1,isImportant:!1},{id:f(),title:"Mark the most important ones",isDone:!1,isImportant:!0},{id:f(),title:"Complete the task and delete it then",isDone:!0,isImportant:!1}],C=()=>{const[e,t]=c.useState(k),[n,s]=c.useState([...e]);return c.useEffect(()=>{s(e)},[e]),i.jsxs("div",{className:"todo-list_container",children:[i.jsx(I,{setTodos:t}),i.jsx("div",{className:"todo-list_list",children:n!=null&&n.length?n==null?void 0:n.map((o, m)=>i.jsx(b,{order:m,todo:o,todosToShow:n,setTodos:t},o.id)):i.jsx("div",{className:"todo-list_list__empty",children:"No tasks!"})}),i.jsx(T,{todos:e,setTodosToShow:s})]})},A=()=>i.jsxs("div",{className:"todo-page_container",children:[i.jsx("h1",{children:"todos"}),i.jsx(C,{})]});export{A as default};
