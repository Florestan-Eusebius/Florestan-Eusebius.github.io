---
title: 低能有效 Hamilton 量的微扰构造
tags:
- Physics
mathjax: true
---

一个多体 Hamilton 量经常难以严格求解, 但一般来说, 凝聚态物理更关心基态附近一个较低能量范围内发生的事情. 实用的原因是凝聚态系统所处的温度往往低于系统内禀的其他能量尺度, 例如 Fermi 能; 理论上的原因是所谓 "低能有效理论" 往往能 "演生" 出一些新奇而普适的特性, 新奇是指和理论的微观构造没有明显的相似性, 普适是指对微观细节的依赖较少, 微观上截然不同的系统在大尺度下看来可能是相似的.



人们一般所说的 "低能有效理论" 往往具有场论的形式, 它等价于如下 Hamilton 形式: 对于 Hamilton 量为 $H$ 的系统, 取能量截断 $\Lambda$; $H$ 可以按本征值展开为

$$
H = \sum_\lambda\lambda\Ket{\lambda}\Bra{\lambda},
$$

则能量截断 $\Lambda$ 下的有效 Hamilton 量为 

$$
H_{\mathrm{eff}}=\sum_{\lambda<\Lambda}\lambda\Ket{\lambda}\Bra{\lambda}.
$$

但是, 一般而言当 $H$ 非常复杂时, $H_{\mathrm{eff}}$ 并不易求得. 本文讨论一种特殊情况: Hamilton 量 $\tilde{H}$ 可以写成一个容易求解的部分 $H$ 和一个 "微扰" $V$ 的和. 注意, 为了角标不过于繁琐, 我们将完整的 Hamilton 量用 $\tilde{H}$ 标记, 将容易求解的部分用 $H$ 标记, 我们约定本文后续内容中, 所有以波浪标记的物理对象和加上微扰项的 $\tilde{H}$ 相关, 所有不作任何其他标记的物理对象和容易求解的 $H$ 相关. 此时, 我们可以方便地对 $H$ 进行谱分解. 若记完整的 Hilbert 空间为 $\mathcal{L}$, 则记 $H$ 的低能 (本征值小于 $\Lambda$) 本征态张成的空间为 $\mathcal{L}_ -$, 记其高能本征态张成的空间为 $\mathcal{L}_ +$, 向这两个子空间的正交投影算符分别记作 $\Pi_ -$ 和 $\Pi_ +$. 类似可定义 $\tilde{\mathcal{L}}_ {\pm}$ 和 $\tilde{\Pi}_ {\pm}$. 本文希望解决的问题是, 寻找一个 $\mathcal{L}_ {-}$ 空间中的算符 $H_ {\mathrm{eff}}$, 使其可以近似刻画 $\tilde{\Pi}_ -\tilde{H}\tilde{\Pi}_ -$ 的作用. 

## Hermite 算符的几个性质

为了研究一个算符在多大程度上可以近似看作另一个算符, 我们需要定义算符的 "距离", 并且讨论这一 "距离" 和本征值与本征态 (本征向量) 的关系. 为此, 先讨论一点数学.

算符的模刻画了算符距离零算符的 "距离", 两个算符之差的模刻画了两个算符之间的 "距离". 

> **定义** 设 $A$ 是作用在线性空间 $V$ 上的算符, 定义 $A$ 的模为
> 
> $$
> \Vert A \Vert = \sup_{x\in V, \lVert x \rVert=1}\left\lVert Ax\right\rVert.
> $$

Hermite 算符的模限制了其本征值的绝对值. 若 $A$ 是 Hermite 算符, 对任意 $x\in V$ 且 $\left\lVert x\right\rVert = 1$, 由 Cauchy-Schwarz 不等式知

$$
\left\lvert\Braket{x,Ax}\right\rvert\leq \lVert x \rVert \left\lVert Ax\right\rVert\leq \left\lVert A\right\rVert.
$$

若 $\lambda$ 是 $A$ 的本征值, 则 $\left\lvert\lambda\right\rvert\leq\left\lVert A\right\rVert$.

下面我们考虑对 Hermite 矩阵施加一个 "扰动" 会如何影响其本征值谱. 设本征值 $\lambda_1,\lambda_2,\ldots,\lambda_n$ 已递增排列, 则容易看出如下定理:

> **定理 (Courant–Fischer)** 设 $A$ 为 $n\times n$ Hermite 矩阵, 其本征值已递增排列, 则第 $k$ 个本征值为
> 
> $$
\lambda_k\left(A\right)=\min_{\dim V=k}\max_{\substack{x\in V\\ \lVert x\rVert =1}} \Braket{x,Ax} = \max_{\dim V=n-k+1}\min_{\substack{x\in V\\ \lVert x\rVert =1}} \Braket{x,Ax}.
> $$

