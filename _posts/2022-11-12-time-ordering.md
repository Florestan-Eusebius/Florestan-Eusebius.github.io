---
title: Time ordering, Wick rotation and analyticity
tags:
- Physics
mathjax: true
---

Physicists learn from junior field theory courses (if not kindergarten) that 
- In Minkowski spacetime, expectation of field operators calculated by path integral is time ordered. 
- One can perform a 'Wick rotation' to transform 'real time' in Minkowski space to 'imaginary time' in Euclidean space.

In this post, we are going to clarify the effectiveness and limitation of the statements above by consideration of analyticity. The main idea in this post comes from Witten's note[^1], Xi Yin's lecture in Harvard[^2] and informal discussions with my advisor Yingfei Gu.

<!--more-->

All operators in this post is in Heisenberg picture unless otherwise stated.

## Wick's rotation

An expectation value of product of (scaler, for simplicity without losing any relevant features) field operators in Minkowski spacetime has the form

$$
\begin{equation}
    \begin{aligned}
        &\langle 0 |\phi\left(x_1\right)\phi\left(x_2\right)\cdots\phi\left(x_n\right)| 0\rangle \\  
        = &\sum_{\alpha_1,\alpha_2,\ldots,\alpha_{n-1}}\exp\left(\mathrm{i}\left(p_{\alpha_1}\cdot x_{1,2}+\cdots+p_{\alpha_{n-1}}\cdot x_{n-1,n}\right)\right)\langle 0|\phi(0)|\alpha_1\rangle \langle \alpha_1|\phi(0)|\alpha_2\rangle\cdots \langle \alpha_{n-1}|\phi(0)|0\rangle,
    \end{aligned}
    \label{real time product}
\end{equation}

$$

where $\|\alpha_i\rangle$ denotes the complete eigenstates of energy-momentum, and that $x_{i,j}=x_i-x_j$. We take Minkowski metric signature as $(-1, 1, \ldots, 1)$ and work in the $p^0>0$ branch. If all $x_{i,j}$'s are real, the coefficients of all terms are bounded, which is a necessary condition for the summation to converge.

Now consider an analytic continuation of $x^0$ in

$$
\exp\left(\mathrm{i}p\cdot x\right)=\exp\left(\mathrm{i}\left(\vec{p}\cdot\vec{x}-p^0x^0\right)\right).
$$

Since $p^0$ is bounded from below, to make the expression bounded, we need 

$$
\operatorname{Im} x^0<0. 
$$

If one analytically continues $x^0$ to be purely imaginary and introduce 

$$
x^0=-\mathrm{i}\tau
$$

with $\tau>0$, the new coordinate $\left(\tau, \vec{x}\right)$ seems to be Euclidean with respect to inner product. If we apply this procedure to all the spacetime coordinates in Eq. ($\ref{real time product}$), we reach the notion of an expectation value in 'Euclidean field theory'. That is, we have 

$$
\Braket{\phi\left(x^{\mathrm{E}}_1\right)\phi\left(x^{\mathrm{E}}_2\right)\cdots\phi\left(x^{\mathrm{E}}_n\right)}
$$

which is defined as the analytic continuation of Eq. ($\ref{real time product}$) with $\tau_1>\tau_2>\cdots>\tau_n$. This procedure in which an analytic continuation is followed by a change of variable is often called Wick's rotation. By no means should we think Wick's rotation as a trivial change of variable. In fact, the analytic continuation, which is the key step in so called 'Wick's rotation', plays a role in linking different orders of operators in the expectation as we will see soon.

## Two-operator correlators

For simplicity we consider two-operator correlators, some of which are referred to as Green's function in field theory. 

### Zero-temperature case

First let's consider zero-temperature case. Correlator

$$
\braket{0|\phi(0)\phi(x)|0}=\sum_\alpha\left(\braket{0|\phi(0)|\alpha}\right)^2\exp\left(-\mathrm{i}\left(\vec{p}_\alpha\cdot \vec{x}-p^0_\alpha x^0\right)\right)
$$

is well-defined only when $\operatorname{Im}x^0>0$. Therefore we can analytically continue $x^0$ in the upper half plane and define the original real time correlator as $\lim_{\operatorname{Im}x^0\rightarrow +0}\braket{0\|\phi(0)\phi(x)\|0}$. On the other hand, consider 

$$
\braket{0|\phi(x)\phi(0)|0}=\sum_\alpha\left(\braket{0|\phi(0)|\alpha}\right)^2\exp\left(\mathrm{i}\left(\vec{p}_\alpha\cdot \vec{x}-p^0_\alpha x^0\right)\right)
$$

