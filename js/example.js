;(function(G) {
"use strict"


window.HOST_TMS_BASIC = "https://a.com/"
window.HOST_TMS2 = "https://b.com/"
window.HOST_TMS_CENTER = "https://c.com/"
window.HOST_GIS  = "http://d.com/"

// 多域名环境href需要配置host+pathname, 单域名只需要配置pathname
const NAV_MENUS = [
	{ text: "首页", href:"/", subMenu: []},
	{ text: "基础资料", subMenu: [
		{ text: "人员相关", subMenu: [
			{href: G.HOST_TMS_BASIC + "/user/index", text: "人员档案"},
			{href: G.HOST_TMS_BASIC + "/driver/index", text: "司机档案"},
			{href: G.HOST_TMS_BASIC + "/deliverer/index", text: "配送员档案"},
			{href: "#", text: "站长档案", subMenu: [
				{ text: "人员相关", subMenu: [
					{href: G.HOST_TMS_BASIC + "/user/index", text: "人员档案"},
					{href: G.HOST_TMS_BASIC + "/driver/index", text: "司机档案"},
					{href: G.HOST_TMS_BASIC + "/deliverer/index", text: "配送员档案"},
					// {href: "#", text: "站长档案"},
				]},
				{ text: "车辆相关", subMenu: [
					{href: G.HOST_TMS_BASIC + "/car/index", text: "车辆档案"},
					{href: G.HOST_TMS_BASIC + "/cartype/index", text: "车型档案"},
					{href: G.HOST_TMS_BASIC + "/loadRate/index", text: "运力设置"},
				]},
				{ text: "线路相关", subMenu: [
					{href: G.HOST_TMS_BASIC + "/distributeroute/index", text: "配送线路"},
					{href: G.HOST_TMS_BASIC + "/transportroute/index", text: "运输线路"},
				]},
				{ text: "服务与批次", subMenu: [
					{href: G.HOST_TMS_BASIC + "/distservice/index", text: "服务档案"},
					{href: G.HOST_TMS_BASIC + "/distservice/batchIndex", text: "批次配置"},
					{href: G.HOST_TMS_BASIC + "/distservice/auditIndex", text: "批次审核"},
				]},
				{ text: "基础配置", subMenu: [
					{href: G.HOST_TMS_BASIC + "/company/index", text: "商户档案"},
					{href: G.HOST_TMS_BASIC + "/warehouse/index", text: "仓库档案"},
					{href: G.HOST_TMS_BASIC + "/site/index", text: "站点档案"},
					{href: G.HOST_TMS_BASIC + "/stationRegion/index", text: "站区档案"},
					{href: G.HOST_TMS_BASIC + "/region/index", text: "配送区域档案"},
        		    {href: G.HOST_TMS_BASIC + "/appversion/index", text: "APP版本管理"},
				]},
				{ text: "客户管理", subMenu: [
					{href: G.HOST_TMS_BASIC + "/customer/index", text: "客户维护"},
					{href: G.HOST_TMS_BASIC + "/customer/audit", text: "关系审核"},
				]},
				{ isDivider: true },
				{href: G.HOST_TMS_BASIC + "/dictionary/index", text: "数据字典"},
				// {href: "#", text: "审核中心"},
				{ href: G.HOST_GIS, text: "GIS服务", target: "_blank"},
			]},
		]},
		{ text: "车辆相关", subMenu: [
			{href: G.HOST_TMS_BASIC + "/car/index", text: "车辆档案"},
			{href: G.HOST_TMS_BASIC + "/cartype/index", text: "车型档案"},
			{href: G.HOST_TMS_BASIC + "/loadRate/index", text: "运力设置"},
		]},
		{ text: "线路相关", subMenu: [
			{href: G.HOST_TMS_BASIC + "/distributeroute/index", text: "配送线路"},
			{href: G.HOST_TMS_BASIC + "/transportroute/index", text: "运输线路"},
		]},
		{ text: "服务与批次", subMenu: [
			{href: G.HOST_TMS_BASIC + "/distservice/index", text: "服务档案"},
			{href: G.HOST_TMS_BASIC + "/distservice/batchIndex", text: "批次配置"},
			{href: G.HOST_TMS_BASIC + "/distservice/auditIndex", text: "批次审核"},
		]},
		{ text: "基础配置", subMenu: [
			{href: G.HOST_TMS_BASIC + "/company/index", text: "商户档案"},
			{href: G.HOST_TMS_BASIC + "/warehouse/index", text: "仓库档案"},
			{href: G.HOST_TMS_BASIC + "/site/index", text: "站点档案"},
			{href: G.HOST_TMS_BASIC + "/stationRegion/index", text: "站区档案"},
			{href: G.HOST_TMS_BASIC + "/region/index", text: "配送区域档案"},
            {href: G.HOST_TMS_BASIC + "/appversion/index", text: "APP版本管理"},
		]},
		{ text: "客户管理", subMenu: [
			{href: G.HOST_TMS_BASIC + "/customer/index", text: "客户维护"},
			{href: G.HOST_TMS_BASIC + "/customer/audit", text: "关系审核"},
		]},
		{ isDivider: true },
		{href: G.HOST_TMS_BASIC + "/dictionary/index", text: "数据字典"},
		// {href: "#", text: "审核中心"},
		{ href: G.HOST_GIS, text: "GIS服务", target: "_blank"},
	]},
	{ text: "运单中心", subMenu: [
		{href: G.HOST_TMS_CENTER + "/waybill/index", text: "正向运单"},
		{href: G.HOST_TMS_CENTER + "/pickUp/index", text: "取件单"},
		// {href: "#", text: "拒收单"},
	]},
	{ text: "排线中心", subMenu: [
		{href: G.HOST_TMS_CENTER + "/schedule/index", text: "直送直送排线"},
		{href: G.HOST_TMS_CENTER + "/pickUpArrangeRoute/index", text: "直送逆向排线"},
		{href: G.HOST_TMS_CENTER + "/arrangeRouteMonitor/index", text: "排线监控"},
	]},
	{ text: "任务中心", subMenu: [
		{href: G.HOST_TMS_CENTER + "/taskbillDirect/index", text: "直送任务单"},
		{ isDivider: true },
		{href: G.HOST_TMS_CENTER + "/taskbillBranch/index", text: "站点支线任务单"},
		{href: G.HOST_TMS_CENTER + "/taskbillTerminal/index", text: "站点末端任务单"},
	]},
	{ text: "调整中心", subMenu: [
		{href: G.HOST_TMS2 + "/goodsAdjust/index", text: "货品调整"},
		{href: G.HOST_TMS2 + "/materialAdjust/index", text: "物资处理"},
		{ isDivider: true },
		{href: G.HOST_TMS2 + "/goodsAdjustmentControll/index", text: "逆向货品调整"},
		{href: G.HOST_TMS2 + "/packingAdjustment/index", text: "逆向物资处理"},
		{ isDivider: true },
		{href: G.HOST_TMS2 + "/electronicBill/index", text: "电子账单"},
	]},
	{ text: "财务中心", subMenu: [
  		{href: G.HOST_TMS2 + "/distributeFee/basicDistributeFee/index", text: "基础运费"},
  		{href: G.HOST_TMS2 + "/subsidyFee/index", text: "补贴管理"},
  		{href: G.HOST_TMS2 + "/manageFee/index", text: "管理费用"},
  		{href: G.HOST_TMS2 + "/settleFee/index", text: "费用结算"},
  		{href: G.HOST_TMS2 + "/feeBill/index", text: "费用对账"},
  	]},
	{ text: "报名中心", subMenu: [
		{href: G.HOST_TMS2 + "/driverEnroll/index", text: "司机报名"},
		{href: G.HOST_TMS2 + "/delivererEnrollControll/index", text: "配送员报名"},
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


// 渲染导航菜单
document.querySelector(".nav.navbar-nav").innerHTML = NavMenu.renderNav(NAV_MENUS, pathname, matchFn)
let $breadCurmb = document.querySelector("#breadcrumb")


// 渲染面包屑
$breadCurmb.style.display = ""

// hardcode
pathname = G.HOST_TMS_BASIC + "/distservice/index"
$breadCurmb.innerHTML = NavMenu.renderBreadCurmb(NAV_MENUS, pathname, matchFn)


} (window))
