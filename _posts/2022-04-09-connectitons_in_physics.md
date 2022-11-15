---
title: Connections in physics
tags:
- Physics
- Mathematics
mathjax: true
---

Modern differential geometry provides a unified picture for different aspects of physics. In this blog article I would like to introduce three kinds of physical subjects relating to connection on a fibre bundle, namely gauge field, general relativity and theory of quantum Hall effect. The 'gauge field' part is among the appendices of my undergraduate thesis.

<!--more-->

## Gauge field

Mathematically, gauge fields on a continuous space is described by connections on a vector bundle. Here we briefly summarize the mathematical notions see how it can be related to a gauge theory.

### Geometric perspective

The definition of a vector bundle which we take as our starting point can be found in standard textbooks[^1]. Suppose $E$ is a vector bundle on $M$ and $\Gamma\left(E\right)$ is the set of smooth sections of $E$ on $M$, a connection over a vector bundle $E$ is defined as a map

$$
    D:\Gamma\left(E\right)\rightarrow \Gamma\left(E\otimes T^*\left(M\right)\right),
$$

which satisfies

- For any $s_1,s_2\in\Gamma\left(E\right)$,
  
  $$
    D\left(s_1+s_2\right)=Ds_1+Ds_2.
  $$

- For $s\in\Gamma\left(E\right)$ and any $\alpha\in C^\infty \left(M\right)$,
  
  $$
    D\left(s\alpha\right)=s\otimes\mathrm{d}\alpha+\left(Ds\right)\alpha.
  $$

Given a smooth tangent vector field $X$ on $M$, define the covariant derivative of section $s$ along $X$ as 

$$
    D_Xs=\left\langle X,Ds\right\rangle.
$$

We can extend the notion of connection to more general cases. Define $\Omega_M^p\left(E\right)=\Gamma\left(E\otimes \bigwedge^p T^*M\right)$. Connection can then defined as a map 

$$
    D:\Omega_M^p\left(E\right)\rightarrow\Omega_M^{p+1}\left(E\right),
$$

such that 

- For any $s_1,s_2\in\Omega_M^p\left(E\right)$,
  
  $$
    D\left(s_1+s_2\right)=Ds_1+Ds_2.
  $$

- For $s\in\Omega_M^0\left(E\right)$ and a $p$-form $\alpha\in \Omega_M^p$,
  
  $$
    D\left(s\otimes\alpha\right)=s\otimes\mathrm{d}\alpha+D\left(s\right)\wedge\alpha.
  $$

For $p=0$, this definition reduces to the former one.

We can further consider $\Omega_M^p\left(\operatorname{End}\left(E\right)\right)$ which maps a section in $\Omega_M^r\left(E\right)$ naturally to a section in $\Omega_M^{p+r}\left(E\right)$. By 'naturally' we mean that for $s\in\Omega_M^0\left(E\right)$ and a $p$-form $\alpha\in \Omega_M^p$ we have 

$$
    \phi\left(s\otimes\alpha\right)=\phi\left(s\right)\wedge \alpha.
$$

It is plausible since the endomorphism is linear. For $\phi\in\Omega_M^p\left(\operatorname{End}\left(E\right)\right)$ and $s\in\Omega_M^0\left(E\right)$, define $D\phi\in\Omega_M^{p+1}\left(\operatorname{End}\left(E\right)\right)$

$$
    \left(D\phi\right)s=D\left(\phi s\right)-\left(-1\right)^p\phi\left(Ds\right).
$$

Now comes the curvature. The curvature $F\in\Omega_M^2\left(\operatorname{End}\left(E\right)\right)$ is defined such that for $s\in\Omega_M^0\left(E\right)$,

$$
    D^2s = Fs.
$$

Bianchi identity follows directly that 

$$
    \left(DF\right)s=D\left(Fs\right)-F\left(Ds\right)=D^3s-D^3s=0,
$$

or 

$$
    DF=0.
$$

Here we have used that acting on $\Omega_M^p\left(E\right)$, $F$ is also equivalent to $D^2$.

### Frame perspective

Note that all the definitions above are geometric objects, that is, they are independent of 'coordinates' or 'physical'. To make it convenient for calculation, introduce a local frame field of the vector bundle $\hat{s}\_i\in\Omega\_M^0\left(E\right)$ such that they are linearly independent and expand the vector bundle locally. To write explicitely the coefficients of the connection, we can define $\Gamma{^i}{_{j\mu}}$ as 

$$
    D\hat{s}_i=\hat{s}_j\otimes\Gamma{^j}{_{i\mu}}\mathrm{d}x^\mu.
$$

Now we can introduce a matrix valued one-form $\omega\in\Omega_M^1\left(\operatorname{End}\left(E\right)\right)$ called connection form as

$$
    \omega = \Gamma{^j}{_{i\mu}}\mathrm{d}x^\mu.
$$

For notational convenience, we use $s$ to refer to either a section $s=s^i\hat{s}_i\otimes \alpha\in\Omega_M^p\left(E\right)$  where $\alpha$ is a $p$-form or the vector formed by its components $s^i$. The connection is then 

