## The Vue 3 Framework

The world wide web of today has changed by many magnitudes since the
early days when the internet was just a collection of linked pages for
academic and scientific purposes. As the technology evolved and machines
became more powerful, more and more features were added to the earlier
protocols, and new techniques and technologies competed until finally,
standards were adopted. Extra functionality came in the form of plugins
for the browser and embedded content. Java applets, Flash, Macromedia,
Quicktime, and other plugins were common. It was with the arrival of
HTML5 that most, if not all, of these were gradually replaced by
standards.

Today, a clear distinction exists between structure, style, and
behavior. **Hyper Text Markup Language** (**HTML**) defines the
structural elements that make up a web page. **Cascading Style Sheets**
(**CSS**) provides rules that modify the appearance of HTML elements,
including even animations and transformations. And finally, JavaScript
is the programming language that provides behavior and can access and
modify both HTML and CSS. So many different capabilities also introduced
a high level of _complexity_ and incompatibility between browsers. This
is where libraries and frameworks were born, at first to solve
incompatibility issues and standardize appearance, but soon evolved to
include other programming paradigms beyond the simple manipulation of
HTML and CSS.

Some of the most popular libraries and frameworks today use the
**reactive paradigm**. They cleverly make changes in JavaScript to
reflect automatically in the HTML/CSS. Vue 3 is the latest version of
the progressive framework, which heavily uses the concept of reactivity.
It also implements other paradigms and patterns of software design that
allow you to build anything from simple interactions in a static web
page to complex applications that can even be installed locally and
compete with native desktop applications.

In this book, we will explore the Vue 3 framework, and study different
design patterns to help us build first-class applications: from simple
web pages to powerful **progressive web applications** **(PWAs**). Along
the way, we will look at best practices and well-proven patterns in
software engineering.

This chapter covers the following topics:

- The progressive framework
- Single-file components
- Different syntax options to write components

By the end of this chapter, you will have a basic understanding of where
Vue 3 fits into the JavaScript landscape, and what features it provides.
For Vue 2 users, there is an appendix to this book, with changes needed
to be aware of when migrating an application. As the book progresses, we
will build knowledge on top of these concepts.

## The progressive framework

Before we describe what Vue is, we need to make the distinction between
the terms _library_ and _framework_. These are often used
interchangeably, but there is a difference, and a good developer should
be aware of this when choosing one or the other to build a web
application.

Let’s have a look at the definitions of these terms:

- A **library** is a collection of reusable code, in the form of
  functions, classes, and so on, that have been developed by someone
  else and can be easily imported into your program. It does not
  prescribe how and where to use it, but normally, they provide
  documentation on how to use them. It is up to the programmer to
  decide when and how to implement them. This concept exists in most
  development languages, to the point that some of them are completely
  based on the notion of importing libraries to provide functionality.
- A **framework** also has bundles of classes and functions for your
  use but prescribes specifications that define how the program runs
  and should be built, with what architecture, and the conditions
  where or how your code can be used. The key attribute to consider
  here is that a framework is inverting the control in the
  application, so it defines the flow of the program and data. By
  doing so, it emphasizes structures or standards that the programmer
  should abide by.

Having separated the concepts, now it raises the question of when to use
a library and when to use a framework. Before answering that, let’s be
clear that there is a huge gray area between these two when building
real-life applications. In theory, you could build the same application
using either one. As always in software engineering, it is a matter of
deciding upon the trade-offs for each approach. So, take what comes next
with a pinch of salt; it's not a law written in stone:

- You may want to use a _library_ when building small to medium-sized
  applications, or when in need to add additional functionality to
  your application (in general, you can use additional libraries
  inside frameworks). There are also exceptions to the “size”
  guideline. For example, **React** is a library, but there are huge
  applications built on top of it, such as Facebook. A trade-off to
  consider is that using only libraries without a framework will need
  establishing common approaches and more coordination within a team,
  so management and direction efforts can grow significantly. On the
  other hand, a library used inside plain JavaScript programming can
  offer some important performance improvements and give you
  considerable flexibility.
