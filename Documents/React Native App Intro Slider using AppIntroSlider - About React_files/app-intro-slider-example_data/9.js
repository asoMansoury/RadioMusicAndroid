(self.webpackJsonp=self.webpackJsonp||[]).push([[9,7],{393:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n(39),r=n(1),s=n(618),a=n.n(s),c=n(222),l=n(169),d=n(215),p=n(619),h=n(620),m=n(621),u=n(7);const g=e=>{let t=e.sessionID,n=e.onOpenFullview,i=e.theme;const s=Object(m.a)(t);return o.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:Object(r.css)(f.icon,"light"===i?f.externalLight:f.externalDark),onClick:n})};var b=Object(u.a)(class extends o.PureComponent{render(){const e=this.props,t=e.name,n=e.sessionID,i=e.onOpenFullview,s=e.theme;return o.createElement("div",{className:Object(r.css)(f.header)},o.createElement("h1",{className:Object(r.css)(f.title)},t),o.createElement("div",{className:Object(r.css)(f.iconContainer)},o.createElement(h.a,{content:o.createElement("p",{className:Object(r.css)(f.description)},"description")},o.createElement("button",{className:Object(r.css)(f.icon,"light"===s?f.infoLight:f.infoDark)})),n?o.createElement(g,{theme:s,sessionID:n,onOpenFullview:i}):null))}});const f=r.StyleSheet.create({header:{display:"flex",flexDirection:"row",alignItems:"center",minWidth:0,margin:".25em .75em",backgroundColor:"inherit"},title:{lineHeight:1,fontSize:"1.2em",fontWeight:500,margin:0},iconContainer:{display:"flex",flexDirection:"row",margin:"0 .25em",backgroundColor:"inherit"},icon:{height:16,width:16,margin:8,backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundColor:"transparent",border:0,outline:0,opacity:.3,transition:".2s",":hover":{opacity:.8}},description:{margin:16},infoLight:{backgroundImage:`url(${n(623)})`},infoDark:{backgroundImage:`url(${n(624)})`},externalLight:{backgroundImage:`url(${n(512)})`},externalDark:{backgroundImage:`url(${n(513)})`}});var v=n(556),k=n(514),w=n(625),y=n(216),x=n(473);class P extends o.PureComponent{render(){const e=this.props,t=e.isResolving,n=e.loadingMessage,i=e.devicePreviewShown,s=e.devicePreviewPlatform,a=e.sdkVersion,c=e.onToggleDevicePreview,l=e.onChangeDevicePreviewPlatform,d="web"!==s||x.a.isAvailable("PLATFORM_WEB",a)?s:"android";return o.createElement(y.a,{type:t?"loading":void 0},o.createElement("div",null,t?o.createElement(w.a,null,n):null),o.createElement("div",{className:Object(r.css)(O.right)},o.createElement(v.a,{checked:i,onChange:c,label:"Preview"}),o.createElement(k.a,{disabled:!i,options:x.a.isAvailable("PLATFORM_WEB",this.props.sdkVersion)?[{label:"iOS",value:"ios"},{label:"Android",value:"android"},{label:"Web",value:"web"}]:[{label:"iOS",value:"ios"},{label:"Android",value:"android"}],value:d,onValueChange:l})))}}const O=r.StyleSheet.create({loadingText:{textOverflow:"ellipsis",whiteSpace:"nowrap",padding:".5em"},right:{display:"flex",flex:1,justifyContent:"flex-end"}});var C=n(626),E=n(718),j=n(660),S=n(2),D=n(48),_=n(663);function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const I=`snack-session-${a()()}`;t.default=Object(u.a)(Object(_.a)(Object(i.b)(e=>({testConnectionMethod:e.splitTestSettings.defaultConnectionMethod}))(class extends o.PureComponent{constructor(e){super(e),$(this,"_handleShowDeviceInstructions",()=>{this.setState({currentModal:"device-instructions"})}),$(this,"_handleHideModal",()=>{this.setState({currentModal:null})}),$(this,"_handleOpenFullView",()=>{try{this.props.entry&&"content"in this.props.entry.item&&localStorage.setItem(I,JSON.stringify({code:this.props.entry.item.content,platform:this.props.query.platform}))}catch(e){}}),$(this,"_toggleDevicePreview",()=>this.setState(e=>({devicePreviewShown:!e.devicePreviewShown}))),$(this,"_changeDevicePreviewPlatform",e=>this.setState({devicePreviewPlatform:e})),$(this,"_changeConnectionMethod",e=>this.setState({deviceConnectionMethod:e}));let t=this.props.testConnectionMethod||"device-id";"account"===t&&(t="qr-code"),this.state={devicePreviewShown:"false"!==e.query.preview,devicePreviewPlatform:["web","ios","android"].includes(e.query.platform)?e.query.platform:"web",deviceConnectionMethod:t,currentModal:null}}render(){const e=this.state,t=e.devicePreviewShown,i=e.devicePreviewPlatform,s=this.props,a=s.name,h=s.description,m=s.channel,u=s.entry,g=s.params,f=s.isResolving,v=s.loadingMessage,k=s.theme;return o.createElement("main",{className:Object(r.css)(M.container,"light"===k?M.backgroundLight:M.backgroundDark)},o.createElement(p.a,{name:a,description:h,params:g}),o.createElement(d.a,null,o.createElement(b,{name:a,description:h,sessionID:I,onOpenFullview:this._handleOpenFullView}),o.createElement("a",{href:"https://expo.io",target:"_blank",rel:"noopener noreferrer",className:Object(r.css)(M.logo)},o.createElement("img",{className:Object(r.css)(M.wordmark),src:n("light"===k?832:833)}))),o.createElement("div",{className:Object(r.css)(M.editorArea)},o.createElement(j.default,{path:u.item.path,value:u.item.content,onValueChange:this.props.onChangeCode,lineNumbers:"off"}),t?o.createElement(l.a,{load:()=>n.e(5).then(n.bind(null,616))},e=>{let t=e.loaded,n=e.data;return t&&n?o.createElement(n,{screenOnly:!0,channel:m,snackId:g.id,sdkVersion:this.props.sdkVersion,platform:i,onChangePlatform:this._changeDevicePreviewPlatform,className:Object(r.css)(M.preview),payerCode:this.props.query.appetizePayerCode,onClickRunOnPhone:this._handleShowDeviceInstructions,canUserAuthenticate:!1,wasUpgraded:this.props.wasUpgraded,previewQueue:"secondary"}):null}):null),o.createElement(E.a,{large:!0,isEmbedded:!0,visible:"device-instructions"===this.state.currentModal,onDismiss:this._handleHideModal,sdkVersion:this.props.sdkVersion,onChangeMethod:this._changeConnectionMethod,method:this.state.deviceConnectionMethod,channel:this.props.channel,snackId:this.props.params.id,setDeviceId:this.props.setDeviceId,deviceId:this.props.deviceId}),o.createElement("div",{className:Object(r.css)(M.footer)},o.createElement(P,{isResolving:f,loadingMessage:v,devicePreviewShown:t,devicePreviewPlatform:i,sdkVersion:this.props.sdkVersion,onToggleDevicePreview:this._toggleDevicePreview,onChangeDevicePreviewPlatform:this._changeDevicePreviewPlatform})),Object(D.c)(this.props.userAgent)?o.createElement("div",{className:Object(r.css)(M.button)},o.createElement(c.a,{sdkVersion:this.props.sdkVersion,channel:m,snackId:this.props.params.id})):null,o.createElement(C.a,{fileEntries:this.props.fileEntries,onEntriesChange:this.props.onFileEntriesChange,dependencyQueryParam:this.props.dependencyQueryParam,initialSdkVersion:this.props.initialSdkVersion,sdkVersion:this.props.sdkVersion,dependencies:this.props.dependencies,syncDependenciesAsync:this.props.syncDependenciesAsync,onOpenFullView:this._handleOpenFullView,sessionID:I}))}})));const M=r.StyleSheet.create({container:{display:"flex",flexDirection:"column",height:"100%",width:"100%",backgroundColor:S.a.background.light,color:S.a.text.light,minHeight:0},backgroundLight:{backgroundColor:S.a.background.light,color:S.a.text.light},backgroundDark:{backgroundColor:S.a.background.dark,color:S.a.text.dark},editorArea:{display:"flex",flex:1,flexDirection:"row",minHeight:0},editorPlaceholder:{display:"flex",flex:1},preview:{backgroundColor:"black"},logo:{display:"flex",flexDirection:"row",alignItems:"center",color:"#999",textDecoration:"none",whiteSpace:"nowrap","@media (max-width: 480px)":{display:"none"}},wordmark:{height:18,margin:"0 .75em"},footer:{"@media (max-width: 480px)":{display:"none"}},button:{backgroundColor:S.a.background.light,borderTop:`1px solid ${S.a.border}`,padding:".5em","@media (min-width: 480px)":{display:"none"}}})},456:function(e,t,n){"use strict";n.r(t),n.d(t,"syntax",function(){return o}),n.d(t,"ui",function(){return i});const o={text:"#5c6773",variable:"#5c6773",invalid:"#ff3333",constant:"#f08c36",comment:"#abb0b6",regexp:"#4dbf99",annotation:"#41a6d9",tag:"#e7c547",number:"#f08c36",string:"#86b300",property:"#41a6d9",value:"#0451a5",keyword:"#f2590c",operator:"#778899",predefined:"#FF00FF"},i={background:"#fafafa",text:"#5c6773",indent:{active:"#e0e0e0",inactive:"#ecebec"}}},457:function(e,t,n){"use strict";n.r(t),n.d(t,"syntax",function(){return o}),n.d(t,"ui",function(){return i});const o={text:"#d9d7ce",variable:"#d9d7ce",invalid:"#ff3333",constant:"#ff9d45",comment:"#5c6773",regexp:"#95e6cb",annotation:"#5ccfe6",tag:"#80d4ff",number:"#ff9d45",string:"#bae67e",property:"#5ccfe6",value:"#bae67e",keyword:"#ffae57",operator:"#778899",predefined:"#ff00ff"},i={background:"#212733",text:"#d9d7ce",indent:{active:"#393b41",inactive:"#494b51"}}},495:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return c});var o=n(456),i=n(457);const r=String.raw,s=e=>{let t=e.ui,n=e.syntax;return r`
  .prism-code {
    background-color: ${t.background};
    color: ${t.text};
  }

  .prism-code ::selection {
    background: rgba(0, 0, 0, 0.16);
  }

  .prism-code ::-moz-selection {
    background: rgba(0, 0, 0, 0.16);
  }

  .prism-code textarea {
    outline: 0;
  }

  .prism-code .token.tag,
  .prism-code .token.property {
    color: ${n.property};
  }

  .prism-code .token.function {
    color: ${n.constant};
  }

  .prism-code .token.entity {
    color: ${n.property};
  }

  .prism-code .token.string,
  .prism-code .token.selector,
  .prism-code .token.char,
  .prism-code .token.builtin,
  .prism-code .token.inserted {
    color: ${n.string};
  }

  .prism-code .token.regexp,
  .prism-code .token.variable {
    color: ${n.regexp};
  }

  .prism-code .token.keyword,
  .prism-code .token.atrule,
  .prism-code .token.tag > .token.punctuation,
  .prism-code .token.important {
    color: ${n.keyword};
  }

  .prism-code .token.attr-name {
    color: ${n.number};
  }

  .prism-code .token.attr-value {
    color: ${n.string};
  }

  .prism-code .token.markup,
  .prism-code .token.special {
    color: ${n.predefined};
  }

  .prism-code .token.comment,
  .prism-code .token.prolog,
  .prism-code .token.doctype,
  .prism-code .token.cdata {
    color: ${n.comment};
  }

  .prism-code .token.number {
    color: ${n.number};
  }

  .prism-code .token.constant,
  .prism-code .token.boolean,
  .prism-code .token.constant,
  .prism-code .token.symbol,
  .prism-code .token.deleted {
    color: ${n.constant};
  }

  .prism-code .token.operator,
  .prism-code .token.entity,
  .prism-code .token.url,
  .prism-code .language-css .token.string,
  .prism-code .style .token.string {
    color: ${n.operator};
  }

  .prism-code .token.punctuation {
    color: ${n.comment};
  }
`},a=s(o),c=s(i)},660:function(e,t,n){"use strict";n.r(t);n(64),n(10),n(477);var o=n(0),i=n.n(o),r=n(1),s=n(36),a=n.n(s),c=n(661),l=n.n(c),d=n(531),p=n.n(d),h=n(532),m=(n(533),n(534),n(535),n(536),n(537),n(538),n(662),n(7)),u=n(495);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const b=new Map;class f extends i.a.Component{constructor(){super(...arguments),g(this,"_highlight",e=>this.props.path.endsWith(".ts")||this.props.path.endsWith(".tsx")?Object(h.highlight)(e,h.languages.ts):this.props.path.endsWith(".js")?Object(h.highlight)(e,h.languages.jsx):this.props.path.endsWith(".json")?Object(h.highlight)(e,h.languages.json):this.props.path.endsWith(".md")?Object(h.highlight)(e,h.languages.markdown):p()(e)),g(this,"_editor",i.a.createRef())}static removePath(e){b.delete(e)}static renamePath(e,t){const n=b.get(e);b.delete(e),b.set(t,n)}componentDidUpdate(e){const t=this._editor.current;if(this.props.path!==e.path&&t){b.set(e.path,t.session);const n=b.get(this.props.path);t.session=n||{history:{stack:[],offset:-1}}}}render(){const e=this.props,t=e.value,n=e.lineNumbers,o=e.theme,s=e.onValueChange;return i.a.createElement("div",{className:Object(r.css)(v.container,"on"===n&&v.containerWithLineNumbers)},i.a.createElement(l.a,{ref:this._editor,value:t,onValueChange:s,highlight:e=>"on"===n?this._highlight(e).split("\n").map(e=>`<span class="${Object(r.css)(v.line)}">${e}</span>`).join("\n"):this._highlight(e),padding:"on"===n?0:8,className:a()(Object(r.css)(v.editor),"prism-code")}),i.a.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:"dark"===o?u.a:u.b}}))}}g(f,"defaultProps",{lineNumbers:"on"}),t.default=Object(m.a)(f);const v=r.StyleSheet.create({container:{flex:1,overflow:"auto"},containerWithLineNumbers:{paddingLeft:64},editor:{fontFamily:"var(--font-monospace)",fontSize:12,minHeight:"100%",counterReset:"line"},line:{":before":{position:"absolute",right:"100%",marginRight:26,textAlign:"right",opacity:.5,userSelect:"none",counterIncrement:"line",content:"counter(line)"}}})},832:function(e,t,n){e.exports=n.p+"assets/52001a8b742a278688f6b516f931d81b.png"},833:function(e,t,n){e.exports=n.p+"assets/e392635154a17bd759d3bbb77e72eada.png"}}]);