$$
    D\left(s^i\hat{s}_i\otimes \alpha\right)=\left(\partial_\mu s^i+\Gamma{^i}{_{j\mu}}s^j\right)\hat{s}_i\otimes\mathrm{d}x^\mu\wedge \alpha,
$$

or in a notational simple way

$$
\begin{equation}
    Ds=\mathrm{d}s+\omega\wedge s.
    \label{app1_connection coordinate form}
\end{equation}
$$

While for $\phi\in\Omega_M^p\left(\operatorname{End}\left(E\right)\right)$ whose components can be viewed as matrices given a local frame, we have 

$$
    \phi s = \phi \wedge s,
$$

where the components are matrix producting a vector. Setting $s\in\Omega_M^0\left(E\right)$, acting $D$ on $\phi$ gives 

$$
    \left(D\phi\right) s=D\left(\phi s\right)-\left(-1\right)^p\phi\left(Ds\right)=\mathrm{d}\left(\phi s\right)+\omega\wedge\phi s-\left(-1\right)^p\left(\phi\wedge\mathrm{d}s+\phi\wedge\omega s\right)
$$

and hence 

$$
\begin{equation}
    D\phi = \mathrm{d}\phi +\omega\wedge \phi - \left(-1\right)^p\phi\wedge\omega.
    \label{app1_covariant derivative on phi}
\end{equation}
$$

Curvature is now 

$$
\begin{equation}
    F = \mathrm{d}\omega+\omega\wedge\omega,
    \label{app1_curvature coordinate form}
\end{equation}
$$

and the Bianchi identity has the form 

$$
\begin{equation}
    \mathrm{d}F+\omega\wedge F-F\wedge\omega = 0.
    \label{app1_Bianchi identity in frame}
\end{equation}
$$

If we change from one local frame to another, yielding the coordinate transformation $s'=Vs$, coordinate equation (\ref{app1_connection coordinate form}) should change as 

$$
    Ds'=VDs,
$$

that is, 

$$
    \mathrm{d}s'+\omega'\wedge s' = V\mathrm{d}\left(V^{-1}s'\right)+V\omega\wedge V^{-1}s'.
$$

Comparing the coefficients we have 

$$
\begin{equation}
    \omega'=V\left(\partial_\mu\mathrm{d}x^\mu+\omega\right)V^{-1}.
    \label{app1_frame transformation of connection form}
\end{equation}
$$

By definition, the curvature $F$ is `physical' therefore we expect a natural transformation

$$
    F'=VFV^{-1}.
$$

We can check this by

$$
    \begin{aligned}
        F'&=\mathrm{d}\omega'+\omega'\wedge\omega'\\  
        &=\partial_\nu V\mathrm{d}x^\nu\wedge\left(\mathrm{d}x^\mu\partial_\mu+\omega\right)V^{-1}-V\left(\mathrm{d}x^\mu\partial_\mu+\omega\right)\wedge\mathrm{d}x^\nu\partial_\nu V^{-1}\\ 
        &\qquad{} +V\partial_\mu V^{-1} V\partial_\nu V^{-1}\mathrm{d}x^\mu\wedge\mathrm{d}x^\nu + V\partial_\mu V^{-1}V\mathrm{d}x^\mu\wedge\omega V^{-1}+V\omega\wedge \mathrm{d}x^\mu \partial_\mu V^{-1}+VFV^{-1}\\ 
        &=VFV^{-1}.
    \end{aligned}
$$

### Gauge field

With the basic knowledge of connections on a vector field, we can make the substitution 

$$
    \omega\rightarrow -\mathrm{i}gA_\mu\mathrm{d}x^\mu,\\ 
    F\rightarrow -\frac{\mathrm{i}g}{2}F_{\mu\nu}\mathrm{d}x^\mu\wedge\mathrm{d}x^\nu.
$$

Therefore, equation (\ref{app1_connection coordinate form}) becomes 

$$
    D_\mu = \partial_\mu -\mathrm{i}g A_\mu.
$$

Equation (\ref{app1_curvature coordinate form}) becomes 

$$
    F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu-\mathrm{i}g\left[A_\mu,A_\nu\right].
$$

Equation (\ref{app1_frame transformation of connection form}) becomes 

$$
    A_\mu'=V\left(A_\mu+\frac{\mathrm{i}}{g}\partial_\mu\right)V^{-1}.
$$

Covariant derivative acting on $F_{\mu\nu}$ should be equation (\ref{app1_covariant derivative on phi})

$$
    D_\rho F_{\mu\nu}=\partial_\rho F_{\mu\nu}-\mathrm{i}g\left[A_\rho, F_{\mu\nu}\right].
$$

Finally we have Bianchi identity (\ref{app1_Bianchi identity in frame})

$$
    D_{\left[\rho\right.}F_{\left.\mu\nu\right]}=0,
$$

which yields the sourceless Maxwell equations. 

## General relativity

Mathematics for general relativity is of tangent and cotangent bundles, which is a special case for that of gauge field.

*To be continued.*

## Berry connection and Berry phase

Berry connection is a connection on principal $\mathrm{U}(1)$-bundle.

### Principal bundles and connection

### Berry phase and quantum Hall effect

*To be continued.*

[^1]: S. S. Chern, W. H. Chen and K. S. Lam, Lectures on Differential Geometry. WORLD SCIENTIFIC, 1999.