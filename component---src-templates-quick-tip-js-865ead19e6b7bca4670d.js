(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return d});var a=n(0),i=n.n(a),r=n(141),o=n(150),l=n(149),s=r.b.p.withConfig({displayName:"quick-tip__Text",componentId:"sc-1e9do4v-0"})(["font-size:24px;font-weight:400;margin-bottom:12px;margin-top:0;"]);t.default=function(e){var t=e.data.markdownRemark,n=t.frontmatter,a=t.html;return i.a.createElement(o.a,null,i.a.createElement(l.a,null,i.a.createElement(s,null,n.date.slice(0,4)),i.a.createElement(s,null,n.title),n.tags&&i.a.createElement(s,null,"Tags: ",n.tags),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})))};var d="1384674052"},142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return g});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(140),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var d=n(143),c=n.n(d);n.d(t,"PageRenderer",function(){return c.a});var u=n(33);n.d(t,"parsePath",function(){return u.a});var p=i.a.createContext({}),g=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},143:function(e,t,n){var a;e.exports=(a=n(145))&&a.default||a},144:function(e){e.exports={data:{site:{siteMetadata:{title:"Will Griffiths | Front End Developer Brisbane",tagline:"Front end React developer building things in Brisbane Australia.",author:"Will Griffiths",email:"thiswill@gmail.com",githubUsername:"willgriffiths"}}}}},145:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(48),s=n(2),d=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},146:function(e,t){(function(t){e.exports={siteMetadata:{title:"Will Griffiths | Front End Developer Brisbane",author:"Will Griffiths",email:"thiswill@gmail.com",tagline:"Front end React developer building things in Brisbane Australia.",siteURL:"willgriffiths.github.io",githubUsername:"willgriffiths"},plugins:["gatsby-plugin-react-helmet","gatsby-plugin-styled-components",{resolve:"gatsby-plugin-eslint-v2",options:{test:/\.js$|\.jsx$/,exclude:/(node_modules|cache|public)/,options:{emitWarning:!0,failOnError:!1}}},{resolve:"gatsby-source-filesystem",options:{path:t+"/src/pages",name:"markdown-pages"}},"gatsby-transformer-remark",{resolve:"gatsby-plugin-google-fonts",options:{fonts:["source sans pro:400,700,600i"]}}]}}).call(this,"/")},147:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){"use strict";var a=n(141);t.a=a.b.div.withConfig({displayName:"Container",componentId:"o8i1xo-0"})(["padding:0 20px;display:flex;flex-direction:column;align-items:flex-start;@media (min-width:1050px){padding:0 140px;margin-bottom:100px;}"])},150:function(e,t,n){"use strict";var a=n(144),i=n(0),r=n.n(i),o=n(4),l=n.n(o),s=n(151),d=n.n(s),c=n(141),u=n(142),p=n(146),g="#1A1A1A",m="#FFFFFF",f="#A22AE5",h=m,b=g,y=c.b.div.withConfig({displayName:"header__Container",componentId:"sc-1u518v3-0"})(["padding:0 20px;display:flex;width:100%;@media (min-width:1050px){padding:0 140px;margin-bottom:100px;}"]),v=c.b.nav.withConfig({displayName:"header__NavBar",componentId:"sc-1u518v3-1"})(["flex:1;justify-content:flex-end;display:flex;align-items:center;padding:40px 20px;@media (min-width:1050px){padding:40px;}"]),x=Object(c.b)(u.Link).withConfig({displayName:"header__NavItem",componentId:"sc-1u518v3-2"})(["text-decoration:none;position:relative;padding:20px 30px;font-size:24px;border-width:1px;border-style:solid;border-color:",";border-image:linear-gradient(137.5deg,#e54230,#a22ae5);border-image-slice:1;border-image-width:1;color:",";&:focus{outline-color:",";}&:hover{border-color:",";text-shadow:1px 1px 2px ",";border-image:none;background:",";background:linear-gradient(137.5deg,#e54230,#a22ae5);}"],f,h,h,h,b,f),w=function(e){e.siteTitle,e.siteTagline;return r.a.createElement(y,null,r.a.createElement(v,null,r.a.createElement(x,{to:"#contact"},"Contact")))};w.defaultProps={siteTitle:p.siteMetadata.title,siteTagline:p.siteMetadata.tagline},w.propTypes={siteTitle:l.a.string,siteTagline:l.a.string};var E=w,T=(n(147),n(148),c.b.div.withConfig({displayName:"Layout__Body",componentId:"k1syed-0"})(["height:100%;min-height:100vh;background:",";color:",";"],g,m)),k=function(e){var t=e.children;return r.a.createElement(u.StaticQuery,{query:"2740474822",render:function(e){return r.a.createElement(T,null,r.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.tagline},{name:"keywords",content:"sample, something"}]}),r.a.createElement(E,{siteTitle:e.site.siteMetadata.title,siteTagline:e.site.siteMetadata.tagline}),t)},data:a})};k.defaultProps={children:r.a.createElement("div",null)},k.propTypes={children:l.a.node};var q=k;t.a=q}}]);
//# sourceMappingURL=component---src-templates-quick-tip-js-865ead19e6b7bca4670d.js.map