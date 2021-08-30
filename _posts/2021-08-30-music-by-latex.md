---
title: '使用 LaTeX 制作音乐文档'
tags: 
- LaTeX
- LilyPond
- Music
---

因为自学乐理需要写一些 note，我需要使用 LaTeX 编辑含有谱例、音乐记号的音乐文档。常见的选项是 MusiXTeX 包用来制作谱例，musicography 包用来提供正文中的音乐记号。但 MusiXTeX 的语法实在是太反人类了，非常低效，而且不太好看。考虑到 LilyPond 语法比较简单，而且具有导出 midi 文件等强大的功能，我平时单纯打谱也是用它，于是考虑整合 LilyPond 和 LaTeX 成为了一个好的选择。<!--more-->LilyPond 的下载和基本使用都可参考其官网：[LilyPond – Music notation for everyone](https://lilypond.org/index.html)。

## 添加谱例

### 现成工具：lilypond-book

参考 [LilyPond Application Usage: 3. Running lilypond-book](https://lilypond.org/doc/v2.22/Documentation/usage/lilypond_002dbook)。但目前我在 Windows 10 系统中运行总是出错，现象和 [lilypond-book on Windows 10 always shows usage info (#6008) · Issues · LilyPond / LilyPond · GitLab](https://gitlab.com/lilypond/lilypond/-/issues/6008) 中所述类似，而上述链接中的方法均不能解决问题，于是放弃。

### 乐谱中截取

事实上，将乐谱导出为 eps 或 pdf 格式的矢量图并导入文档也是一种可行的方案，该方案的要点在于保持谱表大小一定并使得边距尽量小。LilyPond 提供了类似的功能，见 [LilyPond Notation Reference: 3.4.1 Extracting fragments of music](http://lilypond.org/doc/v2.19/Documentation/notation/extracting-fragments-of-music)。

如果我们要导出单行乐谱，只需要在 `layout` 中加入下列片段

```latex
\layout {
  clip-regions
  = #(list
    (cons
    (make-rhythmic-location 5 1 2)
    (make-rhythmic-location 7 3 4)))
}
```

`make-rhythmic-location` 之后的数字表示从第 5 小节第 1 个二分音符的对应的时间之后开始，到第 7 个小节第 3 个四分音符之前结束。运行时，加上 `-dclip-systems` 选项。这样操作输出的是 eps 和 pdf 格式的乐谱片段，其大小就是 LilyPond 中设置的谱表的大小。

LilyPond 中上述截取只能截取单行，如果设置范围跨行了，会截多张图出来。如果涉及多行的谱例，续设定乐谱的行宽和 LaTeX 文档的行宽相等（或者设置到任何你想要的行宽）。同时我们希望首行不缩进，末行在该结束的位置正常结束不扩展为一整行，因此 `layout` 设置为

```latex
\layout {
  indent = #0 % 首行不缩进
  line-width = 6.25\in % 设置行宽
  ragged-last = ##t % 最后一行正常结束
  \context {
    \Score
    \omit BarNumber
  } % 不显示小节号
  clip-regions % 截取
  = #(list
    (cons
    (make-rhythmic-location 1 0 1)
    (make-rhythmic-location 17 1 2)))
}
```

由于小节号标在每一行前，如果小节号位数不一致，截出来的图最左边对齐的位置就不一样，因此这里作一妥协：不显示小节号，上述代码中 `\context` 部分即实现不显示小节号的功能。

### LaTeX 浮动体设置

用上述方法截取谱例后，需要将其放在 LaTeX 浮动体中。我们自定义 `Example` 浮动体。使用 `float` 宏包，同时设置外形类似三线表的浮动体。

```latex
\usepackage{float}

\floatstyle{ruled}
\newfloat{Example}{h}{example}[section]
```

使用时只需

```latex
\begin{Example}
	\raggedright % 多行谱例时使用，避免 Underfull \hbox warning.
	\includegraphics{clip1.pdf}
	\includegraphics{clip2.pdf}
	\caption{A testing example}
	\label{eg:test}
\end{Example}
```

其中 clip1.pdf 等是 LilyPond 生成的乐谱片段。

## 音乐记号

使用 `lilyglyphs` 宏包以提供音乐符号。该宏包默认的临时记号太大了，我们可以自行调整如下

```latex
\renewcommand{\sharp}{\lilyGlyph[scale=1.2,raise=.5]{accidentals.sharp}}
\renewcommand{\flat}{\lilyGlyph[scale=1.2,raise=.5]{accidentals.flat}}
\renewcommand{\natural}{\lilyGlyph[scale=1.2,raise=.5]{accidentals.natural}}
\renewcommand{\flatflat}{\lilyGlyph[scale=1.2,raise=.5]{accidentals.flatflat}}
\renewcommand{\doublesharp}{\lilyGlyph[scale=1.2,raise=.5]{accidentals.doublesharp}}
```

在公式环境中无法调整其大小，故定义

```latex
\newcommand{\mathscript}[1]{\text{\scriptsize #1}}
```

三个数字的数字低音使用如下命令实现

```latex
\newcommand{\fbtri}[3]{
    \begin{array}{l}
    \scriptstyle{#1}\\
    [-1.35ex]\scriptstyle{#2}\\
    [-1.35ex]\scriptstyle{#3}  
\end{array}
}
```

角标等使用 `amsmath` 宏包的公式环境实现。

一个小例子见 [Florestan-Eusebius/LaTeXMusicExample (github.com)](https://github.com/Florestan-Eusebius/LaTeXMusicExample)