import styles from './index.module.scss'
import { Line, Gauge, Mix } from '@ant-design/charts'
import { DataSet } from '@antv/data-set'

let data = [
	['Cosmopolitan', 51, 45, 6],
	['Martini', 67, 39, 28],
	['Mojito', 19, 11, 8],
	['Margarita', 47, 33, 14],
	['Mai Tai', 32, 20, 12],
	['Beer', 70, 20, 50],
]
let yearData = [
	['2010', 60, 176, 35, 25],
	['2011', 51, 136, 25, 26],
	['2012', 73, 196, 35, 38],
	['2013', 84, 315, 43, 41],
	['2014', 79, 203, 36, 33],
	['2015', 89, 286, 41, 48],
]
const Mixconfig = {
	height: 500,
	padding: 'auto',
	tooltip: { showMarkers: false },
	views: [
		{
			data: data.map(function (d) {
				return {
					type: d[0],
					value: d[1],
				}
			}),
			region: {
				start: {
					x: 0,
					y: 0,
				},
				end: {
					x: 0.5,
					y: 0.4,
				},
			},
			coordinate: {
				type: 'theta',
				cfg: { radius: 0.85 },
			},
			axes: {
				value: {
					title: { text: 'Drinks' },
					tickLine: null,
					line: false,
					ticks: false,
				},
			},
			geometries: [
				{
					type: 'interval',
					xField: '1',
					yField: 'value',
					colorField: 'type',
					mapping: {},
					adjust: { type: 'stack' },
				},
			],
		},
		{
			data: new DataSet.DataView()
				.source(
					data.map(function (d) {
						return {
							type: d[0],
							male: d[2],
							female: d[3],
						}
					})
				)
				.transform({
					type: 'fold',
					fields: ['male', 'female'],
					key: 'gender',
					value: 'value',
				}).rows,
			region: {
				start: {
					x: 0.5,
					y: 0,
				},
				end: {
					x: 1,
					y: 0.45,
				},
			},
			coordinate: { cfg: { isTransposed: true } },
			axes: { value: false },
			geometries: [
				{
					type: 'interval',
					xField: 'type',
					yField: 'value',
					colorField: 'gender',
					mapping: {},
					adjust: {
						type: 'dodge',
						marginRatio: 0,
					},
				},
			],
		},
		{
			data: yearData.map(function (d) {
				return {
					year: d[0],
					ordered: d[1],
				}
			}),
			region: {
				start: {
					x: 0,
					y: 0.52,
				},
				end: {
					x: 0.48,
					y: 1,
				},
			},
			axes: { year: { title: { text: 'Drinks ordered' } } },
			meta: {
				ordered: {
					min: 40,
					max: 90,
				},
			},
			geometries: [
				{
					type: 'area',
					xField: 'year',
					yField: 'ordered',
					mapping: {},
				},
				{
					type: 'line',
					xField: 'year',
					yField: 'ordered',
					mapping: { style: { lineWidth: 0.5 } },
				},
			],
		},
		{
			data: new DataSet.DataView()
				.source(
					yearData.map(function (d) {
						return {
							year: d[0],
							male: d[3],
							female: d[4],
						}
					})
				)
				.transform({
					type: 'fold',
					fields: ['male', 'female'],
					key: 'gender',
					value: 'turnout',
				}).rows,
			region: {
				start: {
					x: 0.52,
					y: 0.52,
				},
				end: {
					x: 1,
					y: 1,
				},
			},
			axes: { year: { title: { text: 'Turnout by gender' } } },
			geometries: [
				{
					type: 'interval',
					xField: 'year',
					yField: 'turnout',
					colorField: 'gender',
					adjust: {
						type: 'dodge',
						marginRatio: 0,
					},
					mapping: {},
				},
			],
		},
	],
}
const Lineconfig = {
	data: [
		{ year: '1991', value: 3 },
		{ year: '1992', value: 4 },
		{ year: '1993', value: 3.5 },
		{ year: '1994', value: 5 },
		{ year: '1995', value: 4.9 },
		{ year: '1996', value: 6 },
		{ year: '1997', value: 7 },
		{ year: '1998', value: 9 },
		{ year: '1999', value: 13 },
	],
	height: 400,
	xField: 'year',
	yField: 'value',
	point: {
		size: 5,
		shape: 'diamond',
	},
	label: {
		style: {
			fill: '#aaa',
		},
	},
}
const Gaugeconfig = {
	percent: 0.75,
	range: {
		ticks: [0, 1 / 3, 2 / 3, 1],
		color: ['#F4664A', '#FAAD14', '#30BF78'],
	},
	indicator: {
		pointer: { style: { stroke: '#D0D0D0' } },
		pin: { style: { stroke: '#D0D0D0' } },
	},
	statistic: {
		content: {
			style: {
				fontSize: '36px',
				lineHeight: '36px',
			},
		},
	},
}

const Index = (props) => {
	return (
		<div className={styles['index-wrap']}>
			<Mix {...Mixconfig} />
			<Line {...Lineconfig} />
			<Gauge {...Gaugeconfig} />
		</div>
	)
}

export default Index
