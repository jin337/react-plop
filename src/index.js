import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// 重置全局样式
import 'antd/dist/antd.css'
import './assets/css/reset.css'

// 国际化
import zhCN from 'antd/lib/locale/zh_CN'
import { ConfigProvider } from 'antd'

import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Login} />
				<Route path='/home' component={Home} />
			</Switch>
		</Router>
	)
}

ReactDOM.render(
	<ConfigProvider locale={zhCN}>
		<App />
	</ConfigProvider>,
	document.getElementById('root')
)
