ScoreCard component
===================
Card component that calls attention to particular values.


Usage
=====
import { Hero, HeroBanner, Body, wrapIcon } from '@pxblue/react-components';\
import {ScoreCard} from 'common-ui-library';\
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';\
import MatIcon from '@material-ui/icon';\
import * as PXBColors from '@pxblue/colors';\
import _A from '@pxblue/icons-svg/grade_a.svg';\
const A = wrapIcon({ IconClass: _A });\
const MoreIcon = wrapIcon({ IconClass: MatIcon, name: 'more-vert' });\
...\
\
<ScoreCard\
&nbsp;    headerTitle={'SubStation1'}\
&nbsp;    headerSubtitle={'Normal'}\
&nbsp;	headerInfo={'1 Device'}\
&nbsp;    actionItems={[\
&nbsp;&nbsp;        { icon: MoreIcon, onPress: () => { } }\
&nbsp;&nbsp;    ]}\
&nbsp;    badgeOffset={-55}\
&nbsp;    badge={\
&nbsp;&nbsp;        <HeroBanner style={{ flex: 0, minWidth: 80, justifyContent: 'flex-end' }}>\
&nbsp;&nbsp;            <Hero\
&nbsp;&nbsp;                label={'Score'}\
&nbsp;&nbsp;                iconSize={48}\
&nbsp;&nbsp;                iconColor={PXBColors.green[500]}\
&nbsp;&nbsp;                value={98}\
&nbsp;&nbsp;                units={'/100'}\
&nbsp;&nbsp;                IconClass={A}\
&nbsp;&nbsp;            />\
&nbsp;&nbsp;        </HeroBanner>\
&nbsp;    }> 

&nbsp;    <ListItem\
&nbsp;        leftIcon={<MatIcon name={'notifications'} size={24} />}\
&nbsp;        title={<Body color={'error'}>1 Alarm</Body>}\
&nbsp;    />
&nbsp;< /ScoreCard >


API
===

Prop Name | Description | Type | Required | Default | Examples
--- | --- | --- | --- |--- |--- 
headerTitle | The primary text | string | yes |   | 'Dos Valley'
headerSubtitle | The secondary text | string | no |   | 'Normal'
headerInfo | Tertiary text | string | no |   | 'Online'
headerColor | The color of the header | string | no |   | 'red'
actionItems | Icons to show to the right of the text | HeaderIcon[] | no | |
badge | The component to render in the callout area | React.Component | no | | <HeroBanner><Hero/></HeroBanner>
badgeOffset | Vertical offset for the badge component | number | no | | -55
actionRow | Component to render for the footer | React.Component | no | |