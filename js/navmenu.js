;(function(G) {
"use strict"

G.NavMenu = {
	renderNav: renderNav,
	renderBreadCurmb: renderBreadCurmb		
}

const defaultMatchFn = (href, path) => href === path

/**
 * 渲染面包屑导航
 * @param {Object} navs
 * @param {Object} path
 * @param {Function} hrefMatchFn : bool
 * @author xiaofeng
 */
function renderBreadCurmb(navs, path, hrefMatchFn) {
	hrefMatchFn = hrefMatchFn || defaultMatchFn
	
	let breadCurmb = ""
	let paths = findPath(navs, path, hrefMatchFn)
	if(paths.length === 0) {
		return breadCurmb
	}

	let activePath = paths.pop()
	for(let path of paths) {
		breadCurmb += `<li><a href="${path.href ? path.href : '#'}">${path.text}</a></li>`
	}
	breadCurmb += `<li class="active">${activePath.text}</li>`
	return breadCurmb
}


/**
 * bootstrap3 层级菜单
 * @param  array navs [menu1, menu2, ...] menu结构见下方
 * @param  string path
 * @param {Function} hrefMatchFn : bool
 * @return string
 * @author xiaofeng
 *
 * menu 结构
 * {
 *     isDivider: false, 是否分隔线,可选,默认false
 *     // 废弃，修改为自动处理 isActive: false, 是否激活,可选,默认false
 *     href: "#", 链接,可选,默认#
 *     target: "", target,可选,默认""
 *     text: "",导航文本,必填!!!
 *     subMenu: [], 子菜单,可选,递归嵌入menu结构
 * }
 *
 */
function renderNav(navs, path, hrefMatchFn) {
	hrefMatchFn = hrefMatchFn || defaultMatchFn
	
	function _menu(menus, arr) {
		arr.push(`<ul class="dropdown-menu">`)
		for(let menu of menus) {
			if(menu.isDivider) {
				arr.push(`<li class="divider"></li>`)
				continue
			}
			let hasSubmenu = Array.isArray(menu.subMenu) && menu.subMenu.length > 0
			if(hasSubmenu) {
				arr.push(`<li class="dropdown-submenu">`)
				arr.push(`<a href="#" class="dropdown-toggle" data-toggle="dropdown">${menu.text}</a>`)
				_menu(menu.subMenu, arr)
				arr.push(`</li>`)
			} else {
				arr.push(`<li class="${menu.isActive ? 'active' : ''}">`)
				arr.push(`<a href="${menu.href ? menu.href : '#'}" target="${menu.target ? menu.target : ''}">${menu.text}</a>`)
				arr.push(`</li>`)
			}
		}
		arr.push(`</ul>`)
	}

	// 激活当前path父菜单
	active(navs, path, hrefMatchFn)

	let arr = []
	// arr.push(`<ul class="nav navbar-nav navbar-left">`)
	for(let nav of navs) {
		if(nav.isDivider) continue
		let hasSubmenu = Array.isArray(nav.subMenu) && nav.subMenu.length > 0
		if(hasSubmenu) {
			arr.push(`<li class="${nav.isActive ? 'active' : ''}">`)
			arr.push(`<a href="" class="dropdown-toggle" data-toggle="dropdown">${nav.text}<b class="caret"></b></a>`)
			_menu(nav.subMenu, arr)
			arr.push(`</li>`)
		} else {
			arr.push(`<li class="${nav.isActive ? 'active' : ''}">`)
			arr.push(`<a href="${nav.href ? nav.href : '#'}" target="${nav.target ? nav.target : ''}">${nav.text}</a>`)
			arr.push(`</li>`)
		}
	}
	// arr.push(`</ul>`)
	return arr.join("")
}

/**
 * 标记激活
 * @param  array navs 导航配置
 * @param  string path path
 * @param {Function} hrefMatchFn : bool 
 * @author xiaofeng
 */
function active(navs, path, hrefMatchFn) {
	"use strict"
	if(!path || path === "/") {
		for(let nav of navs) {
			if(nav.isDivider) continue
			nav.isActive = true
			return
		}
		return
	}

	function _inMenu(menus, path) {
		for(let menu of menus) {
			if(menu.isDivider) continue
			let hasSubmenu = Array.isArray(menu.subMenu) && menu.subMenu.length > 0
			if(hasSubmenu) {
				if(_inMenu(menu.subMenu, path)) {
					return true
				}
			} else if(hrefMatchFn(menu.href, path)) {
				return true
			}
		}
		return false
	}

	for(let nav of navs) {
		if(nav.isDivider) continue
		let hasSubmenu = Array.isArray(nav.subMenu) && nav.subMenu.length > 0
		let isActive = false
		if(hasSubmenu) {
			isActive = _inMenu(nav.subMenu, path)
		} else if (hrefMatchFn(nav.href, path)) {
			nav.isActive = true
		}
		nav.isActive = isActive
	}
}


/**
 * 寻找无级菜单路径
 * @param  array navs
 * @param  string path
 * @param {Function} hrefMatchFn : bool 
 * @return array
 * @author xiaofeng
 */
function findPath(navs, path, hrefMatchFn) {
	"use strict"

	// index
	if(!path || path === "/") {
		for(let nav of navs) {
			if(nav.isDivider) continue
			return [nav]
		}
		return []
	}

	function _findPath(menus, path, paths) {
		for(let menu of menus) {
			if(menu.isDivider) continue
			paths.push(menu)

			let hasSubmenu = Array.isArray(menu.subMenu) && menu.subMenu.length > 0
			if(hasSubmenu) {
				if(_findPath(menu.subMenu, path, paths)) {
					return true
				} else {
					paths.pop()
				}
			} else if(hrefMatchFn(menu.href, path)) {
				return true
			} else {
				paths.pop()
			}
		}
		return false
	}

	let paths = []
	_findPath(navs, path, paths)
	return paths
}


} (window))
