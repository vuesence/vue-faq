import{_ as e,o as s,c as a,Q as n}from"./chunks/framework.477046d0.js";const y=JSON.parse('{"title":"Helpful hints","description":"","frontmatter":{},"headers":[],"relativePath":"en/development/misc.md","filePath":"en/development/misc.md"}'),t={name:"en/development/misc.md"},o=n(`<h1 id="helpful-hints" tabindex="-1">Helpful hints <a class="header-anchor" href="#helpful-hints" aria-label="Permalink to &quot;Helpful hints&quot;">​</a></h1><details class="details custom-block"><summary>How to catch the moment when the user scrolls to a certain place?</summary><p>Intersection Observer</p></details><details class="details custom-block"><summary>i18n - application internationalization</summary><p>The NPM library for internationalization and localization i18n is very popular, but it has grown very large in recent years. It has a lot of features for localizing dates, numbers, setting the right declensions, RTL language support, downloading locales from the server and a bunch of other things. The i18next site even calls it an &quot;internationalization framework&quot;.</p><p>At the same time, localization of a site often requires very simple things that take up only a couple of percent of the entire functionality of the i18n heavyweight.</p><p>In fact, you usually need a reactive function that returns a string based on the key and the current locale.</p><p>A variant of implementation via composable is in <a href="https://habr.com/ru/articles/736530/" target="_blank" rel="noreferrer">this article</a>.</p><p>Your bundle will be &quot;thinner&quot; by 50Kb.</p></details><details class="details custom-block"><summary>Options API or Composition API?</summary><p>We recommend Composition API (script setup) as more logical and convenient, in which the programmer controls the flow of program execution by means of JavaScript, and not just by setting some magic options.</p></details><details class="details custom-block"><summary>Ref or Reactive?</summary><p>Difference in terms of usage - Reactive only works with objects and does not track object replacement. Ref works with everything and tracks variable replacement:</p><p>\`\`js const a = Ref(1); const b = Reactive({ x: 1 });</p><p>// is OK a.value = 2;</p><p>// is NOT OK b = { x: 2 };</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">The implementations of reactive variables in Vue 2 and Vue 3 are different. Vue 2 had its own (framework) implementation of change tracking. In Vue 3, the Proxy object introduced in ES6 is used for this purpose. Because of the support for this functionality at the language level (JavaScript engine), the corresponding framework code is more efficient and simpler.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Reactive uses the Proxy object directly.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Ref on the object uses Reactive directly, and for primitives it wraps them in the object and uses Reactive again.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">If you want pretentious efficiency, use Reactive on objects and Ref on primitives. Otherwise, you can do everything via Ref.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">:::</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">:::: details ShallowRef</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">When you have an array with a large number of elements, but the data inside the array elements does not change, but only the array itself can change (adding elements, deleting, replacing the array) - use \`ShallowRef\`.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">It works like \`Ref\` but does not track changes inside array elements, which gives a significant performance improvement.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">:::</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">:::: details Mixins</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">We should forget about them like a bad dream. Mixins as a pattern of multiple inheritance is a very bad architectural practice and should be avoided. In Vue 2, the framework itself did not have a way to make the component part of the steit and methods common, so mixins were used. In Vue 3, the Composition API was introduced and mixins were no longer needed.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">:::</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;">The implementations of reactive variables in Vue 2 and Vue 3 are different. Vue 2 had its own (framework) implementation of change tracking. In Vue 3, the Proxy object introduced in ES6 is used for this purpose. Because of the support for this functionality at the language level (JavaScript engine), the corresponding framework code is more efficient and simpler.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Reactive uses the Proxy object directly.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Ref on the object uses Reactive directly, and for primitives it wraps them in the object and uses Reactive again.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">If you want pretentious efficiency, use Reactive on objects and Ref on primitives. Otherwise, you can do everything via Ref.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">:::</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">:::: details ShallowRef</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">When you have an array with a large number of elements, but the data inside the array elements does not change, but only the array itself can change (adding elements, deleting, replacing the array) - use \`ShallowRef\`.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">It works like \`Ref\` but does not track changes inside array elements, which gives a significant performance improvement.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">:::</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">:::: details Mixins</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">We should forget about them like a bad dream. Mixins as a pattern of multiple inheritance is a very bad architectural practice and should be avoided. In Vue 2, the framework itself did not have a way to make the component part of the steit and methods common, so mixins were used. In Vue 3, the Composition API was introduced and mixins were no longer needed.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">:::</span></span></code></pre></div></details>`,5),l=[o];function i(p,r,c,d,h,m){return s(),a("div",null,l)}const f=e(t,[["render",i]]);export{y as __pageData,f as default};
