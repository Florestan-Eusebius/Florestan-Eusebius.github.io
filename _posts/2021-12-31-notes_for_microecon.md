---
title: Notes for microeconomics
tags:
- Economics
mathjax: true
---

This is a brief note for microeconomics based on lectures given by Prof. Xin Wang, Institute of New Structral Economics, Peking University.

<!--more-->

## Basic information

- Objects
  - Behavior of individual units: consumers
    - maximizing utility
    - how we choose what to buy
  - Behavior of individual units: firms
    - maximizing Profit
    - how we choose what to produce
  - Markets: interaction of consumers and producers
    - output market (product Market) (产品市场)
    - input market (factor Market) (要素市场)
- Questions micro seeks to answer:
  - What goods & services will be produced and how much?
  - Who will produce them and how?
  - Who will get them?
- Three Analytical Tools:
  - Constrained Optimization (有约束的最优化)
  - Equilibrium Analysis (均衡分析)
  - Comparative Statics (比较静态)

## Preferences and utility

- Suppose there are two goods, $X=\mathbb{R}^2_+$ be the consumption space. Consumption bundle is a pair $(x_1,x_2)\in X$.
- Ultimately, we want to understand how consumers choose their best consumption bundles from those that are affordable. We must understand how consumers rank consumption bundles as to their desirability, and such a ranking is called a consumer’s preference.
- A preference, denoted by $\succsim$ , is an ordering of consumption bundles in $X$.
  - Some related definitions
    - weak preference: $(x_1,x_2)\succsim(y_1,y_2)$.
    - indifference: $(x_1,x_2)\sim(y_1,y_2)$ iff $(x_1,x_2)\succsim(y_1,y_2)$ and $(y_1,y_2)\succsim(x_1,x_2)$.
    - strict preference: $(x_1,x_2)\succ(y_1,y_2)$ iff $(x_1,x_2)\succsim(y_1,y_2)$ but not $(y_1,y_2)\succsim(x_1,x_2)$.
  - Preference is an ordinal relation.
  - There are three basic properties that we think a preference relation should have
    - Complete: either $(x_1,x_2)\succsim(y_1,y_2)$ or $(y_1,y_2)\succsim(x_1,x_2)$.
    - Reflexive: $(x_1,x_2)\succsim(x_1,x_2)$.
    - Transitive: $(x_1,x_2)\succsim(y_1,y_2)$, $(y_1,y_2)\succsim(z_1,z_2)$ implies $(x_1,x_2)\succsim(z_1,z_2)$.
- Indifference curve and additional properties of preferences.
  - Monotonicity: more is better.
  - Convexity (of indifference curve): if $(y_1,y_2)\succsim(x_1,x_2)$ and $(z_1,z_2)\succsim(x_1,x_2)$, then $\left(t y_{1}+(1-t) z_{1}, t y_{2}+(1-t) z_{2}\right) \succsim(x_1, x_2)$ for any $t\in[0,1]$.
- Utility function
  - A function $u:X\rightarrow \mathbb{R}$ such that $(x_1,x_2)\succsim(y_1,y_2)$ iff $u(x_1,x_2)\geq u(y_1,y_2)$.
  - Utility function is not unique. 
  - Utility is an ordinal (ordering) concept.
  - Cobb-Douglas preferences: 
  
    $$
    u(x_1,x_2)=x_1^cx_2^d,
    $$

    where $c$ and $d$ are two positive numbers. This is the most widely used utility form in economics.
- Example of preferences.
  - Perfect substitutes
    
    $$
    u(x_1,x_2)=ax_1+bx_2.
    $$

  - Perfect complements
    
    $$
    u(x_1,x_2)=\min\lbrace ax_1,bx_2\rbrace.
    $$

    The consumer always consumes goods 1 and 2 in ratio $b/a$.
- Marginal utility.
  
  $$
  \mathrm{MU}_i(x_1,x_2)=\frac{\partial u(x_1,x_2)}{\partial x_i}.
  $$

- Marginal rate of substitution $\mathrm{MRS}_{ij}(x_1,x_2)$ is the number of $x_j$ the consumer is willing to give up in order to obtain one more unit of $x_i$ at $(x_1,x_2)$. 
  
  $$
  \mathrm{MRS}_{ij}=\frac{\mathrm{MU}_i}{\mathrm{MU}_j}.
  $$
  
