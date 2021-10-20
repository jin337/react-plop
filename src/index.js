import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// 重置全局样式
import 'antd/dist/antd.css'
import './assets/css/reset.css'

// 国际化
import zhCN from 'antd/lib/locale/zh_CN'
import { ConfigProvider } from 'antd'

import Login from './views/Login'
import Home from './views/Home'
import System from './views/System'
import News from './views/News'
import User from './views/User'
import Resetpwd from './views/Resetpwd'
import Notfound from './views/Notfound'

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Login} />
				<Route path='/home/:id' component={Home} />
				<Route path='/system/:id' component={System} />
				<Route path='/news/:id' component={News} />
				<Route path='/user/:id' component={User} />
				<Route path='/resetpwd/:id' component={Resetpwd} />
				<Route component={Notfound} />
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
