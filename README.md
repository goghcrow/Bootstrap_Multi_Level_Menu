## Bootstrap Multi level Navbar Menu

基于js配置的无级菜单

![e.g.](https://raw.githubusercontent.com/goghcrow/Bootstrap_Multi_Level_Menu/master/img/menu.png)

~~~html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title></title>
		<link href="//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="css/navmenu.css"/>
	</head>
	<body>
	<main>
	<div class="navbar navbar-default navbar-fixed-top" role="navigation">
		<div class="container">
			<div class="navbar-header">
			 	<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
			 	</button>
			 	<a class="navbar-brand" href="#">Brand</a>
			</div>

			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav">

				</ul>
			</div><!--/.nav-collapse -->

		</div>
	</div>


	<div>
		<ol class="breadcrumb" id="breadcrumb" style="display: none;margin: 70px 15px 10px 15px;">
		</ol>
	</div>
	</main>


	<script src="//cdn.bootcss.com/jquery/2.2.4/jquery.min.js"></script>
	<script src="//cdn.bootcss.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	<script src="js/navmenu.js"></script>
	<script src="js/example.js"></script>
	</body>
</html>
~~~


~~~js
;(function(G) {
"use strict"


const HOST_A = "https://a.com/"
const HOST_B = "https://b.com/"
const HOST_C = "https://c.com/"
const HOST_D  = "http://d.com/"

// 多域名环境href需要配置host+pathname, 单域名只需要配置pathname
const NAV_MENUS = [
	{ text: "首页", href:"/", subMenu: []},
	{ text: "基础资料", subMenu: [
		{ text: "人员相关", subMenu: [
			{href: HOST_A + "/user/index", text: "人员档案"},
			{href: HOST_A + "/driver/index", text: "司机档案"},
			{href: HOST_A + "/deliverer/index", text: "配送员档案"},
			{href: "#", text: "站长档案", subMenu: [
				{ text: "人员相关", subMenu: [
					{href: HOST_A + "/user/index", text: "人员档案"},
					{href: HOST_A + "/driver/index", text: "司机档案"},
					{href: HOST_A + "/deliverer/index", text: "配送员档案"},
					// {href: "#", text: "站长档案"},
				]},
				{ text: "车辆相关", subMenu: [
					{href: HOST_A + "/car/index", text: "车辆档案"},
					{href: HOST_A + "/cartype/index", text: "车型档案"},
					{href: HOST_A + "/loadRate/index", text: "运力设置"},
				]},
				{ text: "线路相关", subMenu: [
					{href: HOST_A + "/distributeroute/index", text: "配送线路"},
					{href: HOST_A + "/transportroute/index", text: "运输线路"},
				]},
				{ text: "服务与批次", subMenu: [
					{href: HOST_A + "/distservice/index", text: "服务档案"},
					{href: HOST_A + "/distservice/batchIndex", text: "批次配置"},
					{href: HOST_A + "/distservice/auditIndex", text: "批次审核"},
				]},
				{ text: "基础配置", subMenu: [
					{href: HOST_A + "/company/index", text: "商户档案"},
					{href: HOST_A + "/warehouse/index", text: "仓库档案"},
					{href: HOST_A + "/site/index", text: "站点档案"},
					{href: HOST_A + "/stationRegion/index", text: "站区档案"},
					{href: HOST_A + "/region/index", text: "配送区域档案"},
        		    {href: HOST_A + "/appversion/index", text: "APP版本管理"},
				]},
				{ text: "客户管理", subMenu: [
					{href: HOST_A + "/customer/index", text: "客户维护"},
					{href: HOST_A + "/customer/audit", text: "关系审核"},
				]},
				{ isDivider: true },
				{href: HOST_A + "/dictionary/index", text: "数据字典"},
				// {href: "#", text: "审核中心"},
				{ href: HOST_D, text: "GIS服务", target: "_blank"},
			]},
		]},
		{ text: "车辆相关", subMenu: [
			{href: HOST_A + "/car/index", text: "车辆档案"},
			{href: HOST_A + "/cartype/index", text: "车型档案"},
			{href: HOST_A + "/loadRate/index", text: "运力设置"},
		]},
		{ text: "线路相关", subMenu: [
			{href: HOST_A + "/distributeroute/index", text: "配送线路"},
			{href: HOST_A + "/transportroute/index", text: "运输线路"},
		]},
		{ text: "服务与批次", subMenu: [
			{href: HOST_A + "/distservice/index", text: "服务档案"},
			{href: HOST_A + "/distservice/batchIndex", text: "批次配置"},
			{href: HOST_A + "/distservice/auditIndex", text: "批次审核"},
		]},
		{ text: "基础配置", subMenu: [
			{href: HOST_A + "/company/index", text: "商户档案"},
			{href: HOST_A + "/warehouse/index", text: "仓库档案"},
			{href: HOST_A + "/site/index", text: "站点档案"},
			{href: HOST_A + "/stationRegion/index", text: "站区档案"},
			{href: HOST_A + "/region/index", text: "配送区域档案"},
            {href: HOST_A + "/appversion/index", text: "APP版本管理"},
		]},
		{ text: "客户管理", subMenu: [
			{href: HOST_A + "/customer/index", text: "客户维护"},
			{href: HOST_A + "/customer/audit", text: "关系审核"},
		]},
		{ isDivider: true },
		{href: HOST_A + "/dictionary/index", text: "数据字典"},
		// {href: "#", text: "审核中心"},
		{ href: HOST_D, text: "GIS服务", target: "_blank"},
	]},
	{ text: "运单中心", subMenu: [
		{href: HOST_C + "/waybill/index", text: "正向运单"},
		{href: HOST_C + "/pickUp/index", text: "取件单"},
		// {href: "#", text: "拒收单"},
	]},
	{ text: "排线中心", subMenu: [
		{href: HOST_C + "/schedule/index", text: "直送直送排线"},
		{href: HOST_C + "/pickUpArrangeRoute/index", text: "直送逆向排线"},
		{href: HOST_C + "/arrangeRouteMonitor/index", text: "排线监控"},
	]},
	{ text: "任务中心", subMenu: [
		{href: HOST_C + "/taskbillDirect/index", text: "直送任务单"},
		{ isDivider: true },
		{href: HOST_C + "/taskbillBranch/index", text: "站点支线任务单"},
		{href: HOST_C + "/taskbillTerminal/index", text: "站点末端任务单"},
	]},
	{ text: "调整中心", subMenu: [
		{href: HOST_B + "/goodsAdjust/index", text: "货品调整"},
		{href: HOST_B + "/materialAdjust/index", text: "物资处理"},
		{ isDivider: true },
		{href: HOST_B + "/goodsAdjustmentControll/index", text: "逆向货品调整"},
		{href: HOST_B + "/packingAdjustment/index", text: "逆向物资处理"},
		{ isDivider: true },
		{href: HOST_B + "/electronicBill/index", text: "电子账单"},
	]},
	{ text: "财务中心", subMenu: [
  		{href: HOST_B + "/distributeFee/basicDistributeFee/index", text: "基础运费"},
  		{href: HOST_B + "/subsidyFee/index", text: "补贴管理"},
  		{href: HOST_B + "/manageFee/index", text: "管理费用"},
  		{href: HOST_B + "/settleFee/index", text: "费用结算"},
  		{href: HOST_B + "/feeBill/index", text: "费用对账"},
  	]},
	{ text: "报名中心", subMenu: [
		{href: HOST_B + "/driverEnroll/index", text: "司机报名"},
		{href: HOST_B + "/delivererEnrollControll/index", text: "配送员报名"},
	]},
	{ text: "监控中心", subMenu: [
 	 	{href: G.HOST_TMC_MONITOR + "/scheduleMonitorForWholeNation/index", text: "全国排线监控"},
	 	{href: G.HOST_TMC_MONITOR + "/taskbillMonitor/index", text: "任务单报表"},
	]},
]


// 多域名支持
const multiHost = true
// 多域名环境nav匹配host+path 单域名匹配pathname
let pathname = multiHost ? window.location.href.split("?")[0] : window.location.pathname
// 配置中url和传入path比对函数, 默认相等比较
const matchFn = (href, path) => href === pathname

// TODO:  !!!hardcode 请移除
pathname = HOST_A + "/distservice/index"

// 渲染导航菜单
document.querySelector(".nav.navbar-nav").innerHTML = NavMenu.renderNav(NAV_MENUS, pathname, matchFn)
let $breadCurmb = document.querySelector("#breadcrumb")
// 渲染面包屑
$breadCurmb.style.display = ""
$breadCurmb.innerHTML = NavMenu.renderBreadCurmb(NAV_MENUS, pathname, matchFn)


} (window))
~~~