由此可立刻得出如下定理: 

> **定理 (Weyl)** 设 $A, B$ 为 $n\times n$ Hermite 矩阵, 其本征值已递增排列, 则 
> 
> $$
\lambda_k\left(A\right)+\lambda_1\left(B\right)\leq \lambda_k\left(A+B\right)\leq \lambda_k\left(A\right)+\lambda_n\left(B\right),\quad 1\leq k \leq n.
> $$

由此可得如下二推论:

> **推论 (本征值的单调性)** 设 $A$ 是 $V$ 上的 Hermite 算符, $B$ 是 $V$ 上的半正定 Hermite 算符, 即对任意 $x\in V$, $\Braket{x, Bx}\geq 0$. 则对于递增排列的本征值, $\lambda_k\left(A\right)\leq\lambda_k\left(A+B\right)$, $1\leq k\leq \dim V$.

> **推论** 设 $A, B$ 是 $V$ 上的 Hermite 算符, 则对于递增排列的本征值, $\left\lvert\lambda_k\left(A\right)-\lambda_k\left(B\right)\right\rvert\leq \left\lVert A-B\right\rVert$, $1\leq k\leq \dim V$.

这两个推论将在证明中起到重要作用.

## 有效 Hamilton 量的构造

在微扰论中, 我们通常会定义 Green 函数并研究 Green 函数的微扰. 这一方面是因为场论中 Green 函数刻画了关联等物理信息, 另一方面是因为相比于本征值, 极点是一种更稳定的结构.

因此我们可以定义带波浪和不带波浪的两种 Green 函数, 它们都具有如下形式,

$$
G\left(z\right) = \left(zI-H\right)^{-1}.
$$

场论中的微扰论一般是指

$$
\tilde{G}=\left(G^{-1}-V\right)^{-1}=G\left(I-VG\right)^{-1}=G+GVG+GVGVG+\cdots,
$$

这里我们为了符号简洁省略了对 $z$ 的依赖, 后文中不致引起混淆时我们将不加指出地如此省略. 

我们可以在 $\mathcal{L}_ {\pm}$ 下将算符 $X$ 写成分块矩阵的形式, 即

$$
X = \begin{pmatrix}
    X_{++} & X_{+-} \\ X_{-+} & X_{--}
\end{pmatrix} \equiv \begin{pmatrix}
    \Pi_+X\Pi_+ & \Pi_+X\Pi_-\\ \Pi_-X\Pi_+ & \Pi_-X\Pi_-
\end{pmatrix}.
$$

如果 $X$ 是分块对角的, 则简记 $X_ +\equiv X_ {++}$, $X_ -\equiv X_ {--}$. 算符 $H$ 和 $G$ 即属这种情况.

定义自能 

$$
\Sigma_-\left(z\right) = zI_--\tilde{G}_{--}^{-1}\left(z\right).
$$

这里我们没有加波浪, 是因为我们不考虑对 $H$ 定义自能. 如果我们对 $H$ 定义自能, 得到的只是平凡的结果 $zI_ --G^{-1}_ -\left(z\right)=H_ -$. 当然, 这也暗示我们, $\Sigma_-\left(z\right)$ 也许和我们要找的 $H_{\mathrm{eff}}$ 有关. 常规的矩阵计算可以给出 Green 函数的表达式

$$
\tilde{G}_{--}=\left(G^{-1}_--V_{--}-V_{-+}\left(G_+^{-1}-V_{++}\right)^{-1}V_{+-}\right)^{-1},
$$

进而给出自能的表达式

$$
\Sigma_-\left(z\right)=zI_--G^{-1}_-+V_{--}+V_{-+}\left(G_+^{-1}-V_{++}\right)^{-1}V_{+-}. 
$$

利用级数展开, 可得自能的微扰展开形式

$$
\Sigma_-\left(z\right)=H_-+V_{--}+V_{-+}G_+V_{+-}+V_{-+}G_{+}V_{++}G_+V_{+-}+\cdots.
$$

这一展开具有清晰的物理意义: $H_ -$ 是零阶项; $V_ {--}$ 是一阶项; 二阶项则是借助微扰 $V_ {+-}$ 先 "激发" 到高能子空间的一个 "虚态" 上, 再在 "虚态" 上 "停留" 一段由 $G_ +$ 决定的 "时间", 再借助微扰 $V_ {-+}$ "跃迁" 回低能子空间; 更高阶项不仅在在虚态上 "停留", 还会在微扰的驱动下在高能子空间内 "跃迁" 若干次.

