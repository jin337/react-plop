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
					return '首字母需大写'
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
			]
			return actions
		},
	})
}