- You may want to use a _framework_ when you build medium to
  large-sized applications, when you need a structure to help you
  coordinate the development, or when you want to have a quick start
  skipping the “basics” of developing common functionality from
  scratch. There are frameworks that are built on top of other
  frameworks, for example, **Nuxt** is built on top of **Vue**. The
  trade-off to consider is that you are prescribed an architecture
  model to build the application, which often follows a particular
  approach and way of thinking. You and your team will have to learn
  about the framework and its limits and live within those boundaries.
  There is always the chance that your application may outgrow the
  framework in the future. At the same time, some of the benefits are
  as follows: easier coordination of work, considerable gains from a
  head-start, common problems solved true and tested, focus on
  situations (think shopping applications versus social media, for
  example), and much more. Depending on the framework, however, you
  could be facing some small performance loss by the extra processing
  it takes or difficulties scaling up. It is up to you to weigh up the
  trade-offs for each case.

So, what is Vue then? By definition, _Vue is a progressive framework_
for building user interfaces. Being progressive means that it has the
architectural benefits of a framework, but also the speed and modular
advantages of a library, as features and functionality can be
incrementally implemented. In practice, this means that it prescribes
certain models to build your application, but at the same time, allows
you to start small and grow as much as you need. You can even use
multiple Vue applications on a single page or take over the entire
application. You can even import and use other libraries and frameworks
if needed. Quite fancy!

Another fundamental concept in Vue is that of **reactivity**. It refers
to the capacity of automatically displaying in the HTML the value or
changes made to a variable in JavaScript, but also within your code.
This is a big part of the magic offered by Vue.

In traditional programming, once a variable is assigned a value, it
holds true until programmatically changed. However, in reactive
programming, if a variable’s value depends on other variables, then when
one of those dependencies changes, it will take the new resulting value.
Take, for example, the following simple formula:

```vue
A = B + C
```

In reactive programming, every time **B** or **C** changes value, so
will **A**. As you will see later in this book, this is a very powerful
model to build user interfaces. In this example, and to be according to
the terminology, **A** is the dependent, and **B** and **C** are the
dependencies.

In the coming chapters, we will explore this _progressive_ attribute as
we build the example applications. But before that, we need to see what
Vue 3 offers in its most basic form.

## Using Vue in your web application

There are several options to use Vue in your web application, and it
largely depends on what your objective is:

- To include a small self-contained application or piece of code on a
  page, you can directly import Vue and code inside a script tag
- To build a larger application, you will need a build tool that takes
  your code and _bundles_ it for distribution

Notice that I use the word _bundle_ and not _compile_, as JavaScript
applications are interpreted and executed at runtime on the browser.
This will become apparent later on when we introduce the concept of
**single-file components**

.

Let’s briefly see an example of the first case in a very simple HTML
page:

```html
<html>
  <head>
        
    <script src="https://unpkg.com/vue@3"></script>
  </head>
  <body>
        
    <div id="app">    {{ message }}     </div>
    <script>
      const { createApp } = Vue;
      createApp({
        data() {
          return { message: "Hello World!" };
        },
      }).mount("#app");
    </script>
  </body>
</html>
```

In the **head** section, we define a **script** tag and import Vue from
a free **content delivery network** (**CDN)**. This creates a global
variable, **Vue**, which exposes all the methods and functions of the
framework. Inside our **body** tag, we declare a **div** element with
**id="app"**. This defines where our small application will be mounted
and what part of the page our Vue framework will control. Notice the
content of **div: {{message}}**. The double curly brackets define a
point where the content will be replaced at runtime by the value of the
**message** variable that we define in JavaScript. This is called
**interpolation** and is the primary way in which a value (string,
number, etc.) can be displayed on the web page.

By the end of **body**, we create a script element with our application.
We start by extracting the **createApp** function from Vue and use it to
create an application by passing an object. This object has specific
fields that define a **component**. In this case, this component only
exposes a **data()** method that, in turn, returns an object. The field
names in this object will be treated as reactive variables that we can
use in our JavaScript as well as in the HTML. Finally, the
**createApp()** constructor returns the Vue 3 application instance, so
we chain the invocation and call the **mount()** method to, well, mount
our humble application to the element with the **app** ID. Notice that
we are using CSS selectors as the argument (the pound sign indicates the
**id** property, hence **id="app"** is selected by <span
class="No-Break">**\#app**</span>

).

As this method of using Vue is not that common (or popular), we will
focus on greater things and will use a **bundler** to organize our
workflow and have a significantly better developer experience...but
first, we need to know a bit more about Vue and what makes it so great.

### The bundler way, a better way...

As you can imagine, importing Vue directly into a web page would only
work for very small applications. Instead, Vue is structured in the
concept of _components_, which are reusable isolated sets of JavaScript
code, HTML, and CSS that behave as a unit. You can think of them as
building blocks to compose a web page. Obviously, a browser knows
nothing about this so we will use a _bundler_ to transform our
application into something the browser can interpret, with the added
benefit of running a number of optimizations in the process. Here is
where the “framework” part comes into action, as it prescribes how these
components should be written and what methods need to contain.

When using a bundler, it will wrap up all of our code into one or more
JavaScript files that the browser will load at runtime. The execution
workflow in a browser for a Vue application could be simplified as
follows:

<div>

<div>

<img src="images/Figure_1.01_B18602.jpg" width="697" height="302"
alt="Figure 1.1: A very simplified view of our application execution order when using a bundler" />

</div>

</div>

Figure 1.1: A very simplified view of our application execution order
when using a bundler

The browser will load the **index.html** page as usual and then load and
execute the **bundle.js** file, just like any other JavaScript. The
bundler will have packaged all our files and execute them in a
prescribed order:

1.  The **main.js** file will import and launch the Vue 3 application.
2.  Then, it will start the page composition from the _main_ component,
    here encapsulated in the **App.vue** file. This component will spawn
    other components, thus forming a tree of components that make up the
    page.

