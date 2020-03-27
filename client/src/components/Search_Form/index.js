{/* <form id="search" class="sidesearch" action="/catalog/view" method="get" style="max-height: 1171px; height: 1156px;">
<input type="hidden" name="filter[sort]" value="most_popular">
<input type="hidden" name="filter[search]" value="mtg_advanced">
<input type="hidden" name="filter[tab]" value="">
<a id="sideSearchFixed">toggle side search to fixed</a>

<div class="filterHeader ckExpand name alwaysOpen open">
<div class="btn btn-default title" role="button"><span>Card Name</span><span class="ckHelp right glyphicon glyphicon-question-sign" data-helpid="ckHelpId0"></span></div>
<button role="submit" class="sideSearchApply btn btn-primary"><span class="glyphicon glyphicon-search"></span> Apply</button>
<div class="submenu filterContainer" id="nameContainer">
<div class="layoutWrapper">
<input type="search" name="filter[name]" tabindex="1" maxlength="100" placeholder="Search" value="">
</div>
</div>
</div>

<div class="filterHeader alwaysOpen editionToggle">
<div class="btn btn-default title">Edition <span class="ckHelp right glyphicon glyphicon-question-sign" data-helpid="ckHelpId11"></span></div>
<div class="submenu filterContainer" id="editionContainer">
<div class="layoutWrapper">
<select name="filter[category_id]">
<option value="0" selected="selected">All Editions</option>
<option value="2779">Standard</option>
<option value="2864">Modern</option>
<option value="3146">Pioneer</option>
<option value="2345"> 3rd Edition</option>
<option value="2350"> 4th Edition</option>
<option value="2355"> 5th Edition</option>
<option value="2360"> 6th Edition</option>
<option value="2365"> 7th Edition</option>
<option value="2370"> 8th Edition</option>
<option value="2375"> 9th Edition</option>
<option value="2380">10th Edition</option>
<option value="2789">2010 Core Set</option>
<option value="2847">2011 Core Set</option>
<option value="2863">2012 Core Set</option>
<option value="2876">2013 Core Set</option>
<option value="2895">2014 Core Set</option>
<option value="2910">2015 Core Set</option>
<option value="3030">Aether Revolt</option>
<option value="2385">Alara Reborn</option>
<option value="2390">Alliances</option>
<option value="2395">Alpha</option>
<option value="3042">Amonkhet</option>
<option value="2400">Anthologies</option>
<option value="2405">Antiquities</option>
<option value="2410">Apocalypse</option>
<option value="2415">Arabian Nights</option>
<option value="2846">Archenemy</option>
<option value="3048">Archenemy - Nicol Bo</option>
<option value="3125">Art Series</option>
<option value="2874">Avacyn Restored</option>
<option value="2953">Battle for Zendikar</option>
<option value="2420">Battle Royale</option>
<option value="3088">Battlebond</option>
<option value="2425">Beatdown</option>
<option value="2430">Beta</option>
<option value="2435">Betrayers of Kamigaw</option>
<option value="2903">Born of the Gods</option>
<option value="2987">Card Kingdom Tokens</option>
<option value="3085">Challenger Decks 201</option>
<option value="3158">Challenger Decks 201</option>
<option value="3159">Challenger Decks 202</option>
<option value="2440">Champions of Kamigaw</option>
<option value="2445">Chronicles</option>
<option value="2450">Coldsnap</option>
<option value="3099">Coldsnap Theme Decks</option>
<option value="2455">Collectors Ed</option>
<option value="2460">Collectors Ed Intl</option>
<option value="2862">Commander</option>
<option value="2902">Commander 2013</option>
<option value="2916">Commander 2014</option>
<option value="2958">Commander 2015</option>
<option value="2949">Commander 2016</option>
<option value="3055">Commander 2017</option>
<option value="3100">Commander 2018</option>
<option value="3136">Commander 2019</option>
<option value="3161">Commander 2020</option>
<option value="3047">Commander Anthology</option>
<option value="3089">Commander Anthology </option>
<option value="2888">Commander's Arsenal</option>
<option value="2783">Conflux</option>
<option value="2908">Conspiracy</option>
<option value="2977">Conspiracy - Take th</option>
<option value="3097">Core Set 2019</option>
<option value="3126">Core Set 2020</option>
<option value="2870">Dark Ascension</option>
<option value="2465">Darksteel</option>
<option value="2470">Deckmaster</option>
<option value="2475">Dissension</option>
<option value="3086">Dominaria</option>
<option value="2892">Dragon's Maze</option>
<option value="2938">Dragons of Tarkir</option>
<option value="2865">DD: Ajani / Nicol Bo</option>
<option value="2918">DD: Anthology</option>
<option value="2969">DD: Blessed / Cursed</option>
<option value="2480">DD: Divine / Demonic</option>
<option value="2936">DD: Elspeth / Kiora</option>
<option value="2851">DD: Elspeth / Tezzer</option>
<option value="2485">DD: Elves / Goblins</option>
<option value="3084">DD: Elves / Inventor</option>
<option value="2838">DD: Garruk / Liliana</option>
<option value="2896">DD: Heroes / Monster</option>
<option value="2878">DD: Izzet / Golgari</option>
<option value="2490">DD: Jace / Chandra</option>
<option value="2904">DD: Jace / Vraska</option>
<option value="2860">DD: Knights / Dragon</option>
<option value="3062">DD: Merfolk / Goblin</option>
<option value="3041">DD: Mind / Might</option>
<option value="2980">DD: Nissa / Ob Nixil</option>
<option value="2841">DD: Phyrexia / The C</option>
<option value="2891">DD: Sorin / Tibalt</option>
<option value="2911">DD: Speed / Cunning</option>
<option value="2873">DD: Venser / Koth</option>
<option value="2951">DD: Zendikar / Eldra</option>
<option value="2845">Duels of the Planesw</option>
<option value="2976">Eldritch Moon</option>
<option value="2973">Eternal Masters</option>
<option value="2495">Eventide</option>
<option value="2500">Exodus</option>
<option value="3064">Explorers of Ixalan</option>
<option value="2505">Fallen Empires</option>
<option value="2923">Fate Reforged</option>
<option value="2510">Fifth Dawn</option>
<option value="2952">FTV: Angels</option>
<option value="2913">FTV: Annihilation</option>
<option value="2515">FTV: Dragons</option>
<option value="2815">FTV: Exiled</option>
<option value="2868">FTV: Legends</option>
<option value="2979">FTV: Lore</option>
<option value="2883">FTV: Realms</option>
<option value="2850">FTV: Relics</option>
<option value="3065">FTV: Transform</option>
<option value="2899">FTV: Twenty</option>
<option value="2520">Future Sight</option>
<option value="3104">Game Night</option>
<option value="3147">Game Night 2019</option>
<option value="2890">Gatecrash</option>
<option value="3063">Gift Pack 2017</option>
<option value="3093">Global Series: Jiang</option>
<option value="2525">Guildpact</option>
<option value="3102">Guilds of Ravnica</option>
<option value="3103">Guilds of Ravnica: G</option>
<option value="2530">Homelands</option>
<option value="3051">Hour of Devastation</option>
<option value="2535">Ice Age</option>
<option value="3059">Iconic Masters</option>
<option value="3160">Ikoria: Lair of Behe</option>
<option value="2866">Innistrad</option>
<option value="2540">Invasion</option>
<option value="3058">Ixalan</option>
<option value="2905">Journey into Nyx</option>
<option value="2545">Judgment</option>
<option value="2983">Kaladesh</option>
<option value="2914">Khans of Tarkir</option>
<option value="2550">Legends</option>
<option value="2555">Legions</option>
<option value="2560">Lorwyn</option>
<option value="2950">Magic Origins</option>
<option value="2960">MPS: Expeditions</option>
<option value="2984">MPS: Inventions</option>
<option value="3044">MPS: Invocations</option>
<option value="3105">MPS: Mythic Edition</option>
<option value="3078">Masters 25</option>
<option value="2565">Mercadian Masques</option>
<option value="2570">Mirage</option>
<option value="2575">Mirrodin</option>
<option value="2859">Mirrodin Besieged</option>
<option value="2907">Modern Event Deck</option>
<option value="3123">Modern Horizons</option>
<option value="2894">Modern Masters</option>
<option value="2947">Modern Masters 2015</option>
<option value="3032">Modern Masters 2017</option>
<option value="2580">Morningtide</option>
<option value="3148">Mystery Booster</option>
<option value="2590">Nemesis</option>
<option value="2861">New Phyrexia</option>
<option value="2967">Oath of the Gatewatc</option>
<option value="2595">Odyssey</option>
<option value="2600">Onslaught</option>
<option value="2605">Planar Chaos</option>
<option value="2839">Planechase</option>
<option value="2875">Planechase 2012</option>
<option value="2989">Planechase Anthology</option>
<option value="2610">Planeshift</option>
<option value="2615">Portal</option>
<option value="2620">Portal 3K</option>
<option value="2625">Portal II</option>
<option value="2854">PDS: Fire &amp; Lightnin</option>
<option value="2867">PDS: Graveborn</option>
<option value="2837">PDS: Slivers</option>
<option value="3135">Promo Pack</option>
<option value="2630">Promotional</option>
<option value="2635">Prophecy</option>
<option value="2640">Ravnica</option>
<option value="3111">Ravnica Allegiance</option>
<option value="3113">Ravnica Allegiance: </option>
<option value="2884">Return to Ravnica</option>
<option value="2843">Rise of the Eldrazi</option>
<option value="3076">Rivals of Ixalan</option>
<option value="2645">Saviors of Kamigawa</option>
<option value="2852">Scars of Mirrodin</option>
<option value="2650">Scourge</option>
<option value="3149">Secret Lair</option>
<option value="2655">Shadowmoor</option>
<option value="2971">Shadows Over Innistr</option>
<option value="2660">Shards of Alara</option>
<option value="3124">Signature Spellbook:</option>
<option value="3091">Signature Spellbook:</option>
<option value="2670">Starter 1999</option>
<option value="2675">Starter 2000</option>
<option value="2680">Stronghold</option>
<option value="2685">Tempest</option>
<option value="2690">The Dark</option>
<option value="2900">Theros</option>
<option value="3152">Theros Beyond Death</option>
<option value="3153">Theros Beyond Death </option>
<option value="3142">Throne of Eldraine</option>
<option value="3144">Throne of Eldraine V</option>
<option value="2695">Time Spiral</option>
<option value="2700">Timeshifted</option>
<option value="2705">Torment</option>
<option value="3108">Ultimate Box Topper</option>
<option value="3107">Ultimate Masters</option>
<option value="2710">Unglued</option>
<option value="2715">Unhinged</option>
<option value="2720">Unlimited</option>
<option value="3156">Unsanctioned</option>
<option value="3075">Unstable</option>
<option value="2725">Urza's Destiny</option>
<option value="2730">Urza's Legacy</option>
<option value="2735">Urza's Saga</option>
<option value="2740">Vanguard</option>
<option value="2745">Visions</option>
<option value="3115">War of the Spark</option>
<option value="3121">War of the Spark JPN</option>
<option value="2750">Weatherlight</option>
<option value="2975">World Championships</option>
<option value="2840">Worldwake</option>
<option value="2826">Zendikar</option>
</select> </div></div>
</div>

<div class="filterHeader ckExpand  color ">
<div class="btn btn-default title" role="button"><span>Card Color</span><span class="ckHelp right glyphicon glyphicon-question-sign" data-helpid="ckHelpId1"></span></div>
<button role="submit" class="sideSearchApply btn btn-primary"><span class="glyphicon glyphicon-search"></span> Apply</button>
<div class="submenu filterContainer" id="colorContainer"><div class="layoutWrapper">
<table class="includeColors">
<tbody><tr>
<td align="center"><img src="/media/images/web/mana_symbols/mana_w.png"></td>
<td align="center"><img src="/media/images/web/mana_symbols/mana_u.png"></td>
<td align="center"><img src="/media/images/web/mana_symbols/mana_b.png"></td>
<td align="center"><img src="/media/images/web/mana_symbols/mana_r.png"></td>
<td align="center"><img src="/media/images/web/mana_symbols/mana_g.png"></td>
</tr>
<tr>
<td align="center"><input type="checkbox" name="filter[scast][0]" value="w" tabindex="2"></td>
<td align="center"><input type="checkbox" name="filter[scast][1]" value="u" tabindex="3"></td>
<td align="center"><input type="checkbox" name="filter[scast][2]" value="b" tabindex="4"></td>
<td align="center"><input type="checkbox" name="filter[scast][3]" value="r" tabindex="5"></td>
<td align="center"><input type="checkbox" name="filter[scast][4]" value="g" tabindex="6"></td>
</tr>
</tbody></table>
<div>
<div><input type="checkbox" name="filter[multi][0]" value="1" checked="checked" tabindex="7"> Include mono cards</div>
<div><input type="checkbox" name="filter[multi][1]" value="2" tabindex="8"> Include 2-color cards</div>
<div><input type="checkbox" name="filter[multi][2]" value="3" tabindex="9"> Include 3-color cards</div>
<div><input type="checkbox" name="filter[multi][3]" value="4" tabindex="10"> Include 4-color cards</div>
<div><input type="checkbox" name="filter[multi][4]" value="5" tabindex="11"> Include 5-color cards</div>
<div><input type="checkbox" name="filter[multi][5]" value="6" tabindex="12"> Include Colorless</div>
</div>
</div></div>
</div>

<div class="filterHeader ckExpand identity ">
<div class="btn btn-default title" role="button"><span>Color Identity</span><span class="ckHelp right glyphicon glyphicon-question-sign" data-helpid="ckHelpId17"></span></div>
<button role="submit" class="sideSearchApply btn btn-primary"><span class="glyphicon glyphicon-search"></span> Apply</button>
<div class="submenu filterContainer" id="identityContainer"><div class="layoutWrapper">
<table class="includeColors">
<tbody><tr>
<td align="center"><img src="/media/images/web/mana_symbols/mana_w.png"></td>
<td align="center"><img src="/media/images/web/mana_symbols/mana_u.png"></td>
<td align="center"><img src="/media/images/web/mana_symbols/mana_b.png"></td>
<td align="center"><img src="/media/images/web/mana_symbols/mana_r.png"></td>
<td align="center"><img src="/media/images/web/mana_symbols/mana_g.png"></td>
<td align="center"><img src="/media/images/web/mana_symbols/mana_colorless.png"></td>
</tr>
<tr>
<td align="center"><input type="checkbox" name="filter[identity_w]" value="{W}" tabindex="13"></td>
<td align="center"><input type="checkbox" name="filter[identity_u]" value="{U}" tabindex="14"></td>
<td align="center"><input type="checkbox" name="filter[identity_b]" value="{B}" tabindex="15"></td>
<td align="center"><input type="checkbox" name="filter[identity_r]" value="{R}" tabindex="16"></td>
<td align="center"><input type="checkbox" name="filter[identity_g]" value="{G}" tabindex="17"></td>
<td align="center"><input type="checkbox" name="filter[identity_c]" value="{C}" tabindex="18"></td>
</tr>
</tbody></table>
</div>
</div>
</div>
<div class="filterHeader ckExpand " style="display:none;">
<div class="btn btn-default title" role="button"><span>Card Color (mono)</span> </div>
<button role="submit" class="sideSearchApply btn btn-primary"><span class="glyphicon glyphicon-search"></span> Apply</button>
<div class="submenu filterContainer" id="monocolorContainer"><div class="layoutWrapper">
<table style="width:100%;">
<tbody><tr>
<td align="center"><img src="/media/images/web/mana_symbols/mana_w.png"></td>
<td align="center"><img src="/media/images/web/mana_symbols/mana_u.png"></td>
<td align="center"><img src="/media/images/web/mana_symbols/mana_b.png"></td>
<td align="center"><img src="/media/images/web/mana_symbols/mana_r.png"></td>
<td align="center"><img src="/media/images/web/mana_symbols/mana_g.png"></td>
</tr>
<tr>
<td align="center"><input type="checkbox"></td>
<td align="center"><input type="checkbox"></td>
<td align="center"><input type="checkbox"></td>
<td align="center"><input type="checkbox"></td>
<td align="center"><input type="checkbox"></td>
</tr>
</tbody></table>
</div></div>
</div>
<div class="filterHeader ckExpand " style="display:none;">
<div class="btn btn-default title" role="button"> Card Color (multi) </div>
<button role="submit" class="sideSearchApply btn btn-primary"><span class="glyphicon glyphicon-search"></span> Apply</button>
<div class="submenu filterContainer" id="multicolorContainer"><div class="layoutWrapper">
2-3 Color<br>
<table style="margin:0px auto;">
<tbody><tr>
<td>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_b.png"><img src="/media/images/web/mana_symbols/mana_u.png"><br>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_b.png"><img src="/media/images/web/mana_symbols/mana_g.png"><br>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_b.png"><img src="/media/images/web/mana_symbols/mana_r.png"><br>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_b.png"><img src="/media/images/web/mana_symbols/mana_w.png"><br>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_u.png"><img src="/media/images/web/mana_symbols/mana_g.png"><br>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_u.png"><img src="/media/images/web/mana_symbols/mana_r.png"><br>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_u.png"><img src="/media/images/web/mana_symbols/mana_w.png"><br>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_g.png"><img src="/media/images/web/mana_symbols/mana_r.png"><br>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_g.png"><img src="/media/images/web/mana_symbols/mana_w.png"><br>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_r.png"><img src="/media/images/web/mana_symbols/mana_w.png"><br>
</td>
<td width="25"></td>
<td>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_b.png"><img src="/media/images/web/mana_symbols/mana_u.png"><img src="/media/images/web/mana_symbols/mana_g.png"><br>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_b.png"><img src="/media/images/web/mana_symbols/mana_u.png"><img src="/media/images/web/mana_symbols/mana_r.png"><br>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_b.png"><img src="/media/images/web/mana_symbols/mana_u.png"><img src="/media/images/web/mana_symbols/mana_w.png"><br>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_b.png"><img src="/media/images/web/mana_symbols/mana_g.png"><img src="/media/images/web/mana_symbols/mana_r.png"><br>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_b.png"><img src="/media/images/web/mana_symbols/mana_g.png"><img src="/media/images/web/mana_symbols/mana_w.png"><br>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_b.png"><img src="/media/images/web/mana_symbols/mana_r.png"><img src="/media/images/web/mana_symbols/mana_w.png"><br>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_u.png"><img src="/media/images/web/mana_symbols/mana_g.png"><img src="/media/images/web/mana_symbols/mana_r.png"><br>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_u.png"><img src="/media/images/web/mana_symbols/mana_g.png"><img src="/media/images/web/mana_symbols/mana_w.png"><br>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_u.png"><img src="/media/images/web/mana_symbols/mana_r.png"><img src="/media/images/web/mana_symbols/mana_w.png"><br>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_g.png"><img src="/media/images/web/mana_symbols/mana_r.png"><img src="/media/images/web/mana_symbols/mana_w.png"><br>
</td>
</tr>
</tbody></table>
<br>
<center><input type="checkbox"> Include 4-5 Color</center><br>
<table style="margin:0px auto; display:none;">
<tbody><tr>
<td>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_b.png"><img src="/media/images/web/mana_symbols/mana_u.png"><img src="/media/images/web/mana_symbols/mana_g.png"><img src="/media/images/web/mana_symbols/mana_r.png"><br>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_b.png"><img src="/media/images/web/mana_symbols/mana_u.png"><img src="/media/images/web/mana_symbols/mana_g.png"><img src="/media/images/web/mana_symbols/mana_w.png"><br>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_b.png"><img src="/media/images/web/mana_symbols/mana_u.png"><img src="/media/images/web/mana_symbols/mana_r.png"><img src="/media/images/web/mana_symbols/mana_w.png"><br>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_b.png"><img src="/media/images/web/mana_symbols/mana_g.png"><img src="/media/images/web/mana_symbols/mana_r.png"><img src="/media/images/web/mana_symbols/mana_w.png"><br>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_u.png"><img src="/media/images/web/mana_symbols/mana_g.png"><img src="/media/images/web/mana_symbols/mana_r.png"><img src="/media/images/web/mana_symbols/mana_w.png"><br>
<input type="checkbox"><img src="/media/images/web/mana_symbols/mana_b.png"><img src="/media/images/web/mana_symbols/mana_u.png"><img src="/media/images/web/mana_symbols/mana_g.png"><img src="/media/images/web/mana_symbols/mana_r.png"><img src="/media/images/web/mana_symbols/mana_w.png"><br>
</td>
</tr>
</tbody></table>
</div></div>
</div>

<div class="filterHeader ckExpand rarity ">
<div class="btn btn-default title" role="button"><span>Rarity</span> <span class="ckHelp right glyphicon glyphicon-question-sign" data-helpid="ckHelpId2"></span></div>
<button role="submit" class="sideSearchApply btn btn-primary"><span class="glyphicon glyphicon-search"></span> Apply</button>
<div class="submenu  filterContainer" id="rarityContainer"><ul class="layoutWrapper">
<li><input type="checkbox" name="filter[rarity][0]" value="M" tabindex="19"> Mythic</li>
<li><input type="checkbox" name="filter[rarity][1]" value="R" tabindex="20"> Rare</li>
<li><input type="checkbox" name="filter[rarity][2]" value="U" tabindex="21"> Uncommon</li>
<li><input type="checkbox" name="filter[rarity][3]" value="C" tabindex="22"> Common</li>
<li><input type="checkbox" name="filter[rarity][4]" value="L" tabindex="23"> Basic Land</li>
<li><input type="checkbox" name="filter[rarity][5]" value="S" tabindex="24"> Special</li>
</ul></div>
</div>

<div class="filterHeader ckExpand  searchType">
<div class="btn btn-default title" role="button"><span>Type</span><span class="ckHelp right glyphicon glyphicon-question-sign" data-helpid="ckHelpId3"></span></div>
<button role="submit" class="sideSearchApply btn btn-primary"><span class="glyphicon glyphicon-search"></span> Apply</button>
<div class="submenu  filterContainer" id="typeContainer">
<div class="typeOptions">
<span class="leftOption">
<input type="radio" name="filter[type_mode]" value="any" checked="checked" tabindex="25"> Match Any
</span><span class="rightOption">
<input type="radio" name="filter[type_mode]" value="all" tabindex="26"> Match All
</span>
</div>
<ul class="layoutWrapper">
<li><input type="checkbox" name="filter[type_art]" value="Artifact" tabindex="27"> Artifact</li>
<li><input class="setTypeCreature" type="checkbox" name="filter[type_cr]" value="Creature" tabindex="28"> Creature</li>
<li><input type="checkbox" name="filter[type_ench]" value="Enchantment" tabindex="29"> Enchantment</li>
<li><input type="checkbox" name="filter[type_ins]" value="Instant" tabindex="30"> Instant</li>
<li><input type="checkbox" name="filter[type_land]" value="Land" tabindex="31"> Land</li>
<li><input type="checkbox" name="filter[type_legendary]" value="Legendary" tabindex="32"> Legendary</li>
<li><input type="checkbox" name="filter[type_pw]" value="Planeswalker" tabindex="33"> Planeswalker</li>
<li><input type="checkbox" name="filter[type_sor]" value="Sorcery" tabindex="34"> Sorcery</li>
<li><input type="checkbox" name="filter[type_tri]" value="Tribal" tabindex="35"> Tribal</li>
<li><input type="checkbox" id="filterTypeValue" name="filter[type_key]" value="" tabindex="36">
<input type="text" id="filterTypeInput" name="filter[type_key]" value="" placeholder="Enter custom type" style="width: 150px;" tabindex="37">
</li></ul>
</div>
</div>

<div class="filterHeader ckExpand  searchPowerTough">
<div class="btn btn-default title" role="button"><span>Power/Tough</span><span class="ckHelp right glyphicon glyphicon-question-sign" data-helpid="ckHelpId4"></span></div>
<button role="submit" class="sideSearchApply btn btn-primary"><span class="glyphicon glyphicon-search"></span> Apply</button>
<div class="submenu filterContainer" id="powToughContainer"><div class="layoutWrapper">
Power<br>
<select name="filter[pow1]" tabindex="38">
<option value="" selected="selected"></option>
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
</select> <span class="fromto">to</span> <select name="filter[pow2]" tabindex="39">
<option value="" selected="selected"></option>
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
</select> <br>
Toughness<br>
<select name="filter[tuf1]" tabindex="40">
<option value="" selected="selected"></option>
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
</select> <span class="fromto">to</span> <select name="filter[tuf2]" tabindex="41">
<option value="" selected="selected"></option>
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
</select> </div></div>
</div>

<div class="filterHeader ckExpand concast ">
<div class="btn btn-default title" role="button"><span>Converted Cost</span><span class="ckHelp right glyphicon glyphicon-question-sign" data-helpid="ckHelpId5"></span></div>
<button role="submit" class="sideSearchApply btn btn-primary"><span class="glyphicon glyphicon-search"></span> Apply</button>
<div class="submenu filterContainer" id="concastContainer"><div class="layoutWrapper">
<select name="filter[concast1]" tabindex="42">
<option value="" selected="selected"></option>
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
</select> <span class="fromto">to</span> <select name="filter[concast2]" tabindex="43">
<option value="" selected="selected"></option>
<option value="0">0</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
</select> </div></div>
</div>

<div class="filterHeader ckExpand  searchPrice">
<div class="btn btn-default title" role="button"><span>Price</span><span class="ckHelp right glyphicon glyphicon-question-sign" data-helpid="ckHelpId8"></span></div>
<button role="submit" class="sideSearchApply btn btn-primary"><span class="glyphicon glyphicon-search"></span> Apply</button>
<div class="submenu filterContainer" id="priceContainer"><div class="layoutWrapper">
<select name="filter[price_op]" tabindex="44">
<option value="" selected="selected"></option>
<option value="<=">&lt;=</option>
<option value="=">=</option>
<option value=">=">&gt;=</option>
</select> <select name="filter[price]" tabindex="45">
<option value="" selected="selected"></option>
<option value="0.25">0.25</option>
<option value="0.49">0.49</option>
<option value="0.99">0.99</option>
<option value="1.99">1.99</option>
<option value="2.99">2.99</option>
<option value="4.99">4.99</option>
<option value="9.99">9.99</option>
<option value="19.99">19.99</option>
<option value="49.99">49.99</option>
<option value="99.99">99.99</option>
<option value="499.99">499.99</option>
</select> </div></div>
</div>

<div class="filterHeader ckExpand  oracleText">
<div class="btn btn-default title" role="button"><span>Oracle Text</span><span class="ckHelp right glyphicon glyphicon-question-sign" data-helpid="ckHelpId7"></span></div>
<button role="submit" class="sideSearchApply btn btn-primary"><span class="glyphicon glyphicon-search"></span> Apply</button>
<div class="submenu filterContainer" id="oracleContainer"><div class="layoutWrapper">
<input type="text" name="filter[key_text1]" value="" placeholder="e.g. this and (that or other)" tabindex="46">
</div></div>
</div>

<div class="filterHeader ckExpand manaprod ">
<div class="btn btn-default title" role="button"><span>Mana Production</span><span class="ckHelp right glyphicon glyphicon-question-sign" data-helpid="ckHelpId9"></span></div>
<button role="submit" class="sideSearchApply btn btn-primary"><span class="glyphicon glyphicon-search"></span> Apply</button>
<div class="submenu filterContainer" id="manaprodContainer"><div class="layoutWrapper">
<table class="includeColors">
<tbody><tr>
<td align="center"><img src="/media/images/web/mana_symbols/mana_w.png"></td>
<td align="center"><img src="/media/images/web/mana_symbols/mana_u.png"></td>
<td align="center"><img src="/media/images/web/mana_symbols/mana_b.png"></td>
<td align="center"><img src="/media/images/web/mana_symbols/mana_r.png"></td>
<td align="center"><img src="/media/images/web/mana_symbols/mana_g.png"></td>
<td align="center"><img src="/media/images/web/mana_symbols/mana_colorless.png"></td>
</tr>
<tr>
<td align="center"><input type="checkbox" name="filter[manaprod_w]" value="{W}" tabindex="47"></td>
<td align="center"><input type="checkbox" name="filter[manaprod_u]" value="{U}" tabindex="48"></td>
<td align="center"><input type="checkbox" name="filter[manaprod_b]" value="{B}" tabindex="49"></td>
<td align="center"><input type="checkbox" name="filter[manaprod_r]" value="{R}" tabindex="50"></td>
<td align="center"><input type="checkbox" name="filter[manaprod_g]" value="{G}" tabindex="51"></td>
<td align="center"><input type="checkbox" name="filter[manaprod_cl]" value="{[0-9]}|{X}" tabindex="52"></td>
</tr>
</tbody></table>
<div class="row" style="font-size:10px;">
<div class="searchSelectWrapper">
<select name="filter[manaprod_select]" tabindex="53">
<option value="any">Can produce ANY of these</option>
<option value="all">Can produce ALL of these</option>
<option value="exact">Produces EXACTLY these</option>
</select>
</div>
</div>
</div></div>
</div>
<div class="formButtons">
<button role="submit" class="btn btn-primary">Apply Filters</button>
<a id="clearSideSearch" href="/catalog/magic_the_gathering/search" role="submit" class="btn btn-danger">Clear Form</a>

</div>
</form> */}