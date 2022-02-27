
import React, { memo } from 'react'
import { MomentContentWrapper } from './style'
import ReactMarkdown from'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {base16AteliersulphurpoolLight, xonokai} from 'react-syntax-highlighter/dist/esm/styles/prism'
import gfm from 'remark-gfm'

const components = {
  code({ node, inline, className, children, ...props }) {
      /*
        node:
  */
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
          <SyntaxHighlighter style={ xonokai } language={ match[1] } PreTag="div" children={ String(children).replace(/\n$/, '') } { ...props } />
      ) : (
          <code className={ className } { ...props } />
      )
  },
  h3(props) { 
      // console.log(props)
      return <h3 style={ { color: 'red' } } { ...props } /> 
}

}
const markdown = `

# 1.1对防抖节流的认识

防抖和节流的概念其实最早并不是出现在软件工程中，防抖是出现在电子元件中，节流出现在流体流动中。

- 而JavaScript是事件驱动的，大量的操作会触发事件，加入到事件队列中处理。

- 而对于某些频繁的事件处理会造成性能的损耗，我们就可以通过防抖和节流来限制事件频繁的发生。

# 1.2. 为什么需要防抖节流
----
>
## 1.2.1. 为什么需要防抖

>
&nbsp;&nbsp;&nbsp;我先举一个生活中的例子：
>
>我们都遇到过这样的场景，在某个搜索框中输入自己想要搜索的内容：
>
![例子](https://pic3.zhimg.com/v2-80ec55af082960b899e0409140824932_b.webp)

你可以看到， 当你在输入框每输入一个字符的时候

百度都会不断的根据当下的输入给予新的提示

那么，如果有一个人打字速度非常快

他以迅雷不及掩耳盗铃儿响叮当之势，输入了helloworld这个单词

仅用了200毫秒

这时键盘事件函数被连续触发了10次

我们把这称之为函数抖动。

## 1.2.2. 为什么需要节流


我先举一个生活中的例子：

在有课的情况下，我每天都会在晚上8点钟开始上课，这是一个固定频率；

无论中间有多少学生和我说，老师我们早点上课吧？不行，晚上8点钟准时开讲；

# 2.1.1防抖函数的实现
---
> **防抖函数的核心思路如下**：
>
&nbsp; 1.当触发一个函数时，并不会立即执行这个函数，而是会延迟（通过定时器来延迟函数的执行）

&nbsp; 2.如果在延迟时间内，有重新触发函数，那么取消上一次的函数执行（取消定时器）；

&nbsp; 3.如果在延迟时间内，没有重新触发函数，那么这个函数就正常执行（执行传入的函数）；

**接下来只需要将思路转化为代码即可**：

一、定义debounce函数要求传入两个参数

1.需要处理的函数fn；

2.延迟时间；

二、通过定时器来延迟传入函数fn的执行

1.如果在此期间有再次触发这个函数，那么clearTimeout取消这个定时器；

2.如果没有触发，那么在定时器的回调函数中执行即可；


~~~js
function debounce(fn, delay) {
  var timer = null;
  return function() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(function() {
      fn();
    }, delay);
  }
}
~~~
**优化参数this**

我们知道在oninput事件触发时会有参数传递，并且触发的函数中this是指向当前的元素节点的

~~~js
function debounce(fn, delay) {
  var timer = null;
  return function() {
    if (timer) clearTimeout(timer);
    // 获取this和argument
    var _this = this;
    var _arguments = arguments;
    timer = setTimeout(function() {
      // 在执行时，通过apply来使用_this和_arguments
      fn.apply(_this, _arguments);
    }, delay);
  }
}
~~
`
export default memo(function ZYMomentContent(props) {
  const { info } = props
  const input = `# This is a header\n\nAnd this is a paragraph`
  return (
    <MomentContentWrapper>
     {/* <p> {info.content}</p> */}
     <ReactMarkdown children={info.content} remarkPlugins={[gfm]} escapeHtml={false} components={components}/>
    </MomentContentWrapper>
  )
})
