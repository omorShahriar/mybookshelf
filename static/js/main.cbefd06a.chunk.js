(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(28)},24:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),c=a.n(r),s=a(8),l=a(1),i=a(2),h=a(5),u=a(3),m=a(6),b="https://reactnd-books-api.udacity.com",d=localStorage.token;d||(d=localStorage.token=Math.random().toString(36).substr(-8));var f={Accept:"application/json",Authorization:d},k=function(e,t){return fetch("".concat(b,"/books/").concat(e.id),{method:"PUT",headers:Object(s.a)({},f,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},p=function(e){return fetch("".concat(b,"/search"),{method:"POST",headers:Object(s.a)({},f,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={selectedShelf:a.props.book.shelf||"move"},a.handleChange=function(e){a.setState({selectedShelf:e.target.value},function(){a.props.changeShelf({shelf:a.state.selectedShelf,book:a.props.book})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("li",null,o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(this.props.book.imageLinks.thumbnail,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{value:this.state.selectedShelf,onChange:this.handleChange},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))),o.a.createElement("div",{className:"book-title"},this.props.book.title),o.a.createElement("div",{className:"book-authors"},this.props.book.authors)))}}]),t}(o.a.Component),v=function(e){var t=e.heading,a=e.books,n=e.changeShelf;return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},t),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},a.map(function(e){return o.a.createElement(g,{key:e.id,book:e,changeShelf:n})}))))},E=a(4),y=function(e){var t=e.books,a=e.changeShelf,n=function(e){if(t.length)return t.filter(function(t){return t.shelf===e})};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement(v,{heading:"Currently Reading",books:n("currentlyReading"),changeShelf:a}),o.a.createElement(v,{heading:"Want To Read",books:n("wantToRead"),changeShelf:a}),o.a.createElement(v,{heading:"Read",books:n("read"),changeShelf:a}))),o.a.createElement(E.a,{to:"search-book"},o.a.createElement("div",{className:"open-search"},o.a.createElement("button",null,"Add a book"))))},S=(a(24),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",searchedBooks:[]},a.handleSearch=function(e){a.setState({query:e.target.value},function(){p(a.state.query).then(function(e){return Array.isArray(e)?a.setState({searchedBooks:e}):a.setState({searchedBooks:[]})}).catch(function(e){return console.log(e)})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(E.a,{to:"/"},o.a.createElement("button",{className:"close-search"},"Close")),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:this.state.query,onChange:this.handleSearch}))),o.a.createElement("div",{className:"search-books-results"},o.a.createElement("ol",{className:"books-grid"},this.state.searchedBooks.map(function(t){return o.a.createElement(g,{key:t.id,book:t,changeShelf:e.props.changeShelf})}))))}}]),t}(o.a.Component));console.log("/mybookshelf");var j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],loading:!0},a.changeShelf=function(e){var t=e.shelf,n=e.book;if(a.state.books.some(function(e){return e.id===n.id}))a.setState(function(e){return{books:e.books.map(function(e){return e.id===n.id?Object(s.a)({},e,{shelf:t}):e})}},function(){return k(n,t)});else{var o=Object(s.a)({},n,{shelf:t});a.setState(function(e){return{books:e.books.concat(o)}},function(){return k(n,t)})}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(b,"/books"),{headers:f}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){return e.setState({books:t,loading:!1})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"app"},this.state.loading?o.a.createElement("h1",null,"Loading"):o.a.createElement(E.b,null,o.a.createElement(y,{path:"/mybookshelf/",books:this.state.books,changeShelf:this.changeShelf}),o.a.createElement(S,{path:"/mybookshelf/search-book",changeShelf:this.changeShelf})))}}]),t}(o.a.Component);a(26);c.a.render(o.a.createElement(j,null),document.getElementById("root"))}},[[13,2,1]]]);
//# sourceMappingURL=main.cbefd06a.chunk.js.map