## Budget constraint, Consumer's choice and comparative statics

- Assumption: comsumer chooses the bundle that yields the highest utility.
- Given income $m$ and prices $p_1$ and $p_2$, the budget constraint (预算约束) is 
  
  $$
  p_1x_1+p_2x_2\leq m.
  $$

  - Budget set (预算约束集) $\lbrace (x_1,x_2)\|p_1x_1+p_2x_2\leq m\rbrace$, often plotted in $x_2-x_1$ plane.
  - Budget line (预算约束线) $\lbrace (x_1,x_2)\|p_1x_1+p_2x_2= m\rbrace$.
  - Rationing and taxing may deform the budget line from a straight line.
- The problem now is to maximize utility under the budget constraint, that is, find
  
  $$
  \max_{x_1,x_2>0}u(x_1,x_2),\quad \text{s.t. } p_1x_1+p_2x_2\leq m.
  $$

  The result may be an interior optimum or a boundary optimum.
  - Obviously, the interior optimum satisfies $p_1/p_2=\text{MRS}_{12}(x_1^\*,x_2^\*)$.
- Given the maximization problem, the demand is a function of $p=(p_1,p_2)$ and $m$. Denote the function as $x_1(p_1,p_2,m)$ and $x_2(p_1,p_2,m)$.
- Income effect: $\partial x_i/\partial m$.
  - Normal and inferior good.
    - Normal goods: $\partial x_i/\partial m>0$.
    - Inferior good: $\partial x_i/\partial m<0$.
  - Income consumption curve (I.C.C) or income offer curve is a curve in $x_2-x_1$ plane when changing $m$.
  - Engle curve is $m-x_i$ curve.
  - Income elasticity of demand
    
    $$
    e_{\mathrm{I}}=\frac{\mathrm{d}Q_{\mathrm{d}}}{\mathrm{d}I}\frac{I}{Q_{\mathrm{d}}}.
    $$

    - Luxury goods: $e_{\mathrm{I}}>1$. Necessities: $0<e_{\mathrm{I}}<1$.
  - Homothetic preferences: $(x_1,x_2)\succ (y_1,y_2) \Leftrightarrow (kx_1,kx_2)\succ (ky_1,ky_2)$ for every $k>0$. In this case, the Engel curve is linear.
- Price effect: $\partial x_l/\partial p_k$.
  - Ordinary and Giffen good.
    - Ordinary good: $\partial x_l/\partial p_l<0$.
    - Giffen good: $\partial x_l/\partial p_l>0$.
  - Price consunption curve (P.C.C.) or price offer curve is a curve on $x_2-x_1$ plane.
  - Demand curve is $p_i-x_i$ curve.
  - For two goods $k\neq l$, good $l$ is a substitute for good $k$ if $\partial x_l/\partial p_k>0$, and good $l$ is a complement for good $k$ if $\partial x_l/\partial p_k<0$.
  - Price effect can be decomposed into substitution effect and income effect.
    - Substitution effect with $p_1$ changed to $p_1'$: $(x_1(p,m),x_2(p,m))$ to compensated demand $(x_1(p',m'),x_2(p',m'))$ such that $m'=p_1'x_1(p,m)+p_2x_2(p,m)$. Substitution effect satisfies $(p_1-p_1)(x_1(p',m')-x(p,m))\leq 0$.
    - Income effect under the same condition: $x_1(p',m'),x_2(p',m'))$ to $(x_1(p',m),x_2(p',m))$. Sign of income effect is dependent on whether the goods are normal or inferior.
    - Slutsky identity: $\Delta x_1=[x_1(p',m)-x_1(p',m')]+[x_1(p',m')-x_1(p,m)]=\Delta x_1^n+\Delta x_1^s$.
    - From analysing the sign of both effect, we have the law of demand: if the demand for a good increases when income increases, then the demand for that good must decrease when its proce increases. As a result, Giffen goods must be inferior.
  - Another decomposition scheme of price effect contains Hicks substitution effect and income effect. Slustky substitution effect holds the initial bundle affordable while Hicks substitution effect holds the utility unchanged.
  - Hicksian or compensated demand curve can be defined according to Hicks substitution effect and is always downward sloping. 

## Consumer surplus and market demand

- Let $x_2$ in the previous analysis be money, the marginal willingness to pay (MWTP) is the MRS of good 1 for good 2. Total willingness to pay is the integral of MWTP w.r.t. $x_1$, which is the area under the MWTP curve. The consumer surplus is tha difference between total willingness to pay and what the consumer actually paid.
- If the income effect is zero, such as the case of quasilinear utility, MWTP curve is the same as demand curve.
- Quasilinear utility is defined by 
  
  $$
  u(x_1,x_2)=v(x_1)+x_2.
  $$

  The optimum is independen of $m$. This is the case that $x_1$ is something small and $x_2$ is the money to spend on other things.
- How much does the price changing cost?
  - Compensating variation: giving after the price change to have the same utility as before.
  - Equivalent variation: taking away money from the consumer to leave her as well off as she would be after the price changing.
  - For quasilinear utility, CV equals to EV.
- Market demand is a sum of individual demands.
  - If all consumers have identical preference that are homothetic, we can take a representitive consumer who has an income that is just the sum of all individual incomes.
- Elasticity of $x=f(p)$ is 
  
  $$
  \epsilon_{x,p}=\frac{\Delta x/x}{\Delta p/p}.
  $$

  - One-price elasticity of demand $\epsilon_{q,p}$.
    - Generally non-positive.
    - Constant elasticy demand: $D(p)=Ap^\epsilon$.
    - Revenue $R(p)=pD(p)$ responds to the price change by
      
      $$
      \frac{\mathrm{d}R}{\mathrm{d}p}=D(p)\left(1-\left|\epsilon_{q,p}\right|\right).
      $$

  - Cross-price elasticity of demand.
  - Income elasticity of demand.

## Choice under uncertainty

- About random variables, probability distribution, expected value.
- Lotteries: $X=\mathbb{R}$ being the set of outcomes which is mutually exclusive, for each state $i$ there is a consumption $c_i$ and a probability $p_i$. The lottery can be written as 
  
  $$
  \sum_i p_i\circ c_i.
  $$

- Expected utility: Bernoulli utility function $v$ for each outcome and Neumann-Morgenstern utility function 
  
  $$
  u\left(\sum_i p_i\circ c_i\right)=\sum_i p_iv(c_i),
  $$

  or simply $u(L)=E(v(c))$.
- Certainty equivalent (CE): $v(\text{CE})=\sum_i p_i v(c_i)$.
- The cost of risk is measured by risk premium (RP): $\text{RP}=\sum_i p_ic_i-\text{CE}$.
- Attitudes towards risk:
  - Risk aversion: $v$ is concave, RP is positive.
  - Risk loving: $v$ is convex, RP is negative.
  - Risk neutral: $v$ is linear.
- Problem of expected utility: Allais paradox.

## Technology

- A firm uses come inputs to produce outputs.
  - Inputs are called "factors of production".
  - Examples: labour (L), physical capital, intangibles.
- A technology is represented by a production function $f:\mathbb{R}^n_+\rightarrow \mathbb{R}_+$. 
  - Production set is defined by $\lbrace(x_1,\ldots,x_n,y)\|y\leq f(x_1,\ldots,x_n)\rbrace$.
  - For two inputs, isoquant curves can be defined like indifference curves.
  - Cobb-Douglas production function: $f(x_1,x_2)=Ax_1^ax_2^b$, where $A$ is called total factor productivity (TFP).
  - A technology is monotonic if its production function is increasing.
  - A technology is convex if $\lbrace(x_1,x_2)\|f(x_1,x_2\geq y\rbrace$ is convex for any output level $y$.
  - Marginal product: $\text{MP}_i=\partial f(x_1,x_2)/\partial x_i$.
  - Law of diminishing product: $\partial_i\partial_i f<0$.
  - Technical rate of substitution (MRTS or TRS): $\text{TRS}_{12}=\text{MP}_1/\text{MP}_2$.
  - Returns to scale: constant, increasing or decreasing returns to scale is defined by if $f(tx_1,tx_2)$ is equal to, larger than or less than $tf(x_1,x_2)$ for $t>1$.
- We may consider a long run situation in which all variables can change or a short run situation in which some factors of productions are fixed. For example, we generally take capital fixed in short run analysis while labour is easily changed.

## Profit maximazation and cost minimization problem

- Firms maximize their profit, which may be calculated directly or separately.
- We assume firms are price takers (which narutal in large markets) and in competitive markets. Competitive factor marcket is always assumed in this course while the market for ouput may be considered in other situations later.
- If a firm sells $y$ units of output at price $p$ with inputs $(x_1,\ldots,x_n)$ at price $(w_1,\ldots,w_n)$, the profit is 
  
  $$
  \pi=py-\sum_{i=1}^nw_ix_i.
  $$

  - Economic costs and opportunity costs.
- Short-run profit maximization with input 2 fixed at $x_2$ is stated as 
  
  $$
  \max_{x_1} pf(x_1,x_2)-w_1x_1-w_2x_2.
  $$

  - The first order condition is $p\text{MP}_1(x_1^\*,x_2)=w_1$.
  - Isoprofit line in $y-x_1$ plane. The maximization condition is that isoprofit line is tangent to the production function.
- Long-run profit maximization is stated
  
  $$
  \max_{x_1,x_2} pf(x_1,x_2)-w_1x_1-w_2x_2.
  $$

  - The first order condition is $p\text{MP}\_i(x\_1^\*,x\_2^\*)=w_i$.
- Cost minimization at a given output is the necessary condition for profit maximazation. Restate the profit maximization problem as 
  
  $$
  \max_{y,x_1,x_2}py-w_1x_1-w_2x_2\quad \text{s.t.} \quad y=f(x_1,x_2).
  $$

  We can first perform the cost minimization and decide how much to produce.
  - Cost minimization is stated as 
    
    $$
    \min_{x_1,x_2} w_1x_1+w_2x_2\quad \text{s.t.} \quad \bar{y}=f(x_1,x_2).
    $$

    The first order condition is
    
    $$
    \frac{w_1}{w_2}=\frac{\text{MP}_1(x_1^*,x_2^*)}{\text{MP}_2(x_1^*,x_2^*)}=\text{TRS}_{12}(x_1^*,x_2^*).
    $$

  - Conditional factor demand functions or derived factor demands are obtained by the minimization and denoted by $x_i(w_1,w_2,y)$.
  - The corresponding cost function is then $c(w_1,w_2,y)$.
  - The minimization can also be considered in short run and long run, with the obvious relation 
    
    $$
    c(w_1,w_2,y)=\min_{x_2} c_{\text{s}}(w_1,w_2,y;x_2).
    $$

- Fixing prices of factors, we can plot cost curves $c(y)$.
  - Cost function consists of two parts: fixed costs $F=c(0)$ and variable costs $c_{\text{v}}(y)=c(y)-c(0)$.
  - Average costs $\text{AC}(y)=c(y)/y$ can be decomposed into average variable cost function (AVC) and average fixed cost function (AFC).
  - Marginal cost (MC) is defined as $\text{MC}(y)=c'(y)=c_{\text{v}}'(y)$.
  - Capital $k$ is fixed in short run cost functions and free in long run minimization,
    
    $$
    c(y)=\min_{k\geq 0}c_{\text{s}}(y;k).
    $$

    Long run cost function is the lower envelop of all short run cost functions.
  - U shaped long run cost function is called economies of scale and diseconomies of scale.

## Supply and partial equilibrium

- Market environments or market structure:
  - Monopoly,
  - Oligopoly,
  - monopolistic competition,
  - pure competition.
- We consider pure competition markets in which firms are price takers.
- The problem is to maximize $py-c(y)$ w.r.t. $y$. The first order condition $p=\text{MC}(y)$ gives the inverse supply function. Supply curve is usually plotted in $p-y$ plane.
  - For U shaped MC curves, take the increasing branch.
  - For the firm to have profits larger than $F$, if $p<\text{AVC}(y)$, it should shut down.
- The producer's surplus (PS) is defined by $py-c_{\text{v}}(y)$.
- We can extend our argument to long run situation.
- Industry supply is the sum of supplies of individual firms.
  - In short run case firms already exist. We can calculate the partial equilibrium by $D(P^\*)=S_{\text{s}}(p^\*)$. It is possible that some firms make positive profits while others make negative profits.
  - In the long run, firms are free to enter or exit. The equilibrium implies that the market clears and that no firms has an incentive to enter or exit the industry, that is, the long run profit in equilibrium is zero.
    - A simple case is a market with $n$ homogeneous firms. The equilibrium conditions are (i) $D(p^\*)=n^\*S(p^\*)$ and (ii) $\pi(p^\*)=0$.

## Monopoly

- A monopolist has its power to decide prices.
  - Uniform pricing.
  - Price discrimination. First, second and third degree price discriminations.
- Profit miximization with uniform pricing:
  $$
  \max_{p}pD(p)-c(D(p))\quad \text{or}\quad \max_{y\geq 0}P(y)y-c(y)
  $$
  where $P(y)=D^{-1}(y)$.
  - If $P(0)>\text{MC}(0)$, the necessary condition is $P'(y)y+P(y)=\text{MC}(y)$.
  - The elasticity of demand curve $\epsilon(y)=P(y)/(P'(y)y)$. The condition is then
    
    $$
    P(y)\left(1-\frac{1}{\left|\epsilon(y)\right|}\right)=\text{MC}(y),
    $$ 
    
    which implies that monopolists never take the quantity level at which the elasticity is less than 1 and that the market price is larger than $\text{MC}(y)$.
  - Note that monopolists do not necessarily have positive profit in short run.
  - Markup pricing: $P(y)/\text{MC}(y)=1/\left(1-1/\left\|\epsilon(y)\right\|\right)$.
  - Monopoly is ineffcient. Given quasilinear utility $u(y,m)=v(y)+m$, the total surplus is $\sum_iv_i(y_i)-\sum_iv_i(0)-\left(c\left(\sum_iy_i\right)-c(0)\right)$. Maximizing the total surplus requires $v_i'(y_i)=c'\left(\sum_iy_i\right)$, which is achieved on the intersection of firm's MC curve and market demand.
- Price discrimination
  - 1st degree: prices depend on output quantity and buyer.
    - For one consumer, $P(y)=v(y^\*)-v(0)$ for $y=y^\*$ and $+\infty$ otherwise ($y>0$), where $y^\*$ is the intersection of firm's marginal curve and the consumer's demand curve. The consumer surplus is 0.
    - This argument can be easily extended to the case of many consumers by 
      
      $$
      \max_{\lbrace y_i\rbrace}\sum_i\left(v_i(y_i)-v_i(0)\right)-c\left(\sum_i y_i\right).
      $$

    - Perfect price discrimination. It maximizes social surplus so that it is efficient.
  - 2nd degree: prices depend on output quantity.
    - Usually get a profit higher than uniform pricing but lower than 1st price discrimination.
  - 3rd degree: prices depend on buyer.
    - For example, for A and B, 
      
      $$
      \max_{y_A,y_B}y_AP(y_A)+y_BP(y_B)-c(y_A+y_B).
      $$
      
      Optimality condition is $\text{MR}_A(y_A)=\text{MR}_B(y_B)=c'(y_A+y_B)$. Since $\text{MR}(y)=P(y)\left(1-1/\left\|\epsilon(y)\right\|\right)$, for price-insensitive market the price is higher and price-sensitive one lower.
    - Third degree price discrimination is imperfect and inefficient.

## Game theory

- Elements of a game include players, strategies and payoffs.
- Player make decisions at decision nodes in a game.
- The set of choices avaiable at each decision node is called actions.
- Pure and mixed strategy.
- Common knowledge.
- Simultaneous and sequential move.
- Perfect information.
- Complete information means that all players are certain about other players' payoff function.
- For simultaneous action, we use normal or matrix form to describe, while for sequential actions, we use extensive form.
- If all players have a strictly dominant strategy, then the game is dominance-sovable.
- A Nash equilibrium of an $N$ player normal game is a strategy profile $(s_1^\*,\ldots,s_n^\*)$ such that for each $i$, $u_i(s_1^\*,\ldots,s_n^\*)\geq u_i(s_1^\*,\ldots,s_i,\ldots,s_n^\*)$.
  - It is similar for mixed strategies in which pure strategies are taken according to a probability distribution. The best response correspondence is a powerful tool.
- In a game with sequential move, a subgame perfect Nash equilibrium is a Nash equilibrium in every subgame of the game.
  - It can be solved by backward induction solution.

## Oligopoly

- Models
  - Quantity competition
    - Simultaneous quantity setting: the Cournot model
    - Quantity leadership: the Stackelberg model
  - Price competition
    - Simultaneous price setting: the Bertrand model
  - Product differentiation
    - Hotelling model
- Cournot model
  - Two firms $i=1,2$ compete in quantities in a market with demand curve $p(y)=a-by$. They simultaneously choose their outputs. For simplicity, assume that there is no cost to produce. Firm 1 tries to maximize $(a-b(y_1+y_2))y_1$ and has its best response functions $y_1=(a-by_2)/2b$. The Nash equilibrium is $y_1^\*=y_2^\*=a/3b$. The two firm case is easy to be extended to $n$ firms.
  - Consider a constant maarginal cost $c$. Firm $i$ now wants to maximize $\pi_i=y_ip(y_1+y_2)-cy_i$. The first order condition yields $p(y_1^\*+y_2^\*)+(y_1^\*+y_2^\*)p'((y_1^\*+y_2^\*))/2=c$. The market price is higher than $c$ while lower than the monopoly price.
- Stackelberg model. Firm 1, the leader firm chooses first and firm 2, the follower, chooses second. The solution is trivial. Firm one has higher profit and higher production quantity, which is called the first move advantage.
- Bertrand model
  - Firms 1, 2 anounce their price simultaneously. One consumer with a unit demand buys the lower price. Constant marginal cost is $c>0$ for both firms. The Nash equilibrium is $p_1^\*=p_2^\*=c$. 
  - The Bertrand paradox.
- Hotelling model
  - Similar but different products. Power to set price. 
  - On a linear city $[0,1]$, two firms sell the same product. The consumers prefer the nearer one. Firms are free to choose their locations. The Nash equilibrium is $x_1^\*=x_2^\*=1$.
- Co-operative behaviour: collusion. The goal of cartels is to achieve monopoly profits and divide output and profits among menmbers. It is instable.

## General equilibrium analysis

- Pure exchange economies: people trade their endowments with each other.
  - For simplicity, consider goods 1, 2 and agents A and B. Agent $i$ has endowments $\omega_i=(\omega_i^1,\omega_i^2)$ and utility function $u_i$. The Final allocation is $x_i$. A feasible allocation satisfies $x_A+x_B=\omega_A+\omega_B$.
  - Edgeworth box can be used to analyse such problem.
  - Agent $i$ needs to maximize $u_i(x_i^1,x_i^2)$ under the constraint $p^1x_i^1+p^2x_i^2\leq p^1\omega_i^1+p^2\omega_i^2$. The solution is $d_i(p)$. 
  - Define the excess demand $e_i(p)=d_i(p)-\omega_i$. The total excess is $z(p)=e_A(p)+e_B(p)$.
  - The competitive equilibrium condition is $x_i^\*=d_i^\*(p)$ and $z^\*(p)=0$.
  - Many identicla agents. Walras' law: $p_1z_1(p)+p_2z_2(p)=0$.
  - Pareto set or contract curce: the set of all Pareto efficient points in the Edgeworth box.
  - First welfare theorem: if agents’ preferences are monotonic (utility functions are increasing), then any competitive equilibrium allocation is Pareto efficient.
  - Second welfare theorem: if agents’ preferences are continuous, monotonic and convex, then for any Pareto efficient allocation there exists some initial endowment redistribution such that the efficient allocation is a competitive equilibrium allocation after redistribution.
- One price taking consumer and one price taking firm.
  - Consumer has a utility function $u(c,l)$ and is endowed with $\bar{L}$ leisure. The production function is $f(L)$.
  - Profit maximization aims at $pf(L)-wL$, let $\pi(p,w)$ be the corresponding profits. 
  - Utility maximization aims at $u(c,l)$ under $pc\leq w(\bar{L}-l)+\pi(p,w)$, where $l$ stands for leisure.
  - The competitive equilibrium requires the two maximization and $c^\*=f(L^\*)$ and $l^\*=\bar{L}-L^\*$.
- Two-input, two-output economy
  - Production with several inputs and one output
  - Production possibilities frontier (PPF): $0=F(y,x_i)=y-f(x_i)$.
  - Two consumers A, B and the firm is shares by A and B by $\delta_A$ and $\delta_B$ s.t. $\delta_A+\delta_B=1$.