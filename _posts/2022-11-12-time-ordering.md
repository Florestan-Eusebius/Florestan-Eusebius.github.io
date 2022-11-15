---
title: Time ordering, Wick rotation and analyticity
tags:
- Physics
mathjax: true
---

Physicists learn from junior field theory courses (if not kindergarten) that 
- In Minkowski spacetime, expectation of field operators calculated by path integral is time ordered. 
- One can perform a 'Wick rotation' to transform 'real time' in Minkowski space to 'imaginary time' in Euclidean space.

In this post, we are going to clarify the effectiveness and limitation of the statements above by consideration of analyticity. The main idea in this post comes from Witten's note[^1], Xi Yin's lecture in Harvard and informal discussions with my advisor Yingfei Gu.

<!--more-->

An expectation value of product of (scaler, for simplicity without losing any relevant features) fields in Minkowski spacetime has the form

$$
\begin{aligned}
    &\langle 0 |\phi\left(x_1\right)\phi\left(x_2\right)\cdots\phi\left(x_n\right)| 0\rangle \\  
    = &\sum_{\alpha_1,\alpha_2,\ldots,\alpha_{n-1}}\exp\left(\mathrm{i}\left(p_{\alpha_1}\cdot x_{1,2}+\cdots+p_{\alpha_{n-1}}\cdot x_{n-1,n}\right)\right)\langle 0|\phi(0)|\alpha_1\rangle \langle \alpha_1|\phi(0)|\alpha_2\rangle\cdots \langle \alpha_{n-1}|\phi(0)|0\rangle,
\end{aligned}
$$

where $\|\alpha_i\rangle$ denotes the complete eigenstates of energy-momentum, and that $x_{i,j}=x_i-x_j$. We take Minkowski metric signature as $(-1, 1, \ldots, 1)$ and work in the $p^0>0$ branch. If all $x_{i,j}$'s are real, the coefficients of all terms are bounded, which is a necessary condition for the summation to converge.

Now consider an analytical continuation of $x^0$ in

$$
\exp\left(\mathrm{i}p\cdot x\right)=\exp\left(\mathrm{i}\left(\vec{p}\cdot\vec{x}-p^0x^0\right)\right).
$$

Since $p^0$ is bounded from below, to make the expression bounded, we need $\operatorname{Im} x<0$.


[^1]: Witten, E., 2018. Notes on Some Entanglement Properties of Quantum Field Theory. Rev. Mod. Phys. 90, 045003. [https://doi.org/10.1103/RevModPhys.90.045003](https://doi.org/10.1103/RevModPhys.90.045003)
