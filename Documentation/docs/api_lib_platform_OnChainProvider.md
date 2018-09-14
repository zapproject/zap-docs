---
id: lib_platform_OnChainProvider
title: OnChainProvider
---

<div class="contract-doc"><div class="contract"><h2 class="contract-header"><span class="contract-kind">contract</span> OnChainProvider</h2><div class="source">Source: <a href="git+https://github.com/zapproject/ZapContracts/blob/v0.0.1/contracts/lib/platform/OnChainProvider.sol" target="_blank">lib/platform/OnChainProvider.sol</a></div></div><div class="index"><h2>Index</h2><ul><li><a href="lib_platform_OnChainProvider.html#receive">receive</a></li></ul></div><div class="reference"><h2>Reference</h2><div class="functions"><h3>Functions</h3><ul><li><div class="item function"><span id="receive" class="anchor-marker"></span><h4 class="name">receive</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>receive</strong><span>(uint256 id, string userQuery, bytes32 endpoint, bytes32[] endpointParams, bool onchainSubscriber) </span><span>external </span></code><hr/><div class="description"><p>Function for requesting data from on-chain provider.</p></div><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>id</code> - request id</div><div><code>userQuery</code> - query string</div><div><code>endpoint</code> - endpoint specifier ala &#x27;smart_contract&#x27;</div><div><code>endpointParams</code> - endpoint-specific params</div><div><code>onchainSubscriber</code> - bool</div></dd></dl></div></div></li></ul></div></div></div>