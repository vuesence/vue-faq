import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.477046d0.js";const m=JSON.parse('{"title":"Application Resources","description":"","frontmatter":{},"headers":[],"relativePath":"en/development/assets.md","filePath":"en/development/assets.md"}'),p={name:"en/development/assets.md"},o=l(`<h1 id="application-resources" tabindex="-1">Application Resources <a class="header-anchor" href="#application-resources" aria-label="Permalink to &quot;Application Resources&quot;">​</a></h1><details class="details custom-block"><summary>Application Resources</summary><p>Resources refer to images, icons, audio, video, json, pdf and other files that your application can use either internally or to display on a page.</p></details><details class="details custom-block"><summary>Should I put images in the public or assets folder?</summary><p>From the <code>public</code> folder, resources (e.g. images) are connected in your application via HTTP(S), downloaded as needed from the server - as they have always been.</p><p>Resources in the <code>assets</code> folder (and in general from any subdirectory in <code>src/</code>) are renamed (a hash is added - like <code>social-banner-e88a22df.png</code>) and placed in the <code>dist/assets</code> folder, or, if they are small images, they can be Base64 encoded and placed in your js bandle. In the browser application they are available immediately, but the size of the js bandle is increased by the size of the resources, which increases the loading speed.</p><p>The resources are accessed via import:</p><p>\`\`js // gets url to the resource import imageUrl from &quot;./image.img&quot;;</p><p>// gets raw (string) representation of the resource import imageRaw from &quot;./image.img?raw&quot;;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">If you don&#39;t need to import/process the images in js, you can put them in the \`public\` folder and use them in the HTML template with their normal names.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">See [Vite documentation](https://vitejs.dev/guide/assets.html) for more details.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">:::</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">:::: details How to connect images from assets?</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Using images from the \`public/images\` folder is easy.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`html</span></span>
<span class="line"><span style="color:#e1e4e8;">// static image name</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;img src=&quot;/images/someImage.png&quot; /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// dynamic image name</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;img :src=&quot;\`/images/\${imageNameInVariable}.png\` /&gt;&quot; /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">If you don&#39;t need to import/process the images in js, you can put them in the \`public\` folder and use them in the HTML template with their normal names.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">See [Vite documentation](https://vitejs.dev/guide/assets.html) for more details.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">:::</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">:::: details How to connect images from assets?</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Using images from the \`public/images\` folder is easy.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\`\`html</span></span>
<span class="line"><span style="color:#24292e;">// static image name</span></span>
<span class="line"><span style="color:#24292e;">&lt;img src=&quot;/images/someImage.png&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// dynamic image name</span></span>
<span class="line"><span style="color:#24292e;">&lt;img :src=&quot;\`/images/\${imageNameInVariable}.png\` /&gt;&quot; /&gt;</span></span></code></pre></div><p>Pictures (as well as other resources) from <code>assets</code> must be imported into JavaScript before use</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> imgUrl </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./img.png&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:src=&quot;imgUrl&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">This returns the url to the resource.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">::: details Universal component for working with icons</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">Importing icons one by one is inconvenient when there are many of them, and often the icon needs to be changed dynamically depending on the conditions. To solve this problem you can create a universal class \`</span><span style="color:#B392F0;">BaseIcon</span><span style="color:#9ECBFF;">\`, which will display an icon by its name:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">\`\`vue</span></span>
<span class="line"><span style="color:#9ECBFF;">&lt;BaseIcon name=&quot;account&quot; size=&quot;26&quot; /&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">#### BaseIcon</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">\`\`\`\`</span><span style="color:#E1E4E8;">vue</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { computed } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { getImageUrl, getSvgIcon } from &quot;@/app/utils/icons&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const props = defineProps({</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  size: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    { </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;24&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  color: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#9ECBFF;">&quot;currentColor&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  width: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    { </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;24&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  height: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#9ECBFF;">&quot;auto&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  type: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    default: </span><span style="color:#9ECBFF;">&quot;svg&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const width </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">computed</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> props.size </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">props</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">size</span><span style="color:#9ECBFF;">}px\`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">props</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">width</span><span style="color:#9ECBFF;">}px\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">const height </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">computed</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> props.size </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">props</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">size</span><span style="color:#9ECBFF;">}px\`</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">props</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">height</span><span style="color:#9ECBFF;">}px\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#F97583;">&lt;/</span><span style="color:#E1E4E8;">script</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">v-if</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;getSvgIcon(props.name)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;base-icon&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">:style=&quot;{</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FDAEB7;font-style:italic;">width,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FDAEB7;font-style:italic;">height,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FDAEB7;font-style:italic;">color:</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">props.color,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">}&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">v-html</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;getSvgIcon(props.name)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">img</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">v-else</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">:src=&quot;getImageUrl(props.name)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">:style=&quot;{</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FDAEB7;font-style:italic;">width,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FDAEB7;font-style:italic;">height,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FDAEB7;font-style:italic;">minWidth:</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">width,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FDAEB7;font-style:italic;">minHeight:</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">height,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">}&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">:deep(svg) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  width: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  height: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  path {</span></span>
<span class="line"><span style="color:#E1E4E8;">    fill: currentColor;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">The \`</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">app</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">utils</span><span style="color:#F97583;">/</span><span style="color:#B392F0;">icons</span><span style="color:#9ECBFF;">\` file uses Vite&#39;s \`</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">glob</span><span style="color:#9ECBFF;">\` function to import files from masked directories:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">#### icons.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">\`\`\`</span><span style="color:#E1E4E8;">js</span></span>
<span class="line"><span style="color:#E1E4E8;">const svgResources </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">const imageResources </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Map</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">loadIcons</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> modules </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">glob</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@/assets/images/icons/**/*.svg&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    as: </span><span style="color:#9ECBFF;">&quot;raw&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    eager: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fileName</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> modules) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fileName.</span><span style="color:#B392F0;">substring</span><span style="color:#E1E4E8;">(fileName.</span><span style="color:#B392F0;">lastIndexOf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, fileName.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    svgResources.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(name, modules[fileName]);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  modules </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">glob</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;@/assets/images/**/*.png&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    as: </span><span style="color:#9ECBFF;">&quot;url&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    eager: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">fileName</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> modules) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">name</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> fileName.</span><span style="color:#B392F0;">substring</span><span style="color:#E1E4E8;">(fileName.</span><span style="color:#B392F0;">lastIndexOf</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, fileName.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    imageResources.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(name, modules[fileName]);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getSvgIcon</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> svgResources.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(name);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getImageUrl</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> imageResources.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(name);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">export { loadIcons, getSvgIcon, getImageUrl, svgResources };</span></span>
<span class="line"><span style="color:#9ECBFF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">The component will first try to look for the \`</span><span style="color:#B392F0;">svg</span><span style="color:#9ECBFF;">\` named \`</span><span style="color:#B392F0;">account</span><span style="color:#9ECBFF;">\`, then \`</span><span style="color:#B392F0;">png</span><span style="color:#9ECBFF;">\`.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">:::: details What is the best format for pictures - jpg or png?</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">Try modern \`</span><span style="color:#B392F0;">webp</span><span style="color:#9ECBFF;">\`. Really strong compression with no apparent loss of quality. There is a transparent background.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">Only IE is not supported, it requires a fallback picture in a different format (if you even care about the decade-old IE11).</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">::::: details How to import JSON?</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">\`\`\`</span><span style="color:#E1E4E8;">js</span></span>
<span class="line"><span style="color:#6A737D;">// import the entire object</span></span>
<span class="line"><span style="color:#E1E4E8;">import json from </span><span style="color:#9ECBFF;">&quot;./example.json&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// import a root field as named exports - helps with tree-shaking!</span></span>
<span class="line"><span style="color:#E1E4E8;">import { field } from </span><span style="color:#9ECBFF;">&quot;./example.json&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#9ECBFF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">:::</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> imgUrl </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./img.png&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:src=&quot;imgUrl&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#032F62;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">This returns the url to the resource.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">::: details Universal component for working with icons</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">Importing icons one by one is inconvenient when there are many of them, and often the icon needs to be changed dynamically depending on the conditions. To solve this problem you can create a universal class \`</span><span style="color:#6F42C1;">BaseIcon</span><span style="color:#032F62;">\`, which will display an icon by its name:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">\`\`vue</span></span>
<span class="line"><span style="color:#032F62;">&lt;BaseIcon name=&quot;account&quot; size=&quot;26&quot; /&gt;</span></span>
<span class="line"><span style="color:#032F62;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">#### BaseIcon</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">\`\`\`\`</span><span style="color:#24292E;">vue</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { computed } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#24292E;">import { getImageUrl, getSvgIcon } from &quot;@/app/utils/icons&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const props = defineProps({</span></span>
<span class="line"><span style="color:#24292E;">  name: {</span></span>
<span class="line"><span style="color:#24292E;">    type: String,</span></span>
<span class="line"><span style="color:#24292E;">    default: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  size: {</span></span>
<span class="line"><span style="color:#24292E;">    { </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">: String,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">default</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;24&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  color: {</span></span>
<span class="line"><span style="color:#24292E;">    type: String,</span></span>
<span class="line"><span style="color:#24292E;">    default: </span><span style="color:#032F62;">&quot;currentColor&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  width: {</span></span>
<span class="line"><span style="color:#24292E;">    { </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">: String,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">default</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;24&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  height: {</span></span>
<span class="line"><span style="color:#24292E;">    type: String,</span></span>
<span class="line"><span style="color:#24292E;">    default: </span><span style="color:#032F62;">&quot;auto&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  type: {</span></span>
<span class="line"><span style="color:#24292E;">    type: String,</span></span>
<span class="line"><span style="color:#24292E;">    default: </span><span style="color:#032F62;">&quot;svg&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const width </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">computed</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> props.size </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">props</span><span style="color:#032F62;">.</span><span style="color:#24292E;">size</span><span style="color:#032F62;">}px\`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">props</span><span style="color:#032F62;">.</span><span style="color:#24292E;">width</span><span style="color:#032F62;">}px\`</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">const height </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">computed</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> props.size </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">props</span><span style="color:#032F62;">.</span><span style="color:#24292E;">size</span><span style="color:#032F62;">}px\`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">props</span><span style="color:#032F62;">.</span><span style="color:#24292E;">height</span><span style="color:#032F62;">}px\`</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#D73A49;">&lt;/</span><span style="color:#24292E;">script</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-if</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;getSvgIcon(props.name)&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;base-icon&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">:style=&quot;{</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#B31D28;font-style:italic;">width,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#B31D28;font-style:italic;">height,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#B31D28;font-style:italic;">color:</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">props.color,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">}&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-html</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;getSvgIcon(props.name)&quot;</span></span>
<span class="line"><span style="color:#24292E;">  /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">img</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-else</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">:src=&quot;getImageUrl(props.name)&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">:style=&quot;{</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#B31D28;font-style:italic;">width,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#B31D28;font-style:italic;">height,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#B31D28;font-style:italic;">minWidth:</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">width,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#B31D28;font-style:italic;">minHeight:</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">height,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">}&quot;</span></span>
<span class="line"><span style="color:#24292E;">  /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">:deep(svg) {</span></span>
<span class="line"><span style="color:#24292E;">  width: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  height: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  path {</span></span>
<span class="line"><span style="color:#24292E;">    fill: currentColor;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#032F62;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">The \`</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">app</span><span style="color:#D73A49;">/</span><span style="color:#24292E;">utils</span><span style="color:#D73A49;">/</span><span style="color:#6F42C1;">icons</span><span style="color:#032F62;">\` file uses Vite&#39;s \`</span><span style="color:#D73A49;">import</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">meta</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">glob</span><span style="color:#032F62;">\` function to import files from masked directories:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">#### icons.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">\`\`\`</span><span style="color:#24292E;">js</span></span>
<span class="line"><span style="color:#24292E;">const svgResources </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Map</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">const imageResources </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Map</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">loadIcons</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> modules </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">meta</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">glob</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@/assets/images/icons/**/*.svg&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">    as: </span><span style="color:#032F62;">&quot;raw&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    eager: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fileName</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> modules) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">name</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fileName.</span><span style="color:#6F42C1;">substring</span><span style="color:#24292E;">(fileName.</span><span style="color:#6F42C1;">lastIndexOf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/&quot;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, fileName.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    svgResources.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(name, modules[fileName]);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  modules </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">meta</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">glob</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;@/assets/images/**/*.png&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">    as: </span><span style="color:#032F62;">&quot;url&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    eager: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">fileName</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> modules) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">name</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> fileName.</span><span style="color:#6F42C1;">substring</span><span style="color:#24292E;">(fileName.</span><span style="color:#6F42C1;">lastIndexOf</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/&quot;</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, fileName.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    imageResources.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(name, modules[fileName]);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getSvgIcon</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> svgResources.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(name);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getImageUrl</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> imageResources.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(name);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">export { loadIcons, getSvgIcon, getImageUrl, svgResources };</span></span>
<span class="line"><span style="color:#032F62;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">The component will first try to look for the \`</span><span style="color:#6F42C1;">svg</span><span style="color:#032F62;">\` named \`</span><span style="color:#6F42C1;">account</span><span style="color:#032F62;">\`, then \`</span><span style="color:#6F42C1;">png</span><span style="color:#032F62;">\`.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">:::: details What is the best format for pictures - jpg or png?</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">Try modern \`</span><span style="color:#6F42C1;">webp</span><span style="color:#032F62;">\`. Really strong compression with no apparent loss of quality. There is a transparent background.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">Only IE is not supported, it requires a fallback picture in a different format (if you even care about the decade-old IE11).</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">::::: details How to import JSON?</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">\`\`\`</span><span style="color:#24292E;">js</span></span>
<span class="line"><span style="color:#6A737D;">// import the entire object</span></span>
<span class="line"><span style="color:#24292E;">import json from </span><span style="color:#032F62;">&quot;./example.json&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// import a root field as named exports - helps with tree-shaking!</span></span>
<span class="line"><span style="color:#24292E;">import { field } from </span><span style="color:#032F62;">&quot;./example.json&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#032F62;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">:::</span></span></code></pre></div></details>`,3),e=[o];function t(c,r,y,E,i,F){return n(),a("div",null,e)}const g=s(p,[["render",t]]);export{m as __pageData,g as default};