如前所述, 我们期待如果 $\Sigma\left(z\right)$ 变化不大, 就可以将某个 $\Sigma\left(z\right)$ 作为 $H_ {\mathrm{eff}}$. 我们将通过进一步考察 $\Sigma\left(z\right)$ 和 $\tilde{\Pi}_ -\tilde{H}\tilde{\Pi}_ -$ 的关系来明确并证明上述猜测.

## 自能的谱

不同于重整化操作中令截断连续变化, 我们这里关心一种更 "自然" 的情形: 理论的低能部分和高能部分被一个能隙隔开. 即容易求解的 Hamilton 量 $H$ 的本征值都落在 $(-\infty,\Lambda-\Delta/2]\cup[\Lambda+\Delta/2,+\infty)$ 中. 我们进一步要求微扰 $V$ 的模小于 $\Delta/2$, 因此截断 $\Lambda$ 也处在完整模型 $\tilde{H}$ 的能隙中.

首先考察 $\tilde{\Pi}_ -\tilde{H}\tilde{\Pi}_ -$ 的本征值和 $\tilde{G}_ {- -}$ 的关系. 由于上述能隙的 "保护", $\tilde{\mathcal{L}}_ -\cap\mathcal{L}_ +=\left\lbrace 0\right\rbrace$. 这是因为如果存在非零的 $\xi\in \tilde{\mathcal{L}}_ -\cap\mathcal{L}_ +$, 不失一般性设其模为 1, 则 $\Braket{\xi\|H+V\|\xi}<\Lambda$, $\Braket{\xi\|H\|\xi}\geq\Lambda+\Delta/2$. 于是 $\Braket{\xi\|V\|\xi}<\Delta/2$, 这和微扰的假设是矛盾的. 等价地, $\ker \Pi_ -\cap\tilde{\mathcal{L}}_ -=\left\lbrace0\right\rbrace$, 因此 $\Pi_ -$ 保持 $\tilde{\mathcal{L}}_ -$ 内的线性相关关系. 于是对于 

$$
\tilde{G}_{--}=\sum_j\left(z-\tilde{\lambda}_j\right)\Pi_-\Ket{\tilde{\psi_j}}\Bra{\tilde{\psi}_j}\Pi_-
$$

截断以下的本征值, 其对应的算符在投影前后的秩不变. 故我们得到如下引理.

> **引理 1** 如果 $\tilde{\lambda}\in(-\infty,\Lambda)$ 是 $\tilde{\Pi}_ -\tilde{H}\tilde{\Pi}_ -$ 的 $m$ 重本征值, 那么 $\tilde{G}_ {- -}$ 在 $\tilde{\lambda}$ 附近的展开具有 $\left(z-\tilde{\lambda}\right)^{-1}A+\mathcal{O}(1)$ 的形式, 其中 $\operatorname{rank} A=m$.

注意, 上述引理中包含了 $m=0$ 的特殊情况, 即 $\tilde{\lambda}$ 不是 $\tilde{\Pi}_ -\tilde{H}\tilde{\Pi}_ -$ 的本征值.

进一步考察 $\tilde{\Pi}_ -\tilde{H}\tilde{\Pi}_ -$ 的本征值和 $\Sigma\left(z\right)$ 的关系. 由于能隙和微扰的要求, 在 $w<\Lambda+\Delta/2-\lVert V\rVert$ 时, $G^{-1}_ + - V_ {++}=wI_ +-H_ + -V_ {++}$ 在这一区域是严格负定的, 因此 $\Sigma_ -\left(w\right)$ 在这一区域没有奇点. 设 $z < \Lambda$ 是 $\tilde{\Pi}_ -\tilde{H}\tilde{\Pi}_ -$ 的 $m$ 重本征值, 则在 $w<\Lambda+\Delta/2-\lVert V\rVert$ 时, $\tilde{G}^{-1}_ {- -}\left(w\right)$ 可展开为 $C + D\left(w-z\right)+\mathcal{O}\left(\lvert w-z\rvert ^2\right)$. 设 $\tilde{G}_ {- -}\left(w\right)=\left(w-z\right)^{-1}A + B +\mathcal{O}\left(\lvert w-z\rvert\right)$. 考察 $I_ - = \tilde{G}_ {- -}\left(w\right)\tilde{G}^{-1}_ {- -}\left(w\right)=AC\left(w-z\right)^{-1}+\left(AD+BC\right)+\mathcal{O}\left(\lvert w-z\rvert\right)$. 对比系数知 $AC = 0$, 于是 $\dim\ker C=d-\operatorname{rank} C \geq d - \dim\ker A = m$; 另一方面 $AD+BC=I_ -$, 于是 $\dim\ker C=d-\operatorname{rank} C \leq \operatorname{rank} AD \leq m$. 这里 $d\equiv \dim\mathcal{L}_ -$. 由此知 $\dim\ker C=m$, 进而得到如下引理.

