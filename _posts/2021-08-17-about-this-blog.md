---
layout: article
title: 关于这个博客
tags: 技术
---

之前搭的博客由于太久远, 维护得有些混乱, 干脆推倒重来. 内容的组织逻辑也有变化. <!--more-->

## 博客的搭建

系统: Windows 10

### 建立 Git 仓库

建立名称为 `<username>.github.io` 的仓库.

在本地创建 `MyBlog` 目录, 将远程仓库与此关联.

```bash
git init
git remote add origin git@github.com:<username>/<repository name>.git
```

### 安装 Ruby, RubyGems, Jekyll 和 Bundler

参考文档 [Jekyll Docs](https://jekyllrb.com/docs/installation/)

在 [Downloads (rubyinstaller.org)](https://rubyinstaller.org/downloads/) 安装 `Ruby+Devkit`. 运行安装文件将其安装到 `C:/`. 

运行

``` bash
gem install jekyll bundler
```

### 使用 Jekyll 建立博客

在博客目录中 `jekyll new .` 可以建立一个简单的新博客. 我这里直接将 TeXt 主题的文件复制到了本地. 参考[快速开始 - TeXt Theme (tianqi.name)](https://tianqi.name/jekyll-TeXt-theme/docs/zh/quick-start).

使用如下命令预览

```bash
bundle exec jekyll server
```

报错

```bash
cannot load such file -- webrick
```

运行 `bundle add webrick` 安装. 再次尝试预览, 成功!

## 常用维护方式

在 `_posts` 目录中按照已有文件的格式创建新文件即可. 在使用

```bash
bundle exec jekyll server
```

预览的过程中, 浏览器中内容可即时刷新. 此时已生成对应文件. 因此直接 add - commit - push 即可完成部署.

## 内容

博客里文章主要分三种, 一是随笔和文艺创作, 二是一些技术向的操作记录, 三是科普或趣味向的学术短文. 考虑到 markdown 对公式的支持还是非常有限, 主要的学术内容放在 Notes 版块里 (见标题栏), 以 PDF 的形式呈现.