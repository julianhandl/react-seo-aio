# React SEO All-In-One
This library provides stuff to seo-optimize your website built with react. You can either use single components for an easy usage of meta tags and other stuff or use predefined groups to get all the different tags out of your mind.

- [Usage](#usage)
  - [Basic](#usage-basic)
  - [Advanced](#usage-advanced)

## Quickstart
```
npm install react-seo-aio
```

```jsx
import React from "react";
import {Helmet} from "react-helmet";
import {HeadGroupBasic} from "react-seo-aio";

const Page = () => {
  return (
    <section class="page">
      <Helmet>
        <HeadGroupBasic
          title="How to succeed with SEO"
          description="SEO is more than just technical implementation. Nevertheless your html should be perfect."
          canonical="http://mybusiness.com/blog/seo"
        />
      </Helmet>
    </section>
  );
}

/* RENDERS TO THIS HEAD

<title>How to succeed with SEO</title>
<link rel="canonical" href="http://mybusiness.com/blog/seo">
<meta name="description" content="SEO is more than just technical implementation. Nevertheless your html should be perfect.">
<meta name="robots" content="index,follow">
<meta name="og:title" content="How to succeed with SEO">
<meta name="og:description" content="SEO is more than just technical implementation. Nevertheless your html should be perfect.">
<meta name="og:url" content="http://mybusiness.com/blog/seo">

*/
```

## Typescript
This library is written in Typescript and comes with all needed typings. Of course it also supports vanilla javascript.

## <a name="usage"></a>Usage
The easiest way to use this library is to use the predefined tag groups in an additive way.
- ```<HeadGroupBasic>```
- ```<HeadGroupMedia>```
- ```<HeadOpenGraphArticle>```

This library renders basic tags like meta tag. It is purposly not bound to any external libraries like ```react-helmet```. Different methods like basic react or next.js use different methods to render content inside the html head. Use the provided method.


### Component naming convention
The naming convention for all components of this library follows this rule:

1. Location: Where the tag will render (```<head>```)
2. (Optional) Group: The type of tag (OpenGraph, ...)
3. Tag Name / Topic: The tags name in camel case (1-n names)

The ```src``` folder follows the same naming conventions. For a reference of tags, take a look at the src folder.

#### Location
The location of the tag. In most cases this will be ```Head``` as most tags here are rendered inside the ```<head>``` tag.

#### Group
A group can be either just a group of tags that are grouped by topic. In this case the word we are looking for is ```Group```.

On the other hand it can be a type of tag like ```Open Graph``` or ```Twitter Cards```.

The group IS NOT a technical thing like ```meta``` tag.

#### Tag Name / Topic

The last part of the component name can either be an actual tag name like ```Title``` for the title tag. In this case the component name will be ```HeadTitle```. The name can also contain multiple words if we use the open graph tags for example. ```HeadOpenGraphArticleAuthor``` contains ```Article``` followed by ```Author``` and references the ```article:author``` tag inside the open graph.

In case of a topic group it can be a word like ```Basic``` which referes to the ```HeadGroupBasic``` component which will render all the must have tags inside the head. Another example would be ```Media```.

### <a name="usage-basic"></a>Basic
The easiest way to use this library is to use the predefined tag groups in an additive way.

Allways start with the ```<HeadGroupBasic>``` and add stuff from there.

If your current page is also represented by media like an image or video you can add the ```<HeadGroupMedia>```.


```jsx
import React from "react";
import {Helmet} from "react-helmet";
import {HeadGroupBasic, HeadGroupMedia} from "react-seo-aio";

const Page = () => {
  return (
    <section class="page">
      <Helmet>
        <HeadGroupBasic
          title="How to succeed with SEO"
          description="SEO is more than just technical implementation. Nevertheless your html should be perfect."
          canonical="http://mybusiness.com/blog/seo"
          robots={{index: true, follow: true}}
        />
        <HeadGroupMedia
          image="http://mybusiness.com/blog/seo/intro.jpg"
          video="http://mybusiness.com/blog/seo/intro.mp4"
        />
        <HeadOpenGraphArticle
          publishedTime={new Date("2020-11-04T08:00:00")}
          author="https://github.com/julianhandl"
          section="SEO"
          tag={["SEO", "Open Graph", "Metatags"]}
        />
      </Helmet>
    </section>
  );
}

/* RENDERS TO THIS HEAD

<title>How to succeed with SEO</title>
<link rel="canonical" href="http://mybusiness.com/blog/seo">
<meta name="description" content="SEO is more than just technical implementation. Nevertheless your html should be perfect.">
<meta name="robots" content="index,follow">
<meta name="og:title" content="How to succeed with SEO">
<meta name="og:description" content="SEO is more than just technical implementation. Nevertheless your html should be perfect.">
<meta name="og:url" content="http://mybusiness.com/blog/seo">
<meta name="og:image" content="http://mybusiness.com/blog/seo/intro.jpg">
<meta name="og:video" content="http://mybusiness.com/blog/seo/intro.mp4">
<meta name="og:type" content="article">
<meta name="article:published_time" content="2020-11-04T08:00:00">
<meta name="article:author" content="https://github.com/julianhandl">
<meta name="article:section" content="SEO">
<meta name="article:tag" content="SEO">
<meta name="article:tag" content="Open Graph">
<meta name="article:tag" content="Metatags">

*/
```

### <a name="usage-advanced"></a>(Advanced) with single tags
You can also mix groups with individual functions or event use them exclusively.

```jsx
import React from "react";
import {Helmet} from "react-helmet";
import {
  Title,
  Description,
  Canonical,
  MetaOpenGraphArticleAuthor
} from "react-seo-aio";

const Page = () => {
  return (
    <section class="page">
      <Helmet>
        <Title content="Homepage" />
        <Description content="Welcome to our business" />
        <Canonical href="http://mybusiness.com" />
        <MetaOpenGraphArticleAuthor content="https://github.com/julianhandl">
      </Helmet>
    </section>
  );
}
```