which is well-defined only when $\operatorname{Im}x^0 < 0$. We can analytically continue $x^0$ in the lower half plane and define the original real time correlator as $\lim_{\operatorname{Im}x^0\rightarrow -0}\braket{0\|\phi(x)\phi(0)\|0}$ similar to the case with reversed order. Finally, note that 

$$
\braket{0|\phi(0)\phi(x)|0}-\braket{0|\phi(x)\phi(0)|0}=\Braket{0|\left[\phi(0),\phi(x)\right]|0}
$$

vanishes for $x^0<\left\|\vec{x}\right\|$ due to locality. Analytic function defined on the line segment $x^0<\left\|\vec{x}\right\|$ can be uniquely continued to lower half plane and upper half plane. Both correlators above and their continuation is now a single function

$$
\mathrm{i}F\left(x^0,\vec{x}\right)=\braket{0|T_\tau\left(\phi(x)\phi(0)\right)|0}
$$

with branch cut $x^0>\left\|\vec{x}\right\|$. Here the 'time ordered operator' $T_\tau$ is defined as 

$$
\begin{equation}
    T_\tau\left(A(x_1)B(x_2)\right)=\begin{cases}
    A(x_1)B(x_2),\quad \operatorname{Im} x_1^0 < \operatorname{Im} x_2^0,\\ 
    \pm B(x_2)A(x_1),\quad \operatorname{Im} x_1^0 > \operatorname{Im} x_2^0.
\end{cases}
\label{def of T order}
\end{equation}
$$

Note that the $F$ here is different from the so-called Green's function in which the ordering is imposed on real time. We shall explore the relationship between $F$ and the family of Green's functions in later sections.

The analytical property of $F$ as a function of $x^0$ is demonstrated in Fig. 1. All correlators $\braket{0\|\phi(0)\phi(x)\|0}$, $\Braket{\phi(0)\phi\left(x^{\mathrm{E}}\right)}$, $\Braket{\phi\left(x^{\mathrm{E}}\right)\phi(0)}$, $\braket{0\|\phi(x)\phi(0)\|0}$ can be analytically continued to each other.

<figure><img src="/img/20221112/anaT0lor.jpeg" width="50%" margin-left="auto" margin-right="auto"/><figcaption>Figure 1. Analytical property of two-point correlators for a Lorentz invariant system at zero temperature. Red arrows stands for analytic continuation while blue lines for branch cut. </figcaption></figure>

> **Example: Lorentz invariant scalar field** 
> 
> Here we do some calculation to convince ourselves that our analysis is correct. Consider 
> 
> $$
\begin{aligned}
\braket{0|\phi(x)\phi(0)|0}&=\sum_\alpha\left(\braket{0|\phi(0)|\alpha}\right)^2\exp\left(\mathrm{i}\left(\vec{p}_\alpha\cdot \vec{x}-p^0_\alpha x^0\right)\right)  \\ 
&=\int\mathrm{d}^d p\,\exp\left(\mathrm{i} px\right)\sum_\alpha\delta\left(p-p_\alpha\right)  \left(\braket{0|\phi(0)|\alpha}\right)^2.
\end{aligned}
> $$
> 
> Define spectral function $\rho\left(-p^2\right)$ which is supported in region $p^2\leq 0$ as 
> 
> $$
\frac{\theta\left(p^0\right)}{\left(2\pi\right)^{d-1}}\rho\left(-p^2\right) = \sum_\alpha\delta\left(p-p_\alpha\right)  \left(\braket{0|\phi(0)|\alpha}\right)^2.
> $$
> 
> Then 
> 
> $$
\braket{0|\phi(x)\phi(0)|0} = \int_0^\infty \mathrm{d}\mu^2\,\rho\left(\mu^2\right) \Delta_+\left(x;\mu^2\right),
> $$
> 
> where 
> 
> $$
\begin{aligned}
\Delta_+\left(x;\mu^2\right)&=\int\frac{\mathrm{d}^{d-1}\vec{p}}{\left(2\pi\right)^{d-1}}\,\theta\left(p^0\right)\delta\left(p^2+\mu^2\right)\exp\left(\mathrm{i}px\right)\\
&=\int\frac{\mathrm{d}^{d-1}\vec{p}}{2\left(2\pi\right)^{d-1}\sqrt{\vec{p}^2+\mu^2}}\,\exp\left(\mathrm{i}\left(\vec{p}\cdot\vec{x}-\mathrm{i}\sqrt{\vec{p}^2+\mu^2}x^0\right)\right).
\end{aligned}
> $$
> 
> From Lorentz invariance of the correlator, we know that $\Delta_+$ is also Lorentz invariant. Therefore if $x$ is spacelike, we can perform a Lorentz transformation to make $x^0 = 0$ and see that $\Delta_+\left(x;\mu\right)=\Delta_+\left(-x;\mu\right)$. If $x$ is timelike, we have in general that $\Delta_+\left(x;\mu\right)\neq \Delta_+\left(-x;\mu\right)$.

