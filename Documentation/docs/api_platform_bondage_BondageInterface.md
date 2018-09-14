---
id: platform_bondage_BondageInterface
title: BondageInterface
---

<div class="contract-doc"><div class="contract"><h2 class="contract-header"><span class="contract-kind">contract</span> BondageInterface</h2><div class="source">Source: <a href="git+https://github.com/zapproject/ZapContracts/blob/v0.0.1/contracts/platform/bondage/BondageInterface.sol" target="_blank">platform/bondage/BondageInterface.sol</a></div></div><div class="index"><h2>Index</h2><ul><li><a href="platform_bondage_BondageInterface.html#bond">bond</a></li><li><a href="platform_bondage_BondageInterface.html#calcZapForDots">calcZapForDots</a></li><li><a href="platform_bondage_BondageInterface.html#currentCostOfDot">currentCostOfDot</a></li><li><a href="platform_bondage_BondageInterface.html#delegateBond">delegateBond</a></li><li><a href="platform_bondage_BondageInterface.html#escrowDots">escrowDots</a></li><li><a href="platform_bondage_BondageInterface.html#getBoundDots">getBoundDots</a></li><li><a href="platform_bondage_BondageInterface.html#getDotsIssued">getDotsIssued</a></li><li><a href="platform_bondage_BondageInterface.html#getZapBound">getZapBound</a></li><li><a href="platform_bondage_BondageInterface.html#releaseDots">releaseDots</a></li><li><a href="platform_bondage_BondageInterface.html#returnDots">returnDots</a></li><li><a href="platform_bondage_BondageInterface.html#unbond">unbond</a></li></ul></div><div class="reference"><h2>Reference</h2><div class="functions"><h3>Functions</h3><ul><li><div class="item function"><span id="bond" class="anchor-marker"></span><h4 class="name">bond</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>bond</strong><span>(address , bytes32 , uint256 ) </span><span>external </span><span>returns  (uint256) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code></code> - address</div><div><code></code> - bytes32</div><div><code></code> - uint256</div></dd><dt><span class="label-return">Returns:</span></dt><dd>uint256</dd></dl></div></div></li><li><div class="item function"><span id="calcZapForDots" class="anchor-marker"></span><h4 class="name">calcZapForDots</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>calcZapForDots</strong><span>(address , bytes32 , uint256 ) </span><span>external </span><span>view </span><span>returns  (uint256) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code></code> - address</div><div><code></code> - bytes32</div><div><code></code> - uint256</div></dd><dt><span class="label-return">Returns:</span></dt><dd>uint256</dd></dl></div></div></li><li><div class="item function"><span id="currentCostOfDot" class="anchor-marker"></span><h4 class="name">currentCostOfDot</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>currentCostOfDot</strong><span>(address , bytes32 , uint256 ) </span><span>public </span><span>view </span><span>returns  (uint256) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code></code> - address</div><div><code></code> - bytes32</div><div><code></code> - uint256</div></dd><dt><span class="label-return">Returns:</span></dt><dd>uint256</dd></dl></div></div></li><li><div class="item function"><span id="delegateBond" class="anchor-marker"></span><h4 class="name">delegateBond</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>delegateBond</strong><span>(address , address , bytes32 , uint256 ) </span><span>external </span><span>returns  (uint256) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code></code> - address</div><div><code></code> - address</div><div><code></code> - bytes32</div><div><code></code> - uint256</div></dd><dt><span class="label-return">Returns:</span></dt><dd>uint256</dd></dl></div></div></li><li><div class="item function"><span id="escrowDots" class="anchor-marker"></span><h4 class="name">escrowDots</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>escrowDots</strong><span>(address , address , bytes32 , uint256 ) </span><span>external </span><span>returns  (bool) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code></code> - address</div><div><code></code> - address</div><div><code></code> - bytes32</div><div><code></code> - uint256</div></dd><dt><span class="label-return">Returns:</span></dt><dd>bool</dd></dl></div></div></li><li><div class="item function"><span id="getBoundDots" class="anchor-marker"></span><h4 class="name">getBoundDots</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>getBoundDots</strong><span>(address , address , bytes32 ) </span><span>public </span><span>view </span><span>returns  (uint256) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code></code> - address</div><div><code></code> - address</div><div><code></code> - bytes32</div></dd><dt><span class="label-return">Returns:</span></dt><dd>uint256</dd></dl></div></div></li><li><div class="item function"><span id="getDotsIssued" class="anchor-marker"></span><h4 class="name">getDotsIssued</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>getDotsIssued</strong><span>(address , bytes32 ) </span><span>public </span><span>view </span><span>returns  (uint256) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code></code> - address</div><div><code></code> - bytes32</div></dd><dt><span class="label-return">Returns:</span></dt><dd>uint256</dd></dl></div></div></li><li><div class="item function"><span id="getZapBound" class="anchor-marker"></span><h4 class="name">getZapBound</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>getZapBound</strong><span>(address , bytes32 ) </span><span>public </span><span>view </span><span>returns  (uint256) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code></code> - address</div><div><code></code> - bytes32</div></dd><dt><span class="label-return">Returns:</span></dt><dd>uint256</dd></dl></div></div></li><li><div class="item function"><span id="releaseDots" class="anchor-marker"></span><h4 class="name">releaseDots</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>releaseDots</strong><span>(address , address , bytes32 , uint256 ) </span><span>external </span><span>returns  (bool) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code></code> - address</div><div><code></code> - address</div><div><code></code> - bytes32</div><div><code></code> - uint256</div></dd><dt><span class="label-return">Returns:</span></dt><dd>bool</dd></dl></div></div></li><li><div class="item function"><span id="returnDots" class="anchor-marker"></span><h4 class="name">returnDots</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>returnDots</strong><span>(address , address , bytes32 , uint256 ) </span><span>external </span><span>returns  (bool) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code></code> - address</div><div><code></code> - address</div><div><code></code> - bytes32</div><div><code></code> - uint256</div></dd><dt><span class="label-return">Returns:</span></dt><dd>bool</dd></dl></div></div></li><li><div class="item function"><span id="unbond" class="anchor-marker"></span><h4 class="name">unbond</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>unbond</strong><span>(address , bytes32 , uint256 ) </span><span>external </span><span>returns  (uint256) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code></code> - address</div><div><code></code> - bytes32</div><div><code></code> - uint256</div></dd><dt><span class="label-return">Returns:</span></dt><dd>uint256</dd></dl></div></div></li></ul></div></div></div>