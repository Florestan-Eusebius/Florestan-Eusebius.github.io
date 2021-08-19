---
title: 纠缠和统计力学的基础
tags: Physics
mathjax: true
---

## 结论

传统的统计力学假设宇宙是一个满足能量约束的微正则系综, 它的一个足够小的子系统的概率分布可以由正则系综导出. Popescu S, et al. [^1] 提出, 如果假设宇宙是一个纯态, 那么它的一个子系统的密度矩阵和统计力学导出的正则分布密度矩阵几乎是相同的.

<!--more-->

我们考虑一般的约束$R$, 约束下的态空间为

$$
\mathcal{H}_R\subseteq \mathcal{H}_S\otimes\mathcal{H}_E, 
$$

其中$S$指代我们考虑的系统, 维数为$d_S$, $E$指代环境, 维数为$d_E$. 态空间的维数记为$d_R$.

传统的统计力学以等概率原理为根基, 假设宇宙的密度矩阵为

$$
\mathcal{E}_R=\frac{1}{d_R}P_R, 
$$

$P_R$为$\mathcal{H}_R$上的投影算符. 于是系统和环境的密度矩阵为

$$
\Omega_S=\operatorname{Tr}_E\mathcal{E}_R,\quad\Omega_E=\operatorname{Tr}_S\mathcal{E}_R. 
$$

当宇宙是一个纯态$\|\phi\rangle$时, 子系统和环境的密度矩阵为

$$
\rho_S=\operatorname{Tr}_E|\phi\rangle\langle\phi|,\quad\rho_E=\operatorname{Tr}_S|\phi\rangle\langle\phi|
$$

显然, 对所有可能的纯态$\|\phi\rangle\in\mathcal{H}_R$取平均, $\langle\rho_S\rangle=\Omega_S, \langle\rho_E\rangle=\Omega_E$. 为描述对某一特定纯态$\|\phi\rangle$两种假定下密度矩阵的差异, 引入

$$
D(\rho_S(\phi),\Omega_S)=\frac{1}{2}\operatorname{Tr}\sqrt{(\rho_S-\Omega_S)^\dagger(\rho_S-\Omega_S)}. 
$$

在$\mathcal{H}_R$上引入测度, 则可以证明如下定理:

> 对于任意的$\epsilon>0$, 定义
>
> $$
 \eta=\epsilon+\frac{1}{2}\sqrt{\frac{d_S}{d_E^{\text{eff}}}},
> $$
> 
> 其中
>
> $$
 d_{E}^{\text{eff}}=\frac{1}{\operatorname{Tr}\Omega_E^2}\geq \frac{d_R}{d_S},
> $$
> 
> 那么存在
> 
>$$
 \eta'=4\exp\left(-\frac{2}{9\pi^3}d_R \epsilon^2\right),
>$$
>
> 使得
> 
>$$
 \frac{V\left(\left\{|\phi\rangle\in\mathcal{H}_R|D(\rho_S(\phi),\Omega_S)\geq\eta\right\}\right)}{V\left(\left\{|\phi\rangle\in\mathcal{H}_R\right\}\right)}\leq\eta'.
>$$

该定理表明, 如果$d_R\gg 1$(这是必然的), 且$d_S^2\ll d_R^{1/3}$(对于我们研究的系统, 这几乎也是必然的), 那么我们研究的系统相对等概率原理推出的情况几乎不会有大于$d_R^{-1/3}$的偏离. 因为取$\epsilon\sim d_R^{-1/3}$, 则$\sqrt{d_S/d_E^{\text{eff}}}\ll\epsilon$, $d_R\epsilon^2\gg 1$.

这一结论的意义在于, 对于一般的热力学系统, 我们可以取消统计力学有关平均值的假设, 例如"等概率原理", "时间平均", "系综平均"等, 而仅仅用量子力学的基本原理导出和等概率原理相同的结论.

## 证明

由Levy's Lemma, 只需证明

$$
\langle D(\rho_S,\Omega_S)\rangle\leq\frac{1}{2}\sqrt{\frac{d_S}{d_E^{\text{eff}}}}. 
$$

首先

$$
\begin{aligned}
    D(\rho_S,\Omega_S)&=\frac{1}{2}\sum_{i=1}^{d_S}|\lambda_i|\\  
    &\leq\frac{1}{2}\sqrt{d_S\sum_{i=1}^{d_S}\lambda_i^2}\\  
    &=\frac{1}{2}\sqrt{d_S\operatorname{Tr}(\rho_S-\Omega_S)^2}.
\end{aligned} 
$$

其中$\lambda_i$为$\rho_S-\Omega_S$的本征值. 进而

$$
\begin{aligned}
    \langle D(\rho_S,\Omega_S)\rangle&\leq\bigg\langle\frac{1}{2}\sqrt{d_S\operatorname{Tr}(\rho_S-\Omega_S)^2}\bigg\rangle\\
    &\leq\frac{1}{2}\sqrt{\langle d_S\operatorname{Tr}(\rho_S-\Omega_S)^2\rangle}\\
    &=\frac{1}{2}\sqrt{d_S\left(\langle\operatorname{Tr}\rho_S^2\rangle-\operatorname{Tr}\langle\rho_S\rangle^2\right)}.
\end{aligned} 
$$

最后证明

$$
 \langle\operatorname{Tr}\rho_S^2\rangle\leq\operatorname{Tr}\langle\rho_S\rangle^2+\operatorname{Tr}\langle\rho_E\rangle^2.
$$

我们引入原始空间的一个拷贝, $\mathcal{H}\_R\otimes\mathcal{H}\_{R'}, \mathcal{H}\_{R'}\subseteq\mathcal{H}\_{S'}\otimes\mathcal{H}_{E'}$.

对于一般的线性空间$V$上的算符$A$, 我们可以把它的平方的迹和$V\otimes V$上一个算符的迹联系起来,

$$
\begin{aligned}
    \operatorname{Tr}_{V\otimes V} \left(\left(A\otimes A\right)F_{VV}\right)&=\operatorname{Tr}\sum_{kl;k'l';vv'}\left(A_{kl}|k\rangle\langle l|\right)\otimes\left(A_{k'l'}|k'\rangle\langle l'|\right)|v'v\rangle\langle vv'|\\  
    &=\operatorname{Tr}\sum_{kl;k'l';vv'}A_{kl}A_{k'l'}|kk'\rangle\langle ll'|v'v\rangle\langle vv'| \\  
    &=\sum_{kl;k'l';vv'}A_{kl}A_{k'l'}\langle vv'|kk'\rangle\langle ll'|v'v\rangle\\  
    &=\sum_{kl}A_{kl}A_{lk}\\  
    &=\operatorname{Tr}_V(A^2),
\end{aligned} 
$$

其中, 交换算符$F_{VV}$定义为

$$
F_{VV}=\sum_{v,v'}|v'\rangle\langle v|\otimes|v\rangle\langle v'|. 
$$

由此, 

$$
\begin{aligned}
\operatorname{Tr}_S\rho_S^2&= \operatorname{Tr}_{SS'}\left(\left(\rho_S\otimes\rho_{S'}\right)F_{SS'}\right)\\   
&=\operatorname{Tr}_{RR'}\left(\left(|\phi\rangle\langle\psi|\otimes|\phi\rangle\langle\psi|\right)_{RR'}\left(F_{SS'}\otimes P_{EE'}\right)\right)
\end{aligned}
$$

现在只需考虑

$$
V \equiv\langle |\phi\rangle\langle\phi|\otimes| \phi\rangle\langle\phi| \rangle=\int|\phi\rangle\langle\phi|\otimes| \phi\rangle\langle\phi| \mathrm{d} \phi
$$

由于$V$在正交变换下是不变的, 它可以被分解为向对称子空间和反对称子空间的投影. 但是考虑到它作用在反对称态上得到的是0, $V$完全是一个向对称子空间的投影算符. 归一化得到

$$
 \langle|\phi\rangle\langle\phi|\otimes| \phi\rangle\langle\phi|\rangle=\frac{2}{d_{R}\left(d_{R}+1\right)} \Pi_{R R^{\prime}}^{\mathrm{sym}},
$$

其中投影算符

$$
 \Pi_{R R^{\prime}}^{\mathrm{sym}}=\frac{1}{2}\left(P_{R R^{\prime}}+F_{R R^{\prime}}\right).
$$

于是

$$
 \begin{aligned}
\left\langle\operatorname{Tr}_{S} \rho_{S}^{2}\right\rangle=&\operatorname{Tr}_{R R^{\prime}}\left(\left(\frac{P_{R R^{\prime}}}{d_{R}\left(d_{R}+1\right)}\right)\left(F_{S S^{\prime}} \otimes P_{E E^{\prime}}\right)\right)+\operatorname{Tr}_{R R^{\prime}}\left(\left(\frac{P_{R R^{\prime}}}{d_{R}\left(d_{R}+1\right)}\right)\left(P_{S S^{\prime}} \otimes F_{E E^{\prime}}\right)\right) \\
\leq & \operatorname{Tr}_{R R^{\prime}}\left(\left(\frac{P_{R}}{d_{R}} \otimes \frac{P_{R^{\prime}}}{d_{R}}\right)\left(F_{S S^{\prime}} \otimes P_{E E^{\prime}}\right)\right)+\operatorname{Tr}_{R R^{\prime}}\left(\left(\frac{P_{R}}{d_{R}} \otimes \frac{P_{R^{\prime}}}{d_{R}}\right)\left(P_{S S^{\prime}} \otimes F_{E E^{\prime}}\right)\right) \\
=& \operatorname{Tr}_{S S^{\prime}}\left(\left(\Omega_{S} \otimes \Omega_{S}\right) F_{S S^{\prime}}\right) +\operatorname{Tr}_{E E^{\prime}}\left(\left(\Omega_{E} \otimes \Omega_{E}\right) F_{E E^{\prime}}\right)\\  
=&\operatorname{Tr}_{S} \Omega_{S}^{2}+\operatorname{Tr}_{E} \Omega_{E}^{2}
\end{aligned}
$$

这就证明了我们的结论.

[^1]: Popescu, S., Short, A. J., & Winter, A. (2006). Entanglement and the foundations of statistical mechanics. Nature Physics, 2(11), 754–758. https://doi.org/10.1038/nphys444