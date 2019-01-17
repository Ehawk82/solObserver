# solObserver
___
<h2>Purpose</h2> 
To observe voltage and amp collection using a modified solar charge controller.

<h2>Specifications</h2>

voltage inputs: solar array, load(pre-regulator)<sup>1</sup>, load(after regulator)

amp input: load(after regulator)

formula:
<code style='margin:5px 2px;'>

	E = A * r * H * PR

</code>
<details><summary>details</summary>
	<p>E = Energy</p>
    <p>A = Total solar panel Area</p>
    <p>r = solar panel yield or efficiency</p>
    <p>H = Annual average solar radiation</p>
    <p>PR = Performance ratio</p>
</details>
<h2>notes</h2>
<sup>1</sup> not a good idea taking input from pre-reg side when there is no input coming from the solar array. To prevent drain at night, i can use one of my handmade relay sensors. it requires 3 AA rechargable batteries that USE energy at night and recharge during the day.  This small subsystem is automated. 