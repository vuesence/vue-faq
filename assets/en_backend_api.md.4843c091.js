import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.477046d0.js";const m=JSON.parse('{"title":"Backend link abstraction","description":"","frontmatter":{},"headers":[],"relativePath":"en/backend/api.md","filePath":"en/backend/api.md"}'),p={name:"en/backend/api.md"},o=e(`<h1 id="backend-link-abstraction" tabindex="-1">Backend link abstraction <a class="header-anchor" href="#backend-link-abstraction" aria-label="Permalink to &quot;Backend link abstraction&quot;">​</a></h1><h2 id="api-service" tabindex="-1">API service <a class="header-anchor" href="#api-service" aria-label="Permalink to &quot;API service&quot;">​</a></h2><p>To make calls to the backend, it is convenient to separate the code related to the transport layer (forming and sending a request) into a separate js module.</p><p>Then in your component access to your backend will look like this:</p><p>\`\`js import { api } from &quot;@/services/api&quot;;</p><p>// loading.value = true; const userData = await api.users.getUserData({ userId }); // loading.value = false;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">All the complexity of backend communication is hidden in the \`api\` module.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Example \`api.js\`:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`js</span></span>
<span class="line"><span style="color:#e1e4e8;">import auth from &quot;./auth&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">import users from &quot;./users&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">import utils from &quot;./utils&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">import products from &quot;./products&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">import { authInterceptor, notificationInterceptor } from &quot;./interceptors&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">import http from &quot;./http&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;">import { useAuth } from &quot;@/user-account/composables/useAuth&quot;;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">const api = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  products,</span></span>
<span class="line"><span style="color:#e1e4e8;">  auth,</span></span>
<span class="line"><span style="color:#e1e4e8;">  users,</span></span>
<span class="line"><span style="color:#e1e4e8;">  utils,</span></span>
<span class="line"><span style="color:#e1e4e8;">  init() {</span></span>
<span class="line"><span style="color:#e1e4e8;">    http.setBaseUrl(i<wbr>mport.meta.env.VITE_API_URL);</span></span>
<span class="line"><span style="color:#e1e4e8;">    // to set token into every request</span></span>
<span class="line"><span style="color:#e1e4e8;">    http.setTokenCallback(useAuth().getToken);</span></span>
<span class="line"><span style="color:#e1e4e8;">    http.setLogoutCallback(useAuth().logout);</span></span>
<span class="line"><span style="color:#e1e4e8;">    http.addResponseInterceptor(notificationInterceptor);</span></span>
<span class="line"><span style="color:#e1e4e8;">    http.addResponseInterceptor(authInterceptor);</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">export { api }</span></span>
<span class="line"><span style="color:#e1e4e8;">export default api;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">All the complexity of backend communication is hidden in the \`api\` module.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Example \`api.js\`:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\`\`\`js</span></span>
<span class="line"><span style="color:#24292e;">import auth from &quot;./auth&quot;;</span></span>
<span class="line"><span style="color:#24292e;">import users from &quot;./users&quot;;</span></span>
<span class="line"><span style="color:#24292e;">import utils from &quot;./utils&quot;;</span></span>
<span class="line"><span style="color:#24292e;">import products from &quot;./products&quot;;</span></span>
<span class="line"><span style="color:#24292e;">import { authInterceptor, notificationInterceptor } from &quot;./interceptors&quot;;</span></span>
<span class="line"><span style="color:#24292e;">import http from &quot;./http&quot;;</span></span>
<span class="line"><span style="color:#24292e;">import { useAuth } from &quot;@/user-account/composables/useAuth&quot;;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">const api = {</span></span>
<span class="line"><span style="color:#24292e;">  products,</span></span>
<span class="line"><span style="color:#24292e;">  auth,</span></span>
<span class="line"><span style="color:#24292e;">  users,</span></span>
<span class="line"><span style="color:#24292e;">  utils,</span></span>
<span class="line"><span style="color:#24292e;">  init() {</span></span>
<span class="line"><span style="color:#24292e;">    http.setBaseUrl(i<wbr>mport.meta.env.VITE_API_URL);</span></span>
<span class="line"><span style="color:#24292e;">    // to set token into every request</span></span>
<span class="line"><span style="color:#24292e;">    http.setTokenCallback(useAuth().getToken);</span></span>
<span class="line"><span style="color:#24292e;">    http.setLogoutCallback(useAuth().logout);</span></span>
<span class="line"><span style="color:#24292e;">    http.addResponseInterceptor(notificationInterceptor);</span></span>
<span class="line"><span style="color:#24292e;">    http.addResponseInterceptor(authInterceptor);</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">};</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">export { api }</span></span>
<span class="line"><span style="color:#24292e;">export default api;</span></span></code></pre></div><p>Example <code>users.js</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> http </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;./http&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">users</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getUserData</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> http.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/api/users/user&quot;</span><span style="color:#E1E4E8;">, params);</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> http </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;./http&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">users</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getUserData</span><span style="color:#24292E;">(</span><span style="color:#E36209;">params</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> http.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/api/users/user&quot;</span><span style="color:#24292E;">, params);</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><p>\`\`http.js\` is a wrapper around requests to the server via your favorite library.</p><p>What is the convenience of abstracting the backend communication code from the main application code into a separate service?</p><p>You can easily replace <code>axios</code> with <code>fetch</code> or <code>XHR</code>, <code>REST</code> with <code>JSON-RPC</code> or <code>WebSockets</code>. The code in the components does not change and remains simple and explicit.</p>`,12),l=[o];function t(c,r,i,u,y,d){return n(),a("div",null,l)}const E=s(p,[["render",t]]);export{m as __pageData,E as default};
