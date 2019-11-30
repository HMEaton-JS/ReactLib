ScoreCard component
===================
Card component that calls attention to particular values.


Usage
=====
import { Hero, HeroBanner, Body, wrapIcon } from '@pxblue/react-components';
import {ScoreCard} from 'common-ui-library';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import * as PXBColors from '@pxblue/colors';
import _A from '@pxblue/icons-svg/grade_a.svg';
const A = wrapIcon({ IconClass: _A });
const MoreIcon = wrapIcon({ IconClass: MatIcon, name: 'more-vert' });
...

<ScoreCard
    headerTitle={'SubStation1'}
    headerSubtitle={'Normal'}
	headerInfo={'1 Device'}
    actionItems={[
        { icon: MoreIcon, onPress: () => { } }
    ]}
    badgeOffset={-55}
    badge={
        <HeroBanner style={{ flex: 0, minWidth: 80, justifyContent: 'flex-end' }}>
            <Hero
                label={'Score'}
                iconSize={48}
                iconColor={PXBColors.green[500]}
                value={98}
                units={'/100'}
                IconClass={A}
            />
        </HeroBanner>
    }
    actionRow={
        <InfoListItem title={'View Location'} rightComponent={<ChevronRight color={'inherit'} />} />
    }
>
    <ListItem
        leftIcon={<MatIcon name={'notifications'} size={24} />}
        title={<Body color={'error'}>1 Alarm</Body>}
    />
</ScoreCard>


API
===

Prop Name | Description | Type | Required | Default | Examples
--- | --- | --- | --- |--- |--- 
headerTitle | The primary text | string | yes |   | 'Dos Valley'
--- | --- | --- | --- |--- |--- 
headerSubtitle | The secondary text | string | no |   | 'Normal'
--- | --- | --- | --- |--- |--- 
headerInfo | Tertiary text | string | no |   | 'Online'
--- | --- | --- | --- |--- |--- 
headerColor | The color of the header | string | no |   | 'red'
--- | --- | --- | --- |--- |--- 
actionItems | Icons to show to the right of the text | HeaderIcon[] | no | |
--- | --- | --- | --- |--- |--- 
badge | The component to render in the callout area | React.Component | no | | <HeroBanner><Hero/></HeroBanner>
--- | --- | --- | --- |--- |--- 
badgeOffset | Vertical offset for the badge component | number | no | | -55
--- | --- | --- | --- |--- |--- 
actionRow | Component to render for the footer | React.Component | no | |