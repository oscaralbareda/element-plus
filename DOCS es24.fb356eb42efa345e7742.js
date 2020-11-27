(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/i18n.md?vue&type=template&id=60899695

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"internacionalizacion\"><a class=\"header-anchor\" href=\"#internacionalizacion\">¶</a> Internacionalización</h2><p>El idioma predeterminado de Element Plus es el inglés. Si se desea utilizar otro idioma, será necesario realizar alguna configuración de i18n. En su fichero de entrada, si está importando Element Plus por completo:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> locale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/es&#39;</span>\n\ncreateApp(App).use(ElementPlus, { locale })\n</code></pre><p>O si está importando Element Plus a petición:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> Vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { ElButton, ElSelect } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> lang <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/es&#39;</span>\n<span class=\"hljs-keyword\">import</span> locale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale&#39;</span>\n\n<span class=\"hljs-comment\">// configure language</span>\nlocale.use(lang)\n\n<span class=\"hljs-comment\">// import components</span>\nVue.component(ElButton.name, ElButton)\nVue.component(ElSelect.name, ElSelect)\n</code></pre><p>El paquete de idioma inglés se importa por defecto, incluso si se esta usando otro idioma. Pero con <code>NormalModuleReplacementPlugin</code> proporcionado por el webpack puede reemplazar la localización predeterminada:</p><p>webpack.config.js</p><pre><code class=\"hljs language-javascript\">{\n  <span class=\"hljs-attr\">plugins</span>: [\n    <span class=\"hljs-keyword\">new</span> webpack.NormalModuleReplacementPlugin(<span class=\"hljs-regexp\">/element-plus[\\/\\\\]lib[\\/\\\\]locale[\\/\\\\]lang[\\/\\\\]en/</span>, <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/es&#39;</span>)\n  ]\n}\n</code></pre><h2 id=\"compatible-con-vue-i18n-5.x\"><a class=\"header-anchor\" href=\"#compatible-con-vue-i18n-5.x\">¶</a> Compatible con <code>vue-i18n@5.x</code></h2><p>Element Plus es compatible con <a href=\"https://github.com/kazupon/vue-i18n\">vue-i18n@5.x</a>, lo que facilita aún más la conmutación multilenguaje.</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> Vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> VueI18n <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-i18n&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> enLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/en&#39;</span>\n<span class=\"hljs-keyword\">import</span> zhLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(ElementPlus)\nVue.use(VueI18n)\n\nVue.config.lang = <span class=\"hljs-string\">&#39;zh-cn&#39;</span>\nVue.locale(<span class=\"hljs-string\">&#39;zh-cn&#39;</span>, zhLocale)\nVue.locale(<span class=\"hljs-string\">&#39;en&#39;</span>, enLocale)\n</code></pre><h2 id=\"compatible-con-otros-plugins-i18n\"><a class=\"header-anchor\" href=\"#compatible-con-otros-plugins-i18n\">¶</a> Compatible con otros plugins i18n</h2><p>Es posible que Element Plus no sea compatible con otros plugins i18n que no sean vue-i18n, pero puede personalizar la forma en que Element Plus procesa i18n.</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> Vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> enLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/en&#39;</span>\n<span class=\"hljs-keyword\">import</span> zhLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n\nVue.use(Element, {\n  <span class=\"hljs-attr\">i18n</span>: <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\">path, options</span>) </span>{\n    <span class=\"hljs-comment\">// ...</span>\n  }\n})\n</code></pre><h2 id=\"compatible-con-vue-i18n-6.x\"><a class=\"header-anchor\" href=\"#compatible-con-vue-i18n-6.x\">¶</a> Compatible con <code>vue-i18n@6.x</code></h2><p>Necesita manejarlo manualmente para ser compatible con <code>6.x</code>.</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> Vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>\n<span class=\"hljs-keyword\">import</span> VueI18n <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-i18n&#39;</span>\n<span class=\"hljs-keyword\">import</span> enLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/en&#39;</span>\n<span class=\"hljs-keyword\">import</span> zhLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n\nVue.use(VueI18n)\n\n<span class=\"hljs-keyword\">const</span> messages = {\n  <span class=\"hljs-attr\">en</span>: {\n    <span class=\"hljs-attr\">message</span>: <span class=\"hljs-string\">&#39;hello&#39;</span>,\n    ...enLocale <span class=\"hljs-comment\">// Or use `Object.assign({ message: &#39;hello&#39; }, enLocale)`</span>\n  },\n  <span class=\"hljs-attr\">zh</span>: {\n    <span class=\"hljs-attr\">message</span>: <span class=\"hljs-string\">&#39;你好&#39;</span>,\n    ...zhLocale <span class=\"hljs-comment\">// Or use `Object.assign({ message: &#39;你好&#39; }, zhLocale)`</span>\n  }\n}\n<span class=\"hljs-comment\">// Create VueI18n instance with options</span>\n<span class=\"hljs-keyword\">const</span> i18n = <span class=\"hljs-keyword\">new</span> VueI18n({\n  <span class=\"hljs-attr\">locale</span>: <span class=\"hljs-string\">&#39;en&#39;</span>, <span class=\"hljs-comment\">// set locale</span>\n  messages, <span class=\"hljs-comment\">// set locale messages</span>\n})\n\nVue.use(Element, {\n  <span class=\"hljs-attr\">i18n</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">key, value</span>) =&gt;</span> i18n.t(key, value)\n})\n\n<span class=\"hljs-keyword\">new</span> Vue({ i18n }).$mount(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code></pre><h2 id=\"personalizacion-de-i18n-en-componentes-bajo-peticion\"><a class=\"header-anchor\" href=\"#personalizacion-de-i18n-en-componentes-bajo-peticion\">¶</a> Personalización de i18n en componentes bajo petición</h2><pre><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> Vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> DatePicker <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element/lib/date-picker&#39;</span>\n<span class=\"hljs-keyword\">import</span> VueI18n <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue-i18n&#39;</span>\n\n<span class=\"hljs-keyword\">import</span> enLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/en&#39;</span>\n<span class=\"hljs-keyword\">import</span> zhLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale/lang/zh-cn&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementLocale <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus/lib/locale&#39;</span>\n\nVue.use(VueI18n)\nVue.use(DatePicker)\n\n<span class=\"hljs-keyword\">const</span> messages = {\n  <span class=\"hljs-attr\">en</span>: {\n    <span class=\"hljs-attr\">message</span>: <span class=\"hljs-string\">&#39;hello&#39;</span>,\n    ...enLocale\n  },\n  <span class=\"hljs-attr\">zh</span>: {\n    <span class=\"hljs-attr\">message</span>: <span class=\"hljs-string\">&#39;你好&#39;</span>,\n    ...zhLocale\n  }\n}\n<span class=\"hljs-comment\">// Create VueI18n instance with options</span>\n<span class=\"hljs-keyword\">const</span> i18n = <span class=\"hljs-keyword\">new</span> VueI18n({\n  <span class=\"hljs-attr\">locale</span>: <span class=\"hljs-string\">&#39;en&#39;</span>, <span class=\"hljs-comment\">// set locale</span>\n  messages, <span class=\"hljs-comment\">// set locale messages</span>\n})\n\nElementLocale.i18n(<span class=\"hljs-function\">(<span class=\"hljs-params\">key, value</span>) =&gt;</span> i18n.t(key, value))\n</code></pre><h2 id=\"importar-via-cdn\"><a class=\"header-anchor\" href=\"#importar-via-cdn\">¶</a> Importar via CDN</h2><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/lib/umd/locale/en.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span>\n  ELEMENT.locale(ELEMENT.lang.en)\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre><p>Compatible con <code>vue-i18n</code></p><pre><code class=\"hljs language-html\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/vue-i18n/dist/vue-i18n.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/lib/umd/locale/zh-cn.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">&quot;//unpkg.com/element-plus/lib/umd/locale/en.js&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  Vue.locale(<span class=\"hljs-string\">&#39;en&#39;</span>, ELEMENT.lang.en)\n  Vue.locale(<span class=\"hljs-string\">&#39;zh-cn&#39;</span>, ELEMENT.lang.zhCN)\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre><p>Actualmente Element Plus está disponible en los siguientes idiomas:</p><ul class=\"language-list\"><li>Simplified Chinese (zh-cn)</li><li>English (en)</li><li>German (de)</li><li>Portuguese (pt)</li><li>Spanish (es)</li><li>Danish (da)</li><li>French (fr)</li><li>Norwegian (nb-NO)</li><li>Traditional Chinese (zh-tw)</li><li>Italian (it)</li><li>Korean (ko)</li><li>Japanese (ja)</li><li>Dutch (nl)</li><li>Vietnamese (vi)</li><li>Russian (ru)</li><li>Turkish (tr)</li><li>Brazilian Portuguese (pt-br)</li><li>Farsi (fa)</li><li>Thai (th)</li><li>Indonesian (id)</li><li>Bulgarian (bg)</li><li>Polish (pl)</li><li>Finnish (fi)</li><li>Swedish (sv)</li><li>Greek (el)</li><li>Slovak (sk)</li><li>Catalunya (ca)</li><li>Czech (cs)</li><li>Ukrainian (uk)</li><li>Turkmen (tk)</li><li>Tamil (ta)</li><li>Latvian (lv)</li><li>Afrikaans (af)</li><li>Estonian (et)</li><li>Slovenian (sl)</li><li>Arabic (ar)</li><li>Hebrew (he)</li><li>Lithuanian (lt)</li><li>Mongolian (mn)</li><li>Kazakh (kk)</li><li>Hungarian (hu)</li><li>Romanian (ro)</li><li>Kurdish (ku)</li><li>Uighur (ug-cn)</li><li>Khmer (km)</li><li>Serbian (sr)</li><li>Basque (eu)</li><li>Kyrgyz (ky)</li><li>Armenian (hy-am)</li><li>Croatian (hr)</li><li>Esperanto (eo)</li></ul><p>Si su idioma de destino no está incluido, puede contribuir: simplemente añada <a href=\"https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang\">aqui</a> otra configuración de idioma y cree un pull request.</p>", 26);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", _hoisted_1, [_hoisted_2]);
}
// CONCATENATED MODULE: ./website/docs/es/i18n.md?vue&type=template&id=60899695

// CONCATENATED MODULE: ./website/docs/es/i18n.md

const script = {}
script.render = render

/* harmony default export */ var i18n = __webpack_exports__["default"] = (script);

/***/ })

}]);