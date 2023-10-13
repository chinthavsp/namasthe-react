
const parent=React.createElement('div',{id:"parent",xyz:"abc",},React.createElement('div',{id:"child",xyz:"abc",},React.createElement('h1',{id:"child",xyz:"abc",},"Hello react im New here")));

console.log(parent,"abc")
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);