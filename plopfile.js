module.exports = (plop) => {
	plop.setGenerator('newfile', {
		description: '新建页面',
		prompts: [
			{
				type: 'input',
				name: 'filteName',
				message: '新建页面，请输入新页面的路径：',
				validate: function (value) {
					if (/([A-Z][a-z]+)+/.test(value)) {
						return true
					}
					return '组件名称必须为驼峰形式'
				},
				default: 'pages/Demo',
			},
		],
		actions: (data) => {
			let name = data.filteName.split('/')
			let moduleName = name[name.length - 1]
			const actions = [
				{
					type: 'add',
					path: 'src/{{filteName}}/index.js',
					templateFile: 'plop/temp.js.hbs',
					data: {
						moduleName,
						moduleScssName: moduleName.toLowerCase(),
					},
				},
				{
					type: 'add',
					path: 'src/{{filteName}}/index.module.scss',
					templateFile: 'plop/temp.scss.hbs',
					data: {
						moduleScssName: moduleName.toLowerCase(),
					},
				},
				{
					type: 'modify',
					path: 'src/index.js',
					transform(fileContents, data) {
						let name = data.filteName.split('/')
						let moduleName = name[name.length - 1]
						return fileContents.replace(
							'// append import',
							`import ${moduleName} from './${data.filteName}'\n// append import`
						)
					},
				},
				{
					type: 'modify',
					path: 'src/index.js',
					transform(fileContents, data) {
						let name = data.filteName.split('/')
						let moduleName = name[name.length - 1]
						let path = moduleName.toLowerCase()
						return fileContents.replace(
							'{/* append Route */}',
							`<Route path='/${path}' component={${moduleName}} />\n				{/* append Route */}`
						)
					},
				},
			]
			return actions
		},
	})
}
