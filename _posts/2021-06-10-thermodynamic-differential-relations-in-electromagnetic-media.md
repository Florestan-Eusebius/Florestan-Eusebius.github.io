---
layout: article
title: 电磁介质的热力学微分式
tags: Physics
mathjax: true
---

一个困扰我很久的问题: 磁介质能量微分式中 $-M\,\mathrm{d}H$ 或者 $-M\,\mathrm{d}B$ 到底咋来的. 前几天固体理论课上老师提到朗道连续介质电动力学中介绍了这个问题, 我终于找到了借口集齐十卷, 同时解决了这个问题.<!--more-->

## 电介质

如果将能量视为自由电荷的函数, 即 $\boldsymbol{D}$ 的函数, 并假设电场是由导体上的电荷提供的, 那么导体上的电荷

$$
q=-\oint \boldsymbol{D}\cdot\mathrm{d}\boldsymbol{a}. 
$$

改变电荷量 $\delta q$ 的能量变化

$$
\delta R=\varphi\delta q=-\int \varphi\delta\boldsymbol{D}\cdot\mathrm{d}\boldsymbol{a}=-\int\nabla\cdot\left(\varphi\delta\boldsymbol{D}\right)\,\mathrm{d}V.
$$

被积函数按莱布尼茨法则展开, 由于导体内部 $\nabla\cdot\boldsymbol{D}=0$, 我们有

$$
\delta R=\int \boldsymbol{E}\cdot\delta\boldsymbol{D}\,\mathrm{d}V. 
$$

于是内能和自由能中出现的做功项为 $+\boldsymbol{E}\cdot\mathrm{d}\boldsymbol{D}$.

如果将能量视为导体电势的函数, 或者说电场的函数, 此时系统相当于与一个大的电源相连. 电势不变条件下为导体带上电荷 $\delta q$ 时外电源做功为

$$
\varphi \delta q= -\delta \int \varphi\boldsymbol{D}\cdot\mathrm{d}\boldsymbol{a}=-\delta \int \nabla\varphi\cdot \boldsymbol{D}\,\mathrm{d}V=\delta \int \boldsymbol{E}\cdot\boldsymbol{D}\,\mathrm{d}V.
$$

注意这里的推导与将自由电荷视为自变量时的推导区别在于这里固定了 $\varphi$, 因此 $\varphi\delta q=\delta\left(\varphi q\right)$. 在总能量中减去这个能量相当于一个勒让德变换, 因此我们需要额外提供的能量为

$$
\delta R= -\int\boldsymbol{D}\cdot\delta\boldsymbol{E}\,\mathrm{d}V.
$$

内能和自由能中出现的做功项为 $-\boldsymbol{D}\cdot\mathrm{d}\boldsymbol{E}$.

进一步, 如果假设能量为自由电荷的函数且我们希望只考虑介质的能量, 我们需要减去无介质时电场的能量. 假设无介质时电场为 $E'$, 此时功的表达式变成

