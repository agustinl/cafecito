import { useState } from "react";
import { createStyles, getStylesRef, Flex } from "@mantine/core";

const useStyles = createStyles(theme => ({
	link: {
		...theme.fn.focusStyles(),
		display: "flex",
		alignItems: "center",
		textDecoration: "none",
		fontSize: theme.fontSizes.sm,
		color:
			theme.colorScheme === "dark"
				? theme.colors.dark[1]
				: theme.colors.gray[7],
		padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
		borderRadius: theme.radius.sm,
		fontWeight: 500,
		cursor: "pointer",

		"&:hover": {
			backgroundColor:
				theme.colorScheme === "dark"
					? theme.colors.dark[6]
					: theme.colors.gray[0],
			color: theme.colorScheme === "dark" ? theme.white : theme.black,

			[`& .${getStylesRef("icon")}`]: {
				color: theme.colorScheme === "dark" ? theme.white : theme.black,
			},
		},
	},

	linkIcon: {
		ref: getStylesRef("icon"),
		color:
			theme.colorScheme === "dark"
				? theme.colors.dark[2]
				: theme.colors.gray[6],
		marginRight: theme.spacing.sm,
	},

	linkActive: {
		"&, &:hover": {
			backgroundColor: theme.fn.variant({
				variant: "light",
				color: theme.primaryColor,
			}).background,
			color: theme.fn.variant({
				variant: "light",
				color: theme.primaryColor,
			}).color,
			[`& .${getStylesRef("icon")}`]: {
				color: theme.fn.variant({
					variant: "light",
					color: theme.primaryColor,
				}).color,
			},
		},
	},
}));

interface SectionItemProps {
	icon: JSX.Element;
	link: string;
	name: string;
    active: string;
    handleOnClick: Function;
}

export function SectionItem(props: SectionItemProps) {
	const { classes, cx } = useStyles();

	const { name, link, icon, active, handleOnClick } = props;

	return (
		<Flex
			className={cx(classes.link, {
				[classes.linkActive]: name === active,
			})}
			key={name}
			gap={10}
            onClick={() => handleOnClick(name)}
		>
			{icon}
			<span>{name}</span>
		</Flex>
	);
}