Don’t worry if this sounds a bit strange right now. We will see these
concepts in action as we advance building our example applications
throughout the book. In [_Chapter
3_](https://learning.oreilly.com/library/view/vue-js-3-design/9781803238074/B18602_03.xhtml#_idTextAnchor079),
_Setting Up a Working Project_, we will start a simple application using
this

same diagram.

So far, you have had a view of what libraries and frameworks are, and
just a quick peek into what Vue has to offer. What is important to
remember is that in the modern JavaScript world, it is common to use
bundlers to help us organize our applications and optimize the code for
the browser. We will work with the official Vue 3 bundler, **Vite**,
later on. But first, we need a few more basic concepts.

## Understanding single-file components

As you may have guessed, the **App.vue** file mentioned before is a
**single-file component** (**SFC**), one of the great contributions of
Vue. In this type of file, we can describe the HTML, CSS, and JavaScript
that defines the component. The web page is then composed in a hierarchy
of components, starting from an entry point (traditionally named
**App.vue**) down to the last customized button, if you will. We will
discuss components in depth in [_Chapter
4_](https://learning.oreilly.com/library/view/vue-js-3-design/9781803238074/B18602_04.xhtml#_idTextAnchor102),
_User Interface Composition with Components_, but for now, keep in mind
that this is the way to go, as prescribed by the framework. If you have
experience in an object-oriented language, this may look familiar (and
you wouldn’t

be wrong).

An SFC is a plain text file with the **.vue** extension that contains
the following sections:

```vue
<script setup>
// Here we write our JavaScript
</script>
<template>
      
  <h1>Hello World! This is pure HTML</h1>
</template>
<style scoped>
    h1 {
  color: purple;
}
</style>
```

It may look strange at first, to have all this content in one place, but
this is actually what makes it great. Here is a description of each
section:

- A **script** tag that surrounds our JavaScript, and depending on the
  syntax, it exports an object with well-defined fields. In practice,
  this becomes a _module_, which is the modern way to split code in
  JavaScript. Notice also that we are using a modifier attribute,
  **setup**. This will define the application interface that we are
  going to use to write our code in Vue. We could also declare the
  **lang="ts"** attribute to use TypeScript instead of plain
  JavaScript.
- A **template** tag surrounds the HTML for our component. Here, we
  can use HTML elements, other components, directives, and so on. A
  great advantage of Vue is that we can use plain HTML to write our
  HTML. This may sound obvious, but other libraries handle this
  completely differently and have their own syntax for it. However,
  Vue 3 also allows the use of other syntaxes through the use of
  bundler plugins. We are not left out of options here.
- A **style** tag, where we will place the CSS for our component. In
  this case, we use the **scoped** attribute, which will encapsulate
  the rules and limit them to our component, thus preventing them from
  “bleeding out” to the rest of the application. In the same way as
  with previous sections, we can also use different syntax to write
  the styles, as long as it is supported by the bundler.

###### Best practice

Always scope your styles, unless you are defining styles on a parent
component or CSS variables that you want explicitly to be passed on to
the entire application. For application-wide styles, use a separate CSS
file.

The important concept to remember is that an SFC contains these three
elements that define a single component. The bundler application will do
its magic and separate each part and place it where it belongs, so the
browser can interpret them properly. We will use the fast and new
**Vite** for this in [_Chapter
3_](https://learning.oreilly.com/library/view/vue-js-3-design/9781803238074/B18602_03.xhtml#_idTextAnchor079),
_Setting Up a Working Project_, and in [<span class="No-Break">_Chapter
4_</span>](https://learning.oreilly.com/library/view/vue-js-3-design/9781803238074/B18602_04.xhtml#_idTextAnchor102),
_User Interface Composition with Components_, we will delve in-depth
into components and how to handle the flow of control and information
between them. But first, let’s take a look at how we write

our components.

## Different strokes – options, composition, and script setup API

The classical way to describe a component in Vue 2 has been branded as
the _Options API_. To maintain backward compatibility, the same syntax
is also supported in Vue 3. However, there is also a new syntax named
the _Composition API_, which is what we will use in this book.

The _Options API_ is inherited from Vue 2 and prescribes that a
component is defined by an object with defined fields, none of which is
actually mandatory. Moreover, some of them have defined parameters and
expected outputs. For example, these are the most common fields to use
(also, a non-exclusive list):

- **data** should be a function that returns an object whose fields
  would become reactive variables.
- **methods** is an object that contains our functions. These
  functions have access to the reactive variables from data by using
  the **this.variableName**
  format.
- **components** is an object where each field provides a name for the
  template, and the value points to the constructor of another
  component (child to the current one).
- **computed** is an object whose attributes define “computed”
  properties. Each member is then a function or an object that can be
  used as reactive variables in our template and code. Functions will
  be read-only, and objects could include logic to read and write
  values to them. This concept will be clarified as we see code
  examples in [_Chapter
  3_](https://learning.oreilly.com/library/view/vue-js-3-design/9781803238074/B18602_03.xhtml#_idTextAnchor079),
  _Setting Up a_ <span class="No-Break">_Working Project_</span>
  .
- **props** and **emits** declare parameters to receive data from the
  parent component and declare events that get dispatched to the
  parent component. This provides a formal way to communicate and pass
  data between related components, but is not the only one, as we will
  see in [_Chapter
  7_](https://learning.oreilly.com/library/view/vue-js-3-design/9781803238074/B18602_07.xhtml#_idTextAnchor173),
  _Data_ <span class="No-Break">_Flow Management_</span>
  .
- Life cycle hooks methods are a series of functions that are
  triggered during the life cycle of the component.
- Mixins are objects that describe a common functionality that could
  be shared across multiple components. This is not the only way to
  reuse code in Vue 3. The use of mixins in the Options API caused
  some complications that gave birth to the Composition API. We will
  not deal with mixins in detail, but will see other approaches to
  share functionality between components (such as “composables”).

This syntax is well-defined but has some limitations. For small
components, it is too much scaffolding code, and for large components,
the code organization suffers greatly and is very verbose. Plus, in
order to reference the reactive variables declared in the **data**
section or other methods, the internal code has to use the **this**
keyword (e.g., **this.data_variable_name** or **this.myMethod()**). The
**this** keyword refers to the created instance of the component. The
problem is when the reserved word **this** changes meaning depending on
the scope and context of use. There are other drawbacks that have
appeared over time that led to the creation of the Composition API.
However, this syntax is relevant and fully supported by Vue 3. One
advantage of this is that you can easily migrate code from Vue 2 (within
certain considerations, as shown later in the _Appendix – Migrating
from_ _Vue 2_

).

The Composition API exposes a method called **Setup()** that is executed
before the component is mounted. In this method, we import functions and
components, declare variables, and so on, that define our component
instead of declaring them as “options.” This means that you can write
your code in more of a JavaScript way This gives you the freedom to
import, reuse, and organize your code better.

Let’s see a comparison between the two approaches with a reactive
variable, **\_hello="Hello World"**

:

**Options API**

```vue
<script>
export default {
  data() {
    return { _hello: "Hello World" };
  },
};
</script>
```

**Composition API**

```vue
<script>
import { ref } from "vue";
export default {
  setup() {
    const _hello = ref("Hello World");
    return { _hello };
  },
};
</script>
```

In the Options API, we just use the **data** field to return an object whose fields will turn into reactive variables. Vue will take care of interpreting the object. However, notice how, in the Composition API, we need to first import from Vue the **ref** constructor, which will create a reactive constant or variable for us. The end result is the same, but here, we have more fine control over what is done and where. When using the new Vite bundler, this fine control of what gets imported into our components may result in faster code building and development times.

At first sight, it seems that the Composition API is more verbose than the Options API, and so it is for such a trivial example. However, as our component begins to grow, this becomes the opposite. Still, verbose... So, there is an alternative syntax for the Composition API called _script setup_, and is the one we will use in this book. Let’s compare now how this component looks with this new syntax:

**Composition API –** **script setup**

```vue
<script setup>
import { ref } from "vue";
const _hello = ref("Hello World");
</script>
```

Two lines of code! That is hard to beat. Because we added the **setup** attribute in the **script** tag, the bundler knows everything we do here is in the realm of the Composition API, and all the functions, variables, and constants are automatically exposed to the template. There's no need to define exports. If we need something, we import it directly and use it. Also, we now have a few extra advantages, such as the following:

- We can have reactive and non-reactive variables displayed in our
  template
- We know that all the code is executed before the component is
  mounted
- The syntax is closer to vanilla JavaScript (a big plus!!!), so we
  can organize our code to our convenience and pleasure
- Smaller bundle size (did I mention this before? Yes, it is
  important!)

But wait, you may notice that I’m defining a reactive variable as a
_constant_! Yes, I am! And no, it is not an error. In JavaScript, a
constant points to a particular immutable value, which, in this case, is
an object, but this applies only to the object, not to its members. The
**ref()** constructor returns an object, so the constant applies to the
object reference and we _can_ change the value of its members. If you
have worked with pointers in Java, C, or a similar language, you may
recognize this concept as the use of **pointers**. But all this comes at
a cost. In order to access and modify the value, now we need to access
the **value** attribute from the object. Here is an example:

```vue
_hello.value="Some other value";
```

But, at the same time, nothing has changed in the way to access this
variable in the template:

```vue
<div>{{_hello}}</div>
```

So, in brief, every time a variable is declared as reactive using the
**ref()** constructor, you need to reference its value with the
**constant_name.value** format, and just as **constant_name** in the
template (HTML). When the constant name is used in the template, Vue
already knows how to access the value and you don’t need to reference it
explicitly as in JavaScript.

###### Tip

Adopt a code convention so you’ll know when an identifier refers to a
variable, constant, function, class, and so on.

## Exploring built-in directives in Vue 3

Vue also provides special HTML attributes called **directives**. A
directive is declared in the opening tag of an HTML element and will
affect or provide dynamic behavior or functionality to that element. We
can also create our own directives in Vue. Those provided by the
framework have a special notation starting with **v-**. As for the
purpose of this book, let’s explain the most commonly used Vue
directives:

### v-bind: (shorthand ":")

The **v-bind:** directive binds the value of an HTML attribute to the
value of a JavaScript variable. If the variable is reactive, each time
it updates its value, it will be reflected in the html. If the variable
is not reactive, it will be used only once during the initial rendering
of the HTML. Most often, we use only the **:** shorthand prefix
(semi-colon). For example, the **my_profile_picture** reactive variable
contains a web address to a picture:

**\<img :src="my_profile_picture"\>**

The **src** attribute will receive the value of the
**my_profile_picture**

variable.

### v-show

This directive will show or hide the element, without removing it from
the document. It is equivalent to modifying the CSS **display**
attribute. It expects a variable that gives a Boolean value (or
something that can be interpreted as true or non-empty). For example,
the **loading** variable has a Boolean value:

**\<div v-show="loading"\>…\</div\>**

The **div** will appear when the **loading** variable is true.

It is important to keep in mind that **v-show** will use the style of
the object to display it or not, but the element will still be part of
the **Document Object** **Model**<span class="No-Break"> (</span><span
class="No-Break">**DOM**</span>

).

### v-if, v-else, and v-else-if

These directives behave as you would expect with conditional sentences
in JavaScript, showing and hiding the element based on the value
resolved by the expression passed. They are similar to **v-show** in the
sense that they will show or hide the element, but with the difference
that they remove completely the element from the DOM. Because of this,
it can be expensive computationally if used improperly at a large scale
with elements that switch their state often, as the framework has to
perform more operations to manipulate the DOM, as opposed to **v-show**,
when only the display style needs to change.

###### Note

Use **v-if** to show or display elements that will not toggle once shown
or hidden (and preferred when the initial state is hidden). Use
**v-show** if an element will switch states often. This will improve the
performance when displaying large lists of elements.

### v-for and :key

These two attributes, when combined, behave like a **for** loop in
JavaScript. They will create as many copies of the element as prescribed
in the iterator, each one with the corresponding interpolated value. It
is extremely useful to display collections of data items. The **:key**
attribute is used internally to keep track of changes more efficiently,
and must reference a unique attribute of the item being looped on – for
example, the **id** field of an object, or the index in an array when
the indexes won‘t change. Here is an example:

**\<span v-for="i in 5" :key="i"\> {{i}} \</span\>**

This will display five **span** elements on the web page with the
interpolation of **i** showing the following:

**1 2 3 4 5**

### v-model

This directive is pure magic. When attached to an input element (input,
textarea, select, etc.), it will assign the value returned by the HTML
element to the referenced variable, thus keeping the DOM and JavaScript
state in synchronization – something that is called **two-way binding**.
Here is an example:

**\<input** **type="text" v-model="name"\>**

When the user enters text in HTML, the **"name"** variable in JavaScript
will immediately have that value assigned. In these examples, we are
using primitive data types such as numbers and strings, but we can also
use more complex values such as objects or arrays. More of this will
come in [_Chapter
4_](https://learning.oreilly.com/library/view/vue-js-3-design/9781803238074/B18602_04.xhtml#_idTextAnchor102),
_User Interface Composition with Components_, when we see components

in depth.

### v-on: (and the shorthand @)

This directive behaves a bit differently than the ones seen before. It
expects not a variable, but a function or an expression, and it ties an
HTML event to a JavaScript function to execute it. The event needs to be
declared immediately after the colon. For example, to react to a
**click** event on a button, we would write the following:

```vue
<button v-on:click="printPage()">Print</button>
```

When the button triggers the **click** event, the JavaScript
**"printPage()"** function will be executed. Also, the shorthand for
this directive is more commonly used, and we will use that from now on
in this book: just replace the **v-on:** with **@**. Then, the previous
example becomes the following:

**\<button @click="printPage()"\>Print\</button\>**

You can find the complete list of built-in directives in the official
documentation here: <https://vuejs.org/api/built-in-directives.html> .
We will see others as we move forward.

So far, we have seen that Vue 3 applications are built with components
that we can use in our HTML and that we create using SFCs. The framework
also provides us with directives to manipulate HTML elements, but that
is not all. In the next section, we’ll see that the framework also
provides some handy prebuilt components for us to use.

## Built-in components

The framework also provides us with several built-in components that we
can use without explicitly importing them into each SFC. I have provided
here a small description of each one, so you can refer to the official
documentation for the syntax and examples (see [<span
class="No-Break">https://vuejs.org/api/built-in-components.html</span>](https://vuejs.org/api/built-in-components.html)

):

- **Transition** and **TransitionGroup** are two components that can
  work together to provide animations and transition to elements and
  components. They need you to create the CSS animations and
  transition classes to implement the animation when inserting or
  removing elements into the page. They are mainly (or often) used
  when you are displaying a list of elements with **v-for**/**:key**
  or **v-if**<span class="No-Break">/</span><span
  class="No-Break">**v-show**</span>
  directives.

- **KeepAlive** is another wrapper component (meaning that it
  surrounds other components) used to preserve the state (internal
  variables, elements, etc.) when the component wrapped inside is no
  longer on display. Usually, component instances are cleared out and
  “garbage collected” when they are unmounted. **KeepAlive** keeps
  them cached so their state is restored when they come back on
  display.

- **Teleport** is a brand-new component in Vue 3, that allows you to
  transport the HTML of the component into another location anywhere
  on the page, even outside the component tree of your application.
  This helps in some cases where you need to display information
  outside your component but it has to be processed by your
  component’s internal logic.

- **Suspense** is a new component in Vue 3, but is still in an
  experimental phase, so its future is uncertain at the time of this
  writing. The basic idea is to display “fallback” content until all
  the asynchronous child components/elements are ready to be rendered.
  It is provided as a convenience since there are patterns that you
  could use to solve this problem. We will see some later on.

- **Component-is** is a special element that will load a component at
  runtime, as prescribed by the content of a variable – for example,
  if we need to display a component based on the value of a variable,
  and the use of other directives may be cumbersome. It can also be
  used to render HTML elements. Let’s see an example:

  ```vue
  <script setup>
  import EditItem from "EditItem.vue";
  import ViewItem from "ViewItem.vue";
  import { ref } from "vue";
  const action = ref("ViewItem");
  </script>

  <template>    <component :is="action"></component>    <button @click="action = 'EditItem'">Edit</button></template>
  ```

In this simple example, when the user clicks the **Edit** button, the
action value will change to **EditItem**, and the component will be
swapped in place. You can find the documentation here:

https://vuejs.org/api/built-in-special-elements.html.

With the idea of frameworks and components, we are now better prepared
to move forward.

## Book code conventions

In this book, we will use a set of code conventions and guidelines that
are good practices for Vue 3. They will help you not only understand the
examples of this book but also the code in the wild that you may come
across, as more and more developers use it. Let’s start from the
beginning.

### Variables and props

These are always in lowercase and spaces are replaced with an
underscore, for example, **total_count** and <span
class="No-Break">**person_id**</span>

..

### Constants

References to injected objects start with a **$** (dollar) sign, for
example, **$router**, **$modals**, and <span
class="No-Break">**$notifications**</span>

.

References to reactive data start with **\_** and are typed in snake
case, for example, **\_total** and <span
class="No-Break">**\_first_input**</span>

.

References to constant values are all in capital letters, for example,
**OPTION** and

**LANGUAGE_CODE.**

Constructor functions for injected dependencies will start with **use**,
for example, **const $store=useStore().**

### Classes and component names

These are written in PascalCase (each word starts with an upper case
letter), for example, **Person**, **Task**, and <span
class="No-Break">**QueueBuilder**</span>

.

### Functions, methods, events, and filenames

These are written in camel case, for example, **doSubscribe()** and<span
class="No-Break"></span><span class="No-Break"> </span>

**processQueue()**

### Instances

Instances will have the abstract name, followed by the word **Service**
in the case of plain JavaScript objects that provide functions,
**Model** for state models, and so forth. We will use services to
encapsulate functionality.

Here's an example: **const** **projectService=new ProjectService().**

###### Tip

With your team, always use a code convention that all agree upon. This
will make the code more readable and maintainable. It can be also
recommended to use a linter (a processor to capture conventions in your
code).

As mentioned, these code conventions are gaining popularity, so you may
see them in multiple projects. However, these are not mandatory
standards and most definitely are not prescribed by the framework. You
can write all in capital letters if that is your style, but what really
matters is that you and your team define and abide by your own
conventions in a consistent manner. What matters in the end, is that we
all have a common language when writing code.

## Summary

This chapter has gone from the basics of libraries and frameworks to Vue
3 directives, components, and even code conventions. These concepts are
still a bit abstract, so we will bring them down to implementation as we
move through the rest of the book and work with real code. However, we
are on safe footing now to learn about design principles and patterns in
the next chapter.

## Review questions

To help you consolidate the contents of this chapter, you can use these
review questions:

- What is the difference between a library and a framework?
- Why is Vue a “progressive” framework?
- What are single-file components?
- What are some of the most common directives used in Vue development?
- Why are code conventions important?

If you can answer these questions quickly in your mind, you’re good to
go! If not, you may want to review the chapter briefly to make sure you
have the basis to move on.