For systems without Lorentz invariance, we cannot guarantee that there is a spacelike region and operators with spacelike separations (anti-)commute. As a result, correlators with different real time ordering may not be each other's analytic continuation. However, for systems with local interaction, there may be some 'emergent' light cone. Behaviour of commutators as a function of space and time is an interesting problem related to, for example, thermalization. 

### A comment on time ordering

The ordering defined in Eq. ($\ref{def of T order}$) is required by convergence and hence must be obeyed. However, the ordering of real time is not a necessary requirement. This observation coincides with the replacement $t\rightarrow\left(1-\mathrm{i}\epsilon\right)t$ in text-book path integral approach to quantum field theory: expectation values of operators ordered with respect to imaginary time converge, and that path integral gives us expectation values of operators ordered with respect to integration path, as a result of which if the imaginary time decreases along the path, the path integral gives the convergent expectation value automatically. With an understanding of how path integral gives the correct 'time ordered' expectation values, we are released from the constraint that only expectation values of (real) time ordered operators can be calculated. So long as we take an integration path that decreases in imaginary time, we can zigzag it in the real time direction as we like to calculate expectation values of any time ordering, especially the so-called out-of-time-ordered correlators (OTOC).

### Finite temperature case

Now consider finite temperature case where the thermal expectation value of the correlator is given by 

$$
D\left(x^0, \vec{x}\right) = Z^{-1} \operatorname{tr} \mathrm{e}^{-\beta H} \mathrm{e}^{\mathrm{i}H x^0} \phi\left(\vec{x}\right) \mathrm{e}^{-\mathrm{i} H x^0} \phi\left(0\right), 
$$ 

where $\phi$ is in Schrödinger picture. For this expression to converge, we need 

$$
\operatorname{Im} x^0 <0, \quad \beta + \operatorname{Im} x^0 >0.
$$

Therefore we can analytically continue $x^0$ to the strip $-\beta < \operatorname{Im} x^0 < 0$. At $\operatorname{Im} x^0 = -\beta+0$, we have 

$$
D\left(x^0-\mathrm{i}\beta,\vec{x}\right)=Z^{-1}\operatorname{tr} \mathrm{e}^{\mathrm{i}Hx^0}\phi\left(\vec{x}\right) \mathrm{e}^{-\mathrm{i}Hx^0}\mathrm{e}^{-\beta H}\phi\left(0\right)=Z^{-1}\operatorname{tr} \mathrm{e}^{-\beta H}\phi\left(0\right)\mathrm{e}^{\mathrm{i}Hx^0}\phi\left(\vec{x}\right) \mathrm{e}^{-\mathrm{i}Hx^0},
$$

which is the expectation value of products of the reversed ordering.

Note that our derivation here does not depend on whether the operator is local. Furthermore, unlike zero-temperature case, our result that reversing the ordering can be achived by analytic continuation is always true even though the two operators never commute. One can gain intuition about difference and similarity of zero and finite temperature cases by reconsider the correlator 

$$
\tilde{D}\left(x^0,\vec{x}\right)=\operatorname{tr} \mathrm{e}^{-\beta H}\phi\left(0\right)\mathrm{e}^{\mathrm{i}Hx^0}\phi\left(\vec{x}\right) \mathrm{e}^{-\mathrm{i}Hx^0}=\operatorname{tr} \mathrm{e}^{-\left(\beta+\mathrm{i}x^0\right) H}\phi\left(0\right)\mathrm{e}^{\mathrm{i}Hx^0}\phi\left(\vec{x}\right).
$$

It converges in the strip $0<\operatorname{Im} x^0 <\beta$. It is the same as zero-temperature case that $x^0\pm 0$ ($x^0\in\mathbb{R}$) corresponds to different ordering of the correlators. However, one can check easily that 

