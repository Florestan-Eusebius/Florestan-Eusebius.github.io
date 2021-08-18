---
title: Crank-Nicolson Method for Solving 1D Schrödinger Equation
tags: 
- Physics
mathjax: true
---

To solve a one-dimensional time-dependent Schrödinger equation numerically, consider a difference method. <!--more-->

The equation to be solved is

$$
\mathrm{i}\hbar\frac{\partial \psi(x, t)}{\partial t}=-\frac{\hbar^2}{2m}\frac{\partial^{2} \psi(x, t)}{\partial x^{2}}+V(x, t) \psi(x, t).
$$

Discretise the $x$, and denote $x_j=j\Delta x,\ j=1,\cdots,L$ and $\psi(x_j)=\psi_j$ To perform the difference, define the discretised Hamiltonian $H_D$ as

$$
 H_D\psi_j=-\frac{\hbar^2}{2m}\frac{1}{\Delta x^2}\left[\psi_{j-1}+\psi_{j+1}-2\psi_j\right]+V_j\psi_j,
$$

which can be viewed as a matrix performed on a vector $(\psi_1,\cdots,\psi_L)$. Discretise the time and denote $\psi(t_n)=\psi(n\Delta t)=\psi^n$. A trivial differential method is

$$
\mathrm{i}\hbar\frac{1}{\Delta t}(\psi^n_{j+1}-\psi^n_j)=H_D\psi^n_j,
$$

i.e.,

$$
\psi^{n+1}_j=\left(1-\mathrm{i}\Delta t H_D/\hbar\right)\psi^n_j.
$$

To check the stability of such a method, consider the analytical solution to the discretised equation for $V_j$ constant

$$
\psi^n_j=\xi^n\exp(\mathrm{i}kj\Delta x),
$$

which yields

$$
\xi=1-\frac{\mathrm{i} \Delta t}{\hbar}\left[\frac{\hbar^2}{2m}\frac{4}{\Delta^{2} x} \sin ^{2}(k \Delta x / 2)+V_{j}\right].
$$

For any $\Delta x$ and $\Delta t$, $\|\xi\|>1$, indicating that this method is always unstable.

A modification of this method is to replace the discretisation form by

$$
\psi^{n+1}_j=\psi^n_j-\mathrm{i}\Delta t H_D/\hbar\psi^{n+1}_j,
$$

i.e., 

$$
    \psi_{j}^{n+1}=\sum_{j'}\left(1+\mathrm{i} \Delta t H_D/\hbar\right)_{jj'}^{-1} \psi_{j'}^{n}
$$

One can check that in this method

$$
\xi=\frac{1}{1+\frac{\mathrm{i} \Delta t}{\hbar}\left[\frac{\hbar^2}{2m}\frac{4}{\Delta^{2} x} \sin ^{2}(k \Delta x / 2)+V_{j}\right]},
$$

which indicates that this method is always stable. However, the time evolution $\left(1+\mathrm{i} \Delta t H_D/\hbar\right)^{-1}$ is still not unitary, so that it does not preserve the norm of the wave function.

A further modification is to set the time evolution as

$$
    \frac{1-\mathrm{i}\Delta tH_D/2\hbar}{1+\mathrm{i}\Delta t H_D/2\hbar}.
$$

To evaluate the stability,

$$
\xi=\frac{1-\frac{\mathrm{i} \Delta t}{\hbar}\left[\frac{\hbar^2}{2m}\frac{4}{\Delta^{2} x} \sin ^{2}(k \Delta x / 2)+V_{j}\right]}{1+\frac{\mathrm{i} \Delta t}{\hbar}\left[\frac{\hbar^2}{2m}\frac{4}{\Delta^{2} x} \sin ^{2}(k \Delta x / 2)+V_{j}\right]},
$$

which ensure the stability for any choice of $\Delta x$ and $\Delta t$. 

The third method is called Crank-Nicolson method. It is an implicit form and requires an inverse of a tridiagonal matrix, whose time cost is $\mathcal{O}(L)$. To calculate the time evolution, one need to perform matrix products, whose time cost is $\mathcal{O}(L^2)$.

The code for this method with a periodic boundary condition can be found at [Florestan-Eusebius/Crank-Nicolson-Solver: The Crank Nicolson Solver to solve 1D time dependent Schrödinger equation. (github.com)](https://github.com/Florestan-Eusebius/Crank-Nicolson-Solver), where the harmonic oscillator is tested as an example. We see that result calculated by this method agrees with the theoretical result perfectly. 