> **引理 2** 如果 $z<\Lambda$ 是 $\tilde{\Pi}_ -\tilde{H}\tilde{\Pi}_ -$ 的 $m$ 重本征值, 那么它也是 $\Sigma_ -\left(z\right)$ 的 $m$ 重本征值.

已经非常接近我们期待的结果了, 只是 $\Sigma_ -\left(z\right)$ 也是随 $z$ 变化的. 对 $\Sigma_ -\left(z\right)$ 求导可知, 

$$
\frac{\mathrm{d} \Sigma_-\left(z\right)}{\mathrm{d} z}=-V_{-+} \left(zI_+-H_+-V_{++}\right)^{-2}V_{+-} \leq 0,
$$

即 $\Sigma_ -\left(z\right)$ 是递减的. 定义 $f_ 1\left(z\right)$ 为 $\tilde{\Pi}_ -\tilde{H}\tilde{\Pi}_ -$ 小于 $z$ 的本征值的数量, $f_ 2\left(z\right)$ 为 $\Sigma_ -\left(z\right)$ 小于 $z$ 的本征值的数量. 显然在 $z\rightarrow -\infty$ 时, $f_ 1\left(z\right)=f_ 2\left(z\right)=0$. 当 $z$ 逐渐增大时, 一旦 $z$ "碰上" 一个 $\tilde{\Pi}_ -\tilde{H}\tilde{\Pi}_ -$ 的 $m$ 重本征值, 它也会同时 "碰上" 一个 $\Sigma\left(z\right)$ 的 $m$ 重本征值, 于是 $f_ 1$ 和 $f_ 2$ 将同时增加 $m$. 注意 $m$ 是包括 0 的. 因此我们得到如下引理.

> **引理 3** 如果 $z<\Lambda$ 是 $\tilde{\Pi}_ -\tilde{H}\tilde{\Pi}_ -$ 的第 $j$ 个本征值, 那么它也是 $\Sigma_ -\left(z\right)$ 的第 $j$ 个本征值.

## 结论

由上述三个引理我们得到如下定理.

> **定理** 对于满足上述能隙和微扰条件的问题, 即 $\operatorname{spec} H \in (-\infty,\Lambda-\Delta/2]\cup[\Lambda+\Delta/2,+\infty)$, $\lVert V\rVert <\Delta/2$, 如果对给定的 $\epsilon$ 存在一个 $H_{\mathrm{eff}}$ 满足
>  - $H_ {\mathrm{eff}}$ 的本征值落在区间 $[c,d]$ 中, 其中 $c<d<\Lambda-\epsilon$;
>  - 对于任意 $z\in[c-\epsilon,d+\epsilon]$, $\lVert \Sigma_ -\left(z\right)-H_ {\mathrm{eff}}\rVert\leq \epsilon$;
> 
> 则 $\tilde{\Pi}_ -\tilde{H}\tilde{\Pi}_ -$ 的第 $j$ 个本征值 $\tilde{\lambda}_ j$ 和 $H_ {\mathrm{eff}}$ 的第 $j$ 个本征值最多相差 $\epsilon$.

证明如下: 根据定理条件, 对于任意 $z\in[c-\epsilon,d+\epsilon]$, $\Sigma\left(z\right)$ 的本征值也落在 $[c-\epsilon,d+\epsilon]$ 中. 根据单调性, 当 $z<\Lambda$ 但处在上述区间之外时, $z$ 不会是 $\Sigma_ -\left(z\right)$ 的本征值. 因此根据引理 2, $\tilde{\Pi}_ -\tilde{H}\tilde{\Pi}_ -$ 的本征值也落在区间 $[c-\epsilon,d+\epsilon]$ 内. 再根据引理 3, 
$$
\left\lvert\lambda_j\left(\tilde{\Pi}_ -\tilde{H}\tilde{\Pi}_ -\right)-\lambda_j\left(H_{\mathrm{eff}}\right)\right\rvert=\left\lvert\lambda_j\left(\Sigma_ -\left(\lambda_j\left(\tilde{\Pi}_ -\tilde{H}\tilde{\Pi}_ -\right)\right)\right)-\lambda_j\left(H_{\mathrm{eff}}\right)\right\rvert\leq \epsilon,
$$
证毕.