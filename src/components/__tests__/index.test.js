import * as index from '@src/index'
import _ from 'lodash'

const includeModule = [
  'Button',
  // 'version',
  // 'BarChart',
  // 'BarChartMulti',
  // 'BarGauge',
  // 'ButtonLink',
  // 'TextLink',
  // 'ButtonTextLink',
  // 'CheckBox',
  // 'CheckList',
  // 'DateUtility',
  // 'Descriptions',
  // 'EmptyPlaceHolder',
  // 'Footer',
  // 'Heading',
  // 'Histogram',
  // 'Image',
  // 'LineChart',
  // 'LineMergeTimeline',
  // 'Modal',
  // 'Navbar',
  // 'Pagination',
  // 'RadarChart',
  // 'RadioList',
  // 'RadiusGauge',
  // 'SankeyChart',
  // 'SelectBox',
  // 'Tooltip',
  // 'SelectedCard',
  // 'SummaryCard',
  // 'Table',
  // 'Tabs',
  // 'TimeToEvent',
  // 'PieChart',
  // 'Timeline',
  // 'Toast',
  // 'ToggleButton',
  // 'TooltipBox',
  // 'TreeMap',
  // 'chartUtility',
  // 'commonTag',
  // 'font',
  // 'variables',
  // 'tableProperties',
  // 'ChartColor',
  // 'ProgressBar',
]

it('include module', () => {
  expect(_.chain(index).keys().sort().value()).toEqual(includeModule.sort())
})
