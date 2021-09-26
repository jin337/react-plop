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
import Feedback from './views/Feedback'
import News from './views/News'
import Resetpwd from './views/Resetpwd'
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
				<Route path='/resetpwd/:id' component={Resetpwd} />
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
