import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import * as PXBColors from '@pxblue/colors';

export const ScoreCard = ({
	classes,
	actionItems,
	avatar,
	className,
	children,
	component: Component = 'div',
	disableTypography = false,
	headerSubtitle,
	headerInfo,
	headerTitle,
	headerColor,
	headerTitleTypographyProps,
	badge,
	badgeOffset,
	actionRow,
	...props
}) => {

	if (badge) {
			badge = (
					<div style={{ flex: 0, marginTop: badgeOffset }}>
							{badge}
					</div>
			);
	}


	if (actionRow) {
			actionRow = (
					<div style={styles.actionrow}>
							{actionRow}
					</div>
			);
	}

	if (headerTitle != null && headerTitle.type !== Typography && !props.disableTypography) {
			headerTitle = (
					<Typography
							variant='h5'
							className={classes.headerTitle}
							component="span"
							display="block"
							align="left"
							style={{ color: PXBColors.white[500] }}
							{...headerTitleTypographyProps}
					>
							{headerTitle}
					</Typography>
			);
	}

	if (headerSubtitle != null && headerSubtitle.type !== Typography && !props.disableTypography) {
			headerSubtitle = (
					<Typography
							variant='body1'
							className={classes.headerSubtitle}
							component="span"
							display="block"
							align="left"
							style={{ color: PXBColors.white[500] }}
							{...headerTitleTypographyProps}
					>
							{headerSubtitle}
					</Typography>
			);
	}

	if (headerInfo != null && headerInfo.type !== Typography && !props.disableTypography) {
			headerInfo = (
					<Typography
							variant='body1'
							className={classes.headerInfo}
							color="textSecondary"
							component="span"
							display="block"
							align="left"
							style={{ color: PXBColors.white[500] }}
							{...headerTitleTypographyProps}
					>
							{headerInfo}
					</Typography>
			);
	}

	return (
		<Paper
				className={clsx(classes.root, className)}>
				<Component className={clsx(classes.headerRoot, className)} style={{ backgroundColor: headerColor }}>
						{avatar && <div className={classes.avatar}>{avatar}</div>}
						<div className={classes.content}>
								{headerTitle}
								{headerSubtitle}
								{headerInfo}
						</div>
						{actionItems && <div className={classes.actionItems}>{actionItems}</div>}
				</Component>
				<Divider />
					<div className={classes.row}>
							<div style={{ flex: 1, justifyContent: 'center', marginRight: badge ? 16 : 0 }}>
									{children}
							</div>
							<div style={{ flex: 1, justifyContent: 'center', }}>
									{badge}
							</div>
					</div>
				<Divider />
						{actionRow}
		</Paper>
	);
};

ScoreCard.propTypes = {
	/**
	 * The action to display in the card header.
	 */
	actionItems: PropTypes.node,
	/**
	 * The Avatar for the Card Header.
	 */
	avatar: PropTypes.node,
	/**
	 * Override or extend the styles applied to the component.
	 * See [CSS API](#css) below for more details.
	 */
	// classes: PropTypes.object.isRequired,
	/**
	 * @ignore
	 */
	className: PropTypes.string,
	/**
	 * The component used for the root node.
	 * Either a string to use a DOM element or a component.
	 */
	component: PropTypes.elementType,
	/**
	 * If `true`, `subheader` and `title` won't be wrapped by a Typography component.
	 * This can be useful to render an alternative Typography variant by wrapping
	 * the `title` text, and optional `subheader` text
	 * with the Typography component.
	 */
	disableTypography: PropTypes.bool,
	/**
	 * The content of the header subtitle component.
	 */
	headerSubtitle: PropTypes.node,
	/**
	 * The content of the header info.
	 */
	headerInfo: PropTypes.node,
	/**
	 * These props will be forwarded to the subheader
	 * (as long as disableTypography is not `true`).
	 */
	subheaderTypographyProps: PropTypes.object,
	/**
	 * The content of the header Title.
	 */
	headerTitle: PropTypes.node,
	/**
	 * These props will be forwarded to the title
	 * (as long as disableTypography is not `true`).
	 */
	headerTitleTypographyProps: PropTypes.object,
	/**
	 * The content of the badge component.
	 */
	badge: React.Component,
	badgeOffset: Number,
	/**
	 * The content of actionrow.
	 */
	actionRow: React.Component
};

const styles = (theme) => ({
	root: {
			overflow: 'hidden',
	},
	/* Styles applied to the root element. */
	headerRoot: {
			display: 'flex',
			alignItems: 'center',
			padding: 16
	},
	/* Styles applied to the avatar element. */
	avatar: {
			flex: '0 0 auto',
			marginRight: 16,
	},
	/* Styles applied to the action element. */
	actionItems: {
			flex: '0 0 auto',
			alignSelf: 'flex-start',
			marginTop: -8,
			marginRight: -8,
	},
	/* Styles applied to the content wrapper element. */
	content: {
			flex: '1 1 auto',
	},
	/* Styles applied to the title Typography element. */
	headerTitle: {},
	/* Styles applied to the subheader Typography element. */
	headerSubtitle: {},
	/* Styles applied to the info Typography element. */
	headerInfo: {},

	badge: {},
	/* Styles applied to the info Typography element. */
	row: {
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			padding: 16
	},

	actionRow: {}
});

export default withStyles(styles)(ScoreCard);
