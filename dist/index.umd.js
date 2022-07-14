!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports,require("react"),require("prop-types"),require("d3-geo"),require("topojson-client"),require("d3-zoom"),require("d3-selection")):"function"==typeof define&&define.amd?define(["exports","react","prop-types","d3-geo","topojson-client","d3-zoom","d3-selection"],o):o((e=e||self).reactSimpleMaps=e.reactSimpleMaps||{},e.React,e.PropTypes,e.d3,e.topojson,e.d3,e.d3)}(this,(function(e,o,t,r,n,a,s){"use strict";var i="default"in o?o.default:o;t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var c=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u=function(e,o){var t={};for(var r in e)o.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},l=function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,o){var t=[],r=!0,n=!1,a=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(t.push(s.value),!o||t.length!==o);r=!0);}catch(e){n=!0,a=e}finally{try{!r&&i.return&&i.return()}finally{if(n)throw a}}return t}(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")},p=r.geoPath,f=u(r,["geoPath"]),d=o.createContext(),m=function(e){var t=e.width,r=e.height,n=e.projection,a=e.projectionConfig,s=u(e,["width","height","projection","projectionConfig"]),m=a.center||[],h=l(m,2),v=h[0],g=h[1],y=a.rotate||[],M=l(y,3),b=M[0],E=M[1],j=M[2],k=a.parallels||[],x=l(k,2),N=x[0],w=x[1],C=a.scale||null,O=o.useMemo((function(){return function(e){var o=e.projectionConfig,t=void 0===o?{}:o,r=e.projection,n=void 0===r?"geoEqualEarth":r,a=e.width,s=void 0===a?800:a,i=e.height,c=void 0===i?600:i;if("function"==typeof n)return n;var u=f[n]().translate([s/2,c/2]);return[u.center?"center":null,u.rotate?"rotate":null,u.scale?"scale":null,u.parallels?"parallels":null].forEach((function(e){e&&(u=u[e](t[e]||u[e]()))})),u}({projectionConfig:{center:v||0===v||g||0===g?[v,g]:null,rotate:b||0===b||E||0===E?[b,E,j]:null,parallels:N||0===N||w||0===w?[N,w]:null,scale:C},projection:n,width:t,height:r})}),[t,r,n,v,g,b,E,j,N,w,C]),T=o.useCallback(O,[O]),S=o.useMemo((function(){return{width:t,height:r,projection:T,path:p().projection(T)}}),[t,r,T]);return i.createElement(d.Provider,c({value:S},s))};m.propTypes={width:t.number,height:t.number,projection:t.oneOfType([t.string,t.func]),projectionConfig:t.object};var h=function(e){var o=e.width,t=void 0===o?800:o,r=e.height,n=void 0===r?600:r,a=e.projection,s=void 0===a?"geoEqualEarth":a,l=e.projectionConfig,p=void 0===l?{}:l,f=e.className,d=void 0===f?"":f,h=u(e,["width","height","projection","projectionConfig","className"]);return i.createElement(m,{width:t,height:n,projection:s,projectionConfig:p},i.createElement("svg",c({viewBox:"0 0 "+t+" "+n,className:"rsm-svg "+d},h)))};function v(e,o,t){var r=(e*t.k-e)/2,n=(o*t.k-o)/2;return[e/2-(r+t.x)/t.k,o/2-(n+t.y)/t.k]}function g(e,o){if(!("Topology"===e.type))return o?o(e.features||e):e.features||e;var t=n.feature(e,e.objects[Object.keys(e.objects)[0]]).features;return o?o(t):t}function y(e){return"Topology"===e.type?{outline:n.mesh(e,e.objects[Object.keys(e.objects)[0]],(function(e,o){return e===o})),borders:n.mesh(e,e.objects[Object.keys(e.objects)[0]],(function(e,o){return e!==o}))}:null}function M(e,o){return e?e.map((function(e,t){return c({},e,{rsmKey:"geo-"+t,svgPath:o(e)})})):[]}function b(e){var t=e.geography,r=e.parseGeographies,n=o.useContext(d).path,a=o.useState({}),s=l(a,2),i=s[0],u=s[1];o.useEffect((function(){var e;"undefined"!=typeof window&&(t&&("string"==typeof t?(e=t,fetch(e).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).catch((function(e){console.log("There was a problem when fetching the data: ",e)}))).then((function(e){e&&u({geographies:g(e,r),mesh:y(e)})})):u({geographies:g(t,r),mesh:y(t)})))}),[t,r]);var p=o.useMemo((function(){var e=i.mesh||{},o=function(e,o,t){return e&&o?{outline:c({},e,{rsmKey:"outline",svgPath:t(e)}),borders:c({},o,{rsmKey:"borders",svgPath:t(o)})}:{}}(e.outline,e.borders,n);return{geographies:M(i.geographies,n),outline:o.outline,borders:o.borders}}),[i,n]);return{geographies:p.geographies,outline:p.outline,borders:p.borders}}h.propTypes={width:t.number,height:t.number,projection:t.oneOfType([t.string,t.func]),projectionConfig:t.object,className:t.string};var E=function(e){var t=e.geography,r=e.children,n=e.parseGeographies,a=e.className,s=void 0===a?"":a,l=u(e,["geography","children","parseGeographies","className"]),p=o.useContext(d),f=p.path,m=p.projection,h=b({geography:t,parseGeographies:n}),v=h.geographies,g=h.outline,y=h.borders;return i.createElement("g",c({className:"rsm-geographies "+s},l),v&&v.length>0&&r({geographies:v,outline:g,borders:y,path:f,projection:m}))};E.propTypes={geography:t.oneOfType([t.string,t.object,t.array]),children:t.func,parseGeographies:t.func,className:t.string};var j=function(e){var t=e.geography,r=e.onMouseEnter,n=e.onMouseLeave,a=e.onMouseDown,s=e.onMouseUp,p=e.onFocus,f=e.onBlur,d=e.style,m=void 0===d?{}:d,h=e.className,v=void 0===h?"":h,g=u(e,["geography","onMouseEnter","onMouseLeave","onMouseDown","onMouseUp","onFocus","onBlur","style","className"]),y=o.useState(!1),M=l(y,2),b=M[0],E=M[1],j=o.useState(!1),k=l(j,2),x=k[0],N=k[1];return i.createElement("path",c({tabIndex:"0",className:"rsm-geography "+v,d:t.svgPath,onMouseEnter:function(e){N(!0),r&&r(e)},onMouseLeave:function(e){N(!1),b&&E(!1),n&&n(e)},onFocus:function(e){N(!0),p&&p(e)},onBlur:function(e){N(!1),b&&E(!1),f&&f(e)},onMouseDown:function(e){E(!0),a&&a(e)},onMouseUp:function(e){E(!1),s&&s(e)},style:m[b||x?b?"pressed":"hover":"default"]},g))};j.propTypes={geography:t.object,onMouseEnter:t.func,onMouseLeave:t.func,onMouseDown:t.func,onMouseUp:t.func,onFocus:t.func,onBlur:t.func,style:t.object,className:t.string};var k=o.memo(j),x=function(e){var t=e.fill,n=void 0===t?"transparent":t,a=e.stroke,s=void 0===a?"currentcolor":a,l=e.step,p=void 0===l?[10,10]:l,f=e.className,m=void 0===f?"":f,h=u(e,["fill","stroke","step","className"]),v=o.useContext(d).path;return i.createElement("path",c({d:v(r.geoGraticule().step(p)()),fill:n,stroke:s,className:"rsm-graticule "+m},h))};x.propTypes={fill:t.string,stroke:t.string,step:t.array,className:t.string};var N=o.memo(x);function w(e){var t=e.center,r=e.filterZoomEvent,n=e.onMoveStart,i=e.onMoveEnd,c=e.onMove,u=e.translateExtent,p=void 0===u?[[-1/0,-1/0],[1/0,1/0]]:u,f=e.scaleExtent,m=void 0===f?[1,8]:f,h=e.zoom,g=void 0===h?1:h,y=o.useContext(d),M=y.width,b=y.height,E=y.projection,j=l(t,2),k=j[0],x=j[1],N=o.useState({x:0,y:0,k:1}),w=l(N,2),C=w[0],O=w[1],T=o.useRef({x:0,y:0,k:1}),S=o.useRef(),P=o.useRef(),z=o.useRef(!1),Z=l(p,2),G=Z[0],L=Z[1],B=l(G,2),F=B[0],q=B[1],D=l(L,2),U=D[0],W=D[1],R=l(m,2),A=R[0],K=R[1];return o.useEffect((function(){var e=s.select(S.current);var o=a.zoom().filter((function(e){return r?r(e):!!e&&(!e.ctrlKey&&!e.button)})).scaleExtent([A,K]).translateExtent([[F,q],[U,W]]).on("start",(function(e){n&&!z.current&&n({coordinates:E.invert(v(M,b,e.transform)),zoom:e.transform.k},e)})).on("zoom",(function(e){if(!z.current){var o=e.transform,t=e.sourceEvent;O({x:o.x,y:o.y,k:o.k,dragging:t}),c&&c({x:o.x,y:o.y,k:o.k,dragging:t},e)}})).on("end",(function(e){if(z.current)z.current=!1;else{var o=E.invert(v(M,b,e.transform)),t=l(o,2),r=t[0],n=t[1];T.current={x:r,y:n,k:e.transform.k},i&&i({coordinates:[r,n],zoom:e.transform.k},e)}}));P.current=o,e.call(o)}),[M,b,F,q,U,W,A,K,E,n,c,i,r]),o.useEffect((function(){if(k!==T.current.x||x!==T.current.y||g!==T.current.k){var e=E([k,x]),o=e[0]*g,t=e[1]*g,r=s.select(S.current);z.current=!0,r.call(P.current.transform,a.zoomIdentity.translate(M/2-o,b/2-t).scale(g)),O({x:M/2-o,y:b/2-t,k:g}),T.current={x:k,y:x,k:g}}}),[k,x,g,M,b,E]),{mapRef:S,position:C,transformString:"translate("+C.x+" "+C.y+") scale("+C.k+")"}}var C=function(e){var t=e.center,r=void 0===t?[0,0]:t,n=e.zoom,a=void 0===n?1:n,s=e.minZoom,l=void 0===s?1:s,p=e.maxZoom,f=void 0===p?8:p,m=e.translateExtent,h=e.filterZoomEvent,v=e.onMoveStart,g=e.onMove,y=e.onMoveEnd,M=e.className,b=u(e,["center","zoom","minZoom","maxZoom","translateExtent","filterZoomEvent","onMoveStart","onMove","onMoveEnd","className"]),E=o.useContext(d),j=E.width,k=E.height,x=w({center:r,filterZoomEvent:h,onMoveStart:v,onMove:g,onMoveEnd:y,scaleExtent:[l,f],translateExtent:m,zoom:a}),N=x.mapRef,C=x.transformString;return i.createElement("g",{ref:N},i.createElement("rect",{width:j,height:k,fill:"transparent"}),i.createElement("g",c({transform:C,className:"rsm-zoomable-group "+M},b)))};C.propTypes={center:t.array,zoom:t.number,minZoom:t.number,maxZoom:t.number,translateExtent:t.arrayOf(t.array),onMoveStart:t.func,onMove:t.func,onMoveEnd:t.func,className:t.string};var O=function(e){var t=e.id,r=void 0===t?"rsm-sphere":t,n=e.fill,a=void 0===n?"transparent":n,s=e.stroke,l=void 0===s?"currentcolor":s,p=e.strokeWidth,f=void 0===p?.5:p,m=e.className,h=void 0===m?"":m,v=u(e,["id","fill","stroke","strokeWidth","className"]),g=o.useContext(d).path,y=o.useMemo((function(){return g({type:"Sphere"})}),[g]);return i.createElement(o.Fragment,null,i.createElement("defs",null,i.createElement("clipPath",{id:r},i.createElement("path",{d:y}))),i.createElement("path",c({d:y,fill:a,stroke:l,strokeWidth:f,style:{pointerEvents:"none"},className:"rsm-sphere "+h},v)))};O.propTypes={id:t.string,fill:t.string,stroke:t.string,strokeWidth:t.number,className:t.string};var T=o.memo(O),S=function(e){var t=e.coordinates,r=e.children,n=e.onMouseEnter,a=e.onMouseLeave,s=e.onMouseDown,p=e.onMouseUp,f=e.onFocus,m=e.onBlur,h=e.style,v=void 0===h?{}:h,g=e.className,y=void 0===g?"":g,M=u(e,["coordinates","children","onMouseEnter","onMouseLeave","onMouseDown","onMouseUp","onFocus","onBlur","style","className"]),b=o.useContext(d).projection,E=o.useState(!1),j=l(E,2),k=j[0],x=j[1],N=o.useState(!1),w=l(N,2),C=w[0],O=w[1],T=b(t),S=l(T,2),P=S[0],z=S[1];return i.createElement("g",c({transform:"translate("+P+", "+z+")",className:"rsm-marker "+y,onMouseEnter:function(e){O(!0),n&&n(e)},onMouseLeave:function(e){O(!1),k&&x(!1),a&&a(e)},onFocus:function(e){O(!0),f&&f(e)},onBlur:function(e){O(!1),k&&x(!1),m&&m(e)},onMouseDown:function(e){x(!0),s&&s(e)},onMouseUp:function(e){x(!1),p&&p(e)},style:v[k||C?k?"pressed":"hover":"default"]},M),r)};S.propTypes={coordinates:t.array,children:t.oneOfType([t.node,t.arrayOf(t.node)]),onMouseEnter:t.func,onMouseLeave:t.func,onMouseDown:t.func,onMouseUp:t.func,onFocus:t.func,onBlur:t.func,style:t.object,className:t.string};var P=function(e){var t=e.from,r=void 0===t?[0,0]:t,n=e.to,a=void 0===n?[0,0]:n,s=e.coordinates,l=e.stroke,p=void 0===l?"currentcolor":l,f=e.strokeWidth,m=void 0===f?3:f,h=e.fill,v=void 0===h?"transparent":h,g=e.className,y=void 0===g?"":g,M=u(e,["from","to","coordinates","stroke","strokeWidth","fill","className"]),b=o.useContext(d).path,E={type:"LineString",coordinates:s||[r,a]};return i.createElement("path",c({d:b(E),className:"rsm-line "+y,stroke:p,strokeWidth:m,fill:v},M))};P.propTypes={from:t.array,to:t.array,coordinates:t.array,stroke:t.string,strokeWidth:t.number,fill:t.string,className:t.string};var z=function(e){var t=e.subject,r=e.children,n=e.connectorProps,a=e.dx,s=void 0===a?30:a,p=e.dy,f=void 0===p?30:p,m=e.curve,h=void 0===m?0:m,v=e.className,g=void 0===v?"":v,y=u(e,["subject","children","connectorProps","dx","dy","curve","className"]),M=(0,o.useContext(d).projection)(t),b=l(M,2),E=b[0],j=b[1],k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,r=Array.isArray(t)?t:[t,t],n=e/2*r[0],a=o/2*r[1];return"M0,0 Q"+(-e/2-n)+","+(-o/2+a)+" "+-e+","+-o}(s,f,h);return i.createElement("g",c({transform:"translate("+(E+s)+", "+(j+f)+")",className:"rsm-annotation "+g},y),i.createElement("path",c({d:k,fill:"transparent",stroke:"#000"},n)),r)};z.propTypes={subject:t.array,children:t.oneOfType([t.node,t.arrayOf(t.node)]),dx:t.number,dy:t.number,curve:t.number,connectorProps:t.object,className:t.string},e.Annotation=z,e.ComposableMap=h,e.Geographies=E,e.Geography=k,e.Graticule=N,e.Line=P,e.MapContext=d,e.MapProvider=m,e.Marker=S,e.Sphere=T,e.ZoomableGroup=C,e.useGeographies=b,e.useZoomPan=w,Object.defineProperty(e,"__esModule",{value:!0})}));