$$
\begin{aligned}
    \delta R'&=\int \left(\boldsymbol{E}\cdot\delta\boldsymbol{D}-\boldsymbol{E'}\cdot\delta\boldsymbol{E'} \right)\,\mathrm{d}V\\  
    &=\int\left(\boldsymbol{D}-\boldsymbol{E'}\right)\cdot\delta\boldsymbol{E'}\,\mathrm{d}V+\int \boldsymbol{E}\cdot\left(\delta\boldsymbol{D}-\delta\boldsymbol{E'}\right)-\int\left(\boldsymbol{D}-\boldsymbol{E}\right)\cdot\delta\boldsymbol{E'}\,\mathrm{d}V.
\end{aligned} 
$$

上式中第一项

$$
\int \nabla\delta\varphi_0\cdot\left(\boldsymbol{D}-\boldsymbol{E}\right)=\oint\delta\varphi_0\left(\boldsymbol{D}-\boldsymbol{E'}\right)\cdot\mathrm{d}\boldsymbol{a}-\int\delta\varphi_0\nabla\cdot\left(\boldsymbol{D}-\boldsymbol{E'}\right)\,\mathrm{d}V.
$$

右边第一项由边界条件为 0, 第二项考虑到对应同样的 $\rho_0$ 所以为 0. 注意, 即使 $\boldsymbol{D}$ 和 $\boldsymbol{E'}$ 满足同样的散度方程, 存在介质时它们的边界条件不同, 因此并不处处相同, 这意味着我们引入的 $\boldsymbol{E'}$ 是有其独立的物理意义的. 类似地, 第二项为 0. 因此

$$
\delta R'=-\int \boldsymbol{P}\cdot\delta\boldsymbol{E'}\,\mathrm{d}V.
$$

内能和自由能中出现的做功项为 $-\boldsymbol{P}\cdot\mathrm{d}\boldsymbol{E'}$.

## 磁介质

类似地, 将能量视为 $\boldsymbol{B}$ 的函数, 系统的能量即构建系统所需做的功, 即电场对电流做功加上负号. 考虑 $\delta t$ 时间内负的电场对电流的功

$$
\begin{aligned}
\delta R&=-\int \delta t\boldsymbol{E}\cdot\boldsymbol{j}\,\mathrm{d}V\\  
&=\int\delta t\frac{\partial \boldsymbol{A}}{\partial t}\cdot\left(\nabla\times \boldsymbol{H}\right)\,\mathrm{d}V\\
&=\int\delta \boldsymbol{A}\cdot\left(\nabla\times\boldsymbol{H}\right)\,\mathrm{d}V\\
&=\int\left(\nabla\times\delta\boldsymbol{A}\right)\cdot\boldsymbol{H}\,\mathrm{d}V-\int\nabla\cdot\left(\delta\boldsymbol{A}\times\boldsymbol{H}\right)\,\mathrm{d}V\\  
&=\int\boldsymbol{H}\cdot\delta\boldsymbol{B}\,\mathrm{d}V. 
\end{aligned}
$$

将能量视为自由电流, 即 $\boldsymbol{H}$ 的函数, 此时系统相当于与电源相连, 保持电流不变时, $\delta t$ 时间内外电源做功为

$$
\begin{aligned}
    -\int \delta t\boldsymbol{E}\cdot\boldsymbol{j}\,\mathrm{d}V&=\int \delta t\frac{\partial \boldsymbol{A}}{\partial t}\cdot\boldsymbol{j}\,\mathrm{d}V\\  
    &=\int\delta\left(\boldsymbol{A}\cdot \boldsymbol{j}\right)\,\mathrm{d}V\\  
    &=\delta \int \boldsymbol{A}\cdot\left(\nabla\times\boldsymbol{H}\right)\,\mathrm{d}V\\  
    &=\delta\int\boldsymbol{H}\cdot\boldsymbol{B}\,\mathrm{d}V.
\end{aligned} 
$$

注意这个推导与前一个式子的区别在于这里把 $\boldsymbol{j}$ 看作恒定的, 因此 $\delta\boldsymbol{A}\cdot\boldsymbol{j}=\delta\left(\boldsymbol{A}\cdot\boldsymbol{j}\right)$. 减去这个功的效果等效于一个勒让德变换, 结果为

$$
\delta \tilde{R}=-\int \boldsymbol{B}\cdot\delta\boldsymbol{H}\,\mathrm{d}V. 
$$

视能量为自由电流的函数, 并减去无介质时磁场 $\boldsymbol{B'}$ 的能量 (注意, 仍利用 $\delta \tilde{R}$ 式积分, 知这个能量是负的), 得到

$$
\begin{aligned}
\delta R'&=-\int\left(\boldsymbol{B}\cdot\delta\boldsymbol{H}-\boldsymbol{B'}\cdot\delta\boldsymbol{B'}\right)\,\mathrm{d}V\\  
&=-\int\left(\boldsymbol{H}-\boldsymbol{B'}\right)\cdot\delta\boldsymbol{B'}\,\mathrm{d}V-\int\boldsymbol{B}\cdot\left(\delta\boldsymbol{H}-\delta\boldsymbol{B'}\right)\,\mathrm{d}V-\int\left(\boldsymbol{B}-\boldsymbol{H}\right)\cdot\delta\boldsymbol{B'}\,\mathrm{d}V\\
&=-\int\boldsymbol{M}\cdot\delta\boldsymbol{B'}\,\mathrm{d}V.
\end{aligned}
$$

前两项等于零, 推导方式完全类似于电介质的情况. 和电介质情况类似, 这里 $\boldsymbol{B'}$ 无论在物理意义上还是数值上都不同于 $\boldsymbol{H}$.

值得一提的是, 不同文献中, $-M\,\mathrm{d}B$ 和 $-M\,\mathrm{d}H$ 都会出现, 这里 $B$ 和 $H$ 都是指无介质时的磁场 $B'$, 因此没有区别. 