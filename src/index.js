import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// 重置全局样式
import 'antd/dist/antd.css'
import './assets/css/reset.css'

// 国际化
import zhCN from 'antd/lib/locale/zh_CN'
import { ConfigProvider } from 'antd'

import Login from './pages/Login'
import Home from './pages/Home'
import System from './pages/System'
import Feedback from './pages/Feedback'
import News from './pages/News'
import Forget from './pages/Forget'
// append import

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Login} />
				<Route path='/home' component={Home} />
				<Route path='/system' component={System} />
				<Route path='/feedback' component={Feedback} />
				<Route path='/news' component={News} />
				<Route path='/forget' component={Forget} />
				{/* append Route */}
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
