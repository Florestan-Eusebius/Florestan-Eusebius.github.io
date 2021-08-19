---
title: 切向量与几何直观
tags: Mathematics
mathjax: true
---

甲初学微分几何, 了解到切向量定义如下:

> 微分流形 $M$ 中 $p$ 点上的切向量 $X_p$ 是一个从 $p$ 点处所有 differentiable function 的代数到实数集的线性映射, 即 $X_p:\mathcal{F}_p(M)\rightarrow\mathbb{R}$, 且满足莱布尼茨积规则: $X_p(fg)=f(p)X_pg+g(p)X_pf$.

如果选择一个 chart $(U,\phi)$, 切向量可以用坐标表示为

$$ X_pf=X^i\frac{\partial}{\partial x^i}\left(f\circ\phi^{-1}\right). $$

他清楚这一定义显然具有坐标变换下的不变性, 所以满足向量的要求. 但仍然想不明白: 它和几何直观中切向量的定义有什么联系呢? 为什么不直接定义成一个"向量"呢? 于是他去找乙请教.

<!--more-->

甲: 为什么不直接定义为一个向量?

乙: 什么是向量?

甲: 就是向量空间中的元素啊?

乙: 在我们定义切向量之前, 这里没有向量空间. 注意我们研究的就是一个微分流形, 没有说把它嵌在一个欧氏空间里.

甲: 哦也就是说我之前考虑的"向量"的几何直观, 是要求流形嵌在一个欧氏空间里的. 一般而言我们研究的流形并不嵌在欧氏空间里, 所以不能直接通过欧氏空间中的向量来定义切向量.

乙: 是的. 到这一步, 你已经澄清了你之前说的几何直观的"向量"究竟是什么意思. 那么你是不是可以想想如果我们把流形嵌在了欧氏空间里, 这一切向量的定义与几何直观有什么联系呢?

甲: 对哦. 为了说明图像, 只考虑一个三维欧氏空间中的二维曲面, 假设它在局部可以记为 $z=F(x,y)$, 坐标映射为向 $xy$ 平面的投影, 即 $\phi=\operatorname{pr}_{xy}, \phi(p)=(x_p,y_p)$. 这个时候几何直观地给出两个切向量作为切空间的基: 

$$\left(1,0,\frac{\partial F(x,y)}{\partial x}\right),\quad \left(0,1,\frac{\partial F(x,y)}{\partial y}\right).$$

某个切向量用$(a,b)$表示, 那么它完整的坐标为

$$ t_p=\left(a,b,a\frac{\partial F(x,y)}{\partial x}+b\frac{\partial F(x,y)}{\partial y}\right). $$

再考虑切向量的严格定义, 对任意 $p$ 点的 differential function $f$, 有

$$ 
\begin{aligned}
    X_pf&=a\frac{\partial}{\partial x}f\left(x,y,F(x,y)\right)+b\frac{\partial}{\partial y}f\left(x,y,F(x,y)\right)\\
    &=a\frac{\partial f(p)}{\partial x}+b\frac{\partial f(p)}{\partial x}+\left(a\frac{\partial F(x,y)}{\partial x}+b\frac{\partial F(x,y)}{\partial y}\right)\frac{\partial f(p)}{\partial z}\\
    &=t_p\cdot\nabla f.
\end{aligned} $$

啊! 所以说把流形嵌入欧氏空间之后, 我们定义的切向量其实是几何直观上的切向量乘一个梯度算符.

乙: 嘿嘿, 笨蛋, 你现在能进一步体会这样定义的动机了吗?

甲: 也就是说, 对于欧氏空间中内嵌的流形, 我们可以通过欧氏空间中的向量来定义切向量, 但是这种依赖于欧氏空间的定义在讨论一般流形的时候失效了. 幸运的是, 在欧氏空间中, 我们发现切向量乘上一个梯度算符之后得到的线性泛函和切向量自己是一一对应的, 因此可以用后者替代前者, 后者替代前者之后我们发现可以通过直接指定映射本身来定义后者, 这就不需要外面那个欧氏空间了!

乙: 嗯嗯, 但是你没有说明欧氏空间中直接指定满足要求的映射为什么可以和几何直观的切向量一一对应, 你只说了几何直观的向量乘梯度算符之后和自己一一对应.

甲: 这不就是要说明向量乘梯度算符得到的泛函集合和满足开头定义中性质的集合是一样的吗? 这就是前面提到的坐标表示啊, 就是要证明那些偏导构成了一组基而已, 这个证明是前面提到坐标表示的基础, 我不可能不知道的.

乙: 啊这次没坑到你.