$$
D\left(x^0-\mathrm{i}\tau,\vec{x}\right)=\tilde{D}\left(x^0+\mathrm{i}\left(\beta-\tau\right),\vec{x}\right).
$$

The imaginary axis coils so that the complex time is defined on a cylinder rather than a plane! Since we have defined $T$ as ordering with respect to imaginary time $\tau=-\operatorname{Im} x^0$, we can define 

$$
\begin{equation}
F\left(x^0,\vec{x}\right)=-\Braket{T_\tau\left(\phi\left(x\right)\phi\left(0\right)\right)}_\beta,
\label{finite T green}    
\end{equation}
$$

where $\braket{\cdot}_\beta = Z^{-1}\operatorname{tr}\left(\mathrm{e}^{-\beta H}\cdot\right)$. Obviously $F$ is an analytic function of $x^0$ on the complex cylinder except for (part of) the real axis. (Note that for Fermioic fields $F$ is anti-periodic in $\operatorname{Im} x^0$ since the definition in $F$ has a minus sign with revered ordering.) Here we say 'part of' since for Lorentz invariant systems the argument for zero-temperature system that $F$ can be analytically continued through a line segment on the real axis still makes sense. The analytic property of $F$ as a function of $x^0$ is shown in Fig. 2. The difference is that in zero temperature system, $\beta$ is infinite and we cannot 'wind' around the cylinder to reach a point slightly below the real axis from a point slightly above the real axis.

<figure><img src="/img/20221112/anaTfinlor.jpeg" width="50%"><figcaption>Figure 2. Analytical property of two-point correlators for a system with Lorentz invariance at finite temperature. Red arrows stands for analytic continuation while blue lines for branch cut. </figcaption></figure>

Again, if one wants to calculate thermal expectation value of a product of a string of operators at different real time, she may first give each of their times an imaginary part $-\mathrm{i}\tau_1,-\mathrm{i}\tau_2,\ldots$ such that $\tau_1<\tau_2<\cdots$. Then she can choose a path, starting from $\operatorname{Im}x^0=-0$, winding around the complex cylinder for $x^0$ with $\operatorname{Im} x^0$ decreaing to $-\beta$, and traversing all the operators inserted on the cylinder by zigzagging in real time direction.

> The analytic behaviour discussed above can be used to calculate a bound on quantum chaos[^3]. Quantum chaos is measured by $C\left(t\right)=-\Braket{\left[W\left(t\right),V\left(t\right)\right]^2}_\beta$. Define $y^4=Z^{-1}\mathrm{e}^{-\beta H}$, we can move one of the commutator halfway around the cylinder to regularize $C(t)$, that is, to calculate 
> 
> $$
-\operatorname{tr}\left(y^2\left[W(t),V\right]y^2\left[W(t),V\right]\right).
> $$
> 
> Define
> 
> $$
F\left(t\right) = \operatorname{tr}\left(yVyW\left(t\right)yVyW\left(t\right)\right),
> $$
> 
> which is analytic in a strip $-\beta/4<\operatorname{Im}t<\beta/4$. Then we can expand 
> 
> $$
\begin{aligned}
-\operatorname{tr}\left[y^2[W(t), V] y^2[W(t), V]\right]=\operatorname{tr}\left[y^2 W(t) V y^2 V W(t)\right] &+\operatorname{tr}\left[y^2 V W(t) y^2 W(t) V\right] \\
&-F\left(t+\mathrm{i} \frac{\beta}{4}\right)-F\left(t-\mathrm{i} \frac{\beta}{4}\right).
\end{aligned}
> $$
> 
> The authors argued that the first line remains of order one while $F$ decrease exponentially with $t$ under a bound, which gives a bound for increasing of chaos.


## Family of Green's functions

### Zero-temperature case


[^1]: Witten, E., 2018. Notes on Some Entanglement Properties of Quantum Field Theory. Rev. Mod. Phys. 90, 045003. [https://doi.org/10.1103/RevModPhys.90.045003](https://doi.org/10.1103/RevModPhys.90.045003).
[^2]: You can find lecture notes on [https://sites.google.com/view/xi-yin/qft-notes?authuser=0&pli=1](https://sites.google.com/view/xi-yin/qft-notes?authuser=0&pli=1).
[^3]: Maldacena, J., Shenker, S.H., Stanford, D., 2016. A bound on chaos. J. High Energ. Phys. 2016, 106. [https://doi.org/10.1007/JHEP08(2016)106](https://doi.org/10.1007/JHEP08(2016)106).
