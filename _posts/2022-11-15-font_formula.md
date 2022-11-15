---
title: Jekyll 公式支持和字体适配
mathjax: true
tags: 
- 技术
---

配置 MathJax 并使用 MLModern 字体.

<!--more-->

## 配置 MathJax 

该博客使用 MathJax 渲染公式, 配置方法见[官方文档](https://docs.mathjax.org/en/latest/web/configuration.html). 具体来说, 我们在 `/_data/variables.yml` 中定义了 MathJax 源:

```yml
mathjax: 'https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-mml-chtml.js'
```

在 `/_includes/markdown-enhancements/mathjax.html` 中写入如下配置

```html
<script>
	MathJax = {
	  tex: {
		inlineMath: [['$', '$'], ['\\(', '\\)']],
		tags: 'ams'
	  },
	};
</script>
<script type="text/javascript" id="MathJax-script" async
	src="{{ _sources.mathjax }}">
</script>
```

其中 `tags: ams` 表示对 `equation` 环境中的行内公式进行编号.

## 字体匹配

MathJax 2 支持多种字体, 见[文档](https://docs.mathjax.org/en/latest/output/fonts.html?highlight=font#mathjax-font-support). 目前版本的 MathJax 3 只支持默认字体, 但其功能更为完善 (例如支持 `\ket{}` 等命令, 这对于物理学爱好者无疑具有很强的吸引力), 所以我们使用这一版本. MathJax 3 的默认字体大小和粗细都最接近 [MLModern 包](https://ctan.org/pkg/mlmodern?lang=en)提供的字体. 我们下载该字体的 ttf 文件后将其放在 `/_sass/font/` 文件夹中, 并在 `/_sass/common/_variables.scss` 中写入 

```scss
@font-face {
  font-family: 'MLMRoman12';
  src: url-loader("../font/mlmr12.ttf");
  font-style: normal;
  font-weight: normal;
}

body {
  font-family: 'MLMRoman12', Georgia, "Songti SC";
}

h1, h2, h3 {
  font-family: Verdana, Helvetica, sans-serif;
}
```

如下为效果展示

abcdefghijklmnopqrstuvwxyz123456789 (文字)

$\text{abcdefghijklmnopqrstuvwxyz123456789}$ (MathJax, `\text{}` 内)

*abcdefghijklmnopqrstuvwxyz123456789* (文字)

$abcdefghijklmnopqrstuvwxyz123456789$ (MathJax)

可以看出字体宽度不同但字形极为接近, 尤其是正体, 这种接近使得我们在公式中写文字性批注时不必在意和正文样式不一